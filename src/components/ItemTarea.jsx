import { Button, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarTareaApi, leerTareasApi } from "../helpers/queries";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ItemTarea = ({ tarea, setTareas }) => {
  /* FUNCIONES ------------------------------------------------------------------------------------------------------ */
  useEffect(() => {
    tareasActualizadas();
  }, []);

  const tareasActualizadas = async () => {
    setTareas(await leerTareasApi());
  };

  const borrarTarea = async () => {
    Swal.fire({
      html: `¿Estas seguro que desea borrar:<span class="text-danger fw-bold"> ${tarea.nombreTarea}</span>?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarTareaApi(tarea.id);
        if (respuesta.status === 200) {
          setTareas(await leerTareasApi());
          Swal.fire({
            html: `Tarea: <span class="text-danger fw-bold">${tarea.nombreTarea}</span> borrada!`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Ocurrio un error, intente mas tarde!",
            icon: "error",
          });
        }
      }
    });
  };

  /* MAQUETADO Y LOG EXTRA ------------------------------------------------------------------------------------------ */
  return (
    <ListGroup.Item
      as="li"
      className="border border-0 d-flex justify-content-between text-primary"
    >
      {tarea.nombreTarea}
      <div>
        <Link
          className="me-1 btn btn-outline-warning"
          to={`editar/${tarea.id}`}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Link className="btn btn-outline-danger" onClick={borrarTarea}>
          <i className="bi bi-trash3-fill"></i>
        </Link>
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;
