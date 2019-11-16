import React from 'react'

export default function Todo({
    id,
    text,
    isComplete,
    toggleComplete,
    removeTodo
}) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={isComplete}
                    onChange={() => toggleComplete(id)}
                />
                {text}
            </label>
            <button onClick={() => removeTodo(id)}>
                Delete
            </button>
        </li>
    )
}
