import React from "react";
import { Typography, Row, Col, Card, Breadcrumb } from "antd";
import {
  SafetyCertificateOutlined,
  DeploymentUnitOutlined,
  ThunderboltOutlined,
  DatabaseOutlined,
  CheckCircleOutlined,
  SettingOutlined,
  ToolOutlined,
  LineChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Pipeline from "../../assets/pipeline_services2.png";
import { Link } from "react-router-dom";
import Seo from "../Seo";
import { pageSEO } from "../Seo.config";

const { Title, Paragraph, Text } = Typography;

export default function Pipeline_Services() {
  // Core Services
  const coreServices = [
    {
      icon: <DeploymentUnitOutlined className="text-4xl text-blue-600" />,
      title: "Pipeline Design",
      description:
        "Comprehensive pipeline system design with advanced engineering solutions",
    },
    {
      icon: <SafetyCertificateOutlined className="text-4xl text-blue-600" />,
      title: "Safety Analysis",
      description: "Thorough safety assessments and risk mitigation strategies",
    },
    {
      icon: <ThunderboltOutlined className="text-4xl text-blue-600" />,
      title: "Flow Analysis",
      description: "Advanced fluid dynamics and flow optimization studies",
    },
    {
      icon: <DatabaseOutlined className="text-4xl text-blue-600" />,
      title: "Material Selection",
      description:
        "Expert material selection for optimal performance and longevity",
    },
  ];

  // Pipeline Solutions
  const pipelineSolutions = [
    {
      icon: <SettingOutlined />,
      title: "Engineering & Design",
      description: "Complete pipeline engineering solutions",
      features: [
        "Detailed Design Documentation",
        "3D Modeling & Analysis",
        "Technical Specifications",
        "Construction Drawings",
      ],
    },
    {
      icon: <ToolOutlined />,
      title: "Construction Support",
      description: "Comprehensive construction assistance",
      features: [
        "Construction Planning",
        "Quality Control",
        "Site Supervision",
        "Installation Support",
      ],
    },
    {
      icon: <LineChartOutlined />,
      title: "Project Management",
      description: "End-to-end project oversight",
      features: [
        "Schedule Management",
        "Cost Control",
        "Risk Management",
        "Progress Monitoring",
      ],
    },
    {
      icon: <SafetyCertificateOutlined />,
      title: "Integrity Management",
      description: "Ensuring long-term system reliability",
      features: [
        "Risk Assessment",
        "Maintenance Planning",
        "Inspection Programs",
        "Performance Monitoring",
      ],
    },
  ];

  return (
    <>
      <Seo {...pageSEO.services} />
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div className="relative h-[600px]">
          <div className="absolute inset-0">
            <img
              src={Pipeline}
              alt="Pipeline Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <Title className="!text-white mb-6 !text-5xl">
                Advanced Pipeline Engineering & Design Solutions
              </Title>
              <Paragraph className="text-gray-300 text-lg mb-8">
                Delivering innovative and reliable pipeline solutions through
                cutting-edge engineering expertise and comprehensive project
                management.
              </Paragraph>
              <div className="flex space-x-4">
                <Link to="/contact">
                  <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                    Contact Us
                  </button>
                </Link>
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
                      to="/services/pipeline"
                      className="hover:text-blue-500 !text-black"
                    >
                      Pipeline Services
                    </Link>
                  ),
                },
              ]}
            />
          </div>

          {/* Core Services Section */}
          <div className="py-2">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <Text className="text-blue-600 font-semibold mb-4 block">
                  OUR EXPERTISE
                </Text>
                <Title level={2} className="mb-6">
                  Core <span className="text-blue-600">Services</span>
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

          {/* Pipeline Solutions Section */}
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <Text className="text-blue-600 font-semibold mb-4 block">
                  COMPREHENSIVE SOLUTIONS
                </Text>
                <Title level={2} className="mb-6">
                  Pipeline <span className="text-blue-600">Solutions</span>
                </Title>
              </div>

              <Row gutter={[32, 32]}>
                {pipelineSolutions.map((solution, index) => (
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

          {/* Why Choose Us Section */}
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <Text className="text-blue-600 font-semibold mb-4 block">
                  WHY CHOOSE US
                </Text>
                <Title level={2} className="mb-6">
                  Our <span className="text-blue-600">Advantages</span>
                </Title>
              </div>

              <Row gutter={[32, 32]}>
                {[
                  {
                    title: "Expert Team",
                    description:
                      "Highly qualified engineers with extensive industry experience",
                    icon: <TeamOutlined className="text-3xl text-blue-600" />,
                  },
                  {
                    title: "Advanced Technology",
                    description:
                      "Latest software and tools for precise design and analysis",
                    icon: <ToolOutlined className="text-3xl text-blue-600" />,
                  },
                  {
                    title: "Quality Assurance",
                    description:
                      "Rigorous quality control processes and standards compliance",
                    icon: (
                      <SafetyCertificateOutlined className="text-3xl text-blue-600" />
                    ),
                  },
                ].map((advantage, index) => (
                  <Col xs={24} md={8} key={index}>
                    <Card
                      className="h-full text-center hover:shadow-xl transition-all duration-300"
                      style={{
                        background: "linear-gradient(145deg, #f8faff, #ffffff)",
                        border: "1px solid #e6f0ff",
                      }}
                    >
                      <div className="mb-6">{advantage.icon}</div>
                      <Title level={4} className="mb-4">
                        {advantage.title}
                      </Title>
                      <Paragraph className="text-gray-600">
                        {advantage.description}
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
              Ready to Start Your Pipeline Project?
            </Title>
            <Paragraph className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our pipeline engineering services
              can benefit your project.
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
