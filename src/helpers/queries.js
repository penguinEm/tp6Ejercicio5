const URI_TAREAS = import.meta.env.VITE_API_TAREAS;

//! GET DE LAS TAREAS (array de objetos del db.json)

export const leerTareasApi = async () => {
  try {
    const respuesta = await fetch(URI_TAREAS);
    const tareas = await respuesta.json();
    return tareas;
  } catch (error) {
    console.log("Error en solicitud get leerTareas");
  }
};
