import "./TodoCounter.css";

//Así se agregan estilos en linea en react JS

/*const estilos = {
  fontSize: "24px",
  textAlign: "center",
  margin: 0,
  padding: "48px",
};*/

function TodoCounter({ total, completed }) {

  return (
    <>
      <h2>Tus tareas</h2>
      {total === 0 ? (
        <h3>No hay TODOS en la lista</h3>
      ) : completed > 0 ? (
        <h3>
          Has completado {completed} de {total} TODOS &#129321;
        </h3>
      ) : (
        <h3>No has completado ninguna tarea &#128546;</h3>
      )}
    </>
  );
}

export { TodoCounter };
