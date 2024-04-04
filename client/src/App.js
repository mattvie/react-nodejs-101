import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import MainPageBody from './Components/MainPageBody';
import GetPageBody from './Components/GetPageBody'
import PostPageBody from './Components/PostPageBody'
import PutPageBody from './Components/PutPageBody'
import DeletePageBody from './Components/DeletePageBody'

function App() {
  return (
    <Routes>
      <Route index element={
        <div className="IndexPage">
          <Header />

          <MainPageBody />
        </div>
      } />

      <Route path={'/get'} element={
        <div>
          <Header />

          <GetPageBody />
        </div>
      } />

      <Route path={'/post'} element={
        <div>
          <Header />

          <PostPageBody />
        </div>
      } />

      <Route path={'/put'} element={
        <div>
          <Header />

          <PutPageBody />
        </div>
      } />

      <Route path={'/delete'} element={
        <div>
          <Header />

          <DeletePageBody />
        </div>
      } />


    </Routes>
  );
}

export default App;
