<template>
    <div class="landing-container">
        <div id="navbar">
          <Navbar />
        </div>
        
      
      <div class="grid-container">
        <div v-for="card in cards" :key="card.id" class="card">
            <div id="div-imagen">
                <img :src="card.image" alt="Card Image"  class="card-image" />
            </div>
           
            <div id="div-titulo">
                <h2 class="card-title">{{ card.title }}</h2>
            </div>
           
            <div id="div-descripcion">
                <p class="card-description">{{ card.description }}</p>
            </div>
            <hr>
            <div id="div-boton">
                <button type='button' class="btn btn-primary" @click="handleButtonClick(card.id)">Jugar</button>
            </div>
          
        </div>
        
      </div>
      <div class="juegos">
        <span class="juego juego1" :style="{ left: juego1Left + 'px' }">Ahorcado v1</span>
        <span class="juego juego2" :style="{ left: juego2Left + 'px' }">Ahorcado v2</span>
        <span class="juego juego3" :style="{ left: juego3Left + 'px' }">Poker Planning</span>
        <span class="juego juego4" :style="{ left: juego4Left + 'px' }">Ruleta de la Suerte</span>
      </div>
    </div>
  </template>
  
  <script>
  import img1 from '@/assets/portada_ahorcado1.png';
  import img2 from '@/assets/portada_ahorcado2.jpg';
  import img3 from '@/assets/portada_poker_planning.jpg';
  import img4 from '@/assets/portada_ruleta.jpg'
  import Navbar from '@/components/NavBar.vue';

  export default {
    name: 'Landing',
    components: {
      Navbar,
    },
    data() {
      return {
        cards: [
          {
            id: '/ahorcado',
            image: img1,
            title: 'Ahorcado v1',
            description: 'Debes descubrir la palabra oculta antes de que se complete el dibujo.',
            
          },
          {
            id: '/ahorcado2',
            image: img2,
            title: 'Ahorcado v2',
            description: 'Debes descubrir la palabra oculta antes de que se complete el dibujo.',
            
          },
          {
            id: '/planner',
            image: img3,
            title: 'Poker planner',
            description: 'Juego de planificación de tareas.',
            
          },
          {
            id: '/ruleta',
            image: img4,
            title: 'Ruleta de la Suerte',
            description: 'Tira la ruleta y adivina las palabras antes que tus oponentes.',
            
          },
        ],
        juego1Left: 0,
        juego2Left: 300,
        juego3Left: 600,
        juego4Left: 900,
        velocidad: 2,
      };
    },
    methods: {
      handleButtonClick(id) {
        
  
        this.$router.push(id);
      },
    },
    mounted() {
      setInterval(() => {
        this.juego1Left += this.velocidad;
        this.juego2Left += this.velocidad;
        this.juego3Left += this.velocidad;
        this.juego4Left += this.velocidad;

        if (this.juego1Left > window.innerWidth -200) {
          this.juego1Left = -200;
        }
        if (this.juego2Left > window.innerWidth -200) {
          this.juego2Left = -200;
        }
        if (this.juego3Left > window.innerWidth -200) {
          this.juego3Left = -200;
        }
        if (this.juego4Left > window.innerWidth -200) {
          this.juego4Left = -200;
        }
      }, 16);
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  height:100%;
  

  }
  
  .grid-container {
    display: flex;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 10%;
    width: 80%;
    margin-left:10%;
    justify-content: space-around;
    text-align: center;
    border:solid white 5px;
    border-radius: 10px;
    padding: 30px;
  }
  
  .card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width:20%;
    opacity: 0.9;
    
  }

  .card:hover {
    transform: scale(1.1,1.1);
    transition: transform 0.3s;
    opacity: 1;
  }
  
  .card-image {
    width:100%;
    height: 100%;
    border-radius: 8px 8px 0 0;
  }
  
  .card-title {
    font-size: 100%;
    margin: 10px 0;
    
  }
  
  .card-description {
    font-size: 1em;
    margin: 10px 0;
    
  }
  
  
  .card-button:hover {
    background-color: #0056b3;
  }

  #div-imagen{
    height: 50%;
   
   
  }
  #div-titulo{
    height: 15%;
  }
  #div-descripcion{
    height: 25%;
  }
  #div-boton button{
    height: 100%;
    width: 50%;
  }
  .grid-container div{
    text-align: center;
    
  }

  .juegos {
  position: relative;
  border:5px solid white;
  border-radius: 10px;
  padding:35px;
  overflow: hidden;
 
  margin-top:5%;
}

.juego {
 
  position: absolute;
  padding: 10px;
  border: 2px solid;
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  transition: top 0.5s, left 0.5s;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  font-weight: bold;
}

.juego:hover {
 
  color: #000; /* Negro */
  
}

.juego1 {
  border-color: #ff0000;
}

.juego1:hover {
  background-color: #ff0000;
}
.juego2 {
  border-color: #00ff00;
}
.juego2:hover{
  background-color: #00ff00;
}

.juego3 {
  border-color: #0000ff;
}

.juego3:hover {
  background-color: #0000ff;
}

.juego4 {
  border-color: #ffff00;
}

.juego4:hover {
  background-color: #ffff00;
}

@keyframes mover {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(100px, 0);
  }
  50% {
    transform: translate(100px, 100px);
  }
  75% {
    transform: translate(0, 100px);
  }
  100% {
    transform: translate(0, 0);
  }
}
  </style>