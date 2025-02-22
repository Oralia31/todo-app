import React from "react";
import "./TodosSearch.css";

function TodosSearch({
  todoValueSearch,
  setTodoValueSearch,
  //onClick,
  onChange,
}) {
  //const [searchValue, setSearchValue] = React.useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setTodoValueSearch(value);
    onChange(value);
  };

  return (
    <div className="container-input-search">
      <input
        value={todoValueSearch}
        className="input-text-seach"
        placeholder="Buscar tarea..."
        onChange={handleChange}
      />
      {/*<button className="button-search" onClick={onClick}>
        <img src="/assets/icons-search.png" alt="search" />
      </button>*/}
    </div>
  );
}

export { TodosSearch };
