import React, { useState } from "react";
import { Typography, Row, Col, Card, Button } from "antd";
import {
  BuildOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import projectsImg from "../assets/about_us7.jpg";
import Office from "../assets/office_complex.avif";
import Gas from "../assets/Gas_project1.webp";
import Highway from "../assets/Highway_project.avif";
import Manufacturing from "../assets/Manufactoting_project.jpg";
import { Link } from "react-router-dom";
const { Title, Paragraph } = Typography;
// const { TabPane } = Tabs;

export default function Projects() {
  // Project categories for filtering
  const categories = [
    "All",
    "Infrastructure",
    "Oil & Gas",
    "Construction",
    "Industrial",
    "Commercial",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // Project data
  const projects = [
    {
      id: 1,
      title: "Modern Office Complex",
      category: "Commercial",
      location: "Dubai, UAE",
      image: Office,
      description:
        "State-of-the-art office complex with sustainable design features",
      features: [
        "LEED Certified Design",
        "Smart Building Systems",
        "Energy Efficient",
        "Modern Architecture",
      ],
      completion: "2023",
    },
    {
      id: 2,
      title: "Gas Processing Facility",
      category: "Oil & Gas",
      location: "Abu Dhabi, UAE",
      image: Gas,
      description:
        "Advanced gas processing facility with cutting-edge technology",
      features: [
        "High-Tech Processing Units",
        "Safety Systems",
        "Environmental Controls",
        "Automated Operations",
      ],
      completion: "2022",
    },
    {
      id: 3,
      title: "Highway Infrastructure",
      category: "Infrastructure",
      location: "Saudi Arabia",
      image: Highway,
      description: "Major highway development with modern infrastructure",
      features: [
        "Smart Traffic Systems",
        "Bridge Construction",
        "Safety Features",
        "Environmental Integration",
      ],
      completion: "2023",
    },
    {
      id: 4,
      title: "Manufacturing Plant",
      category: "Industrial",
      location: "Oman",
      image: Manufacturing,
      description: "Large-scale manufacturing facility with modern amenities",
      features: [
        "Automated Systems",
        "Quality Control Labs",
        "Warehouse Facility",
        "Environmental Controls",
      ],
      completion: "2022",
    },
    // Add more projects as needed
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="text-white relative h-80">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <img alt="about us" src={projectsImg} className="w-full h-full" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Title level={1} className="!text-white text-center pt-20">
              Our Featured Projects
            </Title>
            <Paragraph className="text-blue-100 text-lg mb-8">
              Explore our portfolio of successful projects across various
              sectors, showcasing our expertise and commitment to excellence.
            </Paragraph>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <div className="py-8 bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                type={activeCategory === category ? "primary" : "default"}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Row gutter={[32, 32]}>
            {filteredProjects.map((project) => (
              <Col xs={24} sm={12} lg={8} key={project.id}>
                <Card
                  hoverable
                  className="h-full hover:shadow-xl transition-all duration-300"
                  cover={
                    <div className="relative h-64">
                      <img
                        alt={project.title}
                        src={project.image}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full">
                        {project.category}
                      </div>
                    </div>
                  }
                >
                  <div className="mb-4">
                    <Title level={4} className="mb-2">
                      {project.title}
                    </Title>
                    <div className="flex items-center text-gray-600 mb-4">
                      <GlobalOutlined className="mr-2" />
                      {project.location}
                    </div>
                    <Paragraph className="text-gray-600">
                      {project.description}
                    </Paragraph>
                  </div>

                  <div className="space-y-2">
                    {project.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <CheckCircleOutlined className="text-blue-600 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        Completed: {project.completion}
                      </span>
                      <Button type="primary" className="bg-blue-600">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Project Statistics */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4">
          <Row gutter={[32, 32]} className="text-center">
            {[
              {
                number: "150+",
                label: "Projects Completed",
                icon: <BuildOutlined className="text-4xl mb-4" />,
              },
              {
                number: "15+",
                label: "Countries Served",
                icon: <GlobalOutlined className="text-4xl mb-4" />,
              },
              {
                number: "20+",
                label: "Years Experience",
                icon: <CheckCircleOutlined className="text-4xl mb-4" />,
              },
            ].map((stat, index) => (
              <Col xs={24} md={8} key={index}>
                <Card className="h-full bg-white/10 border-0">
                  <div className="text-white">
                    {stat.icon}
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-lg">{stat.label}</div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Title level={2} className="mb-6">
            Ready to Start Your Project?
          </Title>
          <Paragraph className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Our team of
            experts is ready to help you achieve your goals.
          </Paragraph>

          <Link to="/contact">
            <Button
              type="primary"
              size="large"
              className="bg-blue-600 px-8 h-12 text-lg"
            >
              Contact Us Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
