import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './views/Landing';
import Programs from './views/Programs';
import Nutrition from './views/Nutrition';
import Login from './views/Login';
import Register from './views/Register'
import Information from './views/Information';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/programs' element={<Programs/>} />
        <Route path='/nutrition' element={<Nutrition/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/information' element={<Information/>} />
      </Routes>
    </div>
  );
}

export default App;
