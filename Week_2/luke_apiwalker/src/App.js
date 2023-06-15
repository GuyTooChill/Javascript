import './App.css';
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import Dropdown from './pages/dropdown';
import Person from './components/Person';
import Planet from './components/Planet';

function App() {
  return (
    <div className="App">
      <h1>Luke APIwalker</h1>
      <Dropdown/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/people/:number' element={<Person/>} />
        <Route path='/planets/:number' element={<Planet/>} />
      </Routes>
    </div>
  );
}

export default App;
