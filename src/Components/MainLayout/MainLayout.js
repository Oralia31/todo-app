import React, { useCallback, useEffect } from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import "./MainLayout.css";
import { TodosSearch } from "../TodosSearch/TodosSearch";
import { useLocalStorage } from "../../App/useLocalStorage";
import Loader from "../Loader/Loader";

const MainLayout = () => {
  const {
    storedValue: todos,
    setValue: setTodos,
    loading,
    error,
  } = useLocalStorage("Todos", []); //Aquí usamos el hook de localstorage
  //const [todos, setTodos] = React.useState([]); //Variable que almacena la lista de tareas.
  const [todoValue, setTodoValue] = React.useState(""); //Esta variable almacena el item que se va a agregar a la lista de tareas.

  const [todoValueSearch, setTodoValueSearch] = React.useState(""); //Este estado almacena la busqueda de algun item de la lista de tareas
  const [filteredTodos, setFilteredTodos] = React.useState(todos); //Esta variable alcane el arreglo que se genera al ejecutar la busqueda.

  const completeTodos = filteredTodos.filter((todo) => !!todo.completed).length; //para obtener el total de tareas completadas.
  const totalTodos = todos.length; //Para obtener el total de tareas.

  /*Carga las tareas desde el localstorage al inciar la aplicación.
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("Todos")) || [];
    setTodos(storedTodos);
    setFilteredTodos(storedTodos);
  }, []);

  //Guarda las tareas en el localstorage cada vex que los todos cambian.
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);
  */

  ///Esta función realiza hace que se marque como completada una tarea.
  const completeTodoCheck = (text) => {
    /* esto funcionaba con el index
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    */
    //Esto funciona de acuerdo al texto que tiene cada todo
    const newTodos = todos.map((todo) => {
      if (todo.text === text) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(newTodos);
    setFilteredTodos(newTodos);
  };

  //Esta es la función que nos ayuda a reliazar el filtrado de los items del arreglo.
  const handleSearchTodo = useCallback(() => {
    if (todoValueSearch.trim() === "") {
      setFilteredTodos(todos);
    } else {
      const result = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(todoValueSearch.toLowerCase());
      });
      return setFilteredTodos(result);
    }
  }, [todoValueSearch, todos]);

  const [deleteLoading, setDeleteLoading] = React.useState(false);
  //Esta función elimina la tarea seleccionada.
  const deleteTodo = (index) => {
    setDeleteLoading(true);
    setTimeout(() => {
      const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
      setTodos(newTodos);
      setDeleteLoading(false);
    }, 1000);
  };

  //Esta función agrega un nuevo Todo a la lista
  const addTodo = () => {
    if (todoValue.trim() !== "") {
      const newTodos = [{ text: todoValue, completed: false }, ...todos];
      setTodos(newTodos);
      setFilteredTodos(newTodos); //Actualiza a los filtrados.
      setTodoValue(""); //Resetea el input.
    }
  };

  useEffect(() => {
    handleSearchTodo();
  }, [handleSearchTodo]);

  return (
    <>
      <div className="main-container">
        <div className="container-right">
          <h2 className="title">Crear una nueva tarea</h2>
          <TodoSearch todoValue={todoValue} setTodoValue={setTodoValue} />{" "}
          {/**Este es el componente para agregar los items */}
          <CreateTodoButton onClick={() => addTodo()} />
          <div className="container-image">
            <img
              className="img-styles"
              src="/assets/checklist.svg"
              alt="to-do app"
            />
          </div>
        </div>

        <div className="container-left">
          <TodoCounter completed={completeTodos} total={totalTodos} />
          <TodosSearch
            todoValueSearch={todoValueSearch}
            setTodoValueSearch={setTodoValueSearch}
            //onClick={handleSearchTodo}
            onChange={handleSearchTodo}
          />
          {/**Este es el componente que nos ayuda a buscar un item en especifico */}
          {loading || deleteLoading ? (
            <Loader />
          ) : (
            <TodoList>
              {filteredTodos.map((item, index) => (
                <TodoItem
                  key={index}
                  text={item.text}
                  completed={item.completed}
                  onComplete={() => completeTodoCheck(item.text)}
                  onDeleteItem={() => deleteTodo(index)}
                />
              ))}
            </TodoList>
          )}
        </div>
      </div>
    </>
  );
};

export { MainLayout };
