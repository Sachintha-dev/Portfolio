import { Facebook, MessageCircle, Send, Server, Twitter } from "lucide-react";
import React from "react";
import "./social-media-menu.css";

const SocialMediaMenu: React.FC = () => (
  <div className="tooltip-container">
    <span className="text">
      {/* Main Send Icon */}
      <Send size={20} />
    </span>

    {/* Twitter */}
    <span className="tooltip1">
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <Twitter size={20} />
      </a>
    </span>

    {/* Facebook */}
    <span className="tooltip2">
      <a
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <Facebook size={20} />
      </a>
    </span>

    {/* WhatsApp */}
    <span className="tooltip3">
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <MessageCircle size={20} />
      </a>
    </span>

    {/* Discord */}
    <span className="tooltip4">
      <a
        href="https://discord.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discord"
      >
        <Server size={20} />
      </a>
    </span>
  </div>
);

export default SocialMediaMenu;
