import { useRef, useState } from "react";
import "../css/Editor.css";

const Editor = ({ onCreate }) => {
  const nameRef = useRef();
  const [name, setName] = useState("");
  const [kor, setKor] = useState("");
  const [eng, setEng] = useState("");
  const [math, setMath] = useState("");

  const onSubmit = () => {
    if (!name || !kor || !eng || !math) {
      nameRef.current.focus();
      return;
    }

    onCreate(name, kor, eng, math);
    setName(""); setKor(""); setEng(""); setMath("");
  };

  return (
    <div className="Editor">
      <h4>성적 등록</h4>
      <input ref={nameRef} value={name} onChange={e=>setName(e.target.value)} placeholder="이름"/>
      <input value={kor} onChange={e=>setKor(e.target.value)} placeholder="국어"/>
      <input value={eng} onChange={e=>setEng(e.target.value)} placeholder="영어"/>
      <input value={math} onChange={e=>setMath(e.target.value)} placeholder="수학"/>
      <button onClick={onSubmit}>등록</button>
    </div>
  );
};

export default Editor;