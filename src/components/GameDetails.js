import CommentsList from "./CommentsList";

const GameDetails = ({ name, image, released, rating, description }) => {
  return (
    <article className="game">
      <img src={image} alt="" className="game__image" />
      <div className="game__info">
        <h2 className="game__title">{name}</h2>
        <span className="game_date">{released}</span>
        <span className="game__rating">{rating}</span>
        <p className="game__description">{description}</p>
      </div>
      <CommentsList />
    </article>
  );
};

export default GameDetails;
