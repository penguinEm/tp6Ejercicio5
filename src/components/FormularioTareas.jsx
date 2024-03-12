import { Button, Form, FormText } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const FormularioTareas = () => {
  /* VARIABLES GLOBALES -------------------------------------------------------------------------------------------------- */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* FUNCIONES ------------------------------------------------------------------------------------------------------------- */
  const tareaValidada = (tarea) => {
    console.log(tarea)
  };

  /* Maquetado - lógica EXTRA -------------------------------------------------------------------------------------------------- */
  return (
    <section className="rounded-5 pt-5 border border-info px-lg-5 px-md-5 px-sm-1">
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
                  "Debe ingresar como mínimo 3 caracteres para agragar su tarea",
              },
              maxLength: {
                value: 30,
                message:
                  "Debe ingresar como máximo 30 caracteres para agregar su tarea",
              },
            })}
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
