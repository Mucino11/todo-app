
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Todos from './components/Todos';


const todoStart = [
  {
    id:0,
    title: "Lage Middag",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non aliquet sem. Nulla mauris justo, ullamcorper vel fermentum porta, elementum eget elit.",

  }
]

function App() {
  const [todo, setTodo] = useState({title: "", content: ""})
  const [todos, setTodos] = useState([...todoStart])
  const [id, setId] = useState (1)

  const addToDo = (event) =>{
    const inputName = event.target.name
    const inputValue = event.target.value
    setTodo((prev) => ({...prev, [inputName]: inputValue}))
  }

  const handleClick = () =>{
    setId((prev) => prev + 1 )
    setTodos((prev) => [
      {id, title: todo.title, content: todo.content}, ...prev
    ])
  }
 
  const removeToDos = (todoid) => {
    setTodos(todos.filter((item)=> item.id !== todoid))

  }

  console.log(todos)

  return (
   <>
   <Navbar username="mucino"/>
   <section className='container'>
     <Form handleClick={handleClick} addToDo={addToDo} todo={todo}/>
   </section>
  
   <Todos todoStart={todos} removeToDos={removeToDos}/>
   </>
  );
}

export default App;
