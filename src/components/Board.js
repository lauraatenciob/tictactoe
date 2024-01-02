import Square from "./Square";

export default function Board({ squareValue, squareWinner, onPlay, xIsNext }) {
  function handleClick(i) {
    if (squareValue[i] === null) {
      const newSquares = squareValue.slice();
      newSquares[i] = xIsNext ? "X" : "O";

      onPlay(newSquares)
    }
  }

  return (
    <div className="board">
      <div className="board-row">
        <Square
          position="top left"
          value={squareValue[0]}
          winnerSquare={squareWinner && squareWinner.includes(0)}
          onSquareClick={() => handleClick(0)}
        />
        <Square
          position="top"
          value={squareValue[1]}
          winnerSquare={squareWinner && squareWinner.includes(1)}
          onSquareClick={() => handleClick(1)}
        />
        <Square
          position="top right"
          value={squareValue[2]}
          winnerSquare={squareWinner && squareWinner.includes(2)}
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          position="left"
          value={squareValue[3]}
          winnerSquare={squareWinner && squareWinner.includes(3)}
          onSquareClick={() => handleClick(3)}
        />
        <Square
          value={squareValue[4]}
          winnerSquare={squareWinner && squareWinner.includes(4)}
          onSquareClick={() => handleClick(4)}
        />
        <Square
          position="right"
          value={squareValue[5]}
          winnerSquare={squareWinner && squareWinner.includes(5)}
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          position="bottom left"
          value={squareValue[6]}
          winnerSquare={squareWinner && squareWinner.includes(6)}
          onSquareClick={() => handleClick(6)}
        />
        <Square
          position="bottom"
          value={squareValue[7]}
          winnerSquare={squareWinner && squareWinner.includes(7)}
          onSquareClick={() => handleClick(7)}
        />
        <Square
          position="bottom right"
          value={squareValue[8]}
          winnerSquare={squareWinner && squareWinner.includes(8)}
          onSquareClick={() => handleClick(8)}
        />
      </div>
    </div>
  );
}
