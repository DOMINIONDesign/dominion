import React from "react";
import { Typography, Breadcrumb } from "antd";
import Construction from "../../assets/oil n gas 2.jpg";
import aboutus from "../../assets/Oil&GAS.jpg";
import offerImage from "../../assets/360_F_632325277_GVKlz4Pe5xGgYeU4U53AIcsQ4p3vKe5s.jpg";
import { Link } from "react-router-dom";
import Seo from "../Seo";
import { pageSEO } from "../Seo.config";

const { Title, Paragraph } = Typography;

export default function OilAndGas() {
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
              className="w-full h-full object-cover lg:object-[50%_80%]"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex justify-center items-center">
            <div className="max-w-3xl text-center">
              <Title className="!text-white mb-6 !text-5xl">OIL And GAS</Title>
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
                      Oil&Gas
                    </Link>
                  ),
                },
              ]}
            />
          </div>
          <div className="my-6">
            <h1 className="py-4 text-xl uppercase">Designs for Oil & Gas</h1>
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

              <div className="md:w-1/2 pl-0 md:pl-6">
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Detailed Engineering and Technical Drawings
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    <ul className="list-disc pl-6">
                      <li>
                        Creating precise layouts, 3D models, and blueprints for
                        oil and gas infrastructure.
                      </li>
                      <li>
                        Leveraging advanced software for accurate process
                        simulations and system optimization.
                      </li>
                      <li>Pipeline Engineering Services.</li>
                    </ul>
                  </Paragraph>
                </div>
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Turnkey Solutions for Oil & Gas Projects
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    <ul className="list-disc pl-6">
                      <li>
                        Designing systems for enhanced recovery, refining, and
                        processing.
                      </li>
                      <li>
                        Optimizing production processes to improve efficiency
                        and reduce costs.
                      </li>
                      <li>
                        Incorporating digital twins, AI, and IoT into oil and
                        gas infrastructure for real-time monitoring and
                        predictive maintenance.
                      </li>
                      <li>
                        Utilizing Building Information Modeling (BIM) for
                        seamless project coordination and execution.
                      </li>
                      <li>Maintenance and Operational Support.</li>
                    </ul>
                  </Paragraph>
                </div>
                <div className="pb-2">
                  <Title className="!text-2xl !text-white pb-4">
                    Comprehensive Engineering Design Services
                  </Title>
                  <Paragraph className="text-2 !text-gray-300">
                    <ul className="list-disc pl-6">
                      <li>
                        Designing complex oil and gas facilities, including
                        refineries, petrochemical plants, and storage terminals.
                      </li>
                      <li>
                        Designing pipeline systems for safe and efficient
                        transportation of oil, gas, and other hydrocarbons.
                      </li>
                      <li>Detailed Engineering and Technical Drawings.</li>
                    </ul>
                  </Paragraph>
                </div>
              </div>
            </div>
            <div className="my-6">
              <h1 className="py-4 text-xl uppercase">ABout Oil & GAs</h1>
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
                          Specialized engineering designs for oil and gas
                          facilities, including refineries, processing plants,
                          and storage systems.
                        </li>
                        <li>
                          Custom solutions for upstream, midstream, and
                          downstream operations.
                        </li>
                        <li>
                          Focused designs on safety, sustainability, and
                          operational efficiency.
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
                          Boost Operational Efficiency: Deliver designs that
                          optimize production processes.
                        </li>
                        <li>
                          Ensure Safety: Prioritize hazard analysis and
                          compliance with safety standards.
                        </li>
                        <li>
                          Adapt to Industry Trends: Incorporate sustainable and
                          advanced energy solutions.
                        </li>
                      </ul>
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Text className="text-blue-600 font-semibold mb-4 block">
                OUR SERVICES
              </Text>
              <Title level={2} className="mb-6">
                Core <span className="text-blue-600">Design Services</span>
              </Title>
            </div>

            <Row gutter={[32, 32]}>
              {coreServices.map((service, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <Card
                    className="h-full text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    style={{
                      background: "linear-gradient(145deg, #e6f0ff, #f0f7ff)",
                      border: "none",
                    }}
                  >
                    <div className="mb-6">{service.icon}</div>
                    <Title level={4} className="mb-4">
                      {service.title}
                    </Title>
                    <Paragraph className="text-gray-600">
                      {service.description}
                    </Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div> */}

          {/* <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Text className="text-blue-600 font-semibold mb-4 block">
                DESIGN SOLUTIONS
              </Text>
              <Title level={2} className="mb-6">
                Comprehensive <span className="text-blue-600">Solutions</span>
              </Title>
            </div>

            <Row gutter={[32, 32]}>
              {designSolutions.map((solution, index) => (
                <Col xs={24} md={12} key={index}>
                  <Card
                    className="h-full hover:shadow-xl transition-all duration-300"
                    style={{
                      background: "linear-gradient(145deg, #f8faff, #ffffff)",
                      border: "1px solid #e6f0ff",
                    }}
                  >
                    <div className="flex items-start">
                      <div className="mr-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          {solution.icon}
                        </div>
                      </div>
                      <div>
                        <Title level={4} className="mb-2">
                          {solution.title}
                        </Title>
                        <Paragraph className="text-gray-600 mb-4">
                          {solution.description}
                        </Paragraph>
                        <ul className="grid grid-cols-2 gap-2">
                          {solution.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center space-x-2 bg-white/50 p-2 rounded-md"
                            >
                              <CheckCircleOutlined className="text-blue-600" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Text className="text-blue-600 font-semibold mb-4 block">
                OUR PROCESS
              </Text>
              <Title level={2} className="mb-6">
                Design <span className="text-blue-600">Process</span>
              </Title>
            </div>

            <Row gutter={[32, 32]}>
              {designProcess.map((process, index) => (
                <Col xs={24} md={8} key={index}>
                  <Card
                    className="h-full hover:shadow-xl transition-all duration-300"
                    style={{
                      background: "linear-gradient(145deg, #f8faff, #ffffff)",
                      border: "1px solid #e6f0ff",
                    }}
                  >
                    <div className="text-center mb-6">{process.icon}</div>
                    <Title level={4} className="text-center mb-4">
                      {process.title}
                    </Title>
                    <Paragraph className="text-gray-600 text-center mb-6">
                      {process.description}
                    </Paragraph>
                    <ul className="space-y-2">
                      {process.steps.map((step, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 p-2 rounded-md bg-white/50"
                        >
                          <CheckCircleOutlined className="text-blue-600" />
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Col>
              ))}
            </Row>
          </div> */}

          {/* <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Text className="text-blue-600 font-semibold mb-4 block">
                OUR EXPERTISE
              </Text>
              <Title level={2} className="mb-6">
                Areas of <span className="text-blue-600">Expertise</span>
              </Title>
            </div>

            <Row
              gutter={[24, 24]}
              className="max-w-5xl mx-auto"
              justify="center" // Add this to center the row content
            >
              {expertiseAreas.map((area, index) => (
                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  lg={8}
                  key={index}
                  className="flex justify-center" // Add this to center each column
                >
                  <Card
                    className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-[250px] flex flex-col justify-between w-full" // Add w-full
                    style={{
                      background: "linear-gradient(145deg, #f8faff, #ffffff)",
                      border: "1px solid #e6f0ff",
                      maxWidth: "350px", // Add maximum width for better appearance
                    }}
                    bodyStyle={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: "24px",
                    }}
                  >
                    <div>
                      <div className="text-4xl mb-3">{area.icon}</div>
                      <Title level={5} className="mb-2 !text-lg">
                        {area.title}
                      </Title>
                    </div>
                    <Paragraph className="text-gray-600 m-0 text-sm">
                      {area.description}
                    </Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div> */}
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
