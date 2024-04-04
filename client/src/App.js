import './App.css';

import { Routes, Route } from 'react-router-dom';

import MainPageBody from './Components/MainPageBody';
import GetPageBody from './Components/GetPageBody'
import PostPageBody from './Components/PostPageBody'
import PutPageBody from './Components/PutPageBody'
import DeletePageBody from './Components/DeletePageBody'
import Layout from './Components/Layout';

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
