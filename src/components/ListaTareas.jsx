import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";
import { useEffect, useState } from "react";
import { leerTareasApi } from "../helpers/queries";

const ListaTareas = () => {
  /* VARIABLES GLOBALES ---------------------------------------------------------------- */
  const [tareas, setTareas] = useState([]);

  /* FUNCIONES -------------------------------------------------------------------------- */
  useEffect(() => {
    traerTareasApi();
  }, []);

  const traerTareasApi = async () => {
    try {
      const tareasApi = await leerTareasApi();
      setTareas(tareasApi);
    } catch (error) {
      console.log("Error GET");
    }
  };
  /* MAQUETADO ---------------------------------------------------------------------------- */
  return (
    <ListGroup as="ol" className="my-5">
      {tareas.map((tarea) => (
        <ItemTarea key={tarea.id} tarea={tarea}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
