import React, { useEffect, useState } from "react";

import HttpClient from "./services/http";

import "./App.scss";

import GameCardsGrid from "./components/GameCardsGrid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Pagination from "./components/Pagination";

import HashLoader from "react-spinners/HashLoader";
import GameDetails from "./components/GameDetails";

const http = new HttpClient("https://plume-gelatinous-asp.glitch.me");

function App() {
  const [games, setGames] = useState([]);
  const [gamesCount, setGamesCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState("games");
  const [selectedGame, setSelectedGame] = useState(null);
  const [currGamesPage, setCurrGamesPage] = useState(1);

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    getPaginatedGames(currGamesPage);
  }, [currGamesPage]);

  async function getGames() {
    setLoading(true);
    const res = await http.get("/games?_page=1&_limit=2", {
      parseResponse: false,
    });

    setGamesCount(Number(res.headers.get("x-total-count")));
    const gamesList = await res.json();

    setGames(gamesList);
    setLoading(false);
  }

  function handleClick(currentPage) {
    setCurrentPage(currentPage);
  }

  function handleGameSelect(id) {
    const game = games.find((game) => Number(game.id) === Number(id));
    setSelectedGame(game);
    setCurrentPage("game");
  }

  async function handlePageChange(page) {
    setCurrGamesPage(page);
  }

  async function getPaginatedGames(page) {
    const newGames = await http.get(`/games?_page=${page}&_limit=8`);
    setGames(newGames);
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
          {currentPage === "games" && (
            <Pagination
              itemsCount={gamesCount}
              pageSize={8}
              onPageChange={handlePageChange}
            />
          )}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
