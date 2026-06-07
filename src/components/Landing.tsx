import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              NITHISHWAR
              <br />
              <span>T</span>
            </h1>
            <div className="landing-profile-pic">
              <div className="landing-img-glow"></div>
              <img src="/Profile.png" alt="Nithishwar T" />
            </div>
          </div>
          <div className="landing-info" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <h3 className="landing-subtitle" style={{ color: "var(--accentColor, #c481ff)", fontWeight: 500 }}>
              Full Stack Developer
            </h3>
            <h3 className="landing-subtitle" style={{ color: "#fff", fontWeight: 300 }}>
              AI & Machine Learning Enthusiast
            </h3>
            <h3 className="landing-subtitle" style={{ color: "#adacac", fontWeight: 200, fontSize: "16px" }}>
              Information Technology Student
            </h3>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
