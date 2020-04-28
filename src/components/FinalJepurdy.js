import React, { useState, useContext, useEffect } from "react";
import SocketContext from "../SocketContext";
import { TextField } from "@material-ui/core";
// import { getPlayerByID } from "../../../server/helpers";

const FinalJepurdy = ({ players, tile }) => {
  // const socket = useContext(SocketContext);
  // const [myWager, setMyWager] = useState();
  // const [wagerPlaced, setWagerPlaced] = useState(false);
  // const [allWagersPlaced, setAllWagersPlaced] = useState(false);
  // const [myAnswer, setMyAnswer] = useState("");

  // const player = getPlayerByID(players, socket.id);

  // useEffect(() => {
  //   socket.on("allWagersPlaced", (wagers) => {
  //     setAllWagersPlaced(true);
  //   });
  // }, []);

  // const submitWager = (event) => {
  //   event.preventDefault();

  //   if (myWager > player.score || myWager < 0) {
  //     console.log("Invalid wager");
  //   } else {
  //     socket.emit("wagerPlaced", { playerID: socket.id, wager: myWager });
  //     setWagerPlaced(true);
  //   }
  // };

  // const submitAnswer = (event) => {
  //   event.preventDefault();

  //   if (myAnswer === tile.answer) {
  //     socket.emit("playerAnswer");
  //   }
  // };

  // return (
  //   <div>
  //     {!allWagersPlaced && <>{tile.category}</>}
  //     {!wagerPlaced && (
  //       <>
  //         <p>Input a valid wager</p>
  //         <form className="wager-field" onSubmit={(e) => submitWager(e)}>
  //           <TextField
  //             label="Enter your wager"
  //             variant="outlined"
  //             value={myWager}
  //             onChange={(e) => setMyWager(e.target.value)}
  //             onSubmit={(e) => submitWager(e)}
  //           />
  //         </form>
  //       </>
  //     )}
  //     {wagerPlaced && !allWagersPlaced ? (
  //       <p>Waiting for players to input their wager</p>
  //     ) : (
  //       <></>
  //     )}
  //     {allWagersPlaced && <>{tile.question}</>}
  //     <form className="answer-field" onSubmit={(e) => submitAnswer(e)}>
  //       <TextField
  //         label="What/who is..."
  //         variant="outlined"
  //         value={myAnswer}
  //         onChange={(e) => setMyAnswer(e.target.value)}
  //       />
  //     </form>
  //   </div>
  // );
  return;
};

export default FinalJepurdy;
