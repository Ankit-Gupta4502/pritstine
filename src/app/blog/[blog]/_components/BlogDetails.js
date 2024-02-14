"use client";
import React, { useRef, useState, useEffect } from "react";
import Sections from "./Sections";

const BlogDetails = ({ postContent = [],tag={} }) => {
  const [active, setActive] = useState(1)
  const [blogSections, setBlogSections] = useState([])



 console.log(blogSections,"blogSections");

  useEffect(() => {
    const sections = blogSections;
    function navHighlighter() {
      let scrollY = window.scrollY;
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop + 300;
        const sectionId = current.getAttribute("id")
        if (
          scrollY > sectionTop &&
          scrollY <= sectionTop + sectionHeight
        ) {
          setActive(sectionId)
        }
      });
    }

    window.addEventListener("scroll", navHighlighter);
    return (() => window.removeEventListener("scroll", navHighlighter));
  }, [blogSections]);

  return (
    <>
      <div className="container relative flex">
        <div className=" md:block w-[31%] sticky   h-full top-20 hidden cursor-pointer  z-10">
          <h5 className="text-[#071F34] text-[24px]">Content</h5>
          <ul className="text-[#7F7F7F] text-[14px] mt-6 space-y-3">
            {
              postContent.map((item)=>{
                return   <li key={item._id} className={active === item._id ? "text-[#071F34] font-[700]" : "text-[#7f7f7f]"} > {item.heading} </li>
              })
            }
          
         
          </ul>

        </div>
        <div className="absolute container left-0 w-full z-40 flex items-center  bg-white  h-24  -bottom-24" >
          <div className=" md:w-[31%]" >
            <h5 className=" hidden md:inline-flex  text-[#071F34] text-[24px]">Tags</h5>
          </div>

          <div className="flex-1 md:pl-[60px] lg:pl-[88px] xl:pl-[120px]">
            <p className="xl:mb-0 md:mb-0 mb-0">
              {tag?.name}
            </p>
          </div>

        </div>
        <div className="md:w-[60%]  w-full ms-auto md:space-y-20 space-y-8 mt-10">

          {
            postContent.map((item, index) => {
              return <Sections id={item?._id} key={item?._id} setBlogSections={setBlogSections} heading={item.heading} desc={item.description} />
            })
          }
          {/* <div ref={section1} id="1" >
            <h4 className="mb-5 text-primary font-[500] md:font-[600]">The Defination</h4>
            <p>
              Invisalign is a popular alternative to traditional braces for
              people looking to straighten their teeth. The clear plastic
              aligners are nearly invisible, comfortable, and removable, making
              them a popular choice for people of all ages. However, despite its
              popularity, there are still many myths and misconceptions
              surrounding Invisalign. In this blog, we’ll separate fact from
              fiction and dispel five of the most common myths about Invisalign.
            </p>
          </div>
          <div ref={section2} id="2">
            <h4 className="mb-5 text-primary font-[500] md:font-[600]">
              Invisalign is only for minor adjustments
            </h4>
            <p>
              Invisalign is a popular alternative to traditional braces for
              people looking to straighten their teeth. The clear plastic
              aligners are nearly invisible, comfortable, and removable, making
              them a popular choice for people of all ages. However, despite its
              popularity, there are still many myths and misconceptions
              surrounding Invisalign. In this blog, we’ll separate fact from
              fiction and dispel five of the most common myths about Invisalign.
            </p>
          </div>
          <div ref={section3} id="3">
            <h4 className="mb-5 text-primary font-[500] md:font-[600]">
              Invisalign is uncomfortable
            </h4>
            <p>
              Invisalign is a popular alternative to traditional braces for
              people looking to straighten their teeth. The clear plastic
              aligners are nearly invisible, comfortable, and removable, making
              them a popular choice for people of all ages. However, despite its
              popularity, there are still many myths and misconceptions
              surrounding Invisalign. In this blog, we’ll separate fact from
              fiction and dispel five of the most common myths about Invisalign.
            </p>
          </div>
          <div ref={section4} id="4">
            <h4 className="mb-5 text-primary font-[500] md:font-[600]">
              Invisalign is visible
            </h4>
            <p>
              Invisalign is a popular alternative to traditional braces for
              people looking to straighten their teeth. The clear plastic
              aligners are nearly invisible, comfortable, and removable, making
              them a popular choice for people of all ages. However, despite its
              popularity, there are still many myths and misconceptions
              surrounding Invisalign. In this blog, we’ll separate fact from
              fiction and dispel five of the most common myths about Invisalign.
            </p>
          </div>
          <div ref={section5} id="5">
            <h4 className="mb-5 text-primary font-[500] md:font-[600]">
              Invisalign takes longer than traditional braces
            </h4>
            <p>
              Invisalign is a popular alternative to traditional braces for
              people looking to straighten their teeth. The clear plastic
              aligners are nearly invisible, comfortable, and removable, making
              them a popular choice for people of all ages. However, despite its
              popularity, there are still many myths and misconceptions
              surrounding Invisalign. In this blog, we’ll separate fact from
              fiction and dispel five of the most common myths about Invisalign.
            </p>
          </div>
          <div ref={section6} id="6">
            <h4 className="mb-5 text-primary md:font-[600]">
              Invisalign is more expensive than traditional braces
            </h4>
            <p>
              Invisalign is a popular alternative to traditional braces for
              people looking to straighten their teeth. The clear plastic
              aligners are nearly invisible, comfortable, and removable, making
              them a popular choice for people of all ages. However, despite its
              popularity, there are still many myths and misconceptions
              surrounding Invisalign. In this blog, we’ll separate fact from
              fiction and dispel five of the most common myths about Invisalign.
            </p>
            <p className="mt-5">
              In conclusion, Invisalign is a highly effective and convenient way
              to straighten teeth. By separating fact from fiction, we hope that
              we have cleared up any misconceptions about Invisalign and shown
              you that it is a viable option for straightening your teeth. If
              you are considering Invisalign, it is always a good idea to talk
              to your dental professional to find out if it is right for you.
              With the right treatment plan, you can achieve the straight,
              healthy smile you’ve always wanted.
            </p>
          </div> */}

        </div>
      </div>
      <div className="border border-[#DCDCDC] mt-20"></div>
    </>
  );
};
export default BlogDetails;
