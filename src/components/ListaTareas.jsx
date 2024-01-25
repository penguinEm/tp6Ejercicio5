import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  return (
    <ListGroup as="ol" className="my-5">
      {props.arrayTareas.map((elementoArray, posicionArray) => (
        <ItemTarea key={posicionArray} contenidoTarea={elementoArray}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
