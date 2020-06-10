import React from "react";
import "../scss/PlayerPanel.scss";

const PlayerPanel = ({ players }) => {
  console.log(players)
  return (
    <>
      <section className="player-panel">
        {players.map((player) => (
          <div className="player">
            <p className="username">{player.username}</p>
            <p className="score">
              {player.score < 0
                ? `-$${player.score.toString().substring(1)}`
                : `$${player.score}`}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default PlayerPanel;
