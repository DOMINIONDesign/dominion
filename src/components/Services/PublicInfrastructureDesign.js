import React from "react";
import { Typography, Breadcrumb } from "antd";
import Construction from "../../assets/infrastructure.jpg";
import aboutus from "../../assets/public infrastructure.webp";
import { Link } from "react-router-dom";
import Seo from "../Seo";
import { pageSEO } from "../Seo.config";

const { Title, Paragraph } = Typography;

export default function publicInfrastructure() {
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
              className="w-full h-full object-cover lg:object-[50%_60%]"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex justify-center items-center">
            <div className="max-w-3xl text-center">
              <Title className="!text-white mb-6 !text-5xl !uppercase">
                Public Infrastructure Design
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
                      to="/services/oilandgas"
                      className="!hover:text-blue-300 !text-white"
                    >
                      BIM
                    </Link>
                  ),
                },
              ]}
            />
          </div>
          <div className="my-6">
            <h1 className="py-4 text-xl uppercase">
              Transforming Public Infrastructure through Smart Design and
              Technology
            </h1>
            <hr />

            {/* Flexbox layout for image and text */}
            <div className="flex flex-col md:flex-row items-start mt-6">
              {/* Left section - Image */}
              <div className="md:w-1/2">
                <img
                  src={aboutus}
                  alt="About Us"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Right section - Text */}
              <div className="md:w-1/2 pl-0 md:pl-6">
                {/* Text sections stacked vertically */}
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Improved Mobility and Connectivity
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    <ul className="list-disc pl-6">
                      <li>
                        Public infrastructure, such as roads, bridges, and
                        public transport systems, plays a critical role in
                        enhancing mobility and connectivity within cities and
                        communities, enabling smoother travel and better access
                        to essential services.
                      </li>
                      <li>
                        Well-connected transportation networks improve access to
                        employment, education, and healthcare, benefiting
                        communities economically and socially.
                      </li>
                    </ul>
                  </Paragraph>
                </div>
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Support for Economic Growth
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        Robust infrastructure forms the foundation for
                        businesses, promoting investment and creating job
                        opportunities that drive economic growth.
                      </li>
                      <li>
                        Efficient transport, energy, and communication systems
                        attract new businesses, helping regional and national
                        economies thrive.
                      </li>
                    </ul>
                  </Paragraph>
                </div>
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Resilience to Natural Disasters
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        Well-designed infrastructure, like flood barriers and
                        earthquake-resistant buildings, minimizes the damage
                        caused by natural disasters, protecting lives and
                        assets.
                      </li>
                      <li>
                        Communities with resilient infrastructure are better
                        equipped to recover and rebuild after catastrophic
                        events, reducing long-term economic and social
                        disruption.
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
