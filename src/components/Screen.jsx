const Screen = (props) => {
    const { currentOperand, prevOperand, operation } = props.state;
    return (
        <div className="screen">
            <div className="screen-info">
                <p className="info">{prevOperand || <span></span>}</p>
                <p className="info">{operation || <span></span>}</p>
            </div>
            <p>{currentOperand}</p>
        </div>
    )
}

export default Screen;