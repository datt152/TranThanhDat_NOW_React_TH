import { useState } from "react";

function ToDoApp() {
    const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '') return; // Không thêm công việc trống
    setTodoList([...todoList, task]);
    setTask(''); // Reset input
  };

  const handleRemoveTask = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };
    return (
    <div className="App">
      <h1>Todo App</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Nhập công việc"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={handleAddTask}
          style={{
            padding: '10px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Thêm công việc
        </button>
      </div>
      <ul>
        {todoList.map((task, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              marginBottom: '10px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <span>{task}</span>
            <button
              onClick={() => handleRemoveTask(index)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#ff4d4d',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoApp;