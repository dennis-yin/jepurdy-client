import React, { useState, useContext, useEffect } from "react";
import SocketContext from "../SocketContext";
import Board from "./Board";
import ViewTile from "./ViewTile";
import GamePanel from "./GamePanel";
import PlayerPanel from "./PlayerPanel";
import ScoreScreen from "./ScoreScreen";
import "../scss/Game.scss";

const Game = () => {
  const socket = useContext(SocketContext);
  const [tiles, setTiles] = useState([]);
  const [selectedTile, setSelectedTile] = useState();
  const [players, setPlayers] = useState([]);
  const [wagersPlaced, setWagersPlaced] = useState(false);
  const [wagerError, setWagerError] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    socket.on("tileData", (tiles) => setTiles(tiles));

    socket.on("playerData", (playersInLobby) => setPlayers(playersInLobby));

    socket.on("tileSelection", (tile) => setSelectedTile(tile));

    socket.on("validWager", () => {
      if (wagerError) {
        setWagerError(false);
      }
    });

    socket.on("invalidWager", () => setWagerError(true));

    socket.on("allWagersPlaced", () => setWagersPlaced(true));

    socket.on("showResults", () => setGameOver(true));

    return () => {
      socket.off("tileData");
      socket.off("playerData");
      socket.off("tileSelection");
      socket.off("validWager");
      socket.off("invalidWager");
      socket.off("allWagersPlaced");
    };
  }, []);

  return (
    <div className="game">
      {gameOver ? (
        <ScoreScreen players={players} />
      ) : (
        <>
          {selectedTile ? (
            <ViewTile
              tile={selectedTile}
              wagersPlaced={wagersPlaced}
              wagerError={wagerError}
            />
          ) : (
            <Board tiles={tiles} />
          )}
          <GamePanel tile={selectedTile} />
          <PlayerPanel players={players} />
        </>
      )}
    </div>
  );
};

export default Game;
