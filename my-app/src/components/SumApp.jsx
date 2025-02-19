import { useState } from "react";
function SumApp() {
    
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [result, setResult] = useState(0);
    function handleChangeA(e) {
        if(!isNaN(e.target.value))
            setA(e.target.value);
        else {
            alert("Please just enter number")
            setA(0)
        }
    }
    function handleChangeB(e) {
        if(!isNaN(e.target.value))
            setB(e.target.value);
        else {
            alert("Please just enter number")
            setB(0)
        }
    }
    function handleCalculate() {
        setResult(parseInt(a) + parseInt(b));
    }
    return (
        <div className="App">
            <input type="text" onChange={handleChangeA} placeholder="Enter Number A"/> 
            <span> + </span>
            <input type="text" onChange={handleChangeB} placeholder="Enter Number B" />  
            <br />
            <button onClick={handleCalculate}>Calculate</button>
            <br />
            <span>{result}</span>
        </div>
    );
}
export default SumApp;