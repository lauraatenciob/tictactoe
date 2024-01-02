export default function HistoryList({ history, onMove, currentMove }) {
  return (
    <ol>
      {history.map((move, index) => (
        <li key={move}>
          {currentMove === index ? (
            <button className="selected">{index === 0 ? "INICIO" : `Movimiento #${index}`}</button>
          ) : (
            <button onClick={() => onMove(index)}>{index === 0 ? "INICIO" : `Movimiento #${index}`}</button>
          )}
        </li>
      ))}
    </ol>
  );
}
