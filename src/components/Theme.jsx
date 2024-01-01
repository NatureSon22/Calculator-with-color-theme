import { useState } from "react";

const Theme = (props) => {
    const [classSpan, setClassSpan] = useState(1);
    const { setTheme } = props.theme;

    const handleClick = () => {
        setClassSpan(prev => {
            let newVal = prev < 3 ? prev + 1 : 1;
            setTheme(`theme${newVal}`);
            return newVal
        }
    )
    }

    return (
        <div className="calc-theme">
            <p>THEME</p>
            
            <div className="calc-switch">
                <div className="calc-label">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
                <div className="calc-switch-main" >
                    <div className={`circle circle-${classSpan}`} onClick={handleClick}></div>
                </div>
            </div>
        </div>
    )
}

export default Theme;