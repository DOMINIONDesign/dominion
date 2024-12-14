import { useState } from "react";
import { Typography, Row, Col, Form, Input, Button, Card } from "antd";
import { toast } from "react-toastify";
import axios from "axios";
import {
  MailOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
  SendOutlined,
} from "@ant-design/icons";
import Contact from "../assets/Contact-Us-2.jpg";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("/user/mail", values);
      console.log("Form submitted successfully", response.data);
      toast.success("Form submitted successfully!!", {
        autoClose: 3000,
      });
      // message.success("Thank you for your message. We will contact you soon!");
      form.resetFields();
    } catch (error) {
      toast.error("Error submitting form", {
        autoClose: 3000,
      });
      // console.error("Error submitting form", error);
      // message.error("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <section className="text-white relative h-80">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <img alt="Contact Us" src={Contact} className="w-full h-full" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Title level={1} className="text-white text-center mb-6 pt-28">
              <span className="text-white font-bold text-5xl">Contact Us</span>
            </Title>
            <Paragraph className="text-center text-xl text-[#FEFEFE] max-w-3xl mx-auto">
              We're here to provide innovative engineering solutions tailored to
              your needs. Get in touch with us to discuss how we can bring your
              vision to life with precision and excellence.
            </Paragraph>
          </div>
        </div>
      </section>

      <section className="pt-16 md:w-[90%] mx-auto">
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
                      123 Engineering Way, <br />
                      Tech City, TC 12345 <br />
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
                      Monday - Friday: 9:00 AM - 6:00 PM <br />
                      Saturday - Sunday: Closed
                    </Text>
                  </div>
                </div>
              </div>
            </Col>

            {/* Contact Form */}
            <Col xs={24} lg={16}>
              <Card className="shadow-lg bg-indigo-300">
                <Title level={3} className="mb-6 !font-bold">
                  Send Us a Message
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
                        label="Name"
                        rules={[
                          { required: true, message: "Please enter your name" },
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
                        name="mobile"
                        label="Phone Number"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your phone number",
                          },
                          {
                            len: 10,
                            message: "Phone number must be 10 digits",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                  </Row>

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

      {/* Google Map Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-16">
            <Title level={2} className="text-center mb-12">
              Find Us
            </Title>
            <div className="h-96 bg-gray-200 rounded-lg w-full overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8368324924766!2d78.4411097!3d17.4004712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb971466381c91%3A0xc855906f2903c236!2sMasab%20Tank%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1702599999999!5m2!1sen!2sin"
                className="w-full h-full rounded-lg border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
