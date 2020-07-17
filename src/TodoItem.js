import React from "react"

function TodoItem(props){

    return(
        <div className="todo-items">
            <input type="checkbox" className="todo-list"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.description}</p>
        </div>
    )
}

export default TodoItem
