import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Collection from './pages/Collection';
import SingleNFT from './components/SingleNFT';

function App() {

  return (
    <>
      <Routes>
        <Route element={<Collection />} path='/' />
        <Route element={<SingleNFT />} path='/sin' />
      </Routes>
    </>
  )
}

export default App
