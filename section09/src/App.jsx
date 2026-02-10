import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'
import './css/App.css'
import { useState } from 'react'
import { useRef } from 'react'

//전역변수
const mockData = [ 
  { 
    id: 0, 
    isDone: false, 
    content: "React 공부하기", 
    date: new Date().getTime(), 
  }, 
  { 
    id: 1, 
    isDone: false, 
    content: "스프링부트공부하기", 
    date: new Date().getTime(), 
  }, 
  { 
    id: 2, 
    isDone: false, 
    content: "자바공부하기", 
    date: new Date().getTime(), 
  }, 
]; 

function App() {
  const [todos, setToodos] = useState(mockData)
  const idRef = useRef(3);
  //이벤트함수(setTodos 생성 핸들러함수)
  const onCreate = (content) =>{
    let newTodo =  
    { 
    id: idRef.current++, 
    isDone: false, 
    content: content, 
    date: new Date().getTime(), 
  }
    setToodos([newTodo, ...todos])
  }
  //이벤트함수(setTodos 데이타 수정)
  const onUpdate = (id) =>{
    setToodos(todos.map((todo)=>{
      return todo.id === id?{...todo, isDone: !todo.isDone} : todo
    }));
  }
  //이벤트함수(setTodos 삭제)
  const onDelete = (id) => {
    setToodos(todos.filter((todo)=>{
      return todo.id !== id
    }));
  }

  return (
    <>
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
      </div>
    </>
  )
}

export default App;
