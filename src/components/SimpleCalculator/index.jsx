import {useState, useEffect} from "react";
import Select from "react-select";

import "./styles.scss";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Operation = {
    Addition: 'Addition',
    Substraction: 'Subtraction',
    Multiplication: 'Multiplication',
    Division: 'Division'
}

const operationsOptions = [
    { value: Operation.Addition, label: '+' },
    { value: Operation.Substraction, label: '-' },
    { value: Operation.Multiplication, label: '*' },
    { value: Operation.Division, label: '/' },
]

const SimpleCalculator = () => {
    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [disabledSubmit, setDisabledSubmit] = useState(false)
    const [operation, setOperation] = useState(operationsOptions[0])
    const [result, setResult] = useState(0)

    const handleChangeNumber = (setNumberFnc) => (e) => {
        setNumberFnc(e.target.value)
    }

    const handleChangeOperation = selectedOption => {
        setOperation(selectedOption);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
            switch (operation.value) {
                case Operation.Addition:
                    setResult(parseFloat(number1) + parseFloat(number2))
                    break;
                case Operation.Substraction:
                    setResult(parseFloat(number1) - parseFloat(number2))
                    break;
                case Operation.Multiplication:
                    setResult(parseFloat(number1) * parseFloat(number2))
                    break;
                case Operation.Division:
                    setResult(parseFloat(number1) / parseFloat(number2))
                    break;
                default:
                    throw Error(`Bad operation ${operation}`)
            }
    }

    useEffect(() => {
        if ((!parseFloat(number1) && parseFloat(number1) !== 0) || (!parseFloat(number2) && parseFloat(number2) !== 0)) {
            setDisabledSubmit(true)
        } else {
            setDisabledSubmit(false)
        }
    }, [number1, number2])

    return (
        <div className='Calculator'>
            <h1>Simple calculator</h1>
            <form onSubmit={handleOnSubmit}>
                <div className={'Calculator__mainWrapper'}>
                    <input type="number" name="number1" placeholder='number 1' value={number1} onChange={handleChangeNumber(setNumber1)} />
                    <Select
                        className={`Calculator__operations`}
                        value={operation}
                        styles={{
                            menuList: styles => ({ ...styles, color: 'black' })
                        }}
                        onChange={handleChangeOperation}
                        options={operationsOptions}
                    />
                    <input type="number" name="number2" placeholder='number 2' value={number2} onChange={handleChangeNumber(setNumber2)} />
                    <span style={{top: '5px', position: 'relative'}}>=</span>
                    <TransitionGroup>
                        <CSSTransition
                            key={result}
                            timeout={500}
                            classNames="fade"
                        >
                            <span className={`Calculator__result`}>{result}</span>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <div className={'Calculator__buttonWrapper'}>
                    <input className={`Calculator__submitBtn${disabledSubmit ? '__disabled' : ''}`}
                           type="submit"
                           disabled={disabledSubmit}
                           value="Calculate"
                    />
                </div>
            </form>
        </div>
    )
}

export default SimpleCalculator
