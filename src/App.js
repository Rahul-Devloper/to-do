import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {

  const [inputText, setInputText] = useState('');
  const [todo, setTodo] = useState('');



  return (
    <div className="App">
      <h2>To Do List</h2>
      <Form input={inputText} setInput = {setInputText} todo = {todo} setTodo = {setTodo} />
    </div>
  );
}

export default App;
