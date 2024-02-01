import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ arrayTareas, borrarTarea }) => {
  return (
    <ListGroup as="ol" className="my-5">
      {arrayTareas.map((elementoArray, posicionArray) => (
        <ItemTarea
          key={posicionArray}
          contenidoTarea={elementoArray}
          borrarTarea={borrarTarea}
          nombreTarea={elementoArray}
        ></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
