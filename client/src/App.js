import './App.css';

import { Routes, Route } from 'react-router-dom';

import MainPageBody from './Pages/MainPageBody';
import GetPageBody from './Pages/GetPageBody'
import PostPageBody from './Pages/PostPageBody'
import PutPageBody from './Pages/PutPageBody'
import DeletePageBody from './Pages/DeletePageBody'
import Layout from './Pages/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<MainPageBody />} />
        <Route path={'/get'} element={<GetPageBody />} />
        <Route path={'/post'} element={<PostPageBody />} />
        <Route path={'/put'} element={<PutPageBody />} />
        <Route path={'/delete'} element={<DeletePageBody />} />

      </Route>

    </Routes>
  );
}

export default App;
