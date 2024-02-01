import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTareas = () => {
  /* Variables */
  const [tarea, setTarea] = useState("");
  const arrayTareasLocalStorage = JSON.parse(
    localStorage.getItem("listaTareasKey")
  ) || [];
  const [arrayTareas, setArrayTarea] = useState(arrayTareasLocalStorage);

  /* Funciones */
  useEffect(() => {
    localStorage.setItem("listaTareasKey", JSON.stringify(arrayTareas));
  }, [arrayTareas]);

  const manejadorSubmit = (e) => {
    e.preventDefault();
    setArrayTarea([...arrayTareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (nombreTarea) => {
    const copiaArrayTarea = arrayTareas.filter(
      (copiaTarea) => copiaTarea !== nombreTarea
    );
    setArrayTarea(copiaArrayTarea);
  };

  /* Maquetado - lógica */
  return (
    <section className="rounded-5 pt-5 border border-info px-lg-5 px-md-5 px-sm-1">
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
            value={tarea}
          />
          <Button type="submit" variant="outline-primary" className="ms-3">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas
        arrayTareas={arrayTareas}
        borrarTarea={borrarTarea}
      ></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
