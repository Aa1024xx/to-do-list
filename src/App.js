import React, {useState, useEffect} from 'react';
import './App.css';

const removeIcon = <svg t="1599609008289" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1157" width="200" height="200"><path d="M689.257 279.687l-95.113 0c-4.745-41.142-39.749-73.208-82.146-73.208-42.392 0-77.393 32.064-82.139 73.208l-95.118 0c-38.493 0-69.803 31.321-69.803 69.811l0 3.581c0 29.413 18.316 54.591 44.116 64.848l0 329.782c0 38.493 31.314 69.811 69.804 69.811l266.283 0c38.49 0 69.802-31.322 69.802-69.811l0-329.781c25.799-10.26 44.116-35.436 44.116-64.848l0-3.581c0-38.493-31.313-69.813-69.802-69.813zM512 239.587c24.112 0 44.238 17.283 48.692 40.1l-97.375 0c4.452-22.819 24.579-40.1 48.682-40.1zM681.838 747.709c0 20.239-16.465 36.705-36.697 36.705l-266.283 0c-20.23 0-36.697-16.469-36.697-36.705l0-324.818 339.677 0 0 324.818zM725.953 353.08c0 20.239-16.465 36.705-36.697 36.705l-354.514 0c-20.23 0-36.697-16.467-36.697-36.705l0-3.581c0-20.239 16.465-36.705 36.697-36.705l354.515 0c20.23 0 36.697 16.467 36.697 36.705l0 3.581zM423.251 742.074c9.142 0 16.553-7.414 16.553-16.553l0-186.382c0-9.141-7.412-16.554-16.553-16.554s-16.553 7.415-16.553 16.554l0 186.382c-0.002 9.142 7.41 16.553 16.552 16.553zM512 742.074c9.143 0 16.554-7.415 16.554-16.553l0-186.382c0-9.141-7.415-16.554-16.554-16.554-9.142 0-16.553 7.415-16.553 16.554l0 186.382c0 9.142 7.41 16.553 16.552 16.553zM600.749 742.074c9.142 0 16.552-7.414 16.552-16.553l0-186.382c0-9.141-7.412-16.554-16.552-16.554-9.143 0-16.553 7.415-16.553 16.554l0 186.382c-0.002 9.142 7.414 16.553 16.553 16.553z" p-id="1158" fill="#ffffff"></path></svg>
const completeIcon = <svg t="1599610616784" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2287" width="200" height="200"><path d="M499.7587 800.00032 184.85566 474.771097l80.721463-65.702398 182.094268 145.004535c74.617441-90.096994 240.284575-268.907473 468.845131-411.111219l19.241226 45.057195C725.971791 383.722428 554.202683 659.205667 499.7587 800.00032L499.7587 800.00032 499.7587 800.00032zM894.33329 417.391249c7.199982 29.791513 11.047614 60.889789 11.047614 92.89369 0 217.60197-176.406732 394.009725-394.018935 394.009725-217.604016 0-394.013819-176.411849-394.013819-394.009725 0-217.60811 176.408779-394.017912 394.013819-394.017912 54.121642 0 105.691157 10.921747 152.634306 30.66644L663.996275 92.050486c-47.605228-17.377786-99.013061-26.861788-152.634306-26.861788-245.815545 0-445.092148 199.276602-445.092148 445.096241 0 245.810429 199.276602 445.087031 445.092148 445.087031 245.820662 0 445.095217-199.276602 445.095217-445.087031 0-31.858592-3.354398-62.932308-9.717316-92.89369L894.33329 417.391249 894.33329 417.391249zM894.33329 417.391249" p-id="2288" fill="#e6e6e6"></path></svg>
const uncompleteIcon = <svg t="1599610483994" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2402" width="200" height="200"><path d="M512 949.138286c238.72 0 437.138286-197.997714 437.138286-437.138286 0-238.72-198.857143-437.138286-437.577143-437.138286C272.438857 74.861714 74.88 273.28 74.88 512c0 239.140571 197.997714 437.138286 437.138286 437.138286z m0-72.850286C309.705143 876.288 148.114286 714.276571 148.114286 512c0-201.874286 161.152-364.288 363.446857-364.288 201.856 0 364.269714 162.432 364.708571 364.288 0.420571 202.294857-162.432 364.288-364.288 364.288z" p-id="2403" fill="#ffffff"></path></svg>

const INIT_TODOS =[
  {
    text: 'Learn about React',
    isComplete: false,
  },
  {
    text: 'Meet friend for lunch',
    isComplete: false,
  },
  {
    text: 'Build todo app',
    isComplete: false,
  },
]

function Todo({todo, removeTodo, completeTodo, index}) {
  return (
    <div className="todo"
         onClick={() => completeTodo(index)}
    >
      <div 
      className="task"
      style={{
        textDecoration: todo.isComplete ? 'line-through' : ''
      }}
      >
      {todo.isComplete ? completeIcon : uncompleteIcon}
      {todo.text}
      </div>
      <a className="remove" href="#!" onClick={(e) => removeTodo(e, index)}>
        {removeIcon}
      </a>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const handleSumbit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSumbit}>
       <input value={value} 
       className="input"
       onChange={(e) => {setValue(e.target.value)}}
       />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || INIT_TODOS);

  useEffect(() => {
    // console.log('todos change');
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  const addTodo = text => {
    const newTodos = [{text}, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (e, index) => {
    e.preventDefault();
    e.stopPropagation(); 
    // console.log(index);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };


  return (
    <div className="app">
      <div className="todo-list"> 
      <TodoForm addTodo={addTodo}/>
      {
        todos.map((todo, index) => (
        <Todo 
         index={index} 
         removeTodo={removeTodo} 
         completeTodo={completeTodo}
         key={todo.text} 
         todo={todo} />
        ))
      }
      </div>
    </div>
  );
}

export default App;
