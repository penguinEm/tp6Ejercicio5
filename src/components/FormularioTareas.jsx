import { Button, Form, FormText, Alert } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { crearTareaApi, leerTareasApi } from "../helpers/queries";
import Swal from "sweetalert2";

const FormularioTareas = ({ editar, btnTexto }) => {
  //! VARIABLES GLOBALES --------------------------------------------------------------------------------------------------
  const [tareas, setTareas] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //! FUNCIONES -------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    traerTareas();
  }, []);

  const traerTareas = async () => {
    try {
      const tareasApi = await leerTareasApi();
      setTareas(tareasApi);
    } catch (error) {
      console.log(error);
    }
  };

  const tareaValidada = async (tareaNueva) => {
    if (editar === true) {
      //todo: logica para editar
    } else {
      const respuesta = await crearTareaApi(tareaNueva);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Buen trabajo!",
          html: `Se agregó <span class="text-primary fw-bold">${tareaNueva.nombreTarea}</span> a la lista`,
          icon: "success",
        });
        setTareas([...tareas, tareaNueva]);
        reset();
      } else {
        Swal.fire({
          title: "Oops",
          text: "Ocurrió un error, inténtelo nuevamente más tarde!",
          icon: "error",
        });
      }
    }
  };

  //! Maquetado - lógica EXTRA --------------------------------------------------------------------------------------------------
  return (
    <section className="rounded-5 pt-5 border border-info px-lg-5 px-md-5 px-sm-1 container">
      <Form onSubmit={handleSubmit(tareaValidada)}>
        <FormText className="text-danger ms-3">
          {errors.nombreTarea?.message}
        </FormText>
        <Form.Group
          className="mx-2 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            className="color-titulo"
            type="text"
            placeholder="Ej: tarea 1"
            {...register("nombreTarea", {
              required: "Ingrese su tarea",
              minLength: {
                value: 3,
                message:
                  "Debe ingresar como mínimo 3 caracteres para agregar su tarea",
              },
              maxLength: {
                value: 30,
                message:
                  "Debe ingresar como máximo 30 caracteres para agregar su tarea",
              },
            })}
          />
          <Button
            type="submit"
            variant={editar === true ? "warning" : "primary"}
            className="ms-3"
          >
            {btnTexto}
          </Button>
        </Form.Group>
      </Form>
      {tareas.length === 0 ? (
        <Alert variant="info" className="mt-3">
          Su listado de tareas está vacío.
        </Alert>
      ) : (
        <ListaTareas tareas={tareas} setTareas={setTareas}></ListaTareas>
      )}
    </section>
  );
};

export default FormularioTareas;
