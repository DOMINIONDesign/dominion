import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import axios from "axios";
import Home from "./components/Home";
import { toast, ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Input, Button, Spin } from "antd"; // Antd components

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // State for error messages and loading state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // loading state

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate name
    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    // Validate mobile number
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
      isValid = false;
    }

    // Validate message
    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true); // Show spinner
      try {
        // Send the form data via axios
        const response = await axios.post("/user/mail", formData);
        console.log("Form submitted successfully", response.data);
        // Reset the form and close popup
        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
        toast.success("Form submitted successfully!!", {
          autoClose: 3000,
        });
        togglePopup();
      } catch (error) {
        toast.error("Error submitting form", {
          autoClose: 3000,
        });
        console.error("Error submitting form", error);
      } finally {
        setLoading(false); // Hide spinner after response
      }
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Navbar />      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />

      {/* Floating "Contact Us" Icon */}
      <div
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 cursor-pointer"
        onClick={togglePopup}
      >
        {!isPopupOpen && (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
            data-ux="Icon"
            class="x-el x-el-svg c2-1 c2-2 c2-q c2-r c2-s c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"
          >
            <g fill="currentColor">
              <rect x="4" y="6" width="16" height="10.222" rx="1.129"></rect>
              <path d="M8.977 18.578l.2-2.722a.564.564 0 01.564-.523h3.61c.548 0 .774.705.327 1.024l-3.81 2.721a.564.564 0 01-.89-.5z"></path>
            </g>
          </svg>
        )}
        {isPopupOpen && (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
            data-ux="Icon"
            class="x-el x-el-svg c2-1 c2-2 c2-50 c2-r c2-s c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"
          >
            <path
              fill-rule="evenodd"
              d="M17.999 4l-6.293 6.293L5.413 4 4 5.414l6.292 6.293L4 18l1.413 1.414 6.293-6.292 6.293 6.292L19.414 18l-6.294-6.293 6.294-6.293z"
            ></path>
          </svg>
        )}
      </div>

      {/* Contact Us Popup */}
      {isPopupOpen && (
        <div
          className="fixed bottom-20 right-4 mb-2 bg-white rounded-lg shadow-lg w-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
          style={{ maxHeight: "470px" }}
        >
          <div className="bg-blue-500 text-white px-4 py-6 w-full">
            DOMINION
          </div>
          <div className="px-4 -mt-4">
            <span className="bg-gray-200 py-2 px-2 rounded-lg inline-block w-full">
              Hi! Let us know how we can help and we'll respond shortly.
            </span>
            <span className="inline-block -mt-2 ml-2">
              <svg viewBox="0 0 24 24" fill="#E5E7EB" width="24" height="24">
                <path d="M0.342304 14.5C7.35025 6.3293 3.35025 0.829295 0 0.0.0 0.0 5.4 2.1 32.3502 0.329295C32.3503 3.8293 -3.13481 20.7261 0.342304 14.5Z"></path>
              </svg>
            </span>
          </div>
          <div className="px-4 pb-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  disabled={loading} // Disable inputs while loading
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  disabled={loading}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Mobile Number
                </label>
                <Input
                  name="mobile"
                  type="text"
                  maxLength={10}
                  pattern="[0-9]*"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  disabled={loading}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs">{errors.mobile}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Input.TextArea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  disabled={loading}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs">{errors.message}</p>
                )}
              </div>
              <div className="flex items-center justify-center">
                <Button
                  style={{ width: "100px" }}
                  type="primary"
                  htmlType="submit"
                  block
                  disabled={loading} // Disable button while loading
                >
                  {loading ? <Spin size="small" /> : "Send"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
