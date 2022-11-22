import "./GameCard.scss";
import { AiFillStar } from "react-icons/ai";

const GameCard = ({ id, name, rating, image, handleGameSelect }) => {
  return (
    <article className="game-card">
      <div className="game-card__image-container">
        <img src={image} alt="" className="game-card__image" />
      </div>
      <div className="game-card__text">
        <h2 className="game-card__title">
          <button onClick={() => handleGameSelect(id)}>{name}</button>
        </h2>
        <p className="game-card__rating">
          <AiFillStar />
          {rating} / 5.0
        </p>
      </div>
    </article>
  );
};

export default GameCard;
