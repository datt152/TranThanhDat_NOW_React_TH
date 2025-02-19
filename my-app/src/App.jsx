import { useState } from 'react';
import './App.css';
import CalculatorApp from './components/CalculatorApp';
import ToDoApp from './components/ToDoApp';
import SumApp from './components/SumApp';
import TabButton from './components/TabButton';
import Hello from './components/Hello';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Hello':
        return <Hello />;
      case 'CalculatorApp':
        return <CalculatorApp />;
      case 'ToDoApp':
        return <ToDoApp />;
      case 'SumApp':
        return <SumApp />;
      case 'TabButton':
        return <TabButton />;
      default:
        return null;
    }
  };

  return (
    <div>
      <button onClick={() => setActiveComponent('Hello')}>Bài tập 1</button>
      <button onClick={() => setActiveComponent('CalculatorApp')}>Bài tập 2</button>
      <button onClick={() => setActiveComponent('ToDoApp')}>Bài tập 3</button>
      <button onClick={() => setActiveComponent('SumApp')}>Bài tập 4</button>
      <button onClick={() => setActiveComponent('TabButton')}>Bài tập 5</button>
      {renderComponent()}
    </div>
  );
}

export default App;