import {useState} from "react";
import TodoHeader from "./TodoHeader.jsx";

function TodoList () {
    const MAX_TODOS = 7;
    const [todos, setTodos] = useState ([
     {id: 1, text: "Städa", done: false},
     {id: 2, text: "Köp ben & jerrys", done: false},
     {id: 3, text: "Betala räkningar :(", done: false},
  ]); 
  
    const[newTodo, setNewTodo] = useState("");

    function handleInputChange(event) {
        setNewTodo(event.target.value);
    }                                         // flödet: du skriver -> onChange körs -> handleInputChange(e) -> event.target.value är det du skrev -> setNewTask("text") -> newTask blir "text".

    function addTodo() {

        if (newTodo.trim() !== "" && todos.length < MAX_TODOS) {

            setTodos(todos => [...todos, {
                id: Date.now(),
                text: newTodo.trim(),
                done: false,
            }]);
         setNewTodo("");
        }
    }

    function toggleDone(id) {
        setTodos(
            todos.map((todo) => (todo.id === id ? {...todo, done: !todo.done} : todo))

        );
        
    }

    function handleSubmit(event) {
        event.preventDefault();
        addTodo();
    }

    function toggleDone(id) {
        setTodos(
            todos.map((todo) => (todo.id === id ? {...todo, done: !todo.done} : todo)
        ));

    }

    function deleteTodo(id) {
        
     setTodos(todos.filter((todo) => todo.id !== id));
  


    }



        

    
    return(

     <main className = "app">
        
     <section className="input-section">
        <form className="input-container" onSubmit={handleSubmit}>
        <input
        type="text" 
        placeholder="Skriv här"
        value={newTodo}
        onChange={handleInputChange}/>
        
        </form>
        </section>
         
        <section className="list-section">
        <div className="list-header">
        <TodoHeader title="To-Do-List" /></div>
        <ul className="todo-list">
            {todos.map((todo) =>
                <li 
                className = {todo.done ? "todo todo-completed" : "todo"}
                key={todo.id}>

                    <span 
                        className="text"
                        onClick={() => toggleDone(todo.id)} 
                        >

                        {todo.text}
                    </span>
                    <button
                    className="delete-button"
                    type="button"
                    onClick={() => deleteTodo(todo.id)}
                    >X</button>

                </li>



            )}
        </ul>
        </section>



    </main>

    );
}

export default TodoList