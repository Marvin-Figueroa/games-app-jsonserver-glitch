import React, { useEffect, useState } from "react";

import HttpClient from "./services/http";

import "./App.scss";
import GameCardsGrid from "./components/GameCardsGrid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";

import HashLoader from "react-spinners/HashLoader";
import GameDetails from "./components/GameDetails";
const http = new HttpClient("https://plume-gelatinous-asp.glitch.me");

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState("games");
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    getGames();
  }, []);

  async function getGames() {
    setLoading(true);
    const gamesList = await http.get("/games");

    setGames(gamesList);
    setLoading(false);
  }

  function handleClick(currentPage) {
    console.log(currentPage);
    setCurrentPage(currentPage);
  }

  function handleGameSelect(id) {
    const game = games.find((game) => Number(game.id) === Number(id));
    setSelectedGame(game);
    setCurrentPage("game");
    console.log(game);
  }

  return (
    <div className="App">
      {loading ? (
        <HashLoader color="#fb8500" />
      ) : (
        <>
          <Navbar handleClick={handleClick} currentPage={currentPage} />
          <main>
            {(currentPage === "games" && (
              <GameCardsGrid
                handleGameSelect={handleGameSelect}
                games={games}
              />
            )) ||
              (currentPage === "about" && <About />) ||
              (currentPage === "game" && <GameDetails game={selectedGame} />)}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
