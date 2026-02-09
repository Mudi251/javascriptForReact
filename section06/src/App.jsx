import './App.css';
import { useState } from 'react';
import HookExam from './components/HookExam';

export default function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('ON');
  const onPlusClick = (e) =>{setCount(count +1 )}
  const onLightClick = (e) =>{setLight (light === 'ON'? 'OFF': 'ON')}
  
  return<>
    <HookExam/>

  </>
}

