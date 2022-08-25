import React from "react";
import ToDo from "./ToDo";
import "../App.css";

const ToDoList = ({ todos }) => {
    console.log("todos:", todos);
    return (
        <div className="ToDos">
            {/* Hello nader */}
            {todos.map((el) => <ToDo key={el.id}  todo={el} />)
            }
        </div>
    );
};

export default ToDoList;
