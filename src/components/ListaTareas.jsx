import { ListGroup } from "react-bootstrap";

const ListaTareas = () => {
  return (
    <ListGroup as="ol" numbered className="my-5">
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
    </ListGroup>
  );
};

export default ListaTareas;
