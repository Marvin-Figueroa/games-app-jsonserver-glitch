import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import HttpClient from "../services/http";
const http = new HttpClient("https://plume-gelatinous-asp.glitch.me");

const GameDetails = ({ game }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  async function getComments() {
    // setLoading(true);
    const gameComments = await http.get(`/games/${game.id}/comments`);
    console.log(comments);
    setComments(gameComments);
    // setLoading(false);
  }

  return (
    <article className="game">
      <img src={game.image} alt="" className="game__image" />
      <div className="game__info">
        <h2 className="game__title">{game.name}</h2>
        <span className="game_date">{game.released}</span>
        <span className="game__rating">{game.rating}</span>
        <p className="game__description">{game.description}</p>
      </div>
      <CommentsList comments={comments} />
    </article>
  );
};

export default GameDetails;
