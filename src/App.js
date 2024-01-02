import { useState } from "react";

import Board from "./components/Board";
import calculateWinner from "./calculateWinner";
import HistoryList from "./components/HistoryList";

export default function FromScratch() {
  const [currentMove, setCurrentMove] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([new Array(9).fill(null)]);

  const squares = history[currentMove];
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(Boolean);

  function handlePlay(newSquares) {
    const newHistory = history.slice(0, currentMove + 1);
    newHistory.push(newSquares);

    setHistory(newHistory);
    setCurrentMove(currentMove + 1);
    setXIsNext(!xIsNext);
  }

  function goTo(index) {
    setCurrentMove(index);
  }

  function renderTurnMessage() {
    if (winner) {
      return `EL GANADOR ES ${squares[winner[0]]}`;
    }
    if (isDraw) {
      return "EMPATE";
    }

    return `TURNO DE ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="game">
      <div>
        <p>{renderTurnMessage()}</p>
        <Board
          squareValue={squares}
          squareWinner={winner}
          onPlay={handlePlay}
          xIsNext={xIsNext}
        />
      </div>

      <div className="game-info">
        <HistoryList
          history={history}
          onMove={goTo}
          currentMove={currentMove}
        />
      </div>
    </div>
  );
}
