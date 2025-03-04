<template>
  <modal v-if="true" @close="$emit('close')">
    <form @submit.prevent="autenticarScrumMaster">
      <label>Usuario:</label>
      <input type="text" v-model="usuario" />
      <label>Contraseña:</label>
      <input type="password" v-model="contrasena" />
      <button type="submit">Autenticar</button>
    </form>
  </modal>
</template>

<script>
import axios from '@/axios';

export default {
  data() {
    return {
      usuario: '',
      contrasena: '',
    };
  },
  methods: {
    autenticarScrumMaster() {
      // Llamar al servidor para autenticar al Scrum Master
      axios.post('/scrum-master/autenticar', {
        usuario: this.usuario,
        contrasena: this.contrasena,
      })
      .then((response) => {
        if (response.data.success) {
          this.$emit('autenticado');
          this.$emit('close');
        } else {
          console.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    },
  },
};
</script>