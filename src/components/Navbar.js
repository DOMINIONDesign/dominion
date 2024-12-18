import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Drawer } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSecondNavbar, setShowSecondNavbar] = useState(false); // state to control second navbar visibility
  const location = useLocation();
  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);

    // Reset state when navigating back to the Home page
    if (location.pathname === "/") {
      setShowSecondNavbar(false); // Reset second navbar visibility
      setLastScrollY(0); // Reset the last scroll position
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show second navbar when scrolling past a certain threshold
      if (
        currentScrollY > 550 ||
        (location.pathname !== "/" && currentScrollY > 200)
      ) {
        setShowSecondNavbar(true);
      } else {
        setShowSecondNavbar(false);
      }

      // Show/Hide main navbar based on scroll direction
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, location.pathname]);

  console.log(isVisible);
  const menuItems = [
    { key: "/", label: "Home" },
    { key: "/about", label: "About Us" },
    { key: "/services", label: "Services" },
    // { key: "/projects", label: "Projects" },
    { key: "/contact", label: "Contact Us" },
  ];
  return (
    <div>
      {/* Main Navbar */}
      <div
        className={`relative w-full ${
          location.pathname === "/" ? "z-50" : "z-50"
        } transition-transform duration-300 }`}
      >
        {/* Main Navbar */}
        <nav
          className={`w-full ${
            location.pathname === "/"
              ? "bg-transparent absolute pt-5"
              : location.pathname === "/services" ||
                location.pathname === "/about" ||
                location.pathname === "/contact"
              ? "bg-transparent absolute mt-5"
              : "bg-black pt-5"
          }`}
        >
          <div className="max-w-7xl  ml-4 mx-auto py-4 sm:px-6 lg:px-8">
            <div className="flex justify-start items-center h-20">
              <Link to="/" className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 300"
                  className="iconAbove"
                  width="150"
                  height="150"
                >
                  <rect
                    fill="transparent"
                    x="0"
                    y="0"
                    width="300px"
                    height="300px"
                    className="logo-background-square"
                  />
                  <g
                    fill="#FFF"
                    transform="matrix(3,0,0,3,18.309788901659154,174.4231762723605)"
                  >
                    <path d="M4.21 0.43L0.52 0.43L0.52 0.67C1.13 0.67 1.57 1.50 1.57 2.37L1.57 8.37C1.57 9.32 1.12 10.05 0.52 10.05L0.52 10.29L4.21 10.29C7 10.29 10.08 9.49 10.08 5.40C10.08 1.30 7 0.43 4.21 0.43ZM4.21 10.05L3.60 10.05L3.60 0.67L4.21 0.67C5.59 0.67 7.63 1.04 7.63 5.40C7.63 9.76 5.59 10.05 4.21 10.05ZM16.16 0.31C13.08 0.31 11.33 2.66 11.33 5.43C11.33 8.22 13.08 10.42 16.16 10.42C19.24 10.42 20.99 8.22 20.99 5.43C20.99 2.66 19.24 0.31 16.16 0.31ZM16.16 10.18C14.49 10.18 13.72 9.28 13.72 5.43C13.72 1.60 14.49 0.55 16.16 0.55C17.81 0.55 18.56 1.60 18.56 5.43C18.56 9.28 17.81 10.18 16.16 10.18ZM33.99 8.60L33.99 1.90C33.99 1.05 34.47 0.67 35.07 0.67L35.07 0.43L31.98 0.43L29.18 7.53L25.80 0.43L22.27 0.43L22.27 0.67C22.62 0.70 23.32 0.70 23.86 1.64L23.86 6.75C23.86 6.75 23.86 10.05 21.76 10.05L21.76 10.29L26.00 10.29L26.00 10.05C24.07 10.05 24.09 6.75 24.09 6.75L24.09 2.02L28.01 10.42L28.25 10.42L31.98 1.09L31.98 8.60C31.98 9.55 31.56 10.05 30.97 10.05L30.97 10.29L35.20 10.29L35.20 10.05C34.59 10.05 33.99 9.55 33.99 8.60ZM35.99 0.43L35.99 0.67C36.61 0.67 37.18 1.05 37.18 1.92L37.18 8.60C37.18 9.55 36.60 10.05 35.99 10.05L35.99 10.29L40.40 10.29L40.40 10.05C39.82 10.05 39.21 9.55 39.21 8.60L39.21 1.92C39.21 1.05 39.80 0.67 40.40 0.67L40.40 0.43ZM48.19 0.43L48.19 0.67C50.12 0.66 50.11 3.99 50.11 3.99L50.11 7.39L44.46 0.43L41.03 0.43L41.03 0.67C41.40 0.70 41.80 0.55 42.70 1.67L43.25 2.35L43.25 6.72C43.25 6.72 43.26 10.05 41.15 10.05L41.15 10.29L45.40 10.29L45.40 10.05C43.47 10.05 43.48 6.72 43.48 6.72L43.48 2.60L49.60 10.29L50.34 10.29L50.34 3.99C50.34 3.99 50.32 0.66 52.43 0.67L52.43 0.43ZM53.21 0.43L53.21 0.67C53.83 0.67 54.40 1.05 54.40 1.92L54.40 8.60C54.40 9.55 53.82 10.05 53.21 10.05L53.21 10.29L57.62 10.29L57.62 10.05C57.04 10.05 56.43 9.55 56.43 8.60L56.43 1.92C56.43 1.05 57.02 0.67 57.62 0.67L57.62 0.43ZM63.53 0.31C60.45 0.31 58.70 2.66 58.70 5.43C58.70 8.22 60.45 10.42 63.53 10.42C66.61 10.42 68.36 8.22 68.36 5.43C68.36 2.66 66.61 0.31 63.53 0.31ZM63.53 10.18C61.87 10.18 61.10 9.28 61.10 5.43C61.10 1.60 61.87 0.55 63.53 0.55C65.18 0.55 65.94 1.60 65.94 5.43C65.94 9.28 65.18 10.18 63.53 10.18ZM76.27 0.43L76.27 0.67C78.20 0.66 78.19 3.99 78.19 3.99L78.19 7.39L72.55 0.43L69.12 0.43L69.12 0.67C69.48 0.70 69.89 0.55 70.78 1.67L71.33 2.35L71.33 6.72C71.33 6.72 71.34 10.05 69.23 10.05L69.23 10.29L73.49 10.29L73.49 10.05C71.55 10.05 71.57 6.72 71.57 6.72L71.57 2.60L77.69 10.29L78.43 10.29L78.43 3.99C78.43 3.99 78.40 0.66 80.51 0.67L80.51 0.43Z"></path>
                  </g>
                  <g
                    stroke="none"
                    fill="#DC143C"
                    transform="matrix(2.053850270519674,0,0,2.053850270519674,117.1383946923331,91.70759350752783)"
                  >
                    <path d="M27.377 11.377L16 0 4.623 11.377 16 22.753l11.377-11.376zM16 6.026l5.35 5.35L16 16.727l-5.35-5.35L16 6.026zM27.426 14.969l-5.664 5.664V32h5.664zM10.238 20.633l-5.664-5.664V32h5.664z"></path>
                  </g>
                </svg>
              </Link>

              {/* Add margin between the logo and menu */}
              <div className="hidden lg:flex items-center space-x-8 ml-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.key}
                    className={`text-base font-medium relative inline-block py-2 rounded-md ${
                      location.pathname === item.key
                        ? "text-white"
                        : "text-white group hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`custom-link absolute bottom-0 left-0 block h-[2px] bg-white transition-all duration-300 ${
                        location.pathname === item.key
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <Button
                  type="text"
                  icon={<MenuOutlined className="text-white" />}
                  onClick={() => setIsMenuOpen(true)}
                  className="flex items-center justify-center p-2"
                />
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Second Navbar (Shows after scrolling past the carousel) */}
      {showSecondNavbar && (
        <nav
          data-aos="fade-down"
          data-aos-duration="500"
          className="bg-black h-28 flex items-center text-white p-4 fixed top-0 left-0 w-full shadow-md z-40"
        >
          <div className="max-w-7xl mt-5 ml-4 mx-auto py-4 sm:px-6 lg:px-8">
            <div className="flex justify-start items-center h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 300"
                  className="iconAbove"
                  width="150"
                  height="150"
                >
                  <rect
                    fill="transparent"
                    x="0"
                    y="0"
                    width="300px"
                    height="300px"
                    className="logo-background-square"
                  />
                  <g
                    fill="#FFF"
                    transform="matrix(3.250406077572023,0,0,3.250406077572023,18.309788901659154,174.4231762723605)"
                  >
                    <path d="M4.21 0.43L0.52 0.43L0.52 0.67C1.13 0.67 1.57 1.50 1.57 2.37L1.57 8.37C1.57 9.32 1.12 10.05 0.52 10.05L0.52 10.29L4.21 10.29C7 10.29 10.08 9.49 10.08 5.40C10.08 1.30 7 0.43 4.21 0.43ZM4.21 10.05L3.60 10.05L3.60 0.67L4.21 0.67C5.59 0.67 7.63 1.04 7.63 5.40C7.63 9.76 5.59 10.05 4.21 10.05ZM16.16 0.31C13.08 0.31 11.33 2.66 11.33 5.43C11.33 8.22 13.08 10.42 16.16 10.42C19.24 10.42 20.99 8.22 20.99 5.43C20.99 2.66 19.24 0.31 16.16 0.31ZM16.16 10.18C14.49 10.18 13.72 9.28 13.72 5.43C13.72 1.60 14.49 0.55 16.16 0.55C17.81 0.55 18.56 1.60 18.56 5.43C18.56 9.28 17.81 10.18 16.16 10.18ZM33.99 8.60L33.99 1.90C33.99 1.05 34.47 0.67 35.07 0.67L35.07 0.43L31.98 0.43L29.18 7.53L25.80 0.43L22.27 0.43L22.27 0.67C22.62 0.70 23.32 0.70 23.86 1.64L23.86 6.75C23.86 6.75 23.86 10.05 21.76 10.05L21.76 10.29L26.00 10.29L26.00 10.05C24.07 10.05 24.09 6.75 24.09 6.75L24.09 2.02L28.01 10.42L28.25 10.42L31.98 1.09L31.98 8.60C31.98 9.55 31.56 10.05 30.97 10.05L30.97 10.29L35.20 10.29L35.20 10.05C34.59 10.05 33.99 9.55 33.99 8.60ZM35.99 0.43L35.99 0.67C36.61 0.67 37.18 1.05 37.18 1.92L37.18 8.60C37.18 9.55 36.60 10.05 35.99 10.05L35.99 10.29L40.40 10.29L40.40 10.05C39.82 10.05 39.21 9.55 39.21 8.60L39.21 1.92C39.21 1.05 39.80 0.67 40.40 0.67L40.40 0.43ZM48.19 0.43L48.19 0.67C50.12 0.66 50.11 3.99 50.11 3.99L50.11 7.39L44.46 0.43L41.03 0.43L41.03 0.67C41.40 0.70 41.80 0.55 42.70 1.67L43.25 2.35L43.25 6.72C43.25 6.72 43.26 10.05 41.15 10.05L41.15 10.29L45.40 10.29L45.40 10.05C43.47 10.05 43.48 6.72 43.48 6.72L43.48 2.60L49.60 10.29L50.34 10.29L50.34 3.99C50.34 3.99 50.32 0.66 52.43 0.67L52.43 0.43ZM53.21 0.43L53.21 0.67C53.83 0.67 54.40 1.05 54.40 1.92L54.40 8.60C54.40 9.55 53.82 10.05 53.21 10.05L53.21 10.29L57.62 10.29L57.62 10.05C57.04 10.05 56.43 9.55 56.43 8.60L56.43 1.92C56.43 1.05 57.02 0.67 57.62 0.67L57.62 0.43ZM63.53 0.31C60.45 0.31 58.70 2.66 58.70 5.43C58.70 8.22 60.45 10.42 63.53 10.42C66.61 10.42 68.36 8.22 68.36 5.43C68.36 2.66 66.61 0.31 63.53 0.31ZM63.53 10.18C61.87 10.18 61.10 9.28 61.10 5.43C61.10 1.60 61.87 0.55 63.53 0.55C65.18 0.55 65.94 1.60 65.94 5.43C65.94 9.28 65.18 10.18 63.53 10.18ZM76.27 0.43L76.27 0.67C78.20 0.66 78.19 3.99 78.19 3.99L78.19 7.39L72.55 0.43L69.12 0.43L69.12 0.67C69.48 0.70 69.89 0.55 70.78 1.67L71.33 2.35L71.33 6.72C71.33 6.72 71.34 10.05 69.23 10.05L69.23 10.29L73.49 10.29L73.49 10.05C71.55 10.05 71.57 6.72 71.57 6.72L71.57 2.60L77.69 10.29L78.43 10.29L78.43 3.99C78.43 3.99 78.40 0.66 80.51 0.67L80.51 0.43Z"></path>
                  </g>
                  <g
                    stroke="none"
                    fill="#DC143C"
                    transform="matrix(2.053850270519674,0,0,2.053850270519674,117.1383946923331,91.70759350752783)"
                  >
                    <path d="M27.377 11.377L16 0 4.623 11.377 16 22.753l11.377-11.376zM16 6.026l5.35 5.35L16 16.727l-5.35-5.35L16 6.026zM27.426 14.969l-5.664 5.664V32h5.664zM10.238 20.633l-5.664-5.664V32h5.664z"></path>
                  </g>
                </svg>
              </Link>

              {/* Add margin between the logo and menu */}
              <div className="hidden lg:flex items-center space-x-8 ml-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.key}
                    className={`text-base font-medium relative inline-block py-2 rounded-md ${
                      location.pathname === item.key
                        ? "text-white"
                        : "text-white group hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`custom-link absolute bottom-0 left-0 block h-[2px] bg-white transition-all duration-300 ${
                        location.pathname === item.key
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden !text-white">
                <Button
                  type="text"
                  icon={<MenuOutlined className="!text-white" />}
                  onClick={() => setIsMenuOpen(true)}
                  className="flex items-center justify-center p-2"
                />
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Drawer Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setIsMenuOpen(false)}
        open={isMenuOpen}
        className="lg:hidden !bg-black text-white"
        closeIcon={<CloseOutlined className="!text-white" />}
      >
        <div className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              to={item.key}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium relative inline-block py-2 rounded-md ${
                location.pathname === item.key
                  ? "text-blue-500 font-bold  underline"
                  : "text-white hover:text-black"
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 block h-[2px] bg-black transition-all duration-300 ${
                  location.pathname === item.key
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
