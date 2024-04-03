import './App.css';

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

      <div className="App-body">
        <a
          className="App-link"
          href="https://react.dev/reference/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          React doc
        </a>

        <a
          className="App-link"
          href="https://nodejs.org/docs/latest/api/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node.js doc
        </a>
      </div>
    </div>
  );
}

export default App;
