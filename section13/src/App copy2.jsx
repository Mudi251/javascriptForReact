import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import New from './components/New'
import Diary from './components/Diary'
import Edit from './components/Edit'
import NotFound from './components/NotFound'
import { getEmotionImage } from './util/getEmotionImage'

function App() {

  return (
    <>
    {/*공통부분 */}
    <h2>public img</h2>
    <img src="/emotion11.png" alt="이모션" />
    <img src="/emotion12.png" alt="이모션" />
    <img src="/emotion13.png" alt="이모션" />
    <img src="/emotion14.png" alt="이모션" />
    <img src="/emotion15.png" alt="이모션" />
    <h2>assets img</h2>
    <img src={getEmotionImage(1)} alt="이모션" />
    <img src={getEmotionImage(2)} alt="이모션" />
    <img src={getEmotionImage(3)} alt="이모션" />
    <img src={getEmotionImage(4)} alt="이모션" />
    <img src={getEmotionImage(5)} alt="이모션" />

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new/' element={<New/>}/>
      <Route path='/diary/' element={<Diary/>}/>
      <Route path='/edit/' element={<Edit/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}
export default App;