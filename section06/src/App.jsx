import './App.css';
import { useState } from 'react';
import Register from './components/Register';

export default function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('ON');
  const onPlusClick = (e) =>{setCount(count +1 )}
  const onLightClick = (e) =>{setLight (light === 'ON'? 'OFF': 'ON')}
  
  return<>
    <Register/>

  </>
}

