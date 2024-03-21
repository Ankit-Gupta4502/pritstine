"use client";
import React, { useEffect, useRef, useState } from "react";
import { LuMail } from "react-icons/lu";
import { FiChevronRight } from "react-icons/fi";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { IoMdCheckmark } from "react-icons/io";
const EmailNotify = () => {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");
  const [showMssg, setShowMssg] = useState(false);
  const [error, setErrors] = useState("");
  const { isPending, isSuccess, mutate } = useMutation({
    mutationFn: () =>
      axios
        .post(
          `/api/comming_soon`,
          {},
          {
            params: {
              email,
            },
          }
        )
        .then(({ data }) => data),
    onSuccess: (data) => {
      setTimeout(() => {
        setShowMssg(true);
      }, 2000);
      if (error) {
        setErrors("");
      }
    },
    onError: (err) => {
      if (err.response.status === 422) {
        setErrors(err.response.data.errors.email[0]);
      }
    },
  });
  const input = useRef(null);

  useEffect(() => {
    const listener = window.addEventListener("click", (e) => {
      if (!e.target.closest(".email-wrapper")) {
        setShowInput(false);
      }
    });
    return () => removeEventListener("click", listener);
  }, []);

  useEffect(() => {
    let id;
    if (showMssg) {
      id = input.current.style.transition = "all .5s";
      setTimeout(() => {
        input.current.style.opacity = "0";
      }, 2000);
    }
    return () => id && clearTimeout(id);
  }, [showMssg]);

  const handleToggle = () => {
    setShowInput(true);
  };
  return (
    <div
      className={`email-wrapper  absolute group cursor-pointer  origin-top-left  duration-500  transition-all  flex items-center top-[62vh]   overflow-hidden  left-10  ease-linear  z-30 rounded-[30px] bg-primary   h-[56px]  `}
      ref={input}
    >
      <div className="flex px-[10px]   flex-shrink-0 items-center">
        <div className="bg-white grid flex-shrink-0 place-items-center w-9 h-9 rounded-full">
          {isSuccess ? (
            <IoMdCheckmark size={20} />
          ) : (
            <LuMail
              className="group-hover:[transform:rotateY(180deg)] duration-500 transition-all  [transform-style:preserve_3d] [perspective:1000px] "
              size={20}
            />
          )}
        </div>

        <div
          className={` ${
            showMssg ? " max-w-[300px] ml-3 " : "max-w-[0px]"
          } overflow-hidden text-white transition-all whitespace-nowrap duration-300 ease-linear`}
        >
          Thank you we will Notify you soon
        </div>

        {!isSuccess && (
          <input
            type="text"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) {
                setErrors("");
              }
            }}
            className={`${
              showInput
                ? "  max-w-[220px] border-l-white ml-3  border-l px-2 "
                : " max-w-[0px] border-l-primary"
            } duration-300  origin-center   caret-white placeholder:text-white   transition-all will-change-[max-width] ease-linear   overflow-hidden   bg-transparent focus:outline-0  ${error?" text-red-600 ":"text-white"}`}
          />
        )}
      </div>

      <button
        disabled={isPending}
        className={` disabled:text-primary/40  rounded-tr-[30px] rounded-br-[30px] transition-all whitespace-nowrap duration-500 ease-linear  flex items-center py-4  ${
          showInput ? " bg-white text-primary" : "text-white"
        }  ${
          isSuccess ? " max-w-[0px] " : "max-w-[124px] px-[10px]"
        }  overflow-hidden`}
        onClick={() => {
          console.log("workingggg");
          if (!showInput) {
            handleToggle();
          }
          if (showInput) {
            mutate();
          }
        }}
      >
        <span>Notify Me</span>
        <FiChevronRight
          className=" ms-2 group-hover:translate-x-1 duration-200 transition-all"
          size={18}
        />
      </button>
    </div>
  );
};

export default EmailNotify;
