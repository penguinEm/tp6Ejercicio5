import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  return (
    <ListGroup as="ol" numbered className="my-5">
      {props.arrayTareas.map((elementoArray, posicionArray) => (
        <ItemTarea key={posicionArray}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
