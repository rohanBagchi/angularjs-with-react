import React from 'react'

export default function NewTodo({ addTodo }) {
    const [todoText, setTodoText] = React.useState('');
    return (
        <form onSubmit={e => {
            e.preventDefault();
            addTodo(todoText);
            setTodoText('');
        }}>
            <input
                type="text"
                value={todoText}
                onChange={e => setTodoText(e.target.value)}
            />
        </form>
    )
}
