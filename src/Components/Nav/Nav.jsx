import React from "react";
import "./Nav.css";

const SOCIAL_MEDIA = [
  {
    text: "Linkedin",
    link: "https://www.linkedin.com/in/oralia-rivera-vicente/",
    imagUrl: "./assets/social-media/linkedin.svg",
  },
  {
    text: "Github",
    link: "https://github.com/Oralia31",
    imagUrl: "./assets/social-media/github.svg",
  },
  {
    text: "Portfolio",
    link: "https://oralia-portfolio.vercel.app/",
    imagUrl: "./assets/social-media/portfolio.png",
  },
];

const Nav = () => {
  return (
    <nav className="navContainer">
      {SOCIAL_MEDIA.map((item, index) => (
        <button className="button-social" key={index}>
            <img className="image-social" src={item.imagUrl} alt={item.text} />
        </button>
      ))}
    </nav>
  );
};

export { Nav };
