import "./styles/Work.css";
import WorkImage from "./WorkImage";
import MoreProjects from "./MoreProjects";
import { MdArrowForward } from "react-icons/md";

const projects = [
  {
    name: "Skin Disease Classification System",
    category: "AI-Powered Healthcare Application",
    description: "Built an AI-powered healthcare application that uses deep learning models to classify skin diseases and provide confidence-based predictions through an intuitive web interface.",
    tools: "Python, TensorFlow, Flask, Scikit-Learn",
    image: "/images/skin_disease.png",
  },
  {
    name: "Smart Traffic Violation Logger",
    category: "Digital Traffic Management System",
    description: "Developed a secure traffic violation management system with officer authentication, QR-code challan generation, and database-driven record management.",
    tools: "Python, Flask, SQLite, HTML, CSS, Bootstrap",
    image: "/images/traffic_logger.png",
  },
  {
    name: "Sentiment Analyzer",
    category: "NLP-Based Text Analysis Platform",
    description: "Created a web-based NLP application that classifies user text as positive, negative, or neutral while visualizing sentiment scores in real time.",
    tools: "Python, React.js, NLTK, TextBlob",
    image: "/images/sentiment_analyzer.png",
  },
  {
    name: "Expense Tracker",
    category: "Personal Finance Management Application",
    description: "Built a Django-based personal finance management application that allows users to track, categorize, and manage expenses through an intuitive dashboard.",
    tools: "Django, Python, SQLite, HTML, CSS, JavaScript",
    image: "/images/expense_tracker.png",
  }
];

const Work = () => {
  const scrollRight = () => {
    const container = document.querySelector(".work-flex");
    if (container) {
      container.scrollBy({ left: window.innerWidth > 768 ? 600 : 300, behavior: "smooth" });
    }
  };

  return (
    <div className="work-wrapper" style={{ width: "100%" }}>
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <h2 style={{ textAlign: "center", margin: 0 }}>
              My <span>Work</span>
            </h2>
            <div 
              className="scroll-indicator"
              onClick={scrollRight}
            >
              Scroll <MdArrowForward />
            </div>
          </div>
          <div className="work-flex">
            {projects.map((project, index) => (
              <div className="work-box" key={index}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>

                    <div>
                      <h4>{project.name}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  
                  <p className="work-desc">{project.description}</p>
                  
                  <h4>Tech Stack</h4>
                  <p>{project.tools}</p>
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="work-github-link"
                      style={{
                        display: "inline-block",
                        marginTop: "15px",
                        padding: "8px 16px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "20px",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "background 0.3s ease"
                      }}
                    >
                      View on GitHub ↗
                    </a>
                  )}
                </div>
                <WorkImage image={project.image} alt={project.name} />
              </div>
            ))}
            <div className="work-box" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <MoreProjects />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
