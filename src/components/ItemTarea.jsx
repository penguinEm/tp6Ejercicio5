import { Button, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarTareaApi, leerTareasApi } from "../helpers/queries";
import { useEffect } from "react";

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
      title: `¿Estas seguro que desea borrar: ${tarea.nombreTarea}?`,
      text: "Este paso no se puede revertir",
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
            title: `Tarea: ${tarea.nombreTarea} borrada!`,
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
        <Button className="me-1" variant="outline-warning">
          <i className="bi bi-gear-fill"></i>
        </Button>
        <Button variant="outline-danger" onClick={borrarTarea}>
          <i className="bi bi-trash3-fill"></i>
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;
