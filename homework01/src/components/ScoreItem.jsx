import { useState } from "react";
import "../css/ScoreItem.css";

const ScoreItem = ({
  id,
  name,
  kor,
  eng,
  math,
  date,
  onDelete,
  onUpdate,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const [editData, setEditData] = useState({
    name,
    kor,
    eng,
    math,
  });

  const currentKor = isEdit ? Number(editData.kor) : Number(kor);
  const currentEng = isEdit ? Number(editData.eng) : Number(eng);
  const currentMath = isEdit ? Number(editData.math) : Number(math);

  const total = currentKor + currentEng + currentMath;
  const avg = (total / 3).toFixed(2);

  const onClickEdit = () => {
    if (isEdit) {
      onUpdate(id, {
        name: editData.name,
        kor: Number(editData.kor),
        eng: Number(editData.eng),
        math: Number(editData.math),
      });
    }
    setIsEdit(!isEdit);
  };

  const onChangeEdit = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <tr>
      <td>{id}</td>

      <td>
        {isEdit ? (
          <input name="name" value={editData.name} onChange={onChangeEdit} />
        ) : (
          name
        )}
      </td>

      <td>
        {isEdit ? (
          <input name="kor" type="number" value={editData.kor} onChange={onChangeEdit} />
        ) : (
          kor
        )}
      </td>

      <td>
        {isEdit ? (
          <input name="eng" type="number" value={editData.eng} onChange={onChangeEdit} />
        ) : (
          eng
        )}
      </td>

      <td>
        {isEdit ? (
          <input name="math" type="number" value={editData.math} onChange={onChangeEdit} />
        ) : (
          math
        )}
      </td>

      <td>{total}</td>
      <td>{avg}</td>
      <td>{new Date(date).toLocaleDateString()}</td>

      <td>
        <button onClick={onClickEdit}>
          {isEdit ? "완료" : "수정"}
        </button>
        <button onClick={() => onDelete(id)}>삭제</button>
      </td>
    </tr>
  );
};

export default ScoreItem;