<template>
  <div class = ahorcado2>
    <div id="navBar">
      <CustomNavbar />
    </div>
      
    
    <div class="cabecera">
      <div class="boton-nuevo-juego">
        <div class="palabra-adivinar">
          <h2>Adivina la palabra:</h2>
          <p>
            {{ palabraAdivinar.split('').map((letra) => (letrasAdivinadas.includes(letra) ? letra : '_')).join(' ') }}
          </p>
        </div>
        <div class="titulo">
          El Ahorcado
        </div>
      </div>
    </div>

    <div class="estado-juego">
      <div class="div-estado">
        <div>
          <h2 class="selecciona-letra">
            Selecciona una Letra:
          </h2>
          <div class="div-alfabeto">
            <button
              v-for="letra in alfabeto"
              :key="letra"
              :class="`alfabeto ${letrasAdivinadas.includes(letra) ? 'correcta' : ''} ${letrasIncorrectas.includes(letra) ? 'incorrecta' : ''}`"
              @click="manejarAdivinanza(letra)"
              :disabled="letrasAdivinadas.includes(letra) || letrasIncorrectas.includes(letra)"
            >
              {{ letra }}
            </button>
          </div>
        </div>
      </div>
      <div class="div-muñeco">
        <div class="div-situacion">
          <h2>
            Tú situación:
          </h2>
        </div>
        
        <div class="div-dibujo">
            <p v-html="dibujarMuñeco()"></p>
        </div>
        
      </div>
    </div>

    <div class="div-botones">
        <div class="boton-menu">
            <button type="button" class="btn btn-success btn-rounded" @click="iniciarNuevoJuego">Iniciar Nuevo Juego</button>
        </div>
    </div>

    <div v-if="showModalPerder" class="modal-V1">
        <div class="modal-content-V1">
            <h2>¡Has perdido!</h2>
            <p>La palabra era: {{ palabraAdivinar }}</p>
            <button @click="handleCloseModalPerder"  class="modal_boton-V1">Reiniciar</button>
        </div>
    </div>

    <div v-if="showModalGanar" class="modal-V1">
        <div class="modal-content-V1">
            <h2>¡Has ganado!</h2>
            <p>Felicidades, has adivinado la palabra: {{ palabraAdivinar }}</p>
            <button @click="handleCloseModalGanar" class="modal_boton-V1">Reiniciar</button>
        </div>
    </div>
    
  </div>
    
</template>

<script>
import CustomNavbar from '../components/NavBar.vue';
import esqueleto1 from '@/assets/imagenes_proyecto/esqueleto_cabeza.png';
import esqueleto2 from '@/assets/imagenes_proyecto/esqueleto_cuerpo.png';
import esqueleto3 from '@/assets/imagenes_proyecto/esqueleto_1brazo.png';
import esqueleto4 from '@/assets/imagenes_proyecto/esqueleto_2brazos.png';
import esqueleto5 from '@/assets/imagenes_proyecto/esqueleto_1pierna.png';
import esqueleto6 from '@/assets/imagenes_proyecto/esqueleto_completo.png';
import calavera from '@/assets/imagenes_proyecto/calavera_cruz.png';


export default {
  name: 'Ahorcado2',
  components: { CustomNavbar},
  data() {
    return {
      palabraAdivinar: '',
      letrasAdivinadas: [],
      letrasIncorrectas: [],
      intentosIncorrectos: 0,
      estadoJuego: 'jugando',

      
      max_intentos: 6,
      alfabeto: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      palabras: ['REACT', 'JAVASCRIPT', 'AHORCADO', 'PROGRAMACION', 'DESARROLLO'],
      esqueleto1,
      esqueleto2,
      esqueleto3,
      esqueleto4,
      esqueleto5,
      esqueleto6,
      calavera,
    };
  },
  mounted() {
    this.iniciarNuevoJuego();
  },
  methods: {
    iniciarNuevoJuego() {
      const palabraAleatoria = this.palabras[Math.floor(Math.random() * this.palabras.length)];
      this.palabraAdivinar = palabraAleatoria;
      this.letrasAdivinadas = [];
      this.letrasIncorrectas = [];
      this.intentosIncorrectos = 0;
      this.estadoJuego = 'jugando';
      this.showModalPerder = false;
      this.showModalGanar = false;
    },
    manejarAdivinanza(letra) {
      if (this.letrasAdivinadas.includes(letra) || this.letrasIncorrectas.includes(letra) || this.estadoJuego !== 'jugando') return;

      const nuevasLetrasAdivinadas = [...this.letrasAdivinadas, letra];
      this.letrasAdivinadas = nuevasLetrasAdivinadas;

      if (!this.palabraAdivinar.includes(letra)) {
        const nuevosIntentosIncorrectos = this.intentosIncorrectos + 1;
        this.letrasIncorrectas = [...this.letrasIncorrectas, letra];
        this.intentosIncorrectos = nuevosIntentosIncorrectos;

        if (nuevosIntentosIncorrectos >= this.max_intentos) {
          this.estadoJuego = 'perdido';
          console.log('Intentos incorrectos: ', nuevosIntentosIncorrectos);
          console.log('Max intentos: ', this.max_intentos);
          this.showModalPerder = true;
        }
      } else {
        if (this.palabraAdivinar.split('').every((letra) => nuevasLetrasAdivinadas.includes(letra))) {
          this.estadoJuego = 'ganado';
          this.showModalGanar = true;
        }
        
      }

    },
    dibujarMuñeco() {
      const intentosIncorrectos = this.intentosIncorrectos;
      const imagenes = [
        this.esqueleto1,
        this.esqueleto2,
        this.esqueleto3,
        this.esqueleto4,
        this.esqueleto5,
        this.esqueleto6,
      ];

      if (intentosIncorrectos >= imagenes.length) {
        return `<img src="${this.calavera}" alt="Calavera" width="80%" class="calavera">`;
      }else if (intentosIncorrectos === 0) {
        return '';
      }else {
        return `<img src="${imagenes[intentosIncorrectos-1]}" alt="Esqueleto" width="200" class="esqueleto">`;
      }
    },
    handleCloseModalPerder() {
            this.showModalPerder = false;
            this.iniciarNuevoJuego();
        },

        handleCloseModalGanar() {
            this.showModalGanar = false;
            this.iniciarNuevoJuego();
        },
  },

};
</script>
  
