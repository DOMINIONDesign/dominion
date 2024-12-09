// src/components/Services.js
import { useState } from "react";
import {
  Typography,
  Row,
  Col,
  Card,
  Button,
  Steps,
  Collapse,
  Badge,
} from "antd";
import {
  BuildOutlined,
  SafetyCertificateOutlined,
  RocketOutlined,
  TeamOutlined,
  DeploymentUnitOutlined,
  EnvironmentOutlined,
  AuditOutlined,
  QuestionCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const Services = () => {
  // const [activeTab, setActiveTab] = useState("1");

  const mainServices = [
    {
      icon: <BuildOutlined className="text-4xl text-blue-600" />,
      title: "Structural Engineering",
      description:
        "Comprehensive structural analysis and design for buildings and infrastructure",
      features: [
        "Structural Analysis",
        "Design Optimization",
        "Seismic Engineering",
        "Foundation Design",
      ],
    },
    {
      icon: <SafetyCertificateOutlined className="text-4xl text-blue-600" />,
      title: "Safety & Compliance",
      description:
        "Ensuring projects meet all safety standards and regulatory requirements",
      features: [
        "Safety Audits",
        "Compliance Reviews",
        "Risk Assessment",
        "Safety Training",
      ],
    },
    {
      icon: <RocketOutlined className="text-4xl text-blue-600" />,
      title: "Innovation Design",
      description: "Cutting-edge design solutions using advanced technologies",
      features: [
        "3D Modeling",
        "Parametric Design",
        "Digital Twin Creation",
        "BIM Integration",
      ],
    },
    {
      icon: <TeamOutlined className="text-4xl text-blue-600" />,
      title: "Project Management",
      description: "End-to-end project coordination and management services",
      features: [
        "Timeline Planning",
        "Resource Allocation",
        "Budget Management",
        "Quality Control",
      ],
    },
  ];

  const processSteps = [
    {
      title: "Consultation",
      description: "Initial meeting to understand project requirements",
    },
    {
      title: "Analysis",
      description: "Detailed analysis and feasibility study",
    },
    {
      title: "Design",
      description: "Creating comprehensive design solutions",
    },
    {
      title: "Implementation",
      description: "Executing the planned solutions",
    },
    {
      title: "Quality Assurance",
      description: "Testing and quality verification",
    },
  ];

  const faqs = [
    {
      question: "What types of projects do you handle?",
      answer:
        "We handle a wide range of projects including commercial buildings, industrial facilities, infrastructure projects, and specialized engineering solutions.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project duration varies based on scope and complexity. Small projects might take 2-3 months, while larger projects can extend to 1-2 years.",
    },
    {
      question: "Do you offer sustainable engineering solutions?",
      answer:
        "Yes, we prioritize sustainable engineering practices and offer green building solutions, energy-efficient designs, and environmentally conscious alternatives.",
    },
    {
      question: "What standards do you follow?",
      answer:
        "We adhere to international engineering standards including ISO, ASTM, and local building codes while implementing industry best practices.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Title level={1} className="text-white mb-6">
            Our Services
          </Title>
          <Paragraph className="text-lg text-gray-100 max-w-3xl mx-auto">
            Comprehensive engineering solutions tailored to your specific needs,
            delivered with expertise and precision.
          </Paragraph>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-center mb-12">
            Core Services
          </Title>
          <Row gutter={[24, 24]}>
            {mainServices.map((service, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card
                  className="h-full hover:shadow-lg transition-shadow duration-300"
                  actions={[<Button type="link">Learn More</Button>]}
                >
                  <div className="text-center mb-6">
                    {service.icon}
                    <Title level={4} className="mt-4">
                      {service.title}
                    </Title>
                    <Paragraph className="text-gray-600">
                      {service.description}
                    </Paragraph>
                  </div>
                  <ul className="text-gray-600">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <CheckCircleOutlined className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-center mb-12">
            Our Process
          </Title>
          <Steps current={-1} items={processSteps} className="mb-12" />
          <Row gutter={[24, 24]} className="mt-12">
            {processSteps.map((step, index) => (
              <Col xs={24} sm={12} md={8} lg={4.8} key={index}>
                <Card className="h-full text-center">
                  <Badge count={index + 1} className="mb-4">
                    <div className="h-8"></div>
                  </Badge>
                  <Title level={4}>{step.title}</Title>
                  <Paragraph className="text-gray-600">
                    {step.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-center mb-12">
            Industries We Serve
          </Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} md={8}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <EnvironmentOutlined className="text-3xl text-blue-600 mb-4" />
                <Title level={4}>Commercial</Title>
                <Paragraph className="text-gray-600">
                  Office buildings, retail spaces, and commercial complexes
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <DeploymentUnitOutlined className="text-3xl text-blue-600 mb-4" />
                <Title level={4}>Industrial</Title>
                <Paragraph className="text-gray-600">
                  Manufacturing facilities, warehouses, and industrial plants
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <AuditOutlined className="text-3xl text-blue-600 mb-4" />
                <Title level={4}>Infrastructure</Title>
                <Paragraph className="text-gray-600">
                  Bridges, roads, and public infrastructure projects
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-center mb-12">
            Frequently Asked Questions
          </Title>
          <Collapse className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Panel
                header={faq.question}
                key={index}
                extra={<QuestionCircleOutlined />}
              >
                <Paragraph className="text-gray-600">{faq.answer}</Paragraph>
              </Panel>
            ))}
          </Collapse>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Title level={2} className="text-white mb-6">
            Ready to Start Your Project?
          </Title>
          <Paragraph className="text-lg mb-8">
            Contact us today for a free consultation and project assessment
          </Paragraph>
          <Button size="large" className="bg-white">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
