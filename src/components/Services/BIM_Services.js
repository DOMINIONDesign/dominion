import React from "react";
import { Typography, Row, Col, Card, Breadcrumb } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  GlobalOutlined,
  ToolOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
import BIM from "../../assets/BIM_services_Main.jpeg";
import { Link } from "react-router-dom";
import Seo from "../Seo";
import { pageSEO } from "../Seo.config";

const { Title, Paragraph, Text } = Typography;

export default function BIM_Services() {
  // Core Capabilities
  // const capabilities = [
  //   {
  //     icon: <SafetyCertificateOutlined className="text-4xl text-blue-600" />,
  //     title: "Quality Assurance",
  //     description:
  //       "Industry-leading BIM standards and quality control processes",
  //   },
  //   {
  //     icon: <TeamOutlined className="text-4xl text-blue-600" />,
  //     title: "Expert Team",
  //     description:
  //       "Certified BIM professionals with extensive industry experience",
  //   },
  //   {
  //     icon: <RocketOutlined className="text-4xl text-blue-600" />,
  //     title: "Innovation",
  //     description: "Latest BIM technologies and methodologies",
  //   },
  //   {
  //     icon: <BarChartOutlined className="text-4xl text-blue-600" />,
  //     title: "Efficiency",
  //     description: "Optimized workflows for maximum productivity",
  //   },
  // ];

  // BIM Dimensions
  const bimDimensions = [
    {
      dimension: "3D BIM",
      title: "Visualization & Coordination",
      description:
        "Detailed 3D models for clash detection and spatial coordination",
      features: [
        "Precise 3D Modeling",
        "Clash Detection",
        "Space Planning",
        "Design Validation",
      ],
    },
    {
      dimension: "4D BIM",
      title: "Construction Scheduling",
      description: "Time-linked construction sequences and project planning",
      features: [
        "Timeline Integration",
        "Resource Planning",
        "Schedule Optimization",
        "Progress Tracking",
      ],
    },
    {
      dimension: "5D BIM",
      title: "Cost Estimation",
      description: "Accurate cost analysis and quantity takeoffs",
      features: [
        "Quantity Takeoffs",
        "Cost Analysis",
        "Budget Tracking",
        "Value Engineering",
      ],
    },
    {
      dimension: "6D BIM",
      title: "Sustainability",
      description: "Energy analysis and sustainable design optimization",
      features: [
        "Energy Analysis",
        "Environmental Impact",
        "Green Building",
        "LEED Documentation",
      ],
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
              src={BIM}
              alt="BIM Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <Title className="!text-white mb-6 !text-5xl">
                Transform Your Construction Projects with Advanced BIM Solutions
              </Title>
              <Paragraph className="text-gray-300 text-lg mb-8">
                Leverage our expertise in Building Information Modeling to
                optimize your project's lifecycle from conception to completion.
                Experience enhanced collaboration, reduced costs, and superior
                project outcomes.
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

        <div className="bg-gray-200 md:w-[90%] mx-auto">
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
                      to="/services/bim"
                      className="hover:text-blue-500 !text-black"
                    >
                      BIM Services
                    </Link>
                  ),
                },
              ]}
            />
          </div>
          {/* Core Capabilities */}
          {/* <div className="pb-20 pt-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Text className="text-blue-600 font-semibold mb-4 block">
                WHY CHOOSE US
              </Text>
              <Title level={2} className="mb-6">
                Our Core <span className="text-blue-600">Capabilities</span>
              </Title>
              <Paragraph className="text-gray-600 max-w-2xl mx-auto">
                We combine expertise, innovation, and proven methodologies to
                deliver exceptional BIM services that drive project success.
              </Paragraph>
            </div>

            <Row gutter={[32, 32]}>
              {capabilities.map((capability, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <Card
                    className="h-full text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    bordered={false}
                  >
                    <div className="mb-6">{capability.icon}</div>
                    <Title level={4} className="mb-4">
                      {capability.title}
                    </Title>
                    <Paragraph className="text-gray-600">
                      {capability.description}
                    </Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div> */}

          {/* BIM Dimensions */}
          <div className="py-10 bg-gray-200">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <Text className="text-blue-600 font-semibold mb-4 block">
                  COMPREHENSIVE SOLUTIONS
                </Text>
                <Title level={2} className="mb-6">
                  Multi-Dimensional{" "}
                  <span className="text-blue-600">BIM Services</span>
                </Title>
              </div>

              <Row gutter={[32, 32]}>
                {bimDimensions.map((dim, index) => (
                  <Col xs={24} md={12} key={index}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start">
                        <div className="mr-6">
                          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                            {dim.dimension.split("D")[0]}D
                          </div>
                        </div>
                        <div>
                          <Title level={4} className="mb-2">
                            {dim.title}
                          </Title>
                          <Paragraph className="text-gray-600 mb-4">
                            {dim.description}
                          </Paragraph>
                          <ul className="grid grid-cols-2 gap-2">
                            {dim.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center space-x-2"
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

          {/* Project Process */}
          <div className="pb-20 bg-gray-200">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <Text className="text-blue-600 font-semibold mb-4 block">
                  OUR PROCESS
                </Text>
                <Title level={2} className="mb-6">
                  The Path to{" "}
                  <span className="text-blue-600">Project Success</span>
                </Title>
              </div>

              <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-200 -translate-y-1/2" />
                <Row gutter={[48, 48]} className="relative">
                  {[
                    {
                      icon: <ToolOutlined />,
                      title: "Project Analysis",
                      description:
                        "Detailed assessment of project requirements",
                    },
                    {
                      icon: <DeploymentUnitOutlined />,
                      title: "BIM Strategy",
                      description:
                        "Development of customized BIM execution plan",
                    },
                    {
                      icon: <GlobalOutlined />,
                      title: "Implementation",
                      description: "Execution of BIM processes and modeling",
                    },
                    {
                      icon: <SafetyCertificateOutlined />,
                      title: "Quality Assurance",
                      description: "Rigorous quality checks and validation",
                    },
                  ].map((step, index) => (
                    <Col xs={24} sm={12} md={6} key={index}>
                      <div className="relative bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                          {step.icon}
                        </div>
                        <Title level={4} className="mb-4">
                          {step.title}
                        </Title>
                        <Paragraph className="text-gray-600">
                          {step.description}
                        </Paragraph>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>

          {/* Call to Action */}
        </div>
        <div className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Title level={2} className="!text-white mb-6">
              Ready to Transform Your Construction Projects?
            </Title>
            <Paragraph className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our BIM services can enhance your
              project's efficiency, reduce costs, and ensure successful
              delivery.
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
