import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import "./css/App.css";
import { useRef, useState } from "react";

const mockData = [
  {
    id: 0,
    name: "혹길동",
    kor: 50,
    eng: 60,
    math: 80,
    total: 50 + 60 + 80,
    avg: ((50 + 60 + 80) / 3).toFixed(1),
    date: new Date().getTime(),
  },
  {
    id: 1,
    name: "향길동",
    kor: 80,
    eng: 90,
    math: 60,
    total: 80 + 90 + 60,
    avg: ((80 + 90 + 60) / 3).toFixed(1),
    date: new Date().getTime(),
  },
  {
    id: 2,
    name: "형길동",
    kor: 75,
    eng: 85,
    math: 92,
    total: 75 + 85 + 92,
    avg: ((75 + 85 + 92) / 3).toFixed(1),
    date: new Date().getTime(),
  },
];

function App() {
  const [scores, setScores] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (name, kor, eng, math) => {
    const total = Number(kor) + Number(eng) + Number(math);
    const avg = (total / 3).toFixed(1);

    const newScore = {
      id: idRef.current++,
      name,
      kor,
      eng,
      math,
      total,
      avg,
      date: new Date().getTime(),
    };

    setScores([newScore, ...scores]);
  };

  const onDelete = (id) => {
    setScores(scores.filter((item) => item.id !== id));
  };

  const onUpdate = (id, newData) => {
    setScores(
      scores.map((item) =>
        item.id === id ? { ...item, ...newData } : item
      )
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Editor onCreate={onCreate} />
        <List scores={scores} onDelete={onDelete} onUpdate={onUpdate} />
      </div>
    </div>
  );
}

export default App;