// Login.vue
<template>
  <div class="login-container">
      <img :src="logo" alt="logo VIEWNEXT" id="logo" width="20%" />
    
      <form @submit.prevent="login" id="registrarse">
        <h2>Login</h2>
        <input type="email" v-model="email" placeholder="Correo electrónico" />
        <input type="password" v-model="password" placeholder="Contraseña" />
        <button type="submit" class="boton">Iniciar sesión</button> 
        <button type="submit" class="boton" @click="irRegistro">Registrarse</button>
      </form>
    
  </div>
</template>

<script>
import axios from 'axios';
import logo from '@/assets/logoVNBlanco.png';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      logo
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:9001/api/login', {
          email: this.email,
          password: this.password
        });
        if (response.data.success) {
          // Guardar el token en el almacenamiento local o en una cookie
          localStorage.setItem('token', response.data.token);
          // Redirigir a la página principal o dashboard
          this.$router.push('/landing');
        } else {
          alert('Correo electrónico o contraseña incorrectos');
        }
      } catch (error) {
        alert('Ocurrió un error. Por favor, inténtelo de nuevo.');
      }
    },
    irRegistro() {
      this.$router.push('/registro');
    }
  }
}
</script>

<style scoped>
.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(47, 87, 133); /* Azul */
  color: #ffffff; /* Blanco */
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  height:100%;
  
}

.login-container h2 {
  text-align: center;
  margin-bottom: 5%;
  margin-top: -10%;
}

.login-container input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
}

.login-container button {
  width: 30%;
  padding: 10px;
  background-color: rgb(47, 87, 133);
  color: #ffffff;
  border: solid #ffffff;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  font-size:20px;
  margin-right: 5%;
  margin-left: 5%;
}

.login-container button:hover {
  background-color: white;
  transform: scale(1.1);
  color: rgb(47, 87, 133);
}

#login-container{
    width:50%;
    margin:auto;
    margin-top: 5%;
    text-align: center;
}
/* Agregamos esto para que el body tenga un height del 100% */
#registrarse{
    width:50%;
    text-align: center;
    margin:auto;
    margin-top:50px;
}

</style>
