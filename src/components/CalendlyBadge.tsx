import { useEffect } from "react";

const CalendlyBadge: React.FC = () => {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/ignasstephanie/30min",
          text: "Schedule a Call",
          color: "#f285ba",
          textColor: "#ffffff",
          branding: true,
        });
      }
    };
    document.body.appendChild(script);

    // Cleanup if component unmounts
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return null; // Badge renders itself
};

export default CalendlyBadge;