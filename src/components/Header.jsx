import Theme from "./Theme";

const Header = (props) => {
    return (
        <section className="calc-header">
            <h1>calc</h1>

            <Theme theme={props} ></Theme>
        </section>
    )
}

export default Header;