import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../Redux/Actions/todoActions";
import cx from "classnames";

const ToDo = ({ todo }) => {
    console.log("todo:", todo);
    const [input, setInput] = useState(todo);
    const [readOnly, setReadOnly] = useState(true);
    console.log("readOnly:", readOnly);
    const dispatch = useDispatch();
    const eventHandler = (e) => {
        e.preventDefault();
        dispatch(editTodo(input));
        setReadOnly(true);
    };
    console.log("checkbox:", input.isDone);
    return (
        <div className="Todo-container">
            <span
                style={{
                    textDecoration: todo.isDone ? "line-through" : "none",
                }}
            >
                {/* {todo.description} */}
            </span>
            <form onSubmit={eventHandler}>
                <input
                    className={cx("Todo-input", {
                        enabled: readOnly === false,
                    })}
                    readOnly={readOnly}
                    onDoubleClick={(e) => setReadOnly(false)}
                    onBlur={(e) => setReadOnly(true)}
                    type="text"
                    value={input.description}
                    onChange={(e) =>
                        setInput({ ...input, description: e.target.value })
                    }
                />
            </form>
            <input className="Todo-Checkbox"
                defaultValue={input.isDone}
                defaultChecked={input.isDone}
                type="checkbox"
                onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {/* <label for="horns">isDone</label> */}
            {/* <button onClick={() => dispatch(editTodo(input))}>Edit</button> */}
            <button className="Todo-Delete" onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
            </button>
        </div>
    );
};

export default ToDo;
