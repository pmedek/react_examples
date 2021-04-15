import {CSSTransition} from "react-transition-group";
import {useState} from "react";
import "./styles.scss";

const WriteSomething = () => {
    const [isVisible, setIsVisible] = useState(true)

    const handleOnClick = () => {
        setIsVisible(prevState => !prevState)
    }

    return (
        <div className={"TransitionExample example"}>
            <button onClick={handleOnClick}>Toggle</button>
            <CSSTransition
                in={isVisible}
                timeout={500}
                classNames="item"
                unmountOnExit
                appear
            >
                <p>hello</p>
            </CSSTransition>
        </div>
    )
}

export default WriteSomething
