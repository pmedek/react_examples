import {useState} from "react";
import "./styles.scss";

const HelloWorld = () => {
    const [isRed, setIsRed] = useState(true)

    const handleOnClick = () => {
        setIsRed(prevState => !prevState)
    }

    return (
        <div className={"ClassBindingExample example"}>
            <button onClick={handleOnClick}>Toggle</button>
            <p className={isRed ? `red` : `blue`}>hello</p>
        </div>
    )
}

export default HelloWorld
