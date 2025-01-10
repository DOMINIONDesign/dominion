import React from "react";
import { Typography, Row, Col } from "antd";
import aboutus from "../assets/cover_001.jpg";
import Mission from "../assets/projects.avif";
import { pageSEO } from "./Seo.config";
import Seo from "./Seo";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div className="bg-black">
      <Seo {...pageSEO.about} />
      {/* Hero Section with Background Image */}
      <section className="main-text relative h-80">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <img src={aboutus} alt="about us" className="w-full h-full opacity-55 object-cover" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Title level={1} className="main-text text-center pt-20">
              <span className="main-text font-extrabold text-3xl md:text-7xl">
                About Dominion
              </span>
            </Title>
            <Paragraph className="text-center text-xl main-text max-w-3xl mx-auto font-semibold">
              Leading the future of engineering with innovation, expertise, and
              sustainable solutions.
            </Paragraph>
          </div>
        </div>
      </section>
      <div className="md:w-[90%] mx-auto">
        {/* Mission & Vision Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-95">
            <Row gutter={[48, 48]} align="top">
              <Col xs={24} md={12}>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={Mission}
                    alt="Mission"
                    className="h-[350px] rounded-lg"
                  />
                </div>
              </Col>
              <Col xs={24} md={12}>
                <Paragraph className="main-text">
                  <span className="text-[#DC143C] text-lg font-bold">
                    Dominion Engineering consultancy Pvt Ltd
                  </span>{" "}
                  combines innovation, expertise, and precision to deliver
                  unparalleled design consultancy solutions across a diverse
                  range of industries. At Dominion, we specialize in
                  comprehensive engineering and design consultancy services.
                  With expertise spanning mechanical, civil, structural,
                  electrical, electronics, automotive, and more, we provide
                  tailored solutions to clients in industrial, commercial, and
                  public sectors.
                </Paragraph>
                <Title level={4} className="!text-white !uppercase">
                  Our Mission
                </Title>
                <Paragraph className="main-text mb-6">
                  To deliver innovative, sustainable, and precise engineering
                  design solutions that empower our clients' success while
                  fostering efficiency, sustainability, and long-term value in
                  every project.
                </Paragraph>
                <Title level={4} className="!text-white !uppercase">
                  Our Vision
                </Title>
                <Paragraph className="main-text">
                  To be the global leader in engineering excellence, driving
                  positive change through innovative solutions and sustainable
                  practices.
                </Paragraph>
              </Col>
            </Row>
          </div>
        </section>

        {/* Our Story Section */}
        {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <Title level={2}>Our Story</Title>
              <Paragraph className="text-lg text-gray-600 mb-4">
                Founded in 2000, Dominion has grown from a small consultancy to
                a leading engineering firm with global reach. Our journey is
                marked by continuous innovation and unwavering commitment to
                excellence.
              </Paragraph>
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
            <Col xs={24} md={12}>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src="https://placehold.co/600x400"
                  alt="Our Story"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section> */}

        {/* Core Values Section */}
        {/* <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Title level={2} className="text-center mb-12">
              Our Core Values
            </Title>
            <Row gutter={[24, 24]}>
              {coreValues.map((value, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <div className="h-full bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/40 group">                    
                    <div className="mb-6 relative">
                      <div className="w-10 h-10 mx-auto bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                        <span className="text-blue-600 text-2xl">
                          {value.icon}
                        </span>
                      </div>
                    </div>

                    
                    <Title
                      level={4}
                      className="mb-4 text-center group-hover:text-blue-600 transition-colors duration-300"
                    >
                      {value.title}
                    </Title>

                    <Paragraph className="text-gray-600 text-center mb-0">
                      {value.description}
                    </Paragraph>


                    <div className="mt-4 w-12 h-1 bg-blue-600 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section> */}

        {/* Team Section */}
        {/* <section className="py-16 ">
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
                      <img
                        alt={member.name}
                        src={`https://placehold.co/300x300/668cff/ffffff?text=${
                          member.name.split(" ")[0]
                        }`}
                        className="h-48 object-cover"
                      />
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
        </section> */}

        {/* Expertise Section */}
        {/* <section className="py-2 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Title level={2} className="text-center mb-20 text-4xl font-bold">
              Our Areas of <span className="text-blue-600">Expertise</span>
            </Title>

            <Row gutter={[32, 48]}>
              <Col xs={24} md={8}>
                <div className="relative group h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                  <div className="relative bg-white p-8 rounded-lg ring-1 ring-gray-100 h-[315px]">
                    <div className="flex items-center mb-8">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
                          <HomeOutlined className="text-2xl text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-5">
                        <Title level={4} className="mb-0">
                          Structural Engineering
                        </Title>
                        <div className="text-blue-600 font-semibold">
                          95% Expertise
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-[95%] bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500"></div>
                      </div>

                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          Structural Analysis & Design
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          Complex Engineering Solutions
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          Innovation in Construction
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={24} md={8}>
                <div className="relative group h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                  <div className="relative bg-white p-8 rounded-lg ring-1 ring-gray-100 h-[315px]">
                    <div className="flex items-center mb-8">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center">
                          <EnvironmentOutlined className="text-2xl text-green-600" />
                        </div>
                      </div>
                      <div className="ml-5">
                        <Title level={4} className="mb-0">
                          Sustainable Design
                        </Title>
                        <div className="text-green-600 font-semibold">
                          90% Expertise
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-[90%] bg-gradient-to-r from-green-600 to-green-400 transition-all duration-500"></div>
                      </div>

                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          Eco-friendly Solutions
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          Green Building Design
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          Sustainable Materials
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={24} md={8}>
                <div className="relative group h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                  <div className="relative bg-white p-8 rounded-lg ring-1 ring-gray-100 h-[315px]">
                    <div className="flex items-center mb-8">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-purple-50 rounded-lg flex items-center justify-center">
                          <AppstoreOutlined className="text-2xl text-purple-600" />
                        </div>
                      </div>
                      <div className="ml-5">
                        <Title level={4} className="mb-0">
                          Project Management
                        </Title>
                        <div className="text-purple-600 font-semibold">
                          98% Expertise
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-[98%] bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-500"></div>
                      </div>

                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                          Project Planning
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                          Resource Management
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                          Quality Assurance
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default AboutUs;
