// src/components/Home.js
import React, { useRef } from "react";
import { Button, Card, Row, Col, Typography, Carousel } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import cover_1 from "../assets/Cover_new1.jpg";
import cover_2 from "../assets/Cover_new2.jpg";
import cover_3 from "../assets/Cover_new3.jpg";
import BIM from "../assets/BIM2.jpg";
import pipelineServices from "../assets/pipeline_services.jpg";
import oilAndGas from "../assets/Oil&GAS.jpg";
import publicInfrastructure from "../assets/infrastructure.jpg";
import EPC from "../assets/EPC.png";
import consultancy from "../assets/consultancy.jpg";
// import BIM_Cover from "../assets/cover2.jpg";
import tower from "../assets/Residential-Tower.jpg";
import Gas from "../assets/GAS_Project.jpg";
import complex from "../assets/complex.jpg";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const Home = () => {
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const heroSlides = [
    {
      title: "Innovation in Design",
      subtitle: "Pushing boundaries with cutting-edge technology",
      bgImage: cover_3,
      bgClass: "",
    },
    {
      title: "Engineering Excellence for Tomorrow",
      subtitle: "Innovative solutions for complex engineering challenges",
      bgImage: cover_1,
      bgClass: "",
    },
    {
      title: "Building Sustainable Future",
      subtitle: "Green engineering solutions for modern challenges",
      bgImage: cover_2,
      bgClass: "",
    },
  ];

  const services = [
    {
      icon: <img src={BIM} className="text-4xl" />,
      title: "Building Information Modeling (BIM)",
      description:
        "Creating and managing digital representations of a building’s physical and functional characteristics. Our BIM designs ensure optimized coordination, improved collaboration, and enhanced visualization for seamless construction project management",
      features: [
        "Project Coordination",
        "3D Visualization",
        "Cost Efficiency",
        "Faster Project Delivery",
        "Sustainable Design",
      ],
    },
    {
      icon: <img src={pipelineServices} className="text-4xl" />,
      title: "Pipeline Design",
      description:
        "Our pipeline design services provide efficient, reliable, and cost-effective solutions for fluid and gas transportation. Using advanced engineering and cutting-edge technology, we ensure pipelines meet safety, regulatory, and performance standards, while optimizing flow, durability, and sustainability.",
      features: [
        "Customizable Design Solutions",
        "Advanced Flow Optimization",
        "Compliance with Safety Standards",
        "Durability and Longevity",
        "Cost-Effective Solutions",
      ],
    },
    {
      icon: <img src={oilAndGas} className="text-4xl" />,
      title: "Oil & Gas Design",
      description:
        "We provide comprehensive engineering and consultancy services for the oil and gas industry, focusing on optimizing exploration, production, and distribution. Our solutions enhance efficiency, reduce costs, and ensure compliance with safety and environmental standards, maximizing asset performance and value.",
      features: [
        "Advanced Technology Integration",
        "Safety and Compliance",
        "Efficiency Enhancement",
        "Asset Management",
        "Risk Management and Mitigation",
      ],
    },
    {
      icon: <img src={publicInfrastructure} className="text-4xl" />,
      title: "Public Infrastructure Design",
      description:
        "We design sustainable and efficient public infrastructure, focusing on roads, bridges, utilities, and urban facilities. Our solutions ensure safety, compliance, and environmental sustainability, improving community connectivity and mobility.",
      features: [
        "Infrastructure Planning and Development",
        "Community and Environmental Impact Focus",
        "Compliance with Safety and Regulatory Standards",
      ],
    },
    {
      icon: <img src={EPC} className="text-4xl" />,
      title: "EPC (Engineering, Procurement, and Construction) Design",
      description:
        "We provide end-to-end EPC solutions, offering integrated engineering, procurement, and construction services. Our focus is on timely, cost-effective delivery, quality execution, and adherence to safety and sustainability standards",
      features: [
        "End-to-End Project Solutions",
        "Timely Delivery",
        "High-Quality Engineering and Construction",
      ],
    },
    {
      icon: <img src={consultancy} className="text-4xl" />,
      title: "Construction Design Consultancy",
      description:
        "Specializing in structural, civil, and architectural designs for residential, commercial, and industrial projects. We deliver accurate blueprints and technical layouts, ensuring successful construction and seamless project execution",
      features: [
        "Project Feasibility Analysis",
        "Collaborative Approach",
        "Advanced Technology",
      ],
    },
  ];

  const projects = [
    {
      image: complex,
      title: "Luxury Residential Complex",
      description:
        "Provided architectural and structural consultancy for a luxury residential complex featuring 200+ apartments.",
      location: "Singapore",
      year: "2023",
    },

    {
      image: Gas,
      title: " Gas Pipeline",
      description:
        "Designed a 200-km natural gas pipeline with advanced flow analysis to ensure optimal transportation efficiency.",
      location: "London, UK",
      year: "2022",
    },
    {
      image: tower,
      title: "MEP Modeling and Coordination Services",
      description:
        "MEP modeling and coordination with Architectural and Structural trade for a NY-based 238,159 SQFT, 18-story residential project.",
      location: "New York, USA",
      year: "2023",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Engineers" },
    { number: "20+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="h-full">
      <section className="relative h-screen group overflow-hidden">
        <div className="relative h-full">
          {/* Carousel Navigation Arrows */}
          <button
            onClick={() => carouselRef.current.prev()}
            className="carousel-navigation absolute left-4 top-1/2 z-20 transform -translate-y-1/2 w-12 h-12 
      flex items-center justify-center bg-white bg-opacity-20 rounded-full 
      transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-opacity-30
      translate-x-[-20px] group-hover:translate-x-0"
            aria-label="Previous slide"
          >
            <LeftOutlined className="text-white text-xl" />
          </button>
          <button
            onClick={() => carouselRef.current.next()}
            className="carousel-navigation absolute right-4 top-1/2 z-20 transform -translate-y-1/2 w-12 h-12 
      flex items-center justify-center bg-white bg-opacity-20 rounded-full 
      transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-opacity-30
      translate-x-[20px] group-hover:translate-x-0"
            aria-label="Next slide"
          >
            <RightOutlined className="text-white text-xl" />
          </button>

          <Carousel
            ref={carouselRef}
            autoplay
            autoplaySpeed={7000}
            effect="fade"
            dots={true}
            className="h-full carousel-container"
          >
            {heroSlides.map((slide, index) => (
              <div key={index} className="h-[90vh]">
                <div className="relative h-full">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={slide.bgImage}
                      alt=""
                      className="w-screen h-screen object-cover animate-kenburns"
                    />
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${slide.bgClass} opacity-20`}
                    />
                  </div>

                  {/* Content */}
                  {/* <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                      <div className="text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate__animated animate__fadeInDown">
                          {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 animate__animated animate__fadeInUp">
                          {slide.subtitle}
                        </p>
                        <div className="animate__animated animate__fadeInUp animate__delay-1s">
                          <Button
                            type="primary"
                            size="large"
                            className="mr-4 hover:scale-105 transition-transform"
                          >
                            <Link to="/services"> Our Services</Link>
                          </Button>
                          <Button
                            size="large"
                            className="hover:scale-105 transition-transform"
                            ghost
                          >
                            <Link to="/contact"> Contact Us</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      

      {/* Services Section */}
      <section className="py-14 " data-aos="fade-down" data-aos-duration="500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-center mb-12">
            <span className="text-black">Our Services</span>
          </Title>
          <Row gutter={[24, 24]}>
            {services.map((service, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card
                  className="bg-white shadow-lg p-2 rounded-xl shadow-blue-200 h-full hover:shadow-lg  transition-shadow duration-300 transform perspective-1000"
                  bordered={false}
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <div className="text-center transform-style-preserve-3d transition-transform duration-300 ease-in-out hover:rotate-y-180">
                    {typeof service.icon === "object" &&
                    service.icon.type === "img" ? (
                      <div className="flex justify-center mb-4">
                        <img
                          src={service.icon.props.src}
                          alt={service.title}
                          className="w-full h-48 object-cover rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                      </div>
                    ) : (
                      <div className="mb-4">{service.icon}</div>
                    )}
                    <Title level={4} className="mt-4 ">
                      {service.title}
                    </Title>
                    <Paragraph className="text-gray-600 mb-4 ml-1 text-start ">
                      {service.description}
                    </Paragraph>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-14 bg-red-300" data-aos="zoom-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-center mb-12">
            Featured Projects
          </Title>
          <Row gutter={[24, 24]}>
            {projects.map((project, index) => (
              <Col xs={24} md={8} key={index}>
                <Card
                  hoverable
                  data-aos="flip-left"
                  data-aos-duration="2000"
                  cover={
                    <div className="h-64 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  }
                  className="h-full"
                >
                  <Card.Meta
                    title={
                      <div className="flex justify-between items-center">
                        <span>{project.title}</span>
                        <span className="text-sm text-gray-500">
                          {project.year}
                        </span>
                      </div>
                    }
                    description={
                      <div>
                        <p className="text-gray-600 mb-2">
                          {project.description}
                        </p>
                        <p className="text-blue-600">{project.location}</p>
                      </div>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
          {/* <div className="text-center mt-12">
            <NavLink
              to="/projects"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              View All Projects
              <svg
                className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </NavLink>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[24, 24]} className="text-center">
            {stats.map((stat, index) => (
              <Col xs={12} md={6} key={index}>
                <Title level={2} className="text-blue-600 mb-2">
                  {stat.number}
                </Title>
                <Paragraph className="text-gray-600">{stat.label}</Paragraph>
              </Col>
            ))}
          </Row>
        </div>
      </section> */}

      {/* Call to Action Section */}
      {/* <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Title level={2} className="text-white mb-6">
            <span className="text-white">Ready to Start Your Project?</span>
          </Title>
          <Paragraph className="text-lg mb-8">
            <span className="text-white">
              Let's work together to bring your engineering vision to life.
            </span>
          </Paragraph>
          <NavLink
            to="/projects"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300"
          >
            Get In Touch
            <svg
              className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </NavLink>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
