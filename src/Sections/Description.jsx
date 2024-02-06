import React from "react";
import { block } from "million";
import desc3 from "./Assets/desc3.jpg";
import desc2 from "./Assets/desc2.jpg";
import desc5 from "./Assets/desc5.jpg";
import desc4 from "./Assets/desc4.jpg";
import desc6 from "./Assets/desc6.jpg";
import NavBlock from "./Navbar";



const features = [
  {
    name: "Team",
    description:
      "Small team size fully commited to helping one business at a time. Our attention is on you and you only.",
  },
  {
    name: "Personalization",
    description:
      "Our work will always include you. The whole process will be guided by your goals.",
  },
  {
    name: "Pricing",
    description:
      "With reasonable pricing, we'll ensure that our evaluations secure you with a good product at a low cost.",
  },
  {
    name: "Timing",
    description:
      "Our team is dedicated to ensure that your deadlines are met. For us, timing is everything.",
  },
  {
    name: "Flexibility",
    description:
      "Our team is willing to adapt for your needs. Our service gives you limitless freedom to fulfill your vision.",
  },
  {
    name: "Passion",
    description:
      "Our guarantee is that our team will give you consistent enthusiasm no matter the occasion.",
  },
];

const DescriptionBlock = block(function Description() {
  return (
    <div id="description" className="bg-[#9e9791]  ">
      {/* <NavBlock /> */}

      <div className=" ml-20 grid min-w-screen grid-cols-1 lg:items-center gap-x-8 gap-y-4 lg:gap-y-16 px-4 sm:px-6  lg:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-grey-900 text-black sm:text-center mt-4 lg:mt-0 ">
            What We Provide
          </h2>
          <p className="mt-4 lg:text-2xl text-xl text-black">
            At Webscrapers, our focus remains on{" "}
            <span class="font-bold text-black">your</span> needs. We strive
            to fulfill the goals of{" "}
            <span class="font-bold text-black">your</span> website in the
            way that <span class="font-bold text-black">you</span> want it.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="border-b-2 border-gray-600 pb-4 text-black"
              >
                <dt className="font-extrabold text-lg text-black}">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-md text-black">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className=" ">
          <div className="">
            <img
              src={desc5}
              alt="Stock Photo"
              className="rounded-lg size-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default DescriptionBlock;

//className="invisible md:visible"
