import React from "react";
import { Typography, Breadcrumb } from "antd";
import PipelineImage from "../../assets/pipeline.jpg"; // Image for Pipeline Design
import aboutus from "../../assets/pipeline_services2.png"; // Image for Pipeline Design Services
import { Link } from "react-router-dom";
import Seo from "../Seo";
import { pageSEO } from "../Seo.config";

const { Title, Paragraph } = Typography;

export default function PipelineDesign() {
  return (
    <>
      <Seo {...pageSEO.services} />
      <div className="h-full bg-primary text-white">
        <div className="relative h-[100px] sm:h-[150px] md:h-[200px]">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            <img
              src={PipelineImage}
              alt="Pipeline Design"
              className="w-full h-full object-cover lg:object-[20%_50%]"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex justify-center items-center">
            <div className="max-w-3xl text-center">
              <Title className="!text-white mb-6 !text-5xl !uppercase">
                Pipeline Design and Engineering
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
                      to="/services/pipelinedesign"
                      className="!hover:text-blue-300 !text-white"
                    >
                      Pipeline Design
                    </Link>
                  ),
                },
              ]}
            />
          </div>
          <div className="my-6">
            <h1 className="py-4 text-xl uppercase">
              Designing Efficient, Sustainable, and Safe Pipeline Systems
            </h1>
            <hr />

            {/* Flexbox layout for image and text */}
            <div className="flex flex-col md:flex-row items-start mt-6">
              {/* Left section - Image */}
              <div className="md:w-1/2">
                <img
                  src={aboutus}
                  alt="Pipeline Design Services"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Right section - Text */}
              <div className="md:w-1/2 pl-0 md:pl-6">
                {/* Text sections stacked vertically */}
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Comprehensive Pipeline Design Solutions
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    <ul className="list-disc pl-6">
                      <li>
                        Our pipeline design services cover the entire pipeline
                        lifecycle, from initial concept and feasibility studies
                        to detailed design and installation support.
                      </li>
                      <li>
                        We specialize in designing pipelines that are reliable,
                        cost-effective, and meet industry safety and
                        environmental standards.
                      </li>
                    </ul>
                  </Paragraph>
                </div>
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Safety and Regulatory Compliance
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        We ensure that all pipeline designs adhere to local and
                        international safety and regulatory standards to
                        guarantee operational safety.
                      </li>
                      <li>
                        Our team works closely with regulatory bodies to ensure
                        compliance at every phase of design and construction.
                      </li>
                    </ul>
                  </Paragraph>
                </div>
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Sustainability and Efficiency
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        Sustainability is at the core of our design process. We
                        focus on minimizing environmental impact while
                        optimizing energy efficiency in pipeline systems.
                      </li>
                      <li>
                        Our designs incorporate advanced technologies to improve
                        pipeline performance, reduce maintenance costs, and
                        extend the lifespan of infrastructure.
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
              Ready to Start Your Pipeline Project?
            </Title>
            <Paragraph className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with us today to discuss your pipeline design needs
              and how we can help bring your project to life with precision and
              expertise.
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
