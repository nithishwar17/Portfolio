import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          {/* Timeline Item 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development & Machine Learning Intern</h4>
                <h5>Cybernaut</h5>
              </div>
              <h3>Aug 2025 - Nov 2025</h3>
            </div>
            <p>
              Developed Python automation tools, web scraping solutions, and machine learning applications. Collaborated remotely with mentors and delivered industry-oriented software projects.
            </p>
          </div>

          {/* Timeline Item 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack & AI Developer</h4>
                <h5>Academic & Personal Projects</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Built intelligent web applications including Sentiment Analyzer, Smart Traffic Violation Logger, Cryptocurrency Price Tracker, and Skin Disease Classification System.
            </p>
          </div>

          {/* Timeline Item 3 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Information Technology Student</h4>
                <h5>Sethu Institute of Technology</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Pursuing B.Tech (Honors) in Information Technology with a CGPA of 8.8, focusing on Full Stack Development, AI, Machine Learning, and Software Engineering.
            </p>
          </div>

          {/* Timeline Item 4 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI, Cloud & Software Engineering Enthusiast</h4>
                <h5>Continuous Learning</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Exploring Machine Learning, Cloud Computing, React.js, Flask, TensorFlow, and modern software development practices.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;
