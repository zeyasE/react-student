import 'bootstrap/dist/css/bootstrap.min.css'
import AddStudent from "./components/AddStudent"
import TableStudent from './components/TableStudent';
import VisibilityFilter from './components/VIsibilityFilter';

function App() {
  return (
    <div className="App">
      <h1>Students in Class</h1>
      <AddStudent />
      <TableStudent />
      <VisibilityFilter />
    </div>
  );
}

export default App;
