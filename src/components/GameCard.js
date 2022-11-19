import "./GameCard.scss";

const GameCard = ({ id, name, rating, image, handleGameSelect }) => {
  return (
    <article className="game-card">
      <div className="game-card__image-container">
        <img src={image} alt="" className="game-card__image" />
      </div>
      <div className="game-card__text">
        <h2 className="game-card__title">
          <a onClick={() => handleGameSelect(id)} href="#">
            {name}
          </a>
        </h2>
        <p className="game-card__rating">{rating} / 5.0</p>
      </div>
    </article>
  );
};

export default GameCard;
