import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld/HelloWorld";
import WriteSomething from "./components/WriteSomething/WriteSomething";
import InputValue from "./components/InputValue/InputValue";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
        <WriteSomething something="haha!"/>
        <InputValue />
      </header>
    </div>
  );
}

export default App;
