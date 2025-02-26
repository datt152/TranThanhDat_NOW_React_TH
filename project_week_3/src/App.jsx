import { useState } from "react";
import "./App.css";

function App() {
  const [inputMoney, setInputMoney] = useState(0);
  const [rate, setRate] = useState(0);
  const [investMoney, setInvestMoney] = useState(0);
  const [result, setResult] = useState(null);

  function handleChangeInputMoney(e) {
    setInputMoney(e.target.value);
  }

  function handleChangeRate(e) {
    setRate(e.target.value);
  }

  function handleChangeInvestMoney(e) {
    setInvestMoney(e.target.value);
  }

  function handleCalculate() {
    if ( isNaN(inputMoney) || isNaN(rate) || isNaN(investMoney) || (inputMoney >= investMoney)) {
      setResult("Không hợp lệ");
      return;
    }

    let rs = Math.log(investMoney / inputMoney) / Math.log(1 + rate / 100);
    setResult(rs.toFixed(1));
  }

  return (
    <>
      <div className="App">
        <h2>Tính số năm cần để đạt mục tiêu</h2>
        <div>
          <span>Input your invest money: </span>
          <input type="text" onChange={handleChangeInvestMoney} />
        </div>
        <div>
          <span>Input rate: </span>
          <input type="text" onChange={handleChangeRate} />
        </div>
        <div>
          <span>Input money: </span>
          <input type="text" onChange={handleChangeInputMoney} />
        </div>
        

        <div className="result">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Year</th>
                <th>Money</th>
                <th>Rate</th>
                <th>End year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{new Date().getFullYear()}</td>
                <td>{inputMoney}</td>
                <td>{rate}</td>
                <td>{result}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleCalculate}>Calculate</button>
        </div>
      </div>
    </>
  );
}

export default App;
