import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Collection from './pages/Collection';
import LandingPage from './pages/Landing/LandingPage';

function App() {

  return (
    <>
      <Routes>
        <Route element={<Collection />} path='/collection' />
        <Route element={<LandingPage />} path='/' />
      </Routes>
    </>
  )
}

export default App
