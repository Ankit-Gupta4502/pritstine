import React from "react";
import Image from "next/image";
import Button from "@/components/UI/Button";
import teethClenaer from "../../[subcategory]/_lib/TeethBanner.png";
import OpenModalButton from "@/components/Shared/OpenModalButton";
const TryUs = ({title="",desc,image=""}) => {
  return (
    <div className="bg-body overflow-hidden  relative  py-[86px] md:py-[80px]  ">
      <div className=" container max-w-[1232px] mx-auto   flex justify-between md:flex-row flex-col  items-center relative z-20">
        <div className="w-full  max-w-[528px] lg:ml-5">
          <h2 className="text-primary lg:text-[56px] md:text-[42px] text-[32px] font-bold mb-10">
            {title}
          </h2>
          <div className="my-[2rem] ml-3 md:ml-0 lg:ml-0 lg:mr-8 text-[16px] w-full  xl:max-w-[528px] md:max-w-[350px]" dangerouslySetInnerHTML={{__html:desc}} />
            
          <div className="flex justify-start w-full">
            {" "}
            <OpenModalButton label="Schedule on appointment"></OpenModalButton>{" "}
          </div>
        </div>
        <div className="w-full mt-[40px] md:mt-0   max-w-[528px] md:justify-center flex md:items-center lg:justify-start">
          <Image
            src={image}
            width={500}
            height={500}
            className="object-cover h-[390px] md:h-auto md:w-[350px] lg:w-[600px]"
            alt="try us"
          />
        </div>
      </div>
    </div>
  );
};

export default TryUs;

// import React from "react";
// import Image from "next/image";
// import teethClenaer from "../../[subcategory]/_lib/TeethBanner.png";
// import Button from "@/components/UI/Button";

// const TeethCleaning = () => {
//   return (
//     <>
//       <div className="flex flex-col md:flex-row lg:max-w-[1140px] md:max-w-[720px] mx-auto my-[5rem]  justify-center">
//         <div className="lg:w-1/2 w-full md:ml-5 flex flex-col justify-center items-center md:max-w-[350px] ">
//           <h2 className="text-primary md:text-[56px] md:leading-[61px]  text-[36px] leading-[43px] font-bold ">
//             Dental
//             <span className='me-1 ms-2 md:me-0 after:content-[""] after:absolute lg:after:w-[90%] after:left-0 after:h-[40%] after:bg-[url("/assets/images/TeethCleaning/HygineBack.svg")] after:opacity-[1] after:bottom-2 font-bold text-primary relative'>
//               Hygiene
//             </span>{" "}
//             and Your Overall Health
//           </h2>
//           <div className="my-[2rem] ml-3 lg:ml-0 lg:mr-8 text-[16px] w-full  max-w-[528px] ">
//             <p>
//               Did you know that oral hygiene can impact your overall well-being?
//               Inflammation, staining, and plaque build-up often affect your mood
//               and mental well-being.
//             </p>
//             <p className="mt-2">
//               However, it doesn’t stop there. Poor oral hygiene can also affect
//               your physical health.
//             </p>
//             <p className="mt-2">
//               In some instances, large amounts of bacteria can travel from your
//               mouth into your lungs leading to aspiration pneumonia. This is
//               especially true in older adults who may not brush or floss as
//               frequently as necessary. Additionally, there have also been
//               studies that link periodontitis with heart disease as well as
//               diabetes.
//             </p>
//             <p className="mt-2">
//               To put it bluntly: it’s important to prioritize your oral hygiene.
//             </p>
//             <p className="mt-2">
//               Ready for teeth cleaning in Dubai? Take the first step today and
//               schedule a teeth cleaning appointment with our qualified dentists.
//             </p>
//           </div>
//           <div className="flex justify-start w-full">
//             <Button>Schedule on appointment</Button>
//           </div>
//         </div>
//         <div className="lg:w-1/2 w-full lg:justify-end justify-center mt-5 md:mt-0 flex items-center ">
//           <Image
//             src={teethClenaer}
//             className="lg:w-3/4 md:h-[400px] lg:h-[600px] xl:h-[600px]"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default TeethCleaning;
