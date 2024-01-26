import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ nombreTarea, borrarTarea, contenidoTarea }) => {
  return (
    <ListGroup.Item
      as="li"
      className="border border-0 d-flex justify-content-between text-primary"
    >
      {contenidoTarea}
      <Button variant="outline-danger" onClick={() => borrarTarea(nombreTarea)}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
