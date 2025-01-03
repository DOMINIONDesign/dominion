// src/components/Home.js
import React, { useRef } from "react";
import { Card, Row, Col, Typography, Carousel, Button, Collapse } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Seo from "../components/Seo";
// import offerImage from "../assets/BIM Title image.jpg";
import why from "../assets/why.webp";
import why1 from "../assets/why1.jpg";
import why2 from "../assets/why2.webp";
import why3 from "../assets/why3.png";
import { pageSEO } from "../components/Seo.config";
import cover_1 from "../assets/Cover_new1.jpg";
import cover_2 from "../assets/Cover_new2.jpg";
import cover_3 from "../assets/Cover_new3.jpg";
import BIM from "../assets/BIM.jpg";
import pipelineServices from "../assets/pipes.webp";
import office from "../assets/Office (1).webp";
import oilAndGas from "../assets/oil n gas 2.jpg";
import publicInfrastructure from "../assets/infrastructure.jpg";
import EPC from "../assets/civil.jpg";
import consultancy from "../assets/construction.jpg";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;
// const { Panel } = Collapse;

const Home = () => {
  const carouselRef = useRef(null);

  const heroSlides = [
    {
      title: "Engineering Excellence for Tomorrow",
      subtitle: "Innovative solutions for complex engineering challenges",
      bgImage: cover_1,
      bgClass: "",
    },
    {
      title: "Innovation in Design",
      subtitle: "Pushing boundaries with cutting-edge technology",
      bgImage: cover_3,
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
      icon: <img src={BIM} alt="BIM" className="text-4xl" />,
      title: "BIM",
      link: "/services/bim",
      description:
        "We help our customers with BIM, provide solutions for optimized coordination, collaboration, and visualization.",
      features: [
        "Project Coordination",
        "3D Visualization",
        "Cost Efficiency",
        "Faster Project Delivery",
        "Sustainable Design",
      ],
    },
    {
      icon: <img alt="BIM" src={pipelineServices} className="text-4xl" />,
      title: "Pipeline",
      link: "/services/pipeline",
      description:
        "We deliver efficient, reliable, and sustainable pipeline designs that optimize flow and meet all safety and regulatory standards.",
      features: [
        "Customizable Design Solutions",
        "Advanced Flow Optimization",
        "Compliance with Safety Standards",
        "Durability and Longevity",
        "Cost-Effective Solutions",
      ],
    },
    {
      icon: <img alt="BIM" src={oilAndGas} className="text-4xl" />,
      title: "Oil & Gas",
      link: "/services/oilandgas",
      description:
        "We provide engineering and consultancy for oil and gas, optimizing efficiency and ensuring safety.",
      features: [
        "Advanced Technology Integration",
        "Safety and Compliance",
        "Efficiency Enhancement",
        "Asset Management",
        "Risk Management and Mitigation",
      ],
    },
    {
      icon: <img alt="BIM" src={publicInfrastructure} className="text-4xl" />,
      title: "Public Infrastructure",
      link: "/services/infrastructure",
      description:
        "We design sustainable infrastructure, enhancing connectivity, safety, and environmental compliance.",
      features: [
        "Infrastructure Planning and Development",
        "Community and Environmental Impact Focus",
        "Compliance with Safety and Regulatory Standards",
      ],
    },
    {
      icon: <img alt="BIM" src={EPC} className="text-4xl" />,
      title: "EPC",
      link: "/services/epc",
      description:
        "We offer end-to-end EPC solutions, delivering integrated services with a focus on cost-effectiveness, quality, and safety.",
      features: [
        "End-to-End Project Solutions",
        "Timely Delivery",
        "High-Quality Engineering and Construction",
      ],
    },
    {
      icon: <img alt="BIM" src={consultancy} className="text-4xl" />,
      title: "Construction Design",
      link: "/services/construction",
      description:
        "We specialize in structural, civil, and architectural designs, delivering precise blueprints for all project types",
      features: [
        "Project Feasibility Analysis",
        "Collaborative Approach",
        "Advanced Technology",
      ],
    },
  ];

  const items = [
    {
      key: "1",
      label: "What services does DOMINION offer?",
      children: (
        <p className="main-text text-md">
          Dominion provides expert engineering and design consultancy across EPC
          engineering, pipelines, oil & gas, BIM, public infrastructure, and
          construction, focusing solely on creating innovative and sustainable
          design solutions without on-field work or labor.
        </p>
      ),
    },
    {
      key: "2",
      label:
        "What is the process for hiring DOMINION as an engineering consultant?",
      children: (
        <p className="main-text">
          Reach out via email at{" "}
          <a
            href="mailto:design@dominionengg.com"
            className="text-blue-500 hover:underline"
          >
            design@dominionengg.com
          </a>{" "}
          to share your project details, requirements, and objectives.
        </p>
      ),
    },
  ];
  return (
    <>
      <Seo {...pageSEO.home} />
      <div className="h-full w-full md:relative bg-primary">
        <section className="relative h-screen group overflow-hidden">
          <div className="relative h-full">
            <button
              onClick={() => carouselRef.current.prev()}
              className="carousel-navigation absolute left-4 top-1/2 z-20 transform -translate-y-1/2 w-12 h-12 
      flex items-center justify-center bg-white bg-opacity-20 rounded-full 
      transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-opacity-30
      translate-x-[-20px] group-hover:translate-x-0 sm:w-10  sm:h-10"
              aria-label="Previous slide"
            >
              <LeftOutlined className="text-white text-xl" />
            </button>
            <button
              onClick={() => carouselRef.current.next()}
              className="carousel-navigation absolute right-4 top-1/2 z-20 transform -translate-y-1/2 w-12 h-12 
      flex items-center justify-center bg-white bg-opacity-20 rounded-full 
      transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-opacity-30
      translate-x-[20px] group-hover:translate-x-0 sm:w-10 sm:h-10"
              aria-label="Next slide"
            >
              <RightOutlined className="text-white text-xl" />
            </button>
            <div className="absolute inset-0 flex justify-start  items-center z-10 max-md:pl-6 px-24">
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50 pointer-events-none"></div>
              <div className="relative max-w-2xl sm:!w-full z-10">
                <h4 className="!text-white mb-6 max-md:!text-2xl md:!text-5xl !font-bold">
                  WHERE DESIGN MEETS ENGINEERING MASTERY
                </h4>
                <div className="flex pt-5">
                  <Link to="/services">
                    <button className="px-8 py-3 bg-blue-700 text-white rounded-md hover:bg-white hover:text-blue-600 transition-all duration-300 transform">
                      Services
                    </button>
                  </Link>
                  <Link to="/contact" className="md:pl-10 max-md:pl-3">
                    <button className="px-8 w-36 py-3 bg-[#DC143C] text-white rounded-md hover:bg-white hover:text-blue-600 transition-all duration-300 transform">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>

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
                    <div className="absolute inset-0">
                      <img
                        src={slide.bgImage}
                        alt=""
                        className="w-screen h-screen object-cover animate-kenburns"
                      />

                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${slide.bgClass} opacity-20`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
        <div className="md:w-[90%] bg-black mx-auto max-md:w-full mt-10">
          <section className="py-14">
            <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div
                  data-aos-duration="2000"
                  data-aos={window.innerWidth >= 768 ? "fade-left" : undefined}
                >
                  <Title level={2} className="mb-6 !text-white">
                    <span className="font-bold">Welcome</span>
                    <span className="font-bold"> To </span>
                    <span className=" text-[#DC143C]  font-bold !uppercase">
                      Dominion
                    </span>
                    <span className="text-[#DC143C]  font-bold !uppercase">
                      {" "}
                      Engineering
                    </span>
                  </Title>
                  <Paragraph className="main-text text-lg leading-8 mb-4">
                    At <strong>Dominion Engineering consultancy Pvt Ltd</strong>
                    , we pride ourselves on delivering innovative and reliable
                    engineering solutions. With a team of highly skilled
                    professionals and a passion for excellence, we provide
                    tailored expertise across a range of disciplines, ensuring
                    every project is executed with precision and efficiency.
                  </Paragraph>
                  <Paragraph className="main-text text-lg leading-8">
                    With a strong foundation in multi-disciplinary engineering—
                    including electrical, mechanical, civil, process, and
                    architectural domains—we stand as a trusted partner for
                    organizations seeking innovative approaches to complex
                    challenges.
                  </Paragraph>
                  <Link to="/about">
                    <Button className="w-full h-10" type="primary">
                      About Us
                    </Button>
                  </Link>
                </div>
                <div
                  data-aos={window.innerWidth >= 768 ? "fade-right" : undefined}
                  data-aos-duration="2000"
                >
                  <img
                    src={office}
                    alt="Dominion Office"
                    className="rounded-lg shadow-lg shadow-gray-800 h-96 w-full"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="py-10 rounded-xl md:w-[95%] md:mx-auto max-md:w-full max-md:p-4">
            <div className="w-full">
              <Title
                level={2}
                className="max-w-7xl mb-12 pt-5 md:w-[95%]"
                data-aos={window.innerWidth >= 768 ? "fade-left" : undefined}
                data-aos-duration="500"
              >
                <div className="main-text pl-2 max-md:pl-0 font-bold !uppercase">
                  Why Choose Dominion Engineering Consultancy ?
                </div>
              </Title>
            </div>
            <div className="w-full">
              <hr
                data-aos={window.innerWidth >= 768 ? "fade-left" : undefined}
                data-aos-duration="500"
                className="px-4 pb-2 max-md:!mx-0 md:w-[99%]"
              />
            </div>
            <div className="my-20">
              <div className="flex flex-col md:flex-row items-start mt-6 gap-16">
                <div className="md:w-1/2">
                  <img
                    src={why}
                    alt="OfferImage"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="md:w-1/2 pl-0 md:pl-6">
                  <div className="pb-2">
                    <Title className="!text-2xl !text-white pb-4">
                      Specialized Expertise Across Multiple Industries
                    </Title>
                    <Paragraph className="text-2 !text-gray-300">
                      <ul className="list-disc pl-6">
                        <li>
                          Proficient in EPC engineering, pipelines, oil & gas,
                          BIM, public infrastructure, and construction design.
                        </li>
                        <li>
                          Industry-specific knowledge ensures solutions are
                          practical, innovative, and efficient.
                        </li>
                        <li>
                          We focus solely on engineering and design consultancy,
                          leaving execution and fieldwork to contractors.
                        </li>
                        <li>
                          Detailed designs, layouts, and plans tailored to
                          enable seamless project implementation.
                        </li>
                      </ul>
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-20">
              <div className="flex flex-col md:flex-row items-start mt-6 gap-16">
                <div className="md:w-1/2 pl-0 md:pl-6">
                  <div className="pb-2">
                    <Title className="!text-2xl !text-white pb-4">
                      Experienced Professionals
                    </Title>
                    <Paragraph className="text-2 !text-gray-300">
                      <ul className="list-disc pl-6">
                        <li>
                          A team of highly skilled engineers, architects, and
                          consultants with expertise across various disciplines.
                        </li>
                        <li>
                          Continuous upskilling to stay ahead of emerging trends
                          and technologies.
                        </li>
                      </ul>
                    </Paragraph>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={why1}
                    alt="OfferImage"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="my-20">
              <div className="flex flex-col md:flex-row items-start mt-6 gap-16">
                <div className="md:w-1/2">
                  <img
                    src={why2}
                    alt="OfferImage"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="md:w-1/2 pl-0 md:pl-6">
                  <div className="pb-2">
                    <Title className="!text-2xl !text-white pb-4">
                      Sustainability and Innovation
                    </Title>
                    <Paragraph className="text-2 !text-gray-300">
                      <ul className="list-disc pl-6">
                        <li>
                          From concept development to detailed designs, Dominion
                          offers end-to-end support.
                          <ul>
                            <li>
                              Structural analysis and detailed engineering
                              layouts.
                            </li>
                            <li>
                              Feasibility studies and design validation for
                              maximum project efficiency.
                            </li>
                            <li>
                              Ongoing technical support during project
                              implementation.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div className="flex flex-col md:flex-row items-start mt-6 gap-16">
                <div className="md:w-1/2 pl-0 md:pl-6">
                  <div className="pb-2">
                    <Title className="!text-2xl !text-white pb-4">
                      Focus on Quality and Precision
                    </Title>
                    <Paragraph className="text-2 !text-gray-300">
                      <ul className="list-disc pl-6">
                        <li>
                          Delivering designs that prioritize safety, accuracy,
                          and compliance with global standards.
                        </li>
                        <li>
                          Rigorous quality assurance processes to ensure all
                          outputs exceed expectations.
                        </li>
                      </ul>
                    </Paragraph>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={why3}
                    alt="OfferImage"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="pb-10 rounded-xl md:w-[95%] md:mx-auto max-md:w-full">
            <div className="w-full">
              <Title
                level={2}
                className="max-w-7xl mb-12 pt-5 md:w-[95%]"
                data-aos={window.innerWidth >= 768 ? "fade-left" : undefined}
                data-aos-duration="500"
              >
                <span className="main-text pl-2 font-bold">Our Services</span>
              </Title>
            </div>
            <div className="w-full">
              <hr
                data-aos={window.innerWidth >= 768 ? "fade-left" : undefined}
                data-aos-duration="500"
                className="p-4 max-md:!mx-3 md:w-[99%]"
              />
            </div>
            <div className="max-w-7xl">
              <Row gutter={[24, 24]} style={{ marginLeft: 0, marginRight: 0 }}>
                {services.map((service, index) => (
                  <Col xs={24} sm={12} lg={8} key={index}>
                    <Link to={service.link}>
                      <Card
                        className="custom-card shadow-lg rounded-s-3xl cursor-pointer shadow-blue-200 h-full hover:shadow-lg transition-shadow duration-300 transform perspective-1000"
                        bordered={false}
                        data-aos="flip-left"
                        data-aos-duration="1000"
                      >
                        <div className="relative text-center transform-style-preserve-3d transition-transform duration-300 ease-in-out hover:rotate-y-180">
                          <div className="relative">
                            <img
                              src={service.icon.props.src}
                              alt={service.title}
                              className="w-full h-72 object-cover rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                            <div className="absolute inset-0 flex flex-col items-start justify-end bg-black bg-opacity-65 hover:bg-opacity-45 rounded-md px-4 pb-4">
                              <p className="text-[#70eee8] font-bold text-lg mb-2 text-left">
                                {service.title}
                              </p>
                              <p className="text-white text-md font-semibold text-left">
                                {service.description}
                              </p>
                              <p className="text-[#8cd521] text-md font-bold text-left">
                                Readmore
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </section>
          <section className="pb-10 rounded-xl md:w-[95%] md:mx-auto max-md:w-full max-md:px-4">
            <div className="w-full">
              <Title
                level={2}
                className="max-w-7xl mb-12 pt-5 md:w-[95%]"
                data-aos={window.innerWidth >= 768 ? "fade-left" : undefined}
                data-aos-duration="500"
              >
                <div className="main-text pl-2 max-md:pl-0 font-bold ">
                  Frequently Asked Questions
                </div>
              </Title>
            </div>
            <div className="w-full">
              <hr
                data-aos={window.innerWidth >= 768 ? "fade-left" : undefined}
                data-aos-duration="500"
                className="px-4 pb-2 max-md:!mx-0 md:w-[99%]"
              />
              <div
                className="main-text pb-10 pt-2 md:w-[99%]"
                data-aos={window.innerWidth >= 768 ? "fade-left" : undefined}
                data-aos-duration="500"
              >
                Please reach us at{" "}
                <a
                  href="mailto:design@dominionengg.com"
                  className="text-blue-500 hover:underline"
                >
                  design@dominionengg.com
                </a>{" "}
                if you cannot find an answer to your question.
              </div>
            </div>
            <div className="flex justify-center !text-white">
              <div>
                <div
                  className="w-8/12 max-md:w-full"
                  data-aos-duration="2000"
                  data-aos={window.innerWidth >= 768 ? "fade-left" : "fade-up"}
                >
                  <Collapse items={items} ghost expandIconPosition="right" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
