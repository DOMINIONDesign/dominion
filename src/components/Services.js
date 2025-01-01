import React from "react";
import { Breadcrumb } from "antd";
import { Typography } from "antd";
import BIM from "../assets/BIM_services.jpg";
import { Outlet } from "react-router-dom";
import pipelineServices from "../assets/services_pipeline.webp";
import oilAndGas from "../assets/oils.webp";
import aboutus from "../assets/services_Background.avif";
import publicInfrastructure from "../assets/services_public.png";
// import Image from "../assets/services_Background.avif";
import EPC from "../assets/services_EPC.jpeg";
import Seo from "../components/Seo";
import { pageSEO } from "../components/Seo.config";
import consultancy from "../assets/services_construction.avif";
import { Link } from "react-router-dom";
const { Title, Paragraph } = Typography;
const services = [
  {
    icon: <img src={BIM} alt="BIM" className="text-4xl" />,
    title: "Building Information Model (BIM)",
    link: "bim",
    description:
      "At Dominion Engineering Services, we assist our clients with Building Information Modeling (BIM) to enhance project outcomes. Our BIM solutions are designed to streamline coordination, foster better collaboration, and provide advanced visualization techniques. By integrating BIM into your project, we ensure improved project planning, cost efficiency, and faster delivery times. With a strong focus on sustainable design, our BIM approach helps optimize every aspect of your project, from conception to completion.",
  },
  {
    icon: <img alt="Pipeline" src={pipelineServices} className="text-4xl" />,
    title: "Pipeline Design",
    link: "pipeline",
    description:
      "At Dominion Engineering Services, we deliver efficient, reliable, and sustainable pipeline designs that optimize flow and adhere to all safety and regulatory standards. Our solutions are crafted to ensure that each pipeline system is robust, cost-effective, and built to last, meeting the highest industry standards for safety and performance.",
  },
  {
    icon: <img alt="oilandgas" src={oilAndGas} className="text-4xl" />,
    title: "Oil & Gas",
    link: "oilandgas",
    description:
      "At Dominion Engineering Services, we offer comprehensive engineering and consultancy services for the oil and gas industry, focusing on optimizing operational efficiency and ensuring the highest standards of safety. Our team of experts works closely with clients to design and implement solutions that enhance performance, reduce costs, and address complex challenges in exploration, production, and refining. We employ advanced technologies and best practices to ensure that every project adheres to industry regulations while minimizing environmental impact. Whether it's for upstream, midstream, or downstream operations, our commitment to excellence drives us to deliver innovative solutions tailored to the unique needs of the oil and gas sector.",
  },
  {
    icon: (
      <img
        alt="infrastructure"
        src={publicInfrastructure}
        className="text-4xl"
      />
    ),
    title: "Public Infrastructure Design",
    link: "infrastructure",
    description:
      "At Dominion Engineering Services, we specialize in designing sustainable public infrastructure that enhances connectivity, safety, and environmental compliance. Our solutions focus on creating resilient systems that support urban growth, improve transportation networks, and promote long-term sustainability. We ensure that every project is built to meet regulatory standards while considering the future needs of communities and the environment.",
  },
  {
    icon: <img alt="EPC" src={EPC} className="text-4xl" />,
    title: "EPC",
    link: "epc",
    description:
      "Dominion Engineering Services offers comprehensive end-to-end Engineering, Procurement, and Construction (EPC) solutions. We deliver integrated services that focus on cost-effectiveness, quality, and safety, ensuring each project is completed on time and within budget. Our team works closely with clients from project inception to completion, providing seamless coordination and innovative solutions that meet industry standards and exceed expectations.",
  },
  {
    icon: <img alt="construction" src={consultancy} className="text-4xl" />,
    title: "Construction Design",
    link: "construction",
    description:
      "At Dominion Engineering Services, we specialize in structural, civil, and architectural designs, delivering precise blueprints tailored to all project types. Our team of experts ensures that every design is not only functional and efficient but also adheres to safety standards and regulatory requirements. We focus on creating innovative solutions that enhance the integrity, durability, and aesthetic appeal of each project, ensuring long-term success.",
  },
];

const ServicesPage = () => {
  return (
    <>
      <Seo {...pageSEO.services} />
      <div className="bg-primary">
        <section className="main-text  relative h-80">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0">
            <img alt="about us" src={aboutus} className="w-full h-full" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Title level={1} className="main-text  text-center pt-20">
                <span className="main-text  font-bold text-2xl md:text-5xl">
                  Discover Our Expertise
                </span>
              </Title>
              <Paragraph className="text-center text-sm md:text-xl text-gray-100 max-w-3xl mx-auto font-semibold">
                Offering cutting-edge engineering solutions that drive success
                through innovation, precision, and sustainability.
              </Paragraph>
            </div>
          </div>
        </section>
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 md:w-[92%] mx-auto">
          <div className="pt-4">
            <Breadcrumb
              className="text-md !text-white"
              items={[
                {
                  title: (
                    <Link to="/" className="hover:text-blue-500 !text-white">
                      Home
                    </Link>
                  ),
                },
                {
                  title: (
                    <Link
                      to="/services"
                      className="hover:text-blue-500 !text-white"
                    >
                      Services
                    </Link>
                  ),
                },
              ]}
            />
          </div>
          <div className="mt-2" data-aos="zoom-in">
            {services.map((service, index) => (
              // This is where the animation div is added
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12 py-12 animate-fade-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image Card Section */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-[400px] group">
                    {/* Image Container */}
                    <div className="relative w-full h-full">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        {React.cloneElement(service.icon, {
                          className:
                            "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ",
                          alt: service.title,
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className="w-full md:w-1/2"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                >
                  <div
                    className={`space-y-6 ${
                      index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                    }`}
                  >
                    <Title level={2} className="text-3xl font-extrabold ">
                      <span className="text-[#DC143C] font-bold !uppercase">
                        {" "}
                        {service.title}
                      </span>
                    </Title>

                    <Paragraph className="text-md main-text">
                      {service.description}
                    </Paragraph>

                    {/* <div className="space-y-4">
                    <Title level={4} className="text-blue-600">
                      Key Features
                    </Title>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                          <span className="text-gray-700 flex-1">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                    <Link to={`/services/${service.link}`}>
                      <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2 group">
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default ServicesPage;
