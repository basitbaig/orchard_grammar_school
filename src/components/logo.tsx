import React from "react";

import Logo from "../assets/images/Ogs_logo.png"; // Adjust the path if needed

interface LogoComponentProps {
  className?: string; // Optional className prop
}

const LogoComponent: React.FC<LogoComponentProps> = ({ className = "" }) => {
  return (
    <div className={`p-1 rounded-full ${className}`}>
      <img src={Logo} alt="Logo" className="w-15 h-12 animate__animated animate__zoomIn animate__slow" />
    </div>
  );
};

export default LogoComponent;
