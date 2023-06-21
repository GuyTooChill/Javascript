import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import All from './pages/All';
import One from './pages/One';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/products/all' element={<All/>} />
        <Route path='/products/one' element={<One/>} />
        <Route path='/products/edit' element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
