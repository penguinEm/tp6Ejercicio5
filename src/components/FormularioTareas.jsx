import { Button, Form, FormText, Alert } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  crearTareaApi,
  leerTareasApi,
  leer1TareaApi,
  editarTareaApi,
} from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const FormularioTareas = ({ editar, btnTexto }) => {
  //! VARIABLES GLOBALES -------------------------------------------------------------------------------------------------
  const [tareas, setTareas] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const navegacion = useNavigate();

  //! FUNCIONES ------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    traerTareas();
  }, []);

  useEffect(() => {
    if (editar === true) {
      cargarFormulario();
      setMostrarLista(false);
    } else {
      setMostrarLista(true);
    }
  }, [editar]);

  const cargarFormulario = async () => {
    const respuesta = await leer1TareaApi(id);
    if (respuesta.status === 200) {
      const tareaBuscada = await respuesta.json();
      setValue("nombreTarea", tareaBuscada.nombreTarea);
    } else {
      Swal.fire({
        title: "Oops",
        text: "Ocurrió un error, inténte editar nuevamente más tarde!",
        icon: "error",
      });
    }
  };

  const traerTareas = async () => {
    try {
      const tareasApi = await leerTareasApi();
      setTareas(tareasApi);
    } catch (error) {
      console.log(error);
    }
  };

  const tareaValidada = async (tareaNueva) => {
    /* editar */
    if (editar === true) {
      const respuesta = await editarTareaApi(id, tareaNueva);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Buen trabajo!",
          html: `Se editó correctamente <span class="fw-bold text-warning">${tareaNueva.nombreTarea}</span>`,
          icon: "success",
        });
        navegacion("/");
        reset();
      } else {
        Swal.fire({
          title: "Oops",
          text: "Ocurrió un error al editar, inténtelo nuevamente más tarde!",
          icon: "error",
        });
      }
    } else {
      /* crear */
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

  //! MAQUETADO Y LOG EXTRA ------------------------------------------------------------------------------------------------------
  return (
    <section className="rounded-5 pt-5 border border-info px-lg-5 px-md-5 px-sm-1 container mb-5">
      <Form onSubmit={handleSubmit(tareaValidada)}>
        <FormText className="text-danger ms-3">
          {errors.nombreTarea?.message}
        </FormText>
        <Form.Group
          className="mx-2 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            className={editar === true ? "color-editar" : "color-titulo"}
            type="text"
            placeholder="Ingrese su nueva tarea"
            {...register("nombreTarea", {
              required: "Este campo es obligatorio",
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
      {mostrarLista && tareas.length > 0 && (
        <ListaTareas tareas={tareas} setTareas={setTareas}></ListaTareas>
      )}
      {mostrarLista && tareas.length === 0 && (
        <Alert variant="info" className="mt-3">
          Su listado de tareas está vacío.
        </Alert>
      )}
      {!mostrarLista && tareas.length > 0 && (
        <Alert variant="info" className="mt-3">
          Editando tarea...
        </Alert>
      )}
    </section>
  );
};

export default FormularioTareas;
