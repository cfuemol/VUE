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
            id: '/ahorcado1',
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
      };
    },
    methods: {
      handleButtonClick(id) {
        
  
        this.$router.push(id);
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
  
  .grid-container {
    display: flex;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 15%;
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
  </style>