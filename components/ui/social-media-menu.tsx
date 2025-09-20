"use client";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
  Send,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const SocialMediaMenu: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  const containerStyle = {
    position: "fixed" as const,
    right: "2rem",
    bottom: "2rem",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    background: isExpanded
      ? "#fff"
      : "linear-gradient(138deg, rgba(3, 169, 244, 1) 15%, rgba(63, 180, 233, 1) 65%)",
    borderRadius: "50px",
    padding: isExpanded ? "1rem 0.7rem" : "0.7rem",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    cursor: "pointer",
    transition: "all 0.3s ease",
    overflow: "visible",
    maxHeight: isExpanded ? "280px" : "50px",
    maxWidth: isExpanded ? "auto" : "50px",
  };

  const mainIconStyle = {
    display: "flex",
    alignItems: "center",
    color: isExpanded ? "rgb(3, 169, 244)" : "#fff",
    transition: "color 0.3s ease",
    minWidth: "20px",
    minHeight: "40px",
  };

  const socialIconBaseStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "0.75rem",
    padding: "0.5rem",
    borderRadius: "50%",
    background: "#f8f9fa",
    opacity: isExpanded ? 1 : 0,
    visibility: isExpanded ? ("visible" as const) : ("hidden" as const),
    transform: isExpanded ? "translateY(0)" : "translateY(-20px)",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    minWidth: "32px",
    height: "32px",
  };

  // Hide component entirely on mobile
  if (isMobile) {
    return null;
  }

  return (
    <div
      style={containerStyle}
      className="social-menu-container"
      onMouseEnter={(e) => {
        const container = e.currentTarget;
        setIsExpanded(true);
      }}
      onMouseLeave={(e) => {
        setIsExpanded(false);
      }}
    >
      {/* Main Send Icon */}
      <div className="main-icon" style={mainIconStyle}>
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
            ...socialIconBaseStyle,
            color: social.color,
            transitionDelay: isExpanded ? `${index * 50}ms` : "0ms",
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
