import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BenefitsSection = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh(); // Refresh AOS to ensure animations work on scroll
  }, []);

  // Check if data is defined and has benefits
  if (!data || !data.benefits) {
    return <p>No benefits available.</p>;
  }

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container container-lg mx-auto">
        <div className="flex flex-wrap">
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <div className="mb-4">
              <span className="text-[#ec008c] font-bold mb-4">
                {data.sectionTitle}
              </span>
              <h3 className="text-4xl font-bold mt-3 mb-3 text-[#232323]">
                {data.sectionSubtitle}
              </h3>
              <p className="pr-10">{data.sectionDescription}</p>
            </div>

            <div className="space-y-2">
              {data.benefits.map((benefit, index) => (
                <div key={index} data-aos="fade-up">
                  <h4
                    className={`cursor-pointer text-2xl font-medium py-2 flex items-center hover:text-[#ec008c] transition duration-300 ease-in-out ${
                      activeIndex === index ? "text-[#ec008c]" : "text-gray-800"
                    }`}
                    onClick={() => handleToggle(index)}
                  >
                    <span className="mr-2 text-[#ec008c]">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                    {benefit.title}
                  </h4>

                  <div
                    className={`overflow-hidden transition-max-height duration-300 ${
                      activeIndex === index ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    {activeIndex === index && (
                      <div className="text-gray-600 mt-2">
                        <p className="text-[16px] font-normal leading-7 pt-[3px] px-[35px] py-[15px] text-[#585858]">
                          {benefit.content}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <img
            src={data.image}
            alt="Business Growth"
            className="w-full md:w-1/2  object-cover h-[670px]" // Make the image cover the container
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
