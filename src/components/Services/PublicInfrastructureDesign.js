import React from "react";
import { Typography, Row, Col, Card, Breadcrumb } from "antd";
import {
  CompassOutlined,
  ThunderboltOutlined,
  ClusterOutlined,
  CheckCircleOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  BuildOutlined,
  GlobalOutlined,
  BarChartOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import Infrastructure from "../../assets/infrastructure.jpg";
import { Link } from "react-router-dom";
import Seo from "../Seo";
import { pageSEO } from "../Seo.config";

const { Title, Paragraph, Text } = Typography;

export default function Public_Infrastructure_Design() {
  // Core Services
  const coreServices = [
    {
      icon: <BuildOutlined className="text-4xl text-blue-600" />,
      title: "Urban Planning",
      description:
        "Comprehensive urban development solutions with sustainable design principles",
    },
    {
      icon: <CompassOutlined className="text-4xl text-blue-600" />,
      title: "Transportation",
      description:
        "Innovative transportation infrastructure and network planning",
    },
    {
      icon: <ThunderboltOutlined className="text-4xl text-blue-600" />,
      title: "Utilities",
      description: "Essential utility systems design and implementation",
    },
    {
      icon: <ClusterOutlined className="text-4xl text-blue-600" />,
      title: "Smart Cities",
      description: "Integration of smart technologies for urban development",
    },
  ];

  // Infrastructure Solutions
  const infrastructureSolutions = [
    {
      icon: <EnvironmentOutlined />,
      title: "Urban Development",
      description: "Sustainable urban infrastructure solutions",
      features: [
        "Master Planning",
        "Land Use Planning",
        "Urban Regeneration",
        "Public Spaces",
      ],
    },
    {
      icon: <ApartmentOutlined />,
      title: "Transportation Systems",
      description: "Comprehensive transport infrastructure",
      features: [
        "Road Networks",
        "Public Transit",
        "Bridges & Tunnels",
        "Traffic Management",
      ],
    },
    {
      icon: <BuildOutlined />,
      title: "Public Facilities",
      description: "Essential community infrastructure",
      features: [
        "Government Buildings",
        "Educational Facilities",
        "Healthcare Centers",
        "Recreation Facilities",
      ],
    },
    {
      icon: <ThunderboltOutlined />,
      title: "Utility Networks",
      description: "Critical utility infrastructure systems",
      features: [
        "Water Supply",
        "Sewerage Systems",
        "Power Distribution",
        "Telecommunications",
      ],
    },
  ];

  // Key Features
  const keyFeatures = [
    {
      title: "Sustainable Design",
      description:
        "Implementing eco-friendly solutions for long-term environmental sustainability",
      icon: <GlobalOutlined className="text-3xl text-blue-600" />,
      features: [
        "Green Building Practices",
        "Energy Efficiency",
        "Renewable Resources",
        "Environmental Protection",
      ],
    },
    {
      title: "Smart Integration",
      description: "Incorporating smart technologies for improved urban living",
      icon: <BarChartOutlined className="text-3xl text-blue-600" />,
      features: [
        "IoT Integration",
        "Digital Infrastructure",
        "Smart Monitoring",
        "Data Analytics",
      ],
    },
    {
      title: "Community Focus",
      description: "Designing with community needs and social impact in mind",
      icon: <TeamOutlined className="text-3xl text-blue-600" />,
      features: [
        "Public Engagement",
        "Social Infrastructure",
        "Accessibility",
        "Cultural Integration",
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
              src={Infrastructure}
              alt="Public Infrastructure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <Title className="!text-white mb-6 !text-5xl">
                Shaping Tomorrow's Public Infrastructure
              </Title>
              <Paragraph className="text-gray-300 text-lg mb-8">
                Creating sustainable, smart, and resilient infrastructure
                solutions that enhance community life and drive urban
                development forward.
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
                      to="/services/infrastructure"
                      className="hover:text-blue-500 !text-black"
                    >
                      Infrastructure Services
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
                  Core{" "}
                  <span className="text-blue-600">
                    Infrastructure Solutions
                  </span>
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

          {/* Infrastructure Solutions Section */}
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <Text className="text-blue-600 font-semibold mb-4 block">
                  COMPREHENSIVE SOLUTIONS
                </Text>
                <Title level={2} className="mb-6">
                  Infrastructure{" "}
                  <span className="text-blue-600">Development</span>
                </Title>
              </div>

              <Row gutter={[32, 32]}>
                {infrastructureSolutions.map((solution, index) => (
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

          {/* Key Features Section */}
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <Text className="text-blue-600 font-semibold mb-4 block">
                  KEY FEATURES
                </Text>
                <Title level={2} className="mb-6">
                  Our <span className="text-blue-600">Approach</span>
                </Title>
              </div>

              <Row gutter={[32, 32]}>
                {keyFeatures.map((feature, index) => (
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

          {/* Call to Action */}
        </div>
        <div className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Title level={2} className="!text-white mb-6">
              Ready to Build Better Communities?
            </Title>
            <Paragraph className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to create sustainable and smart infrastructure
              solutions that serve communities and drive progress.
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
