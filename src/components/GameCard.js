const GameCard = ({ name, rating, image }) => {
  return (
    <aricle className="game-card">
      <img src={image} alt="" className="game-card__image" />
      <div className="game-card__text">
        <h2 className="game-card__title">{name}</h2>
        <p className="game-card__rating">{rating}</p>
      </div>
    </aricle>
  );
};

export default GameCard;
