import {useState} from "react";
import "./HelloWorld.css";

const HelloWorld = () => {
    const [msg] = useState('Hello world!')

    return (
        <p>
            {msg}
        </p>
    )
}

export default HelloWorld
