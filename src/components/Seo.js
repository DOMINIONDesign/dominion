import { useEffect } from "react";
import PropTypes from "prop-types";

const Seo = ({
  title,
  description,
  keywords,
  authors,
  image,
  sitename,
  type,
  locale,
  gtmid,
  clarityid,
  faviconurl,
  og,
}) => {
  useEffect(() => {
    document.title = title;
    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "og:image", content: image },
      { name: "og:site_name", content: sitename },
      { name: "og:type", content: type },
      { name: "og:locale", content: locale },
    ];

    metaTags.forEach((tag) => {
      let element = document.querySelector(`meta[name="${tag.name}"]`);
      if (element) {
        element.content = tag.content;
      } else {
        element = document.createElement("meta");
        element.name = tag.name;
        element.content = tag.content;
        document.head.appendChild(element);
      }
    });

    authors.forEach((author) => {
      const metaAuthor = document.createElement("meta");
      metaAuthor.name = "author";
      metaAuthor.content = author.name;
      metaAuthor.setAttribute("url", author.url);
      document.head.appendChild(metaAuthor);
    });

    if (og) {
      const ogTags = [
        { property: "og:url", content: og.url },
        { property: "og:title", content: og.title },
        { property: "og:description", content: og.description },
        { property: "og:image", content: og.image },
      ];

      ogTags.forEach((tag) => {
        let element = document.querySelector(
          `meta[property="${tag.property}"]`
        );
        if (element) {
          element.content = tag.content;
        } else {
          element = document.createElement("meta");
          element.setAttribute("property", tag.property);
          element.content = tag.content;
          document.head.appendChild(element);
        }
      });
    }

    if (gtmid) {
      const script = document.createElement("script");
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmid}');
      `;
      document.head.appendChild(script);
    }

    if (clarityid) {
      const clarityScript = document.createElement("script");
      clarityScript.innerHTML = `
        (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarityid}");
      `;
      document.head.appendChild(clarityScript);
    }
  }, [
    title,
    description,
    keywords,
    authors,
    image,
    sitename,
    type,
    locale,
    gtmid,
    clarityid,
    faviconurl,
    og,
  ]);

  return null;
};

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
  sitename: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  gtmid: PropTypes.string,
  clarityid: PropTypes.string,
  faviconurl: PropTypes.string.isRequired,
  og: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default Seo;
