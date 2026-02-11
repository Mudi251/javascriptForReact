import "../css/ScoreItem.css";

const ScoreItem = ({ id, name, kor, eng, math, total, avg, date, onDelete }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{kor}</td>
      <td>{eng}</td>
      <td>{math}</td>
      <td>{total}</td>
      <td>{avg}</td>
      <td>{new Date(date).toLocaleDateString()}</td>
      <td>
        <button onClick={() => onDelete(id)}>삭제</button>
      </td>
    </tr>
  );
};

export default ScoreItem;