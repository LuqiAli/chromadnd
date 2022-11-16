import Image from "next/image";

function ProjectCard(props) {
  return (
    <a href={props.link} className="project-card">
      <Image
        className="project-img"
        src={props.src}
        width="1000"
        height="1000"
      ></Image>
      <div className="project-hover">
        <div className="project-hover-back"></div>
        <p className="project-hover-text">{props.text}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
