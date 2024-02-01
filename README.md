## Quinta práctica con React: Lista de Tareas en localStorage

En esta quinta práctica de React, se mejoró la aplicación de lista de tareas para permitir el almacenamiento de tareas en el localStorage. Ahora, las tareas se mantendrán incluso después de cerrar o recargar la página.

## Características Principales

- Persistencia de Datos: Las tareas se almacenan en el localStorage, lo que garantiza que la lista se conserve entre sesiones.

- Gestión de Tareas Mejorada: Añade, elimina y visualiza tareas de manera eficiente y persistente.

## Modificaciones en la Aplicación

Se implementó la funcionalidad de almacenamiento en el localStorage para mantener la persistencia de las tareas.
Se agregaron los componentes Navbar y Footer utilizando react-bootstrap y fontawesome.

- **Bootstrap y React-Bootstrap:** Utilizados para estilizar y estructurar la interfaz de usuario de la aplicación de manera eficiente y responsiva.

- **FontAwesome:** Se incorporó FontAwesome para agregar iconos a la interfaz de usuario, proporcionando una experiencia visual mejorada.

- **React:** El proyecto se basa en el framework de trabajo React, permitiendo un desarrollo eficiente y una interfaz de usuario dinámica.



## Dependencias Instaladas
- [Documentación React-bootstrap](https://react-bootstrap.github.io/docs/getting-started/introduction)
- [Documentación React-Fontawesome](https://fontawesome.com/v5/docs/web/use-with/react)


- Copiar y pegar los siguientes comandos en el bash y luego realziar los imports:
>npm install --save @fortawesome/fontawesome-free@6.5.1
>npm i --save @fortawesome/fontawesome-svg-core
>npm install --save @fortawesome/free-solid-svg-icons
>npm install --save @fortawesome/react-fontawesome
>npm install react-bootstrap bootstrap

## Imports de las depdendencias (Main.jsx)

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

# React + Vite

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refreshsh
