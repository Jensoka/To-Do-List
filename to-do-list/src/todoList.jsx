import {useState} from "react";

function TodoList () {
    const [todos, setTodos] = useState ([
        {id: 1, text: "text", done: false},
        {id: 2, text: "text", done: false},
        {id: 3, text: "text", done: false},


    ]);

    const [newTodo, setNewTodo] = useState (""); 

    function handleInputChange(event) {
        setNewTodo(event.target.value);

    }

    function handleSubmit(event) {
        event.preventDefault();
        if (newTodo.trim() !== "") {
            addTodo();
        }
    }

    function addTodo() {

        if (newTodo.trim() !== "") {

            setTodos(todos => [...todos, {
                id: Date.now(),
                text: newTodo.trim(),
                done: false,
            }]);
         setNewTodo("");
        }
    }

    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id)); 

    }



 return (
    <main>
        <h1>Todo List</h1>

        <section className = "input-section">
            <form 
             className = "input-containter"
             onSubmit={handleSubmit}>
             <input 
                type="text"
                placeholder="Add a new todo"
                value={newTodo}
                onChange={handleInputChange}
                />
            </form>
         </section>

         <ul className="todo-list"> 
            {todos.map((todo) => (
                <li key ={todo.id}>
                    <span className="text">
                        {todo.text}
                    </span>
                    <button 
                    className="delete-button"
                    onClick={() => deleteTodo(todo.id)}>
                        x
                    </button>

                
                </li>
            ))}




         </ul>


          


        




    </main>


 );

}

export default TodoList