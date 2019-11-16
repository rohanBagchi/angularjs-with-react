import React from 'react';
import p from 'immer';
import Todo from './Todo';
import NewTodo from './NewTodo';

export default function ReactApp() {
    const [todos, setTodos] = React.useState([
        {
            id: 1,
            text: 'Learn Angularjs',
            isComplete: false
        },
        {
            id: 2,
            text: 'Learn Angular 7',
            isComplete: false
        },
    ]);

    const toggleComplete = todoId => {
        const updatedTodos = p(todos, d => {
            d.forEach(todo => {
                if (todo.id === todoId) {
                    todo.isComplete = !todo.isComplete;
                }
            })
        });

        setTodos(updatedTodos);
    };

    const addTodo = todoText => {
        const newTodo = {
            id: todos.length + 1,
            text: todoText,
            isComplete: false
        };
        const updatedTodos = p(todos, d => {
            d.push(newTodo);
        });

        setTodos(updatedTodos);
    };

    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);

        setTodos(updatedTodos);
    };

    return (
        <div>
            Hello from react!!
            react todo app

            <NewTodo addTodo={addTodo} />

            <ul>
                {todos.map(todo => 
                    <Todo
                        {...todo}
                        toggleComplete={toggleComplete}
                        removeTodo={removeTodo}
                        key={todo.id}
                    />    
                )}
            </ul>
        </div>
    )
}
