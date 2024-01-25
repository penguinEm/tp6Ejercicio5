import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTareas = () => {
  const [tarea, setTarea] = useState("");
  const [arrayTareas, setArrayTarea] = useState([]);

  const manejadorSubmit = (e) => {
    e.preventDefault();

    setArrayTarea([...arrayTareas, tarea])
    setTarea ("")
  };

  return (
    <section className="rounded-5 py-5 border border-info px-lg-5 px-md-5 px-sm-1">
      <Form onSubmit={manejadorSubmit}>
        <Form.Group
          className="mx-2 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            className="color-titulo"
            type="text"
            placeholder="Ej: tarea 1"
            minLength={3}
            maxLength={30}
            onChange={(e) => setTarea(e.target.value)}
            value = {tarea}
          />
          <Button type="submit" variant="outline-primary" className="ms-3">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
