import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  const data = [
    {
      id: "1",
      subtitle: "Research & Planning",
      title: "first step",
      image: "/images/homepage-9_6.jpg",
      link: "1",  // Use id here
      bgColor: "#EAEAEA",
    },
    {
      id: "2",
      subtitle: "Design & Development",
      title: "second step",
      image: "/images/homepage-9_7.jpg",
      link: "2",  // Use id here
      bgColor: "#ff7425",
    },
    {
      id: "3",
      subtitle: "Customize & Testing",
      title: "third step",
      image: "/images/homepage-9_8.jpg",
      link: "3",  // Use id here
      bgColor: "black",
    },
  ];

  return (
    <div className="blog container container-lg mx-auto py-20">
      <h1 className="text-[18px] font-bold mb-4 text-[#ec008c]">Our Steps</h1>
      <div className="row">
        {data.map((step) => (
          <div className="col-12 col-md-4 mb-4" key={step.id}>
            <div
              className="rounded-lg shadow-md w-100 pt-4"
              style={{ backgroundColor: step.bgColor }}
              data-aos="fade-up"
            >
              <div className="mb-4 text-center">
                <span className="text-sm text-[#232323] dblh__subtitle">
                  {step.subtitle}
                </span>
                <h2 className="text-lg font-semibold text-[#585858] dblh__title-wrapper">
                  {step.title}
                </h2>
              </div>
              <img
                className="img-fluid rounded-md mb-8"
                src={step.image}
                alt={step.title}
              />
              <Link
                to={`/blogs/${step.link}`}  // Adjust link to include blog id
                className="wgl-button py-2 px-4 rounded-lg transition duration-300 text-[14px] font-bold"
                data-aos="zoom-in"
              >
                READ MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
