# Lista de Tareas - Actividad 5: Introducción a React

Este proyecto es una mini aplicación de Lista de Tareas construida con React y Vite. Permite agregar nuevas tareas y eliminarlas, demostrando el uso de componentes funcionales, props, manejo del estado y renderizado de listas.

## Respuestas al cuestionario

**a) ¿Qué diferencia hay entre props y state en React?**
Los `props` (propiedades) se utilizan para pasar información de un componente padre a un componente hijo y son de solo lectura (inmutables). El `state` (estado) es información interna de un componente que puede cambiar a lo largo del tiempo debido a la interacción del usuario; cuando el estado cambia, el componente se vuelve a renderizar.

**b) ¿Por qué es importante usar una key al renderizar una lista de elementos?**
La `key` ayuda a React a identificar de forma única qué elementos de una lista han cambiado, han sido agregados o han sido eliminados. Esto mejora enormemente el rendimiento porque React solo actualiza en el DOM los elementos específicos que se modificaron, en lugar de volver a renderizar toda la lista.

**c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.**
`useState` es un "Hook" de React que nos permite agregar variables de estado a componentes funcionales. Devuelve un arreglo con dos valores: la variable con el estado actual y una función para actualizar esa variable. 
*Ejemplo en la mini aplicación:* Lo utilicé en `App.jsx` (`const [tasks, setTasks] = useState(...)`) para almacenar el arreglo de tareas. Cuando el usuario agrega o borra una tarea, llamo a `setTasks` para actualizar la lista y que la pantalla refleje los cambios inmediatamente.

**d) Enlace del repositorio de GitHub:**
[Pega aquí la URL de tu repositorio, ej: https://github.com/tu-usuario/t3_act5_react]

**e) Enlace del proyecto desplegado en GitHub Pages:**
[Pega aquí la URL de tu GitHub Pages, ej: https://tu-usuario.github.io/t3_act5_react/]
