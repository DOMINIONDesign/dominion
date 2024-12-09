// src/components/Footer.js
import { Layout, Row, Col, Typography, Input, Button, Divider } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Row gutter={[32, 32]}>
          {/* Company Info */}
          <Col xs={24} sm={24} md={8} lg={8}>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-blue-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DN</span>
                </div>
                <span className="ml-2 text-xl font-bold text-white">
                  Dominion
                </span>
              </div>
              <Paragraph className="text-gray-400 mb-4">
                Leading the way in innovative engineering solutions with over two
                decades of excellence in structural design and consulting.
              </Paragraph>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500 text-xl">
                  <FacebookOutlined />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 text-xl">
                  <TwitterOutlined />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 text-xl">
                  <LinkedinOutlined />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 text-xl">
                  <InstagramOutlined />
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={8} lg={8}>
            <Title level={4} className="text-white mb-6">
              <span className='text-white'>Quick Links</span>
            </Title>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-500">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-500">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-500">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-500">
                      Blog
                    </a>
                  </li>
                </ul>
              </Col>
              <Col span={12}>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-500">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-500">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-500">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-500">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Contact Info */}
          <Col xs={24} sm={12} md={8} lg={8}>
            <Title level={4} className="text-white mb-6">
            <span className='text-white'>Contact Us</span>
            </Title>
            <div className="space-y-4">
              <div className="flex items-center">
                <EnvironmentOutlined className="text-blue-500 text-xl mr-3" />
                <Text className="text-gray-400">
                  Madhav Enclave 4th floor, Masab Tank, Hyderabad, Telangana- 500028
                </Text>
              </div>
              <div className="flex items-center">
                <PhoneOutlined className="text-blue-500 text-xl mr-3" />
                <Text className="text-gray-400">+91 7995952302</Text>
              </div>
              <div className="flex items-center">
                <MailOutlined className="text-blue-500 text-xl mr-3" />
                <Text className="text-gray-400">design@dominionengg.com</Text>
              </div>
              {/* <div className="mt-6">
                <Title level={5} className="text-white mb-4">
                <span className='text-white'>Subscribe to Our Newsletter</span>                  
                </Title>
                <div className="flex">
                  <Input
                    placeholder="Enter your email"
                    className="mr-2"
                  />
                  <Button type="primary">
                    Subscribe
                  </Button>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Row justify="space-between" align="middle">
            <Col>
              <Text className="text-gray-400">
                © {new Date().getFullYear()} EngineerCo. All rights reserved.
              </Text>
            </Col>
            <Col>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  Cookie Policy
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
