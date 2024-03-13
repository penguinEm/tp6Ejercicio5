import { Button, ListGroup } from "react-bootstrap";


const ItemTarea = ({ tarea }) => {
  return (
    <ListGroup.Item
      as="li"
      className="border border-0 d-flex justify-content-between text-primary"
    >
      {tarea.nombreTarea}
      <div>
        <Button
        className="me-1"
          variant="outline-warning"
          onClick={() => borrarTarea(nombreTarea)}
        >
          <i className="bi bi-gear-fill"></i>
        </Button>
        <Button
          variant="outline-danger"
          onClick={() => borrarTarea(nombreTarea)}
        >
          <i className="bi bi-trash3-fill"></i>
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;
