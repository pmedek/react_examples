import {useState} from "react";
import "./HelloWorld.css";

const HelloWorld = () => {
    const [msg] = useState('Hello world!')

    return (
        <div className={"HelloWorld example"}>
            <p>
                {msg}
            </p>
        </div>
    )
}

export default HelloWorld
