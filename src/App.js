import React from "react";
import io from "socket.io-client";
import SocketContext from "./SocketContext";
import Register from "./components/Register";
import Game from "./components/Game";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./scss/App.scss";

const socket = io.connect("https://jepurdy-server.herokuapp.com/");

const App = () => (
  <SocketContext.Provider value={socket}>
    <Router>
      <Route path="/" exact component={Register} />
      <Route path="/game" component={Game} />
    </Router>
  </SocketContext.Provider>
);

export default App;
