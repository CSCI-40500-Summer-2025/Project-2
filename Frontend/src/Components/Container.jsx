import "./Container.css";

function Container(props) {
  const cardClass = props.type === "lost" ? "card lost-card" : "card found-card";

  return (
    <div className={cardClass}>
      <div className="top-card">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img src={props.img.src} alt={props.img.alt} />
        </a>
        <div className="bottom-card">
          <p className="bottom-card-title">{props.title}</p>
          <p className="bottom-card-content">Date Posted: {props.date}</p>
          {props.location && (
            <p className="bottom-card-content">Location: {props.location}</p>
          )}
          {props.description && (
            <p className="bottom-card-content">Details: {props.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Container;
