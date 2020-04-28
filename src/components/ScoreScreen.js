import React from "react";
import "../scss/ScoreScreen.scss";

const ScoreScreen = ({ players }) => {
  // Sort the players by score in descending order
  const sortedPlayers = [...players].sort((a, b) =>
    a.score <= b.score ? 1 : -1
  );

  return (
    <section className="score-screen">
      <p className="title">Results</p>
      {sortedPlayers.map((player) => (
        <p className="player-score">
          {player.score < 0
            ? `${sortedPlayers.indexOf(player) + 1}. ${
                player.username
              } -$${player.score.toString().substring(1)}`
            : `${sortedPlayers.indexOf(player) + 1}. ${player.username} $${
                player.score
              }`}
        </p>
      ))}
    </section>
  );
};

export default ScoreScreen;
