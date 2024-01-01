import { ACTIONS } from "../actions";

const KeyBoard = (props) => {
    const dispatch = props.dispatch;

    const handleOperations = (actions, input) => {
        dispatch({type: actions, payload: { input }});
    }

    const handleClickNum = (input) => {
        dispatch({type: ACTIONS.ADD_DIGIT, payload: { input }})
    }

    return (
        <div className="keyboard">
            <div className="key-box">
                <div className="key" onClick={() => handleClickNum("7")}>
                    <p className="content">7</p>
                </div>
            </div>

            <div className="key-box">
                <div className="key" onClick={() => handleClickNum("8")}>
                    <p className="content">8</p>
                </div>
            </div>

            <div className="key-box">
                <div className="key" onClick={() => handleClickNum("9")}>
                    <p className="content">9</p>
                </div>
            </div>

            <div className="key-box delete">
                <div className="key" onClick={() => handleOperations(ACTIONS.DELETE_DIGIT, null)}>
                    <p className="content">DEL</p>
                </div>
            </div>

            <div className="key-box">
                <div className="key" onClick={() => handleClickNum("4")}>
                    <p className="content">4</p>
                </div>
            </div>

            <div className="key-box">
                <div className="key" onClick={() => handleClickNum("5")}>
                    <p className="content">5</p>
                </div>
            </div>

            <div className="key-box">
                <div className="key" onClick={() => handleClickNum("6")}>
                    <p className="content">6</p>
                </div>
            </div>

            <div className="key-box">
                <div className="key" onClick={() => handleOperations(ACTIONS.CHOOSE_OPERATION, '+')}>
                    <p className="content">+</p>
                </div>
            </div>

            <div className="key-box">
                <div className="key" onClick={() => handleClickNum("1")}>
                    <p className="content">1</p>
                </div>
            </div>

            <div className="key-box">
                <div className="key" onClick={() => handleClickNum("2")}>
                    <p className="content">2</p>
                </div>
            </div>

            <div className="key-box">
                <div className="key" onClick={() => handleClickNum("3")}>
                    <p className="content">3</p>
                </div>
            </div>

            <div className="key-box">
                <div className="key" onClick={() => handleOperations(ACTIONS.CHOOSE_OPERATION, '-')}>
                    <p className="content">-</p>
                </div>
            </div>

            <div className="key-box">
                <div className="key" onClick={() => handleClickNum(".")}>
                    <p className="content">.</p>
                </div>
            </div>

            <div className="key-box">
                <div className="key" onClick={() => handleClickNum("0")}>
                    <p className="content">0</p>
                </div>
            </div>

            <div className="key-box">
                <div className="key" onClick={() => handleOperations(ACTIONS.CHOOSE_OPERATION, '÷')}>
                    <p className="content">÷</p>
                </div>
            </div>

            <div className="key-box">
                <div className="key" onClick={() => handleOperations(ACTIONS.CHOOSE_OPERATION, '×')}>
                    <p className="content">×</p>
                </div>
            </div>

            <div className="key-box reset">
                <div className="key" onClick={() => handleOperations(ACTIONS.CLEAR, null)}>
                    <p className="content">RESET</p>
                </div>
            </div>

            <div className="key-box equal">
                <div className="key" onClick={() => handleOperations(ACTIONS.EVALUATE, '=')}>
                    <p className="content">=</p>
                </div>
            </div>
        </div>
    )
}

export default KeyBoard;

