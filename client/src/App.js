import './App.css';

import { Routes, Route } from 'react-router-dom';

import MainPageBody from './Components/MainPageBody';
import Header from './Components/Header';

function App() {
  return (
    <Routes>
      <Route index element={
        <div className="Index">
          <Header />

          <MainPageBody />
        </div>
      } />
    </Routes>

  );
}

export default App;
