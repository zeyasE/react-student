import 'bootstrap/dist/css/bootstrap.min.css'
import AddStudent from "./components/AddStudent"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Students in Class</h1>
      <AddStudent />
    </div>
  );
}

export default App;
