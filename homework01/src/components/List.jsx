import { useState } from "react";
import ScoreItem from "./ScoreItem";
import "../css/List.css";

const List = ({ scores, onDelete, onUpdate }) => {
  const [search, setSearch] = useState("");

  const filterData = scores.filter(item =>
    item.name.includes(search)
  );

  return (
    <div className="List">
      <h4>성적 목록</h4>
      <input
        placeholder="이름 검색"
        value={search}
        onChange={e=>setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>번호</th><th>이름</th><th>국어</th>
            <th>영어</th><th>수학</th>
            <th>총점</th><th>평균</th><th>등록일</th><th>관리</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map(item =>
            <ScoreItem key={item.id} {...item} onDelete={onDelete} onUpdate={onUpdate}/>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;