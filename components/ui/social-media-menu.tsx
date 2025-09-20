"use client";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
  Send,
} from "lucide-react";
import React from "react";

const SocialMediaMenu: React.FC = () => {
  const socialLinks = [
    {
      icon: <Instagram size={20} />,
      href: "https://instagram.com/",
      label: "Instagram",
      color: "#C13584",
    },
    {
      icon: <Facebook size={20} />,
      href: "https://facebook.com/",
      label: "Facebook",
      color: "#1877F2",
    },
    {
      icon: <MessageCircle size={20} />,
      href: "https://wa.me/",
      label: "WhatsApp",
      color: "#25D366",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/",
      label: "Github",
      color: "#5865F2",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkdin.com/",
      label: "LinkedIn",
      color: "#0077B5",
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        right: "2rem",
        bottom: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background:
          "linear-gradient(138deg, rgba(3, 169, 244, 1) 15%, rgba(63, 180, 233, 1) 65%)",
        borderRadius: "50px",
        padding: "0.7rem",
        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        cursor: "pointer",
        transition: "all 0.3s ease",
        overflow: "visible",
        maxHeight: "50px",
        maxWidth: "50px",
      }}
      className="social-menu-container"
      onMouseEnter={(e) => {
        const container = e.currentTarget;
        container.style.maxHeight = "300px";
        container.style.background = "#fff";
        container.style.padding = "1rem 0.7rem";

        // Show social icons
        const socialIcons = container.querySelectorAll(".social-icon");
        socialIcons.forEach((icon: any, index) => {
          setTimeout(() => {
            icon.style.opacity = "1";
            icon.style.transform = "translateY(0)";
            icon.style.visibility = "visible";
          }, index * 50);
        });

        // Change main icon color
        const mainIcon = container.querySelector(".main-icon");
        if (mainIcon) {
          (mainIcon as HTMLElement).style.color = "rgb(3, 169, 244)";
        }
      }}
      onMouseLeave={(e) => {
        const container = e.currentTarget;
        container.style.maxHeight = "60px";
        container.style.maxWidth = "60px";
        container.style.background =
          "linear-gradient(138deg, rgba(3, 169, 244, 1) 15%, rgba(63, 180, 233, 1) 65%)";
        container.style.padding = "0.7rem";

        // Hide social icons
        const socialIcons = container.querySelectorAll(".social-icon");
        socialIcons.forEach((icon: any) => {
          icon.style.opacity = "0";
          icon.style.transform = "translateY(-20px)";
          icon.style.visibility = "hidden";
        });

        // Reset main icon color
        const mainIcon = container.querySelector(".main-icon");
        if (mainIcon) {
          (mainIcon as HTMLElement).style.color = "#fff";
        }
      }}
    >
      {/* Main Send Icon */}
      <div
        className="main-icon"
        style={{
          display: "flex",
          alignItems: "center",
          color: "#fff",
          transition: "color 3s ease",
          minWidth: "20px",
          minHeight: "40px",
        }}
      >
        <Send size={20} />
      </div>

      {/* Social Media Icons */}
      {socialLinks.map((social, index) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="social-icon"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0.75rem",
            padding: "0.5rem",
            borderRadius: "50%",
            background: "#f8f9fa",
            color: social.color,
            opacity: 0,
            visibility: "hidden",
            transform: "translateY(-20px)",
            transition: "all 0.3s ease",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            minWidth: "32px",
            height: "32px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = social.color;
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.transform = "translateY(0) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#f8f9fa";
            e.currentTarget.style.color = social.color;
            e.currentTarget.style.transform = "translateY(0) scale(1)";
          }}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaMenu;