<style>

.alfabeto{
  width:15%;
  height: 15%;
  border:solid rgb(255, 255, 255);
  background-color: blanchedalmond;
  border-radius: 20%;
  margin: 5px;
  padding: 10px;
  font-size: 100%;
  font-style: italic;
  font-weight: bold;
  font-family: sans-serif;
  transition: transform 0.3s ease-in-out;    
}

#navBar{
  margin:3%;
  width:95%;
}    

.alfabeto:hover{
  transform: scale(1.2);
}

.alfabeto:active{
  animation: rotateAnimation 0.2s ease-in-out;
}

@keyframes rotateAnimation {
  0% {
      transform: rotate(0deg);
  }

  100% {
      transform: rotate(360deg);
  }
}

.correcta{
  background-color: green;
  color:white;
  animation: correctAnimation 0.3s ease-in-out;
}

.incorrecta{
  background-color: red;
  color:white;
  animation: incorrectAnimation 0.3s ease-in-out;
}

@keyframes correctAnimation {
  0% { background-color: green; transform: scale(1); }
  50% { background-color: lightgreen; transform: scale(1.2); }
  100% { background-color: green; transform: scale(1); }
}

@keyframes incorrectAnimation {
  0% { background-color: red; transform: scale(1); }
  50% { background-color: pink; transform: scale(1.2); }
  100% { background-color: red; transform: scale(1); }
}

.div-alfabeto{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width:100%;
  position: relative;
}

.div-estado{
  flex:1;
  display:block;
  justify-content: center;
  margin: 10px;
  width:30%;
}

.div-muñeco{
  display:block;
  justify-content: center;
  margin: 30px;
  width:50%;
  height: 500px;   
}

.estado-juego {
  display: flex;
  justify-content: space-between;
  align-items: center;   
  padding: 10px; /* Espacio entre el contenido y el borde */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra ligera */
  width: 100%; /* Ancho del contenedor */
  margin:auto;
}

.div-estado {
  flex: 1;
  text-align: center;
}

.div-incorrectas{
  display: flex;
  justify-content: center;
  background-color: rgb(218, 16, 16);    
  border: solid brown;    
}

.div-adivinadas{
  display: flex;
  justify-content: center;
  background-color: rgb(20, 224, 13);
  border: solid brown;
}

.div-situacion{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(25, 122, 212);
  color: white;
  border: solid rgb(255, 255, 255);
  margin:10px;
}

.div-dibujo{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image:url('../assets/imagenes_proyecto/fondo_hangman.png');
  background-size: 30%;
  background-repeat:no-repeat;
  background-position: center;
  position: relative;
  border: solid rgb(255, 255, 255);
  width: 90%;
  height: 80%;
  margin:10px ;
  border-radius: 10px;    
}

.div-dibujo p{
  margin-left:41%;
  margin-bottom:5%;
}

.cabecera{    
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:10px;   
}

.titulo{
  flex:1;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold ;
  font-size:60px;
  color: rgb(3, 223, 223);
  margin:auto;
  width:70%;
  border:solid rgb(255, 255, 255);
}

.boton-nuevo-juego{
  display:flex;
  flex:1;
  text-align: center;
  font-size: 24px;
  justify-content: space-between;
}

.palabra-adivinar{
  padding:10px;
  justify-content: center;
  background-color: rgb(148, 208, 216);
  border: solid rgb(255, 255, 255);
  margin-top:2%;
  margin-left:30px;
  margin-right:30px;
  border-radius: 10px;
  font-size: 30px;
  width: 40%;
  height: 5%;
}

.selecciona-letra{
  color:aquamarine;
}

.div-botones{
  display: flex;
  justify-content: center;
  margin: 10px;
}

.esqueleto{
  width: 30%;
  margin-left: 10%;
  margin-top: 10%;    
}

.calavera{    
  margin-left: 30%;
  margin-bottom: 30%;
  transform: scale(0.6);
}

.modal-V1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content-V1 {
  background-color: gray;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 50%;
  text-align: center;
}

.modal_boton-V1{
  background-color: green;
  color: white;
}

.boton-juego{
  display:flex;
  justify-content: space-between;
}

.boton-menu{
  flex:1;
}

.salir{
  text-decoration: none;
  color:black;
}

@media (max-width:576px){
    
  .titulo{
      font-size: 100%;
  }

  .palabra-adivinar{
      font-size:80%;
  }

  .alfabeto{
      width:20%;
      font-size:60%;
  }

  .div-dibujo{
      background-size: 100%;
  }

  .esqueleto{
      transform: scale(1.2);
      margin-left: 40%;
      margin-top: 30%;
  }

  .calavera{
      width:90%;
      margin-left:-10%;
  }
}

@media (max-width:768px){
  
  .titulo{
      font-size:150%;
  }

  .esqueleto{
      width:50%;
      margin-top:20%;
  }

  .calavera{
      width:70%;
      margin-left:20%;
      margin-top:20%
  }

}

.ahorcado2 {
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  top:0%;
  left:0%;
}

</style>
