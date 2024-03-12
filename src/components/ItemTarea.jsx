import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({tarea}) => {
  return (
    <ListGroup.Item
      as="li"
      className="border border-0 d-flex justify-content-between text-primary"
    >
      {tarea.nombreTarea}
      <Button variant="outline-danger" onClick={() => borrarTarea(nombreTarea)}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
