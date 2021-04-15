import logo from './logo.svg';
import './App.scss';
import HelloWorld from "./components/HelloWorld";
import WriteSomething from "./components/WriteSomething";
import InputValue from "./components/InputValue";
import TransitionExample from "./components/TransitionExample";
import ClassBindingExample from "./components/ClassBindingExample";

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>

            <h1>Example 1 - hello world</h1>
            <HelloWorld/>
            <h1>Example 2 - write custom text</h1>
            <WriteSomething something="Haha!"/>
            <h1>Example 3 - input value</h1>
            <InputValue/>
            <h1>Example 4 - transitions</h1>
            <TransitionExample/>
            <h1>Example 5 - class binding</h1>
            <ClassBindingExample/>
        </div>
    );
}

export default App;
