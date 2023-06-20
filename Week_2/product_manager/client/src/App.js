import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>} />
      </Routes>
    </div>
  );
}

export default App;
