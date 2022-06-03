import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './add-todo.scss'
const addToDo = ({ todo, setTodo, handleAddTodo, elementInput }) => {
    return (
        <div className='add-todo '>
            <div className="add-todo_input" onKeyUp={(e) => handleAddTodo(e)} >
                <input
                    type="text"
                    value={todo.title}
                    onChange={(e) => setTodo(prev => ({
                        ...prev,
                        title: e.target.value
                    }))}
                    placeholder="Add a task here..."
                    ref={elementInput}
                />
            </div>
            <div className="add-todo_btn" onClick={handleAddTodo} >
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </div>
    )
}

export default addToDo