import { useEffect, useReducer, useRef} from 'react';
import './App.css';

function App() {
  const urlAPI = "https://67da396035c87309f52b80fb.mockapi.io/todo";
  useEffect(() => {
    fetch(urlAPI)
    .then((res) => {
      return res.json();
    }).then((data) => {
      countryDispatch({ type: 'SET_TODOS', payload: data });
    });
  },[]);
  const reducer = (state, action) => {
    switch (action.type) {
      case '+':
        return { ...state, count: state.count + 1 };
      case '-':
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
    
  };
  const countryReducer = (state, action) => {
      switch(action.type){
        case 'SET_TODOS':
        return action.payload;
        case 'ADD':
          return [...state, action.payload];
        case 'DELETE':
          return state.filter((item) => item.id !== action.payload);
        default:
          return state;
      }
  }
  const [country, countryDispatch] = useReducer(countryReducer, []);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  var inputRef = useRef(0);
  function onIncrement() {
    dispatch({ type: '+' });
  }
  function onDecrement() {
    dispatch({ type: '-' });
  }
  function handleClick() {
    const newCountry = inputRef.current.value;
    if (newCountry === '') {
      alert('Please enter a country');
      return;
    }
  
    fetch(urlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newCountry }),
    })
      .then((res) => res.json())
      .then(() => {

        return fetch(urlAPI)
          .then((res) => res.json())
          .then((updatedData) => {
           
            countryDispatch({ type: 'SET_TODOS', payload: updatedData });
            inputRef.current.value = '';
          });
      });
  }
  function handleDelete(id){
    fetch(`${urlAPI}/${id}`, {
      method: 'DELETE'
    }).then(() => {
      countryDispatch({type: 'DELETE', payload: id});
    });
  }
  return (
    <>
      <div className="card">
        <div>
          <p>Count is: {state.count}</p>
            <div>
              <button
                style={{ backgroundColor: 'green', marginRight: '10px' }}
                onClick={onIncrement}
              >
                Increment
              </button>
              <button style={{ backgroundColor: 'red' }} onClick={onDecrement}>
                Decrement
              </button>
            </div>
            <div style={{marginTop: "10px"}}>
            <input type="text" ref={inputRef} style={{marginRight: "10px", height: "30px", width: "300px", borderRadius: "10px", borderColor: "grey"}} placeholder='Enter new country'/> 
            <button style={{backgroundColor: "green"}} onClick={handleClick}>Click</button>
            </div>
            <div>
  <table style={{ width: '100%'}}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {country.map((item) => (
        <tr style={{ marginBottom: '10px' }} key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <button
              style={{ backgroundColor: 'red', color: 'white' }}
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
        
        </div>
      </div>
    </>
  );
}

export default App;