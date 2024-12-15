import React from "react";
import { Typography, Row, Col, Card, Breadcrumb } from "antd";
import {
  SafetyCertificateOutlined,
  ProjectOutlined,
  ControlOutlined,
  CheckCircleOutlined,
  ToolOutlined,
  LineChartOutlined,
  BuildOutlined,
  GlobalOutlined,
  DeploymentUnitOutlined,
  DollarOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import EPC_Main from "../../assets/EPC.png";
import { Link } from "react-router-dom";
import Seo from "../Seo";
import { pageSEO } from "../Seo.config";

const { Title, Paragraph, Text } = Typography;

export default function EPC() {
  // Core EPC Services
  const coreServices = [
    {
      icon: <ProjectOutlined className="text-4xl text-blue-600" />,
      title: "Engineering",
      description:
        "Comprehensive design and detailed engineering solutions for complex projects",
    },
    {
      icon: <ControlOutlined className="text-4xl text-blue-600" />,
      title: "Procurement",
      description: "Strategic sourcing and efficient supply chain management",
    },
    {
      icon: <BuildOutlined className="text-4xl text-blue-600" />,
      title: "Construction",
      description:
        "Expert project execution and construction management services",
    },
    {
      icon: <SafetyCertificateOutlined className="text-4xl text-blue-600" />,
      title: "Quality Assurance",
      description:
        "Rigorous quality control and safety standards implementation",
    },
  ];

  // Detailed Solutions
  const detailedSolutions = [
    {
      icon: <DeploymentUnitOutlined />,
      title: "Engineering Excellence",
      description: "Comprehensive engineering solutions",
      features: [
        "Detailed Design",
        "Technical Specifications",
        "3D Modeling",
        "Engineering Analysis",
      ],
    },
    {
      icon: <DollarOutlined />,
      title: "Procurement Management",
      description: "Strategic procurement services",
      features: [
        "Vendor Selection",
        "Cost Optimization",
        "Material Management",
        "Quality Control",
      ],
    },
    {
      icon: <ToolOutlined />,
      title: "Construction Services",
      description: "End-to-end construction management",
      features: [
        "Site Management",
        "Construction Planning",
        "Safety Compliance",
        "Quality Assurance",
      ],
    },
    {
      icon: <RocketOutlined />,
      title: "Project Delivery",
      description: "Efficient project execution",
      features: [
        "Schedule Management",
        "Cost Control",
        "Risk Mitigation",
        "Performance Monitoring",
      ],
    },
  ];

  // Project Management Features
  const projectFeatures = [
    {
      title: "Integrated Approach",
      description:
        "Seamless coordination across engineering, procurement, and construction phases",
      icon: <DeploymentUnitOutlined className="text-3xl text-blue-600" />,
      features: [
        "Single Point Responsibility",
        "Streamlined Communication",
        "Efficient Coordination",
        "Risk Management",
      ],
    },
    {
      title: "Project Excellence",
      description:
        "Delivering projects with the highest standards of quality and efficiency",
      icon: <LineChartOutlined className="text-3xl text-blue-600" />,
      features: [
        "Quality Assurance",
        "Timeline Adherence",
        "Cost Optimization",
        "Performance Metrics",
      ],
    },
    {
      title: "Global Expertise",
      description: "International experience with diverse project portfolios",
      icon: <GlobalOutlined className="text-3xl text-blue-600" />,
      features: [
        "Global Standards",
        "Industry Best Practices",
        "International Teams",
        "Cultural Adaptation",
      ],
    },
  ];

  // Industry Sectors
  const industrySectors = [
    {
      title: "Oil & Gas",
      icon: "🛢️",
    },
    {
      title: "Power Generation",
      icon: "⚡",
    },
    {
      title: "Infrastructure",
      icon: "🏗️",
    },
    {
      title: "Industrial",
      icon: "🏭",
    },
    {
      title: "Mining",
      icon: "⛏️",
    },
    {
      title: "Water Treatment",
      icon: "💧",
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
              src={EPC_Main}
              alt="EPC Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <Title className="!text-white mb-6 !text-5xl">
                Complete EPC Solutions for Complex Projects
              </Title>
              <Paragraph className="text-gray-300 text-lg mb-8">
                Delivering excellence in Engineering, Procurement, and
                Construction through integrated project delivery and innovative
                solutions.
              </Paragraph>
              <div className="flex space-x-4">
                <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[90%] mx-auto">
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
                      to="/services/epc"
                      className="hover:text-blue-500 !text-black"
                    >
                      EPC Services
                    </Link>
                  ),
                },
              ]}
            />
          </div>
          {/* Core Services Section */}
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <Text className="text-blue-600 font-semibold mb-4 block">
                  OUR SERVICES
                </Text>
                <Title level={2} className="mb-6">
                  Core <span className="text-blue-600">EPC Services</span>
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

          {/* Detailed Solutions Section */}
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <Text className="text-blue-600 font-semibold mb-4 block">
                  COMPREHENSIVE SOLUTIONS
                </Text>
                <Title level={2} className="mb-6">
                  Detailed <span className="text-blue-600">Solutions</span>
                </Title>
              </div>

              <Row gutter={[32, 32]}>
                {detailedSolutions.map((solution, index) => (
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

          {/* Project Features Section */}
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <Text className="text-blue-600 font-semibold mb-4 block">
                  PROJECT EXCELLENCE
                </Text>
                <Title level={2} className="mb-6">
                  Our <span className="text-blue-600">Approach</span>
                </Title>
              </div>

              <Row gutter={[32, 32]}>
                {projectFeatures.map((feature, index) => (
                  <Col xs={24} md={8} key={index}>
                    <Card
                      className="h-full hover:shadow-xl transition-all duration-300"
                      style={{
                        background: "linear-gradient(145deg, #f8faff, #ffffff)",
                        border: "1px solid #e6f0ff",
                      }}
                    >
                      <div className="text-center mb-6">{feature.icon}</div>
                      <Title level={4} className="text-center mb-4">
                        {feature.title}
                      </Title>
                      <Paragraph className="text-gray-600 text-center mb-6">
                        {feature.description}
                      </Paragraph>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-2 p-2 rounded-md bg-white/50"
                          >
                            <CheckCircleOutlined className="text-blue-600" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>

          {/* Industry Sectors */}
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <Text className="text-blue-600 font-semibold mb-4 block">
                  INDUSTRIES SERVED
                </Text>
                <Title level={2} className="mb-6">
                  Industry <span className="text-blue-600">Sectors</span>
                </Title>
              </div>
            </div>
            <div className="flex justify-center">
              <Row gutter={[24, 24]} className="max-w-4xl mx-auto">
                {industrySectors.map((sector, index) => (
                  <Col xs={12} sm={8} md={8} key={index}>
                    <Card
                      className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      style={{
                        background: "linear-gradient(145deg, #f8faff, #ffffff)",
                        border: "1px solid #e6f0ff",
                      }}
                    >
                      <div className="text-4xl mb-3">{sector.icon}</div>
                      <Title level={5} className="m-0">
                        {sector.title}
                      </Title>
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
              Ready to Start Your EPC Project?
            </Title>
            <Paragraph className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to bring your project to life with our
              comprehensive EPC solutions.
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
