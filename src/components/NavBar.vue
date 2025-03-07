// Navbar.vue
<template>
  <div id="navbar">
    <nav>
      <ul>
        <li>
          <button type="button" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
              <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
              <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
          </svg>
            <a href="/landing">Inicio</a>
          </button>
        </li>

        <li>
          <div>Bienvenido, Usuario</div>
        </li>

        <li>
          <button type="button" class="btn btn-danger">
            <a href="#">Cerrar Sesión</a>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
    name: 'Navbar',
};
</script>

<style scoped>

*{
  border-radius: 15px;
}

nav{
  background-color: white;
  color: #fff;
  padding: 1em;
  text-align: center;
  margin-bottom: -7.5%;
}

nav ul{
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

nav li a{
  color: #fff;
  text-decoration: none;
}

div{
  color: #333;
  align-items: center;
  font-size: 15px;
}

</style>
