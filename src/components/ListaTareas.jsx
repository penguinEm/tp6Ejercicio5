import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas, setTareas }) => {
  return (
    <ListGroup as="ol" className="my-5">
      {tareas.map((tarea, indice) => (
        <ItemTarea key={indice} tarea={tarea} setTareas={setTareas}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
