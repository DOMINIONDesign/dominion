// src/components/AboutUs.js
import { Typography, Row, Col, Card, Progress, Timeline } from "antd";
import {
  TeamOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  const coreValues = [
    {
      icon: <CheckCircleOutlined className="text-3xl text-blue-600" />,
      title: "Excellence",
      description:
        "Committed to delivering the highest quality in every project",
    },
    {
      icon: <TeamOutlined className="text-3xl text-blue-600" />,
      title: "Collaboration",
      description: "Working together to achieve exceptional results",
    },
    {
      icon: <RocketOutlined className="text-3xl text-blue-600" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge solutions",
    },
    {
      icon: <GlobalOutlined className="text-3xl text-blue-600" />,
      title: "Sustainability",
      description: "Creating environmentally responsible engineering solutions",
    },
  ];

  const teamMembers = [
    {
      name: "John Smith",
      position: "Chief Executive Officer",
      image: "/team1.jpg",
      description: "20+ years of engineering leadership experience",
    },
    {
      name: "Sarah Johnson",
      position: "Technical Director",
      image: "/team2.jpg",
      description: "Expert in structural engineering and innovation",
    },
    {
      name: "Michael Chen",
      position: "Project Manager",
      image: "/team3.jpg",
      description: "Specialized in large-scale infrastructure projects",
    },
    {
      name: "Emily Brown",
      position: "Head of Design",
      image: "/team4.jpg",
      description: "Award-winning architectural engineer",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={1} className="text-white text-center mb-6">
            <span className="text-white">About Dominion</span>
          </Title>
          <Paragraph
            data-aos="fade-right"
            className="text-center text-lg text-gray-100 max-w-3xl mx-auto"
          >
            Leading the future of engineering with innovation, expertise, and
            sustainable solutions. For over two decades, we've been transforming
            ideas into reality.
          </Paragraph>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <Title level={2}>Our Story</Title>
              <Paragraph className="text-lg text-gray-600 mb-4">
                Founded in 2000, EngineerCo has grown from a small consultancy
                to a leading engineering firm with global reach. Our journey is
                marked by continuous innovation and unwavering commitment to
                excellence.
              </Paragraph>
              <Paragraph className="text-lg text-gray-600">
                Today, we're proud to be at the forefront of engineering
                innovation, tackling complex challenges and delivering
                sustainable solutions that shape the future.
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <Timeline mode="alternate">
                <Timeline.Item>Founded in 2000</Timeline.Item>
                <Timeline.Item>
                  First major project completion in 2005
                </Timeline.Item>
                <Timeline.Item>International expansion in 2010</Timeline.Item>
                <Timeline.Item>
                  Innovation Center launched in 2015
                </Timeline.Item>
                <Timeline.Item>Sustainability Initiative 2020</Timeline.Item>
                <Timeline.Item>Global Recognition 2023</Timeline.Item>
              </Timeline>
            </Col>
          </Row>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-center mb-12">
            Our Core Values
          </Title>
          <Row gutter={[24, 24]}>
            {coreValues.map((value, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">{value.icon}</div>
                  <Title level={4}>{value.title}</Title>
                  <Paragraph className="text-gray-600">
                    {value.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-center mb-12">
            Our Leadership Team
          </Title>
          <Row gutter={[24, 24]}>
            {teamMembers.map((member, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card
                  hoverable
                  cover={
                    <div className="h-48 bg-gray-200">
                      {/* Replace with actual images */}
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        Profile Photo
                      </div>
                    </div>
                  }
                  className="text-center"
                >
                  <Title level={4}>{member.name}</Title>
                  <Title level={5} className="text-blue-600">
                    {member.position}
                  </Title>
                  <Paragraph className="text-gray-600">
                    {member.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[32, 32]} className="text-center">
            <Col xs={12} md={6}>
              <Title level={1} className="text-white mb-2">
                20+
              </Title>
              <Paragraph className="text-lg">Years Experience</Paragraph>
            </Col>
            <Col xs={12} md={6}>
              <Title level={1} className="text-white mb-2">
                500+
              </Title>
              <Paragraph className="text-lg">Projects Completed</Paragraph>
            </Col>
            <Col xs={12} md={6}>
              <Title level={1} className="text-white mb-2">
                100+
              </Title>
              <Paragraph className="text-lg">Expert Engineers</Paragraph>
            </Col>
            <Col xs={12} md={6}>
              <Title level={1} className="text-white mb-2">
                30+
              </Title>
              <Paragraph className="text-lg">Countries Served</Paragraph>
            </Col>
          </Row>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-center mb-12">
            Our Expertise
          </Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card className="h-full">
                <Title level={4}>Structural Engineering</Title>
                <Progress percent={95} />
                <Paragraph className="mt-4">
                  Industry-leading expertise in structural analysis and design
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="h-full">
                <Title level={4}>Sustainable Design</Title>
                <Progress percent={90} />
                <Paragraph className="mt-4">
                  Innovative green building solutions
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="h-full">
                <Title level={4}>Project Management</Title>
                <Progress percent={98} />
                <Paragraph className="mt-4">
                  Efficient and effective project delivery
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
