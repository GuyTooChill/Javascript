import './App.css';
import FetchAxiosPokeAPI from './components/AxiosPokemon';
import FetchPokeAPI from './components/Pokemon';

function App() {
  return (
    <div className="App">
      {/* <FetchPokeAPI/> */}
      <FetchAxiosPokeAPI/>
    </div>
  );
}

export default App;
