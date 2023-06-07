import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard personFirst={"Jane"} personLast={"Doe"} age={45} hairColor={"Black"}/>
      <PersonCard personFirst={"John"} personLast={"Smith"} age={88} hairColor={"Brown"}/>
      <PersonCard personFirst={"Millard"} personLast={"Fillmore"} age={50} hairColor={"Brown"}/>
      <PersonCard personFirst={"Maria"} personLast={"Smith"} age={62} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
