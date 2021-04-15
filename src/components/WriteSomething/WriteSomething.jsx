const WriteSomething = ({something}) => {

    return (
        <div className={"example"}>
            {something ? (
                <p>{something}</p>
            ) : (
                <p>Some default text</p>
            )}
        </div>
    )
}

export default WriteSomething
