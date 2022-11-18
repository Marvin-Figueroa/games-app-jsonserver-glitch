import GameCard from "./GameCard";

const GameCardsGrid = ({ games }) => {
  return (
    <section className="games-container">
      {games.map((game) => (
        <GameCard />
      ))}
    </section>
  );
};

export default GameCardsGrid;
