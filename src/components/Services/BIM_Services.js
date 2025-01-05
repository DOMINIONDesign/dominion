import React from "react";
import { Typography, Breadcrumb } from "antd";
import Construction from "../../assets/qt=q_29.webp";
import aboutus from "../../assets/BIM.jpg";
import offerImage from "../../assets/BIM Title image.jpg";
import { Link } from "react-router-dom";
import Seo from "../Seo";
import { pageSEO } from "../Seo.config";
// import office from "../../assets/Office (1).webp";
const { Title, Paragraph } = Typography;

export default function BIM() {
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
              className="w-full h-full object-cover lg:object-[50%_40%]"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex justify-center items-center">
            <div className="max-w-3xl text-center">
              <Title className="!text-white mb-6 !uppercase !text-xl md:!text-5xl">
                Building Information Model
                <br />
                (BIM)
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
              BIM for Seamless Construction and Design
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
                    Precise Design and Technical Documentation
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    <ul className="list-disc pl-6">
                      <li>
                        BIM enables the creation of accurate 3D models, detailed
                        layouts, and technical drawings for various
                        infrastructure projects.
                      </li>
                      <li>
                        Precision in design ensures that the designs are robust,
                        reliable, and reduces errors and the need for rework.
                      </li>
                      <li>
                        Advanced software simulations optimize processes before
                        implementation, ensuring efficiency and accuracy from
                        the outset.
                      </li>
                    </ul>
                  </Paragraph>
                </div>
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Comprehensive System Optimization
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    BIM supports the design and optimization of complex systems,
                    including:
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        Utilities, transportation networks, and building
                        systems.
                      </li>
                      <li>
                        Process simulations to optimize system performance and
                        improve efficiency.
                      </li>
                      <li>
                        Enhanced coordination and planning for seamless system
                        integration.
                      </li>
                      <li>
                        Cost reduction through improved efficiency and minimized
                        rework.
                      </li>
                    </ul>
                  </Paragraph>
                </div>
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Seamless Project Coordination and Execution
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    BIM enhances collaboration and communication by providing:
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        A unified platform for designers, engineers,
                        contractors, and clients to work together seamlessly.
                      </li>
                      <li>
                        Real-time sharing of updates, changes, and progress for
                        better transparency and coordination.
                      </li>
                      <li>
                        Improved efficiency by minimizing delays and ensuring
                        stakeholders stay aligned throughout the project
                        lifecycle.
                      </li>
                      <li>
                        Enhanced execution through streamlined workflows and
                        reduced miscommunication.
                      </li>
                    </ul>
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
          <div className="my-6">
            <h1 className="py-4 text-xl uppercase">
              ABOUT Building Information Modeling (BIM)
            </h1>
            <hr />

            {/* Flexbox layout for image and text */}
            <div className="flex flex-col md:flex-row items-start mt-6">
              {/* Left section - Image */}
              <div className="md:w-1/2">
                <img
                  src={offerImage}
                  alt="OfferImage"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Right section - Text */}
              <div className="md:w-1/2 pl-0 md:pl-6">
                {/* Text sections stacked vertically */}
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    What we offer:
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    <ul className="list-disc pl-6">
                      <li>
                        Advanced BIM services for efficient project
                        visualization and planning.
                      </li>
                      <li>
                        3D modeling and data integration for precise
                        construction management.
                      </li>
                      <li>
                        Coordination of multidisciplinary designs to eliminate
                        project clashes.
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
                        Reduce Errors: Streamline workflows to avoid costly
                        construction mistakes.
                      </li>
                      <li>
                        Improve Collaboration: Enhance communication between
                        architects, engineers, and contractors.
                      </li>
                      <li>
                        Optimize Projects: Ensure timely project delivery with
                        accurate data-driven designs.
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
