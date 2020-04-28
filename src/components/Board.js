import React, { useContext } from "react";
import SocketContext from "../SocketContext";
import "../scss/Board.scss";

const Board = ({ tiles }) => {
  const socket = useContext(SocketContext);

  const selectTile = (tile) => {
    socket.emit("tileSelection", { tile, playerID: socket.id });
  };

  return (
    <>
      {tiles.map((category) => (
        <div className="column">
          <div className="tile categoryTile">{category[0].category}</div>
          {category.map((tile) => (
            <div
              className={`tile questionTile ${tile.viewed ? "viewed" : ""}`}
              onClick={() => selectTile(tile)}
            >
              {tile.value}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Board;
