# ScrumNext_Vue

El objetivo de este proyecto es migrar el proyecto Scrumnext que estaba siendo desarrollado en React a VUE. También existe la posibilidad de desplegar este proyecto en plataformas como Google Cloud. 

## Recommended IDE Setup

Para poder utilizar correctamente este proyecto es necesario una serie de requisitos:

•	GitHub Desktop para crear el repositorio y trabajar con él.
•	Docker Desktop para tener una interfaz gráfica para manejar el contenedor.
•	VsCode con la extensión VUE para programar.
•	Postman para probar los endpoints.
•	NodeJS para poder utilizar código JS en entorno servidor
•	Se recomienda utilizar las últimas versiones disponibles para garantizar su estabilidad y funcionalidad.

## Instalación y Ejecución

Clona el repositorio:

git clone https://github.com/tu-usuario/VUE.git

cd VUE

Construye y ejecuta los contenedores de Docker:

docker-compose up --build
La aplicación será visible en Docker Desktop y podremos arrancarlo, reiniciarlo o pararlo de forma gráfica siempre que lo necesitemos.

Ejecutar el entorno de desarrollo para VUE

Para los primeros pasos con VUE es recomendable seguir los pasos descritos en https://vuejs.org/guide/quick-start.html en los que 
nos mostrará las configuraciones iniciales, dependencias y la forma de arrancarlo.

Una vez hecho nos dirigiremos a nuestro directorio VUE en consola de comandos en modo administrador (no Powershell) y ejecutaremos el comando 
npm run dev

En la misma consola nos especificará la dirección que nos asigna a nuestro proyecto para ir viendo los cambios que hagamos
Por ejemplo: http://localhost:5173/

## Documentación

En el archivo Documentación API Poker Planner.docx se pueden observar todos los avances realizados y las cosas por implementar.

npm run build
```
