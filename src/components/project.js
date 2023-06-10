import './Project.css';

function Project({title, description, githublink,demolink, image, duration}) {
  return (
    <>
    <div className="project-card">
    <img src={image} alt={title}/>
    <div className="project-details">
      <h3 className="project-title">{title}</h3>
      <p className="project-duration">{duration}</p>
      <p className="project-description">{description}</p>
      <div className="project-links">
        <a href={githublink} target="_blank">Github Link</a>
        <a href={demolink} target="_blank">Demo</a>
      </div>
    </div>
  </div>
    </>
  );

  }
  export default Project;