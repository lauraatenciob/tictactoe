export default function Square({ value, onSquareClick, winnerSquare, position }) {
  return (
    <button
      onClick={onSquareClick}
      className={winnerSquare ? `square winner ${position}` : `square ${position}`}
    >
      {value}
    </button>
  );
}
