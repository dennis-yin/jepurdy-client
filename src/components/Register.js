import React, { useState, useContext } from "react";
import SocketContext from "../SocketContext";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

import "../scss/Register.scss";

const joinLobby = (socket, username, lobby) => {
  socket.emit("join", { username, lobby }, (error) => {
    if (error) {
      alert(error);
    }
  });
};

const Register = () => {
  const socket = useContext(SocketContext);
  const [username, setUsername] = useState("");
  const [lobby, setLobby] = useState("");

  return (
    <section className="register">
      <form className="registration-form">
        <h1 className="title">JEPURDY!</h1>
        <TextField
          className="username"
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          className="lobby"
          label="Lobby"
          onChange={(e) => setLobby(e.target.value)}
        />
        <Link
          onClick={(e) =>
            !username || !lobby
              ? e.preventDefault()
              : joinLobby(socket, username, lobby)
          }
          to={{ pathname: "/game" }}
        >
          <Button variant="contained" color="primary">
            PLAY
          </Button>
        </Link>
      </form>
    </section>
  );
};

export default Register;
