import { faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import AddToDo from '../components/addToDo/AddToDo'
import Todo from '../todo/Todo'
import './home.scss'



const Home = () => {
    const [todo, setTodo] = useState({
        title: "",
        completed: false,
    });
    const [listTodo, setListTodo] = useState([]);
    const elementInput = useRef(null);

    const handleAddTodo = (e) => {
        if (e.keyCode === 13) {
            const arr = [...listTodo];
            arr.push(todo);
            setListTodo(arr);
            setTodo({
                title: "",
                completed: false,
            });
            console.log('aa');
            elementInput.current.focus()
        }

    };

    const handleChangeStatusTodo = (id) => {
        const arrUpdate = [...listTodo]
        arrUpdate.length > 0 && arrUpdate.map((item, idx) => {
            if (idx === id) {
                return item.completed = !item.completed
            }
            return item
        }
        )
        setListTodo(arrUpdate)

    }
    console.log(listTodo);
    const handleDeleteTodo = (idx) => {
        const arrUpdate = [...listTodo]
        arrUpdate.splice(idx, 1)
        setListTodo(arrUpdate)
    }
    return (
        <div className="flex items-center justify-center h-full py-10">
            <div className="modal-todo h-full">
                <header className="modal-todo_heading">TODO LIST</header>
                <AddToDo
                    todo={todo}
                    setTodo={setTodo}
                    handleAddTodo={handleAddTodo}
                    elementInput={elementInput}
                />
                <div className="modal-todo_list">
                    {listTodo.length > 0 &&
                        listTodo.map((item, index) => <Todo
                            key={index}
                            id={index}
                            todoItem={item}
                            handleDeleteTodo={handleDeleteTodo}
                            handleChangeStatusTodo={handleChangeStatusTodo}
                        />)}
                </div>
                <div className="btn">
                    <button className="btn_click">Filter Checked</button>
                    <button className="btn_click">Filter Checked</button>
                    <button className="btn_click">Filter Checked</button>
                </div>
            </div>



        </div>
    )
}

export default Home