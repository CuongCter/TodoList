import React from 'react'
import './todo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faRotateLeft, faXmark } from '@fortawesome/free-solid-svg-icons'
const Todo = ({ todoItem, handleDeleteTodo, id, handleChangeStatusTodo }) => {

    return (
        <div className={`todo ${todoItem.complete ? 'todo-active' : ''}`}>
            <div className="todo_title">
                {todoItem.title}
            </div>
            <div className="todo_icon">
                <div className="todo_icon-checked" onClick={() => handleChangeStatusTodo(id)}>
                    {todoItem.completed ? (<FontAwesomeIcon icon={faRotateLeft} />) :
                        (<FontAwesomeIcon icon={faCheck} />)}

                </div>
                <div className="todo_icon-clear" onClick={() => handleDeleteTodo(id)}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
        </div >
    )
}

export default Todo