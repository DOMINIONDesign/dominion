import React from "react";
import { Typography, Row, Col, Card, Breadcrumb } from "antd";
import {
  SafetyCertificateOutlined,
  BuildOutlined,
  CompassOutlined,
  LayoutOutlined,
  CheckCircleOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  ApartmentOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
import Construction from "../../assets/services_construction.avif";
import { Link } from "react-router-dom";
import Seo from "../Seo";
import { pageSEO } from "../Seo.config";

const { Title, Paragraph, Text } = Typography;

export default function Construction_Design() {
  // Core Design Services
  const coreServices = [
    {
      icon: <BuildOutlined className="text-4xl text-blue-600" />,
      title: "Structural Design",
      description:
        "Innovative structural solutions ensuring safety and stability",
    },
    {
      icon: <CompassOutlined className="text-4xl text-blue-600" />,
      title: "Civil Engineering",
      description: "Comprehensive civil engineering and site development",
    },
    {
      icon: <LayoutOutlined className="text-4xl text-blue-600" />,
      title: "Architectural Design",
      description:
        "Creative architectural solutions with functional excellence",
    },
    {
      icon: <SafetyCertificateOutlined className="text-4xl text-blue-600" />,
      title: "Safety & Compliance",
      description: "Ensuring adherence to codes and safety standards",
    },
  ];

  // Design Solutions
  const designSolutions = [
    {
      icon: <ApartmentOutlined />,
      title: "Commercial Buildings",
      description: "State-of-the-art commercial construction design",
      features: [
        "Office Complexes",
        "Retail Centers",
        "Industrial Facilities",
        "Mixed-Use Developments",
      ],
    },
    {
      icon: <HomeOutlined />,
      title: "Residential Projects",
      description: "Innovative residential design solutions",
      features: [
        "Multi-Family Housing",
        "Custom Homes",
        "Residential Complexes",
        "Urban Housing",
      ],
    },
    {
      icon: <EnvironmentOutlined />,
      title: "Sustainable Design",
      description: "Eco-friendly construction solutions",
      features: [
        "Green Building Design",
        "Energy Efficiency",
        "Sustainable Materials",
        "Environmental Compliance",
      ],
    },
    {
      icon: <DeploymentUnitOutlined />,
      title: "Technical Design",
      description: "Detailed technical planning and execution",
      features: [
        "Structural Analysis",
        "MEP Integration",
        "Foundation Design",
        "Seismic Design",
      ],
    },
  ];

  // Design Process
  const designProcess = [
    {
      title: "Planning & Analysis",
      description: "Comprehensive project planning and site analysis",
      icon: <CompassOutlined className="text-3xl text-blue-600" />,
      steps: [
        "Site Assessment",
        "Requirements Analysis",
        "Feasibility Studies",
        "Concept Development",
      ],
    },
    {
      title: "Design Development",
      description: "Detailed design development and documentation",
      icon: <LayoutOutlined className="text-3xl text-blue-600" />,
      steps: [
        "Schematic Design",
        "Design Development",
        "Construction Documents",
        "Technical Specifications",
      ],
    },
    {
      title: "Project Execution",
      description: "Expert construction oversight and management",
      icon: <BuildOutlined className="text-3xl text-blue-600" />,
      steps: [
        "Construction Support",
        "Quality Control",
        "Site Supervision",
        "Project Management",
      ],
    },
  ];

  // Expertise Areas
  const expertiseAreas = [
    {
      title: "Structural Engineering",
      icon: "🏗️",
      description: "Advanced structural analysis and design",
    },
    {
      title: "Civil Engineering",
      icon: "🌉",
      description: "Comprehensive civil infrastructure solutions",
    },
    {
      title: "Architectural Design",
      icon: "🏛️",
      description: "Creative and functional architectural solutions",
    },
    {
      title: "MEP Design",
      icon: "⚡",
      description: "Integrated mechanical, electrical, and plumbing systems",
    },
    {
      title: "Sustainable Design",
      icon: "🌱",
      description: "Eco-friendly and energy-efficient solutions",
    },
    {
      title: "Project Management",
      icon: "📋",
      description: "Efficient project planning and execution",
    },
  ];

  return (
    <>
      <Seo {...pageSEO.services} />
      <div className="min-h-screen bg-gray-200">
        {/* Hero Section */}

        <div className="relative h-[600px]">
          <div className="absolute inset-0">
            <img
              src={Construction}
              alt="Construction Design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <Title className="!text-white mb-6 !text-5xl">
                Innovative Construction Design Solutions
              </Title>
              <Paragraph className="text-gray-300 text-lg mb-8">
                Creating exceptional built environments through innovative
                design, engineering excellence, and sustainable practices.
              </Paragraph>
              <div className="flex space-x-4">
                <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Core Services Section */}
        <div className=" md:w-[90%] mx-auto">
          <div className="pt-4">
            <Breadcrumb
              className="text-md"
              items={[
                {
                  title: (
                    <Link to="/" className="hover:text-blue-500 !text-black">
                      Home
                    </Link>
                  ),
                },
                {
                  title: (
                    <Link
                      to="/services"
                      className="hover:text-blue-500 !text-black"
                    >
                      Services
                    </Link>
                  ),
                },
                {
                  title: (
                    <Link
                      to="/services/construction"
                      className="hover:text-blue-500 !text-black"
                    >
                      Construction Services
                    </Link>
                  ),
                },
              ]}
            />
          </div>
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4">
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
            </div>
          </div>

          {/* Design Solutions Section */}
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4">
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
          </div>

          {/* Design Process Section */}
          <div className="py-20">
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
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4">
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
            </div>
          </div>

          {/* Call to Action */}
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
