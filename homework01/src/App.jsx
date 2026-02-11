import { useRef, useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import "../src/css/App.css"

function App() {
  const idRef = useRef(1);
  const [scores, setScores] = useState([]);

  // 등록
  const onCreate = (name, kor, eng, math) => {
    const total = Number(kor) + Number(eng) + Number(math);
    const avg = (total / 3).toFixed(1);

    const newItem = {
      id: idRef.current++,
      name,
      kor,
      eng,
      math,
      total,
      avg,
      date: Date.now()
    };

    setScores([newItem, ...scores]);
  };

  // 삭제
  const onDelete = (id) => {
    setScores(scores.filter(item => item.id !== id));
  };

  return (
    <>
      <Header />
      <Editor onCreate={onCreate} />
      <List scores={scores} onDelete={onDelete} />
    </>
  );
}

export default App;