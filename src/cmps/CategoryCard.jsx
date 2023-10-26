import { Link } from "react-router-dom";

export function CategoryCard({ card }) {
    
  return (
    <Link to={`/gig?tags=${card.title}`} >
      <div className="catCard">
        <img src={card.img} alt={card.title} />
        <small className="desc">{card.desc}</small>
        <h4 className="title">{card.title}</h4>
      </div>
    </Link>
  );
}
