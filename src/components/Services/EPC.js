import React from "react";
import { Typography, Breadcrumb } from "antd";
import Construction from "../../assets/epc1.jpeg";
import aboutus from "../../assets/asian-two-construction-engineers-supervising-progress-of-construction-project-and-crane-background-photo.jpg";
import offerImage from "../../assets/civil.jpg";
import { Link } from "react-router-dom";
import Seo from "../Seo";
import { pageSEO } from "../Seo.config";

const { Title, Paragraph } = Typography;

export default function EPC() {
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
              className="w-full h-full object-cover lg:object-[20%_60%] blur-[2px]"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex justify-center items-center">
            <div className="max-w-3xl text-center">
              <Title className="!text-white mb-6 !text-lg md:!text-5xl !uppercase">
                Engineering, Procurement, and Construction (EPC)
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
                      to="/services/epc"
                      className="!hover:text-blue-300 !text-white"
                    >
                      EPC
                    </Link>
                  ),
                },
              ]}
            />
          </div>
          <div className="my-6">
            <h1 className="py-4 text-xl uppercase">
              Delivering Comprehensive EPC Solutions for Infrastructure Projects
            </h1>
            <hr />

            {/* Flexbox layout for image and text */}
            <div className="flex flex-col md:flex-row items-start mt-6">
              {/* Left section - Image */}
              <div className="md:w-1/2">
                <img
                  src={aboutus}
                  alt="EPC Services"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Right section - Text */}
              <div className="md:w-1/2 pl-0 md:pl-6">
                {/* Text sections stacked vertically */}
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    End-to-End Project Execution
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    <ul className="list-disc pl-6">
                      <li>
                        EPC services offer a complete lifecycle solution,
                        including engineering design, procurement of materials,
                        and construction to ensure successful project delivery.
                      </li>
                      <li>
                        With an integrated approach, EPC contractors manage the
                        entire project, ensuring timelines, budgets, and quality
                        standards are met at each phase.
                      </li>
                    </ul>
                  </Paragraph>
                </div>
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Cost and Time Efficiency
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        The EPC approach minimizes project costs and
                        construction timelines by integrating design,
                        procurement, and construction into a seamless workflow.
                      </li>
                      <li>
                        Streamlined procurement processes and advanced project
                        management techniques ensure optimal resource allocation
                        and timely project completion.
                      </li>
                    </ul>
                  </Paragraph>
                </div>
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Quality Assurance and Safety
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        EPC contractors implement rigorous quality control
                        measures, ensuring the highest standards in every aspect
                        of the project, from materials to construction
                        practices.
                      </li>
                      <li>
                        Safety is a top priority in EPC projects, with strict
                        adherence to safety protocols and regulations throughout
                        the project's execution.
                      </li>
                    </ul>
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
          <div className="my-6">
            <h1 className="py-4 text-xl uppercase">
              ABout EPC (Engineering, Procurement, and Construction) Design
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
                        Integrated design consultancy for large-scale EPC
                        projects.
                      </li>
                      <li>
                        Tailored engineering solutions for seamless procurement
                        and construction phases.
                      </li>
                      <li>
                        Comprehensive project designs that align with industry
                        best practices.
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
                        Streamline Processes: Provide cohesive designs that
                        simplify project execution.
                      </li>
                      <li>
                        Reduce Costs: Optimize material use and construction
                        schedules.
                      </li>
                      <li>
                        Enhance Collaboration: Ensure effective integration
                        between engineering, procurement, and construction
                        teams.
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
              Ready to Start Your EPC Project?
            </Title>
            <Paragraph className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let’s collaborate to deliver your infrastructure project on time,
              on budget, and to the highest standards of quality.
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
