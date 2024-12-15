import React from "react";
import { Typography, Row, Col, Card, Breadcrumb } from "antd";
import {
  SafetyCertificateOutlined,
  ExperimentOutlined,
  ThunderboltOutlined,
  DatabaseOutlined,
  CheckCircleOutlined,
  SettingOutlined,
  ToolOutlined,
  LineChartOutlined,
  TeamOutlined,
  GlobalOutlined,
  BarChartOutlined,
  CloudOutlined,
} from "@ant-design/icons";
import OilAndGas from "../../assets/services_oil&gas.jpg";
import { Link } from "react-router-dom";
import Seo from "../Seo";
import { pageSEO } from "../Seo.config";

const { Title, Paragraph, Text } = Typography;

export default function Oil_And_Gas() {
  // Core Services
  const coreServices = [
    {
      icon: <ExperimentOutlined className="text-4xl text-blue-600" />,
      title: "Exploration & Production",
      description:
        "Advanced geological studies and production optimization solutions",
    },
    {
      icon: <SafetyCertificateOutlined className="text-4xl text-blue-600" />,
      title: "Safety & Compliance",
      description: "Comprehensive safety protocols and regulatory compliance",
    },
    {
      icon: <ThunderboltOutlined className="text-4xl text-blue-600" />,
      title: "Process Optimization",
      description: "Enhanced efficiency in oil and gas processing operations",
    },
    {
      icon: <DatabaseOutlined className="text-4xl text-blue-600" />,
      title: "Field Development",
      description:
        "Strategic planning and execution of field development projects",
    },
  ];

  // Industry Solutions
  const industrySolutions = [
    {
      icon: <SettingOutlined />,
      title: "Upstream Services",
      description: "Comprehensive exploration and production solutions",
      features: [
        "Reservoir Engineering",
        "Well Design & Planning",
        "Production Optimization",
        "Field Development",
      ],
    },
    {
      icon: <ToolOutlined />,
      title: "Midstream Operations",
      description: "Transportation and storage solutions",
      features: [
        "Pipeline Networks",
        "Storage Facilities",
        "Processing Plants",
        "Terminal Operations",
      ],
    },
    {
      icon: <LineChartOutlined />,
      title: "Downstream Solutions",
      description: "Refining and distribution expertise",
      features: [
        "Refinery Operations",
        "Product Distribution",
        "Quality Control",
        "Market Analysis",
      ],
    },
    {
      icon: <CloudOutlined />,
      title: "Environmental Management",
      description: "Sustainable practices and environmental compliance",
      features: [
        "Emissions Control",
        "Waste Management",
        "Environmental Impact",
        "Regulatory Compliance",
      ],
    },
  ];

  // Technical Expertise
  const technicalExpertise = [
    {
      title: "Advanced Analytics",
      description:
        "Utilizing cutting-edge data analytics and AI for operational insights",
      icon: <BarChartOutlined className="text-3xl text-blue-600" />,
    },
    {
      title: "Global Operations",
      description:
        "Managing complex international oil and gas projects worldwide",
      icon: <GlobalOutlined className="text-3xl text-blue-600" />,
    },
    {
      title: "Expert Consultation",
      description: "Professional guidance from industry-leading experts",
      icon: <TeamOutlined className="text-3xl text-blue-600" />,
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
              src={OilAndGas}
              alt="Oil and Gas Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <Title className="!text-white mb-6 !text-5xl">
                Innovative Oil & Gas Engineering Solutions
              </Title>
              <Paragraph className="text-gray-300 text-lg mb-8">
                Delivering comprehensive engineering services across the entire
                oil and gas value chain, from exploration to distribution, with
                a focus on safety, efficiency, and sustainability.
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
                      to="/services/oilandgas"
                      className="hover:text-blue-500 !text-black"
                    >
                      Oil & Gas Services
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
                  Core <span className="text-blue-600">Capabilities</span>
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

          {/* Industry Solutions Section */}
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <Text className="text-blue-600 font-semibold mb-4 block">
                  INDUSTRY SOLUTIONS
                </Text>
                <Title level={2} className="mb-6">
                  Comprehensive <span className="text-blue-600">Solutions</span>
                </Title>
              </div>

              <Row gutter={[32, 32]}>
                {industrySolutions.map((solution, index) => (
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

          {/* Technical Expertise Section */}
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <Text className="text-blue-600 font-semibold mb-4 block">
                  TECHNICAL EXPERTISE
                </Text>
                <Title level={2} className="mb-6">
                  Our <span className="text-blue-600">Expertise</span>
                </Title>
              </div>

              <Row gutter={[32, 32]}>
                {technicalExpertise.map((expertise, index) => (
                  <Col xs={24} md={8} key={index}>
                    <Card
                      className="h-full text-center hover:shadow-xl transition-all duration-300"
                      style={{
                        background: "linear-gradient(145deg, #f8faff, #ffffff)",
                        border: "1px solid #e6f0ff",
                      }}
                    >
                      <div className="mb-6">{expertise.icon}</div>
                      <Title level={4} className="mb-4">
                        {expertise.title}
                      </Title>
                      <Paragraph className="text-gray-600">
                        {expertise.description}
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
              Ready to Transform Your Oil & Gas Operations?
            </Title>
            <Paragraph className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our comprehensive oil and gas
              engineering services can optimize your operations and drive
              success.
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
