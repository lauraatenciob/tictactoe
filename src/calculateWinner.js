const winnerOptions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export default function calculateWinner(squares) {
  for (let i = 0; i < winnerOptions.length; i++) {
    const [a, b, c] = winnerOptions[i];
    if (squares[a] !== null && squares[a] === squares[b] && squares[b] === squares[c]) {
      return [a, b, c];
    }
  }
  return false;
}
