<template>
    <div class="landing-container">
      <div id="navbar">
        <navbar />
      </div>
  
      <div>
        <button @click="mostrarModalSesion">Crear/Unirse a sesión</button>
        <modal v-if="mostrarModalSesion" @close="mostrarModalSesion = false">
          <button @click="crearSesion" :disabled="!esScrumMaster">Crear sesión</button>
          <button @click="unirseSesion">Unirse a sesión</button>
        </modal>
        <button @click="activarScrumMaster" v-if="!esScrumMaster">Activar Scrum Master</button>
        <ModalScrumMaster v-if="mostrarModalActivarScrumMaster" @close="mostrarModalActivarScrumMaster = false" @autenticado="esScrumMaster = true" />
      </div>

    </div>
</template>

<script>
import ModalScrumMaster from '@/components/ModalScrumMaster.vue';
import Modal from '@/components/Modal.vue';
import Navbar from '@/components/NavBar.vue';

export default {
  name: 'Planner',
  components: {
    Navbar,
    ModalScrumMaster,
    Modal,
  },
  data() {
    return {
      mostrarModalSesion: false,
      mostrarModalActivarScrumMaster: false,
      esScrumMaster: false,
    };
  },
  methods: {
    mostrarModalSesion() {
      this.mostrarModalSesion = true;
    },
    crearSesion() {
      // Llamar al servidor para crear la sesión
      this.$axios.post('/sesiones', {
        nombre: 'Nueva sesión',
        descripcion: 'Descripción de la sesión',
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    },
    unirseSesion() {
      // Llamar al servidor para unirse a la sesión
      this.$axios.post('/sesiones/unirse', {
        sesionId: 1,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    },
    activarScrumMaster() {
      this.mostrarModalActivarScrumMaster = true;
    },
  },
};
</script>

<style scoped>

.landing-container {
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

</style>