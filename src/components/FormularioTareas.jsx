import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const FormularioTareas = () => {
  return (
    <section className="rounded-5 px-5 py-5 border border-info">
      <Form >
        <Form.Group className="mx-2 d-flex" controlId="exampleForm.ControlInput1">
          <Form.Control
            className="color-titulo"
            type="text"
            placeholder="Ej: tarea 1"
            minLength={3}
            maxLength={30}
          />
        <Button variant="outline-info ms-3">Agregar</Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioTareas;
