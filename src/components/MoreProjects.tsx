import "./styles/MoreProjects.css";
import { MdArrowOutward } from "react-icons/md";

const MoreProjects = () => {
  return (
    <div className="more-projects-container">
      <h2>More Projects</h2>
      <div className="more-projects-content">
        <h3>Interested in seeing more?</h3>
        <p>
          Explore my complete collection of projects, experiments, automation tools, AI applications, and open-source work on GitHub.
        </p>
        <a
          href="https://github.com/nithishwar17"
          target="_blank"
          rel="noreferrer"
          className="explore-btn"
        >
          Explore My GitHub <MdArrowOutward />
        </a>
      </div>
    </div>
  );
};

export default MoreProjects;
