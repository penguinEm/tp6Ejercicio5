import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = (props) => {
  return (
    <ListGroup.Item as="li" className="border border-0 color-titulo d-flex justify-content-between">
      {props.contenidoTarea}
      <Button variant="outline-danger">Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
