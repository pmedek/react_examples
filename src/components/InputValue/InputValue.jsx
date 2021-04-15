import {useState} from "react";

const InputValue = () => {
    const [inputVal, setInputVal] = useState(0)

    const handleOnClick = () => {
        setInputVal(prevVal => prevVal + 1)
    }

    return (
        <div className={"example"}>
            <input type="text" value={inputVal} />
            <button onClick={handleOnClick}>+</button>
        </div>
    )
}

export default InputValue
