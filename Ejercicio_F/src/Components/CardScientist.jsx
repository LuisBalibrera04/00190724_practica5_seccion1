// src/components/CardScientist.jsx
import "../Styles/CardScientist.css"; 

const CardScientist = ({ name, image, profession, awards, discoveries }) => {
  return (
    <div className="card-scientist">
      <h2 className="scientist-name">{name}</h2>
      <div className="card-content">
        <img src={image} alt={name} className="card-image" />
        <ul className="card-info">
          <li><strong>Profesión:</strong> {profession}</li>
          <li><strong>Premios:</strong> {awards}</li>
          <li><strong>Descubrió:</strong> {discoveries}</li>
        </ul>
      </div>
    </div>
  );
};

export default CardScientist;