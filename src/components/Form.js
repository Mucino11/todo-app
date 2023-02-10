export default function Form ({handleClick, todo, addToDo}){
    const handelSubmit = (event) =>{
        event.preventDefault()

    }

    return (
        <form onSubmit={handelSubmit}>
            <label htmlFor="to-do"> To Do</label>
            <input
             name="title"
             id="to-do"
             type="text"
             value={todo.addToDo} 
             onChange={addToDo}
             />

             <label htmlFor="content">Content</label>
             <textarea
             name="content"
             id="content"
             type="text"
             value={todo.addToDo}
             onChange={addToDo}
             />
             <button className="todo-btn" type="submit" onClick={handleClick}>Add to do</button>
        </form>
    )
}