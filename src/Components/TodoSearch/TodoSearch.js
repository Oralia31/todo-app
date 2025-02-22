import React from "react";
import "./TodoSearch.css";

function TodoSearch({todoValue, setTodoValue}) {

  const handleChange = (event) => {
    setTodoValue(event.target.value);
  }


  return (
    <div className="container-input">
      <input value={todoValue} className="input-text" placeholder="Escribir tarea..." onChange={handleChange} />
    </div>
  );
}

export { TodoSearch };
