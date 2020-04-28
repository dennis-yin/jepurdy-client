import React, { useState, useContext } from "react";
import { TextField } from "@material-ui/core";
import SocketContext from "../SocketContext";

const Wager = () => {
  const socket = useContext(SocketContext);
  const [myWager, setMyWager] = useState(0);

  const submitWager = (event) => {
    event.preventDefault();

    socket.emit("playerWager", { playerID: socket.id, wager: myWager });
  };

  return (
    <section>
      <p>Final Jepurdy! Please input a valid wager</p>
      <form className="wager-form" onSubmit={(e) => submitWager(e)}>
        <TextField
          variant="outlined"
          value={myWager}
          onChange={(e) => setMyWager(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Wager;
