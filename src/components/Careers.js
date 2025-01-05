import { useState } from "react";
import {
  Typography,
  Row,
  Col,
  Form,
  Input,
  Button,
  Card,
  Upload,
  Select,
  InputNumber,
} from "antd";
import { toast } from "react-toastify";
import axios from "axios";
import {
  SendOutlined,
  TeamOutlined,
  EnvironmentOutlined,
  BulbOutlined,
  UploadOutlined,
  DollarOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import Contact from "../assets/careers_title.jpeg";
import Seo from "./Seo";
import { pageSEO } from "./Seo.config";
const { Title, Paragraph, Text } = Typography;
const Careers = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [form] = Form.useForm();

  const handleFileChange = ({ fileList }) => {
    setFile(fileList && fileList[0] ? fileList[0].originFileObj : null);
  };
  const onFinish = async (values) => {
    setLoading(true);
    const formData = new FormData();
    try {
      console.log(values);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("position", values.position);
      formData.append("experience", values.experience);

      if (file) {
        formData.append("resume", file);
      }

      const response = await axios.post(
        "/user/careers",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Form submitted successfully", response.data);
      toast.success("Form submitted successfully!", {
        autoClose: 3000,
      });
      form.resetFields();
      setFile(null);
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Error submitting form", {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-primary">
      <Seo {...pageSEO.contact} />
      <section className="text-white relative h-80">
        <div className="absolute inset-0 opacity-50"></div>
        <div className="absolute inset-0">
          <img
            alt="Contact Us"
            src={Contact}
            className="w-full h-full opacity-50"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Title level={1} className="!text-white text-center mb-6 pt-28">
              <span className="!text-white font-bold text-5xl">
                Join Our Team
              </span>
            </Title>
            <Paragraph className="text-center text-xl text-[#FEFEFE] max-w-3xl mx-auto">
              Explore exciting opportunities to be part of a dynamic team
              delivering cutting-edge engineering solutions. Together, we shape
              the future with innovation and expertise.
            </Paragraph>
          </div>
        </div>
      </section>
      <section className="py-16 md:w-[90%] mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[48, 48]}>
            <Col xs={24} lg={8}>
              <div className="mb-8">
                <Title level={3} className="!text-white">
                  Join Our Team
                </Title>
                <Paragraph className="main-text">
                  We're always looking for talented individuals who are
                  passionate about engineering and innovation. Join us in
                  shaping the future of industrial solutions.
                </Paragraph>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <TeamOutlined className="text-white text-xl mt-1 mr-4" />
                  <div className="text-white group">
                    <Text strong className="block text-white">
                      Current Openings
                    </Text>
                    <Text className="text-gray-300">
                      Software Engineers
                      <br />
                      Mechanical Engineers
                      <br />
                      Project Managers
                    </Text>
                  </div>
                </div>
                <div className="flex items-start">
                  <EnvironmentOutlined className="text-white text-xl mt-1 mr-4" />
                  <div>
                    <Text strong className="block text-white">
                      Location
                    </Text>
                    <Text className="text-gray-300">
                      Madhu Enclave 4th floor, Masab Tank, Hyderabad, Telangana-
                      500028
                    </Text>
                  </div>
                </div>
                <div className="flex items-start">
                  <BulbOutlined className="text-white text-xl mt-1 mr-4" />
                  <div className="space-y-4">
                    <Text strong className="block text-white text-xl mb-4">
                      Why Join Us?
                    </Text>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <BulbOutlined className="text-blue-400 text-lg mt-1 mr-3" />
                        <div>
                          <Text strong className="block text-white">
                            Innovation & Impact
                          </Text>
                          <Text className="text-gray-300">
                            Work on cutting-edge projects that shape the future
                            of industrial engineering
                          </Text>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <HeartOutlined className="text-blue-400 text-lg mt-1 mr-3" />
                        <div>
                          <Text strong className="block text-white">
                            Work-Life Balance
                          </Text>
                          <Text className="text-gray-300">
                            Flexible work arrangements, wellness programs, and
                            paid time off
                          </Text>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <TeamOutlined className="text-blue-400 text-lg mt-1 mr-3" />
                        <div>
                          <Text strong className="block text-white">
                            Collaborative Culture
                          </Text>
                          <Text className="text-gray-300">
                            Join a diverse team of experts committed to
                            excellence and innovation
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <DollarOutlined className="text-blue-400 text-lg mt-1 mr-3" />
                        <div>
                          <Text strong className="block text-white">
                            Competitive Compensation
                          </Text>
                          <Text className="text-gray-300">
                            Industry-leading salary packages with performance
                            bonuses and comprehensive benefits
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={16}>
              <Card className="shadow-lg bg-gray-400">
                <Title level={3} className="mb-6 !font-bold">
                  Apply Now
                </Title>
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  requiredMark={false}
                  className="!font-semibold"
                >
                  <Row gutter={16}>
                    <Col xs={24} md={24}>
                      <Form.Item
                        name="name"
                        label="Full Name"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your full name",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={24}>
                      <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your email",
                          },
                          {
                            type: "email",
                            message: "Please enter a valid email",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                    name="position"
                    label="Position Applied For"
                    rules={[
                      { required: true, message: "Please select a position" },
                    ]}
                  >
                    <Select size="large">
                      <Select.Option value="software-engineer">
                        Software Engineer
                      </Select.Option>
                      <Select.Option value="mechanical-engineer">
                        Mechanical Engineer
                      </Select.Option>
                      <Select.Option value="project-manager">
                        Project Manager
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="experience"
                    label="Years of Experience"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your years of experience",
                      },
                    ]}
                  >
                    <InputNumber
                      size="large"
                      min={0}
                      max={50}
                      className="w-full"
                    />
                  </Form.Item>
                  <Form.Item
                    name="resume"
                    label="Upload Resume"
                    rules={[
                      { required: true, message: "Please upload your resume" },
                    ]}
                  >
                    <Upload
                      accept=".pdf,.docx"
                      beforeUpload={() => false}
                      onChange={handleFileChange}
                      maxCount={1}
                    >
                      <Button icon={<UploadOutlined />}>Select File</Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      size="large"
                      htmlType="submit"
                      loading={loading}
                      icon={<SendOutlined />}
                      className="w-full md:w-auto"
                    >
                      Submit Application
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Careers;
