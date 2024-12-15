export const defaultSEO = {
  title: "Dominion Engineering - Leading Engineering Solutions Provider",
  description:
    "Expert engineering solutions in infrastructure, oil & gas, construction, and industrial projects across the Middle East.",
  keywords:
    "engineering, construction, infrastructure, oil and gas, industrial projects, Middle East engineering, Dubai engineering",
  authors: [
    {
      name: "Dominion Engineering",
      url: "https://www.dominionengg.com",
    },
  ],
  image: "/images/og-default.jpg",
  sitename: "Dominion Engineering",
  type: "website",
  locale: "en_US",
  gtmid: "GTM-PRV2PZ8B",
  faviconurl: "/favicon.ico",
  og: {
    url: "https://www.dominionengg.com",
    title: "Dominion Engineering - Excellence in Engineering Solutions",
    description:
      "Leading engineering solutions provider in the Middle East, specializing in infrastructure, oil & gas, and construction projects.",
    image: "/images/og-default.jpg",
  },
};

export const pageSEO = {
  home: {
    ...defaultSEO,
    title: "Dominion Engineering - Home | Leading Engineering Solutions",
    description:
      "Transform your vision into reality with Dominion Engineering's comprehensive engineering and construction solutions.",
  },

  about: {
    ...defaultSEO,
    title: "About Us - Dominion Engineering | Our Story & Vision",
    description:
      "Learn about Dominion Engineering's journey, values, and commitment to excellence in engineering and construction.",
    keywords:
      "about Dominion Engineering, engineering company history, engineering expertise, company values",
  },

  services: {
    ...defaultSEO,
    title:
      "Our Services - Dominion Engineering | Comprehensive Engineering Solutions",
    description:
      "Explore our wide range of engineering services including infrastructure development, oil & gas projects, and construction solutions.",
    keywords:
      "engineering services, infrastructure development, oil and gas engineering, construction services",
  },

  projects: {
    ...defaultSEO,
    title: "Our Projects - Dominion Engineering | Portfolio of Excellence",
    description:
      "View our portfolio of successful engineering projects across infrastructure, oil & gas, and construction sectors.",
    keywords:
      "engineering projects, completed projects, project portfolio, engineering case studies",
  },

  contact: {
    ...defaultSEO,
    title: "Contact Us - Dominion Engineering | Get in Touch",
    description:
      "Connect with Dominion Engineering for your engineering and construction needs. Contact our expert team today.",
    keywords:
      "contact engineering company, engineering consultation, project inquiry, engineering services contact",
  },
};
