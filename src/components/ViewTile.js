import React from "react";
import Wager from "./Wager";
import { ROUND_THREE } from "../constants";
import "../scss/ViewTile.scss";

const ViewTile = ({ tile, wagersPlaced, wagerError }) => {
  return (
    <div className="viewTile">
      {tile.round === ROUND_THREE ? (
        <>
          {tile.category}
          {wagerError && (
            <p>
              Invalid wager. Wager must be an integer greater than or equal to
              0, and less than or equal to your score.
            </p>
          )}
          {wagersPlaced ? <p>{tile.question}</p> : <Wager />}
        </>
      ) : (
        <>{tile.question}</>
      )}
    </div>
  );
};

export default ViewTile;
