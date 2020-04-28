import React from "react";

const Modal = ({ type, correct, playerAnswer, username }) => {
  console.log(
    `TYPE: ${type}, CORRECT: ${correct}, ANSWER: ${playerAnswer}, NAME: ${username}`
  );
  return (
    <>
      {type === "ANSWERING" && <p>{username} is thinking...</p>}
      {type === "RESULT" &&
        (correct ? (
          <p>
            CORRECT: {username} responded: "What/who is {playerAnswer}?"
          </p>
        ) : (
          <p>
            INCORRECT: {username} responded: "What/who is {playerAnswer}?"
          </p>
        ))}
    </>
  );
};

export default Modal;
