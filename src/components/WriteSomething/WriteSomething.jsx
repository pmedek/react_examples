const WriteSomething = ({something}) => {

    return (
        <div>
            {something ? (
                <p>{something}</p>
            ) : (
                <p>Some default text</p>
            )}
        </div>
    )
}

export default WriteSomething
