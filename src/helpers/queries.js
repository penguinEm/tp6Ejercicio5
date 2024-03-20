const URI_TAREAS = import.meta.env.VITE_API_TAREAS;

//! 1. GET para leer todas las tareas (array de objetos del db.json)

export const leerTareasApi = async () => {
  try {
    const respuesta = await fetch(URI_TAREAS);
    const tareas = await respuesta.json();
    return tareas;
  } catch (error) {
    console.log("Error en solicitud get leerTareas");
  }
};

//! 4. GET de 1 tarea para el edit
export const leer1TareaApi = async (id) => {
  try {
    const respuesta = await fetch(`${URI_TAREAS}/${id}`);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//! 2. POST para crear una tarea nueva

export const crearTareaApi = async (tareaNueva) => {
  try {
    const respuesta = await fetch(URI_TAREAS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tareaNueva),
    });
    return respuesta;
  } catch (error) {
    console.log("Error en el CREATE de la tarea");
  }
};

//! 3. DELETE de una tarea por id

export const borrarTareaApi = async (id) => {
  try {
    const respuesta = await fetch(`${URI_TAREAS}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log("Error en el CREATE de la tarea");
  }
};

//! PUT para editar 1 tarea

export const editarTareaApi = async (id, tarea) => {
  try {
    const respuesta = await fetch(`${URI_TAREAS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
