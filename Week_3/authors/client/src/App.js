import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Add from './pages/Add';
import All from './pages/All';
import One from './pages/One';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Add/>} />
        <Route path='/authors/all' element={<All/>} />
        <Route path='/authors/one/:id' element={<One/>} />
        <Route path='/authors/edit/:id' element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
