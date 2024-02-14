
import React from "react";


const Faq = ({ questions=[] ,defaultLang }) => {
  

  const FaqItem = ({ heading, text, isOpen }) => (
    <details open={isOpen} className={`group ${isOpen ? "open" : ""}`}>
      <summary className="flex cursor-pointer list-none items-center justify-between py-3">
        <h4 className="text-[24px] font-[500] text-[#071F34] leading-[26px] md:mr-5">
          {heading}
        </h4>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            className="block h-5 w-5 group-open:hidden"
          >
            <path
              d="M11.7498 3.5C12.1295 3.5 12.4434 3.78201 12.4931 4.14808L12.5 4.24985L12.5012 11.5H19.7543C20.1685 11.5 20.5043 11.8358 20.5043 12.25C20.5043 12.6297 20.2221 12.9435 19.8561 12.9932L19.7543 13H12.5012L12.5032 20.2491C12.5033 20.6633 12.1676 20.9993 11.7534 20.9993C11.3737 20.9993 11.0598 20.7173 11.0101 20.3512L11.0032 20.2494L11.0012 13H3.7522C3.33798 13 3.0022 12.6642 3.0022 12.25C3.0022 11.8703 3.28435 11.5565 3.65043 11.5068L3.7522 11.5H11.0012L11 4.25015C10.9999 3.83594 11.3356 3.5 11.7498 3.5Z"
              fill="#CA9050"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            className="hidden h-5 w-5 group-open:block"
          >
            <path
              d="M3.75391 13H20.2458C20.66 13 20.9958 12.6642 20.9958 12.25C20.9958 11.8358 20.66 11.5 20.2458 11.5H3.75391C3.33969 11.5 3.00391 11.8358 3.00391 12.25C3.00391 12.6642 3.33969 13 3.75391 13Z"
              fill="#CA9050"
            />
          </svg>
        </div>
      </summary>
      <div className="pb-2 xl:mr-[4rem] md:mr-[3rem]">
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
      </div>
    </details>
  );

  return (
    <>
      <div className="mx-auto container mt-24 sm:flex items-start mb-[5rem]"
        style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}
      >
        <h3 className="py-3 text-[56px] font-[700] text-[#CA9050] leading-[62px] xl:w-4/12 md:w-5/12 xl:ml-5 ">
          {defaultLang === "en" ? "Frequently" : "مرارًا"} <br />{defaultLang === "en" ? "asked" : "طلبت"}  <br />{defaultLang === "en" ? "questions" : "أسئلة"}
        </h3>
        <div className=" xl:w-8/12 md:w-7/12 w-full xl:mr-5 ">

          {questions.map((data, index) => (
            <FaqItem isOpen={index === 0 ? true : false} key={index} heading={data.question} text={data?.answer} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
