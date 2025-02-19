import { useState } from "react";

function TabButton() {
    const a = {
        JSX: "JavaScript XML, a syntax extension for JavaScript used in React to describe UI elements.",
        Component: "A reusable piece of UI in React, defined as a function or class.",
        Prob: "Short for 'Props', which are inputs to a React component used to pass data and event handlers.",
        State: "A built-in object in React components that holds data that may change over time."
    };
    const [text, setText] = useState('');
    function handleChangeText(e) {
        var lbl = e.target.innerText;
        switch (lbl) {
            case 'JSX':
                setText(a.JSX);
                break;
            case 'Component':
                setText(a.Component);
                break;
            case 'Prob':
                setText(a.Prob);
                break;
            case 'State':
                setText(a.State);
                break;
            default:
                setText('');
        }

    }
        return (
    
        <div className="App">
            <button onClick={handleChangeText}>
                JSX
            </button>
                
            <button onClick={handleChangeText}>
                Component
            </button>
                
            <button onClick={handleChangeText}>Prob
            </button>
            <button onClick={handleChangeText}>
                State
            </button>   
            <br />
            <span>{text}</span>
        </div>
    );
}
export default TabButton;