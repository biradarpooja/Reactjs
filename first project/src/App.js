import logo from './logo.svg';
import './App.css';
import Greet from "./Component/Greet"
import Welcome from "./Component/Welcome"
import StateExample from "./Component/StateExample"
import Car from "./Component/Car"
import Simplejsx from "./Component/Simplejsx"
import MyInfo from "./Component/MyInfo"
import NameInput from "./Component/NameInput"
import UseEffectExample from "./Component/UseEffectExample"
import UseRefExample from "./Component/UseRefExample"
import studentcontextcom from "./Component/studentcontextcom"
import studentHome from "./Component/studentHome"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <MyInfo/>
      <Greet/>
      <Welcome/>
      <StateExample/>
      <Car/>
      <Simplejsx/>
      <MyInfo/>
      <NameInput/>
      <UseEffectExample/>
      <UseRefExample/>
      <studentcontextcom>
      <studentHome/>
      </studentcontextcom>
          </div>
  );
}

export default App;
