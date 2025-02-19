import { useState } from "react";
function CalculatorApp() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
  
    const handleCalculate = (operation) => {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);
  
      if (isNaN(number1) || isNaN(number2)) {
        alert('Vui lòng nhập số');
        return;
      }
  
      switch (operation) {
        case 'add':
          setResult(number1 + number2);
          break;
        case 'subtract':
          setResult(number1 - number2);
          break;
        case 'multiply':
          setResult(number1 * number2);
          break;
        case 'divide':
          if (number2 === 0) {
            setResult('Không thể chia được cho 0');
          } else {
            setResult(number1 / number2);
          }
          break;
        default:
          setResult(null);
      }
    };
  
    return(
        <div className="App">
      <h2 style={{ textAlign: 'center', color: '#333' }}>Calculator</h2>

      <input
        type="text"
        placeholder="Nhập số đầu tiên"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #ddd',
          borderRadius: '5px',
        }}
      />

      <input
        type="text"
        placeholder="Nhập số thứ hai"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #ddd',
          borderRadius: '5px',
        }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <button
          onClick={() => handleCalculate('add')}
          style={{
            backgroundColor: '#4caf50',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            flex: 1,
            marginRight: '5px',
          }}
        >
          +
        </button>
        <button
          onClick={() => handleCalculate('subtract')}
          style={{
            backgroundColor: '#2196f3',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            flex: 1,
            marginRight: '5px',
          }}
        >
          -
        </button>
        <button
          onClick={() => handleCalculate('multiply')}
          style={{
            backgroundColor: '#ff9800',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            flex: 1,
            marginRight: '5px',
          }}
        >
          *
        </button>
        <button
          onClick={() => handleCalculate('divide')}
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            flex: 1,
          }}
        >
          /
        </button>
      </div>

      <div style={{ textAlign: 'center', color: '#333', fontWeight: 'bold', fontSize: '18px' }}>
        {result !== null && <p>Result: {result}</p>}
      </div>
    </div>
    );
}
export default CalculatorApp;