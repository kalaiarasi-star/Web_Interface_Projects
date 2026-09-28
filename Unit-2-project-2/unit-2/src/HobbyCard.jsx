import "./HobbyCard.css";

function HobbyCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.hobbyName} className="card-img" />

      <div className="card-content">
        <h2>{props.hobbyName}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default HobbyCard;