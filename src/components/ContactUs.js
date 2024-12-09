// src/components/ContactUs.js
import { useState } from "react";
import {
  Typography,
  Row,
  Col,
  Form,
  Input,
  Button,
  Card,
  Select,
  message,
} from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
  SendOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const ContactUs = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const officeLocations = [
    {
      city: "New York",
      address: "123 Business Avenue, NY 10001",
      phone: "+91 7995952302",
      email: "design@dominionengg.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      city: "London",
      address: "456 Engineering Street, London EC1A 1BB",
      phone: "+44 20 7123 4567",
      email: "design@dominionengg.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      city: "Singapore",
      address: "789 Innovation Road, Singapore 018956",
      phone: "+65 6789 0123",
      email: "design@dominionengg.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
  ];

  const onFinish = (values) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Form values:", values);
      message.success("Thank you for your message. We will contact you soon!");
      form.resetFields();
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Title level={1} className="text-white mb-6">
            Contact Us
          </Title>
          <Paragraph className="text-lg text-gray-100 max-w-3xl mx-auto">
            Get in touch with our team of experts for any inquiries about our
            engineering services and solutions.
          </Paragraph>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[48, 48]}>
            {/* Contact Information */}
            <Col xs={24} lg={8}>
              <div className="mb-8">
                <Title level={3}>Get in Touch</Title>
                <Paragraph className="text-gray-600">
                  We're here to help and answer any question you might have. We
                  look forward to hearing from you.
                </Paragraph>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <PhoneOutlined className="text-blue-600 text-xl mt-1 mr-4" />
                  <div>
                    <Text strong className="block">
                      Phone
                    </Text>
                    <Text className="text-gray-600">+91 7995952302</Text>
                  </div>
                </div>

                <div className="flex items-start">
                  <MailOutlined className="text-blue-600 text-xl mt-1 mr-4" />
                  <div>
                    <Text strong className="block">
                      Email
                    </Text>
                    <Text className="text-gray-600">
                      design@dominionengg.com
                    </Text>
                  </div>
                </div>

                <div className="flex items-start">
                  <GlobalOutlined className="text-blue-600 text-xl mt-1 mr-4" />
                  <div>
                    <Text strong className="block">
                      Global Headquarters
                    </Text>
                    <Text className="text-gray-600">
                      123 Engineering Way,
                      <br />
                      Tech City, TC 12345
                      <br />
                      United States
                    </Text>
                  </div>
                </div>

                <div className="flex items-start">
                  <ClockCircleOutlined className="text-blue-600 text-xl mt-1 mr-4" />
                  <div>
                    <Text strong className="block">
                      Business Hours
                    </Text>
                    <Text className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </Text>
                  </div>
                </div>
              </div>
            </Col>

            {/* Contact Form */}
            <Col xs={24} lg={16}>
              <Card className="shadow-lg">
                <Title level={3} className="mb-6">
                  Send Us a Message
                </Title>
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  requiredMark={false}
                >
                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="firstName"
                        label="First Name"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your first name",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="lastName"
                        label="Last Name"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your last name",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col xs={24} md={12}>
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
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your phone number",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="subject"
                    label="Subject"
                    rules={[
                      { required: true, message: "Please select a subject" },
                    ]}
                  >
                    <Select size="large">
                      <Option value="general">General Inquiry</Option>
                      <Option value="services">Services Information</Option>
                      <Option value="quote">Request a Quote</Option>
                      <Option value="support">Technical Support</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label="Message"
                    rules={[
                      { required: true, message: "Please enter your message" },
                    ]}
                  >
                    <TextArea rows={6} />
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
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-center mb-12">
            Our Global Offices
          </Title>
          <Row gutter={[24, 24]}>
            {officeLocations.map((office, index) => (
              <Col xs={24} md={8} key={index}>
                <Card
                  className="h-full hover:shadow-lg transition-shadow duration-300"
                  title={
                    <div className="flex items-center">
                      <EnvironmentOutlined className="text-blue-600 mr-2" />
                      <span>{office.city}</span>
                    </div>
                  }
                >
                  <div className="space-y-4">
                    <div>
                      <Text strong className="block">
                        Address:
                      </Text>
                      <Text className="text-gray-600">{office.address}</Text>
                    </div>
                    <div>
                      <Text strong className="block">
                        Phone:
                      </Text>
                      <Text className="text-gray-600">{office.phone}</Text>
                    </div>
                    <div>
                      <Text strong className="block">
                        Email:
                      </Text>
                      <Text className="text-gray-600">{office.email}</Text>
                    </div>
                    <div>
                      <Text strong className="block">
                        Hours:
                      </Text>
                      <Text className="text-gray-600">{office.hours}</Text>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-center mb-12">
            Find Us
          </Title>
          <div className="h-96 bg-gray-200 rounded-lg">
            {/* Replace this div with actual map integration */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Map Integration
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
