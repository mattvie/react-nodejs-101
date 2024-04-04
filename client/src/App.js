import './App.css';
import MainPageBody from './Components/MainPageBody';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="" className="App-logo">Logo</a>

        <nav>
          <a href="">GET</a>
          <a href="">POST</a>
          <a href="">PUT</a>
          <a href="">DELETE</a>
        </nav>
      </header>

      <MainPageBody />

    </div>
  );
}

export default App;
