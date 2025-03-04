// Navbar.vue
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Ahorcado</a>
      <div class="w-20 p-3">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>
      </div>
        
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Acerca de</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacto">Contacto</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <button class="btn btn-outline-success" @click="handleLogin">Iniciar Sesión</button>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-danger" @click="handleLogout">Cerrar Sesión</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
    name: 'NavBar',
};
</script>

<style scoped>

  *{
    height: 50px;
    background-color: white;
  }

  .nav-item{
    text-align: center;
  }

  .btn-outline-success{
    height: 30px;

  }

  .btn-outline-danger{
    height: 30px;
  }
  

</style>
