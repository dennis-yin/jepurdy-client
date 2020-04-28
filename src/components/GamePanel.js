import React, { useState, useContext } from "react";
import { Button, TextField, sizing } from "@material-ui/core";
import SocketContext from "../SocketContext";
import { ROUND_THREE } from "../constants";
import "../scss/GamePanel.scss";

const GamePanel = ({ tile }) => {
  const socket = useContext(SocketContext);
  const [myAnswer, setMyAnswer] = useState("");

  const buzzIn = () => {
    socket.emit("buzzIn", socket.id);
  };

  const submitAnswer = (event) => {
    event.preventDefault();
    setMyAnswer("");

    socket.emit("playerAnswer", {
      playerID: socket.id,
      playerAnswer: myAnswer,
    });
  };

  return (
    <section className="game-panel">
      {(!tile || tile.round !== ROUND_THREE) && (
        <Button
          variant="contained"
          color="secondary"
          buttonStyle={{ borderRadius: 50 }}
          style={{ borderRadius: 50 }}
          onClick={buzzIn}
        >
          BUZZ
        </Button>
      )}
      <form className="answer-field" onSubmit={(e) => submitAnswer(e)}>
        <TextField
          label="What/who is..."
          variant="outlined"
          value={myAnswer}
          onChange={(e) => setMyAnswer(e.target.value)}
        />
      </form>
    </section>
  );
};

export default GamePanel;
