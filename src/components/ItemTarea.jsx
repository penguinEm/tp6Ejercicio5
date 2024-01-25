import { ListGroup } from "react-bootstrap";

const ItemTarea = (props) => {
  return (
    <ListGroup.Item as="li" className="border border-0 color-titulo">
      {props.contenidoTarea}
    </ListGroup.Item>
  );
};

export default ItemTarea;
