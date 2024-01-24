import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = () => {
  return (
    <ListGroup as="ol" numbered className="my-5">
      <ItemTarea></ItemTarea>
    </ListGroup>
  );
};

export default ListaTareas;
