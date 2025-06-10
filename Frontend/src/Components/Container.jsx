import "./Container.css"

function Container(props) {
    return (
        <div className="lost-item">
            <h1>{props.title}</h1>
            <p className="lost-item-date">Date posted: {props.date}</p>
            <a href= {props.link} target="_blank"  rel="noopener noreferrer">
              <img src= {props.img.src} alt={props.img.alt} >
              </img>
            </a>
        </div>
    )
}

export default Container