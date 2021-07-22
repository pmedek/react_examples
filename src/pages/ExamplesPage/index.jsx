import HelloWorld from "../../components/HelloWorld";
import WriteSomething from "../../components/WriteSomething";
import InputValue from "../../components/InputValue";
import TransitionExample from "../../components/TransitionExample";
import ClassBindingExample from "../../components/ClassBindingExample";

const ExamplesPage = () => {
    return (
        <div className="ExamplesPage">
            <h2>Example 1 - hello world</h2>
            <HelloWorld/>
            <h2>Example 2 - write custom text</h2>
            <WriteSomething something="Haha!"/>
            <h2>Example 3 - input value</h2>
            <InputValue/>
            <h2>Example 4 - transitions</h2>
            <TransitionExample/>
            <h2>Example 5 - class binding</h2>
            <ClassBindingExample/>
        </div>
    )
}

export default ExamplesPage
