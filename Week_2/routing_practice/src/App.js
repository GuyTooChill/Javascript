import './App.css';
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import Number from './pages/Number';
import Word from './pages/Word';
import Color from './pages/Color';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <h1>My Routing Practice</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/number/' element={<Number/>} />
        <Route path='/number/:number' element={<Number/>} />
        <Route path='/hello/' element={<Word/>} />
        <Route path='/hello/:word' element={<Word/>} />
        <Route path='/color/' element={<Color/>} />
        <Route path='/color/:word/:color1/:color2' element={<Color/>} />
      </Routes>
    </div>
  );
}

export default App;
