import {useState} from "react";
import "./styles.scss";

const HelloWorld = () => {
    const [red, setRed] = useState(true)

    const handleOnClick = () => {
        setRed(prevState => !prevState)
    }

    return (
        <div className={"ClassBindingExample example"}>
            <button onClick={handleOnClick}>Toggle</button>
            <p className={red && `red`}>hello</p>
        </div>
    )
}

export default HelloWorld
