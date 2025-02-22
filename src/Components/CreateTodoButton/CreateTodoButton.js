import "./CreateTodoButton.css";

function CreateTodoButton({onClick}) {

  return (
    <button className="button-add" onClick={onClick}>
      Agregar tarea
    </button>
  );
}

export { CreateTodoButton };
