import { useState } from "react";
function Hello() {

    const [name, setName] = useState("");
    const [text, setText] = useState("");
    function handleChange(e) {
        setName(e.target.value);
    }
    function handleClick(){
        setText("Hello " + name);
    }
    return (
        <div className="App">
            <input type="text" placeholder="Enter your name" onChange={handleChange}/>
            <button onClick={handleClick}>
                Click
            </button>
            <br />
            <span>{text}</span>
        </div>
    );

}
export default Hello;