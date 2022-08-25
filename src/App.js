import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDoList from "./Components/ToDoList";
import AddToDo from "./Components/AddToDo";
import "./App.css";
import { filterTodo } from "./Redux/Actions/todoActions";
import cx from "classnames";

function App() {
    const todos = useSelector((state) => state.toDoReducer.todos);
    const filter = useSelector((state) => state.filterReducer);
    const dispatch = useDispatch();
    // console.log("todos1:",todos);
    return (
        <div className="App">
            <h1>TODO LIST</h1>
            <AddToDo />
            <div className="Filters">
                <button
                    className={cx("Filters-Btn", {
                        selected: filter === "ALL",
                    })}
                    onClick={() => dispatch(filterTodo("ALL"))}
                >
                    ALL
                </button>
                <button
                    className={cx("Filters-Btn", {
                        selected: filter === true,
                    })}
                    onClick={() => dispatch(filterTodo(true))}
                >
                    Done
                </button>
                <button
                    className={cx("Filters-Btn", {
                        selected: filter === false,
                    })}
                    onClick={() => dispatch(filterTodo(false))}
                >
                    NotDone
                </button>
            </div>
            <div className="ToDoList">
                <ToDoList
                    todos={
                        filter === "ALL"
                            ? todos
                            : todos.filter((el) => el.isDone === filter)
                    }
                />
            </div>
        </div>
    );
}

export default App;
