import "./styles.scss";

const SimpleCalculator = () => {

    return (
        <div className='Calculator'>
            <h1>Simple calculator</h1>
            <form>
                <div>
                    <input type="text" name="number1" placeholder='number 1'/>
                    {' + '}
                    <input type="text" name="number2" placeholder='number 2'/>
                    {' = '}
                </div>
                <div className={'Calculator__buttonWrapper'}><input type="submit" value="Submit"/></div>
            </form>
        </div>
    )
}

export default SimpleCalculator
