import { useState } from "react";
import { MdArrowOutward, MdCopyright, MdCheck } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("thirunithishwar@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="contact-section section-container" id="contact">
        <div className="contact-container">
          <div className="available-badge">
            <span className="pulse-dot"></span>
            Available for Opportunities
          </div>
          <h3>Let's Talk</h3>
          <div className="contact-flex" style={{ marginTop: "40px" }}>
            <div className="contact-box">
              <h4>Email</h4>
              <a href="#" onClick={handleCopy} data-cursor="disable" className="hello-btn" style={{ width: "fit-content" }}>
                {copied ? (
                  <>Email Copied! <MdCheck /></>
                ) : (
                  <>Get In Touch <MdArrowOutward /></>
                )}
              </a>
              <h4>Location</h4>
              <p>
                <a href="#" data-cursor="disable">
                  Madurai, Tamil Nadu, India
                </a>
              </p>
            </div>
            <div className="contact-box">
              <h4>Social</h4>
              <a
                href="https://github.com/nithishwar17/"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Github <MdArrowOutward />
              </a>
              <a
                href="https://www.linkedin.com/in/nithishwar-t-b153b2299"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Linkedin <MdArrowOutward />
              </a>
              <a
                href="https://t.me/nithishwar17"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Telegram <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>
        <footer className="footer" style={{ marginTop: "100px", paddingBottom: "20px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px", width: "100%" }}>
          <p style={{ color: "#adacac", fontSize: "16px", margin: 0, fontWeight: 300 }}>
            Designed and Developed by Nithishwar T
          </p>
          <p style={{ color: "#adacac", fontSize: "14px", margin: "10px 0 0 0", fontWeight: 200 }}>
            <MdCopyright style={{ verticalAlign: "middle", marginRight: "5px", marginBottom: "2px" }}/> 2026
          </p>
        </footer>
      </div>
    </>
  );
};

export default Contact;
