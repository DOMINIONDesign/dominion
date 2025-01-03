import React from "react";
import { Typography, Breadcrumb } from "antd";
import Construction from "../../assets/construction2.jpg";
import aboutus from "../../assets/services_construction.avif";
import offerImage from "../../assets/construction2.jpg";
import { Link } from "react-router-dom";
import Seo from "../Seo";
import { pageSEO } from "../Seo.config";

const { Title, Paragraph } = Typography;

export default function Construction_Design() {
  return (
    <>
      <Seo {...pageSEO.services} />
      <div className="h-full bg-primary text-white">
        <div className="relative h-[100px] sm:h-[150px] md:h-[200px]">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            <img
              src={Construction}
              alt="Construction Design"
              className="w-full h-full object-cover lg:object-[50%_70%]"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex justify-center items-center">
            <div className="max-w-3xl text-center">
              <Title className="!text-white mb-6 !text-2xl md:!text-5xl">
                Construction & Infrastructure
              </Title>
            </div>
          </div>
        </div>

        <div className="md:w-[89%] mx-auto">
          <div className="pt-4">
            <Breadcrumb
              className="text-md"
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
                {
                  title: (
                    <Link
                      to="/services/construction"
                      className="!hover:text-blue-300 !text-white"
                    >
                      Construction Services
                    </Link>
                  ),
                },
              ]}
            />
          </div>
          <div className="my-6">
            <h1 className="py-4 text-xl">EXPERT ENGINEERING SOLUTIONS</h1>
            <hr />

            <div className="flex flex-col md:flex-row items-start mt-6">
              <div className="md:w-1/2">
                <img
                  src={aboutus}
                  alt="About Us"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="md:w-1/2 pl-0 md:pl-6">
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Structural Engineering
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    We provide a full range of Structural Engineering services,
                    including design, analysis, and construction support. Our
                    team of experts has extensive experience in creating
                    structures that are safe, cost-effective, and sustainable.
                  </Paragraph>
                </div>
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Architectural Engineering
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    Our Architectural Engineering services provide clients with
                    innovative design solutions that are functional,
                    aesthetically pleasing, and environmentally sustainable. Our
                    team of experts has the skills and experience to deliver
                    projects on time and within budget.
                  </Paragraph>
                </div>
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Electrical Engineering
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    We offer a wide range of Electrical Engineering services to
                    meet the unique needs of our clients. From circuit design to
                    precise execution, we have the expertise to deliver designs
                    and solutions that are efficient, reliable, and
                    cost-effective.
                  </Paragraph>
                </div>
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Mechanical Engineering
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    Our Mechanical Engineering services provide innovative
                    solutions for your product design, development, and
                    manufacturing needs. Our team of experts has extensive
                    experience in creating designs that meet the highest
                    standards of quality and safety.
                  </Paragraph>
                </div>
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Project Management
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    Our Project Management services help clients deliver complex
                    projects on time, within budget, and to the highest
                    standards of quality. We have a proven track record of
                    managing large-scale projects across multiple industries.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
          <div className="my-6">
            <h1 className="py-4 text-xl uppercase">
              ABout Construction and infrastructure design
            </h1>
            <hr />

            <div className="flex flex-col md:flex-row items-start mt-6">
              <div className="md:w-1/2">
                <img
                  src={offerImage}
                  alt="OfferImage"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="md:w-1/2 pl-0 md:pl-6">
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    What we offer:
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    <ul className="list-disc pl-6">
                      <li>
                        Comprehensive structural and architectural design
                        services for commercial, residential, and industrial
                        projects.
                      </li>
                      <li>
                        Tailored solutions for sustainable and functional
                        infrastructure.
                      </li>
                      <li>
                        Advanced planning and detailing to ensure precision and
                        compliance with modern standards.
                      </li>
                    </ul>
                  </Paragraph>
                </div>
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    How We Help:
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    <ul className="list-disc pl-6">
                      <li>
                        Enhance Efficiency: Optimize designs for quicker
                        construction and reduced costs.
                      </li>
                      <li>
                        Improve Durability: Focus on long-lasting and reliable
                        infrastructure solutions.
                      </li>
                      <li>
                        Incorporate Innovation: Leverage the latest tools and
                        techniques to deliver cutting-edge designs.
                      </li>
                    </ul>
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Title level={2} className="!text-white mb-6">
              Ready to Start Your Construction Project?
            </Title>
            <Paragraph className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to bring your construction vision to life with
              our expert design solutions.
            </Paragraph>
            <Link to="/contact">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
