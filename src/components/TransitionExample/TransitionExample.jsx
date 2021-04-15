import {CSSTransition} from "react-transition-group";

const TransitionExample = () => {

    return (
        <div className={"TransitionExample example"}>
            <CSSTransition
                timeout={500}
                classNames="item"
            >
                <button>Toggle</button>
                <p>hello</p>
            </CSSTransition>
        </div>
    )
}

export default TransitionExample
