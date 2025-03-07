<template>
  <div class="ruleta">
    <canvas id="ruleta-canvas" width="400" height="400"></canvas>
    <button @click="girarRuleta">Girar</button>
    <p>Resultado: {{ resultado }}</p>
    <p>Puntuación: {{ puntuacion }}</p>
    <div class="categoria">
      <h2>Categoría: {{ categoria }}</h2>
    </div>
    <div class="pregunta">
      <h2>Pregunta: {{ pregunta }}</h2>
    </div>
    <div class="respuestas">
      <button @click="seleccionarRespuesta(0)">{{ respuestas[0] }}</button>
      <button @click="seleccionarRespuesta(1)">{{ respuestas[1] }}</button>
      <button @click="seleccionarRespuesta(2)">{{ respuestas[2] }}</button>
      <button @click="seleccionarRespuesta(3)">{{ respuestas[3] }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resultado: '',
      ruleta: null,
      angulo: 0,
      velocidad: 0,
      puntuacion: 0,
      categoria: '',
      pregunta: '',
      respuestas: [],
      premios: [
        { nombre: '500', angulo: 0, color: 'red' },
        { nombre: '900', angulo: 72, color: 'blue' },
        { nombre: '700', angulo: 144, color: 'green' },
        { nombre: '300', angulo: 216, color: 'yellow' },
        { nombre: '1000', angulo: 288, color: 'purple' }
      ],
      categorias: [
        'Historia',
        'Ciencia',
        'Deportes',
        'Música',
        'Cine'
      ],
      preguntas: [
        {
          categoria: 'Historia',
          pregunta: '¿Quién fue el primer presidente de los Estados Unidos?',
          respuestas: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'Franklin D. Roosevelt'],
          respuestaCorrecta: 0
        },
        {
          categoria: 'Ciencia',
          pregunta: '¿Cuál es el planeta más grande del sistema solar?',
          respuestas: ['Júpiter', 'Saturno', 'Urano', 'Neptuno'],
          respuestaCorrecta: 0
        },
        {
          categoria: 'Deportes',
          pregunta: '¿Cuál es el equipo de fútbol más ganador de la Champions League?',
          respuestas: ['Real Madrid', 'Barcelona', 'Manchester United', 'Liverpool'],
          respuestaCorrecta: 0
        },
        {
          categoria: 'Música',
          pregunta: '¿Cuál es el álbum más vendido de todos los tiempos?',
          respuestas: ['Thriller', 'Back in Black', 'The Dark Side of the Moon', 'Sgt. Pepper\'s Lonely Hearts Club Band'],
          respuestaCorrecta: 0
        },
        {
          categoria: 'Cine',
          pregunta: '¿Cuál es la película más taquillera de todos los tiempos?',
          respuestas: ['Avengers: Endgame', 'The Lion King', 'Star Wars: The Force Awakens', 'Titanic'],
          respuestaCorrecta: 0
        }
      ]
    }
  },
  mounted() {
    this.ruleta = document.getElementById('ruleta-canvas');
    this.dibujarRuleta();
    this.seleccionarPregunta();
  },
  methods: {
    dibujarRuleta() {
      const ctx = this.ruleta.getContext('2d');
      ctx.clearRect(0, 0, 400, 400);
      ctx.beginPath();
      ctx.arc(200, 200, 180, 0, 2 * Math.PI);
      ctx.lineWidth = 10;
      ctx.strokeStyle = 'black';
      ctx.stroke();
      this.premios.forEach((premio) => {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 180, (premio.angulo * Math.PI / 180), ((premio.angulo + 72) * Math.PI / 180));
        ctx.lineTo(200, 200);
        ctx.fillStyle = premio.color;
        ctx.fill();
        ctx.restore();
        const textoX = 200 + (120 * Math.cos((premio.angulo + 36) * Math.PI / 180));
        const textoY = 200 + (120 * Math.sin((premio.angulo + 36) * Math.PI / 180));
        ctx.font = '24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'black';
        ctx.fillText(premio.nombre, textoX, textoY);
      });
    },
    girarRuleta() {
      this.velocidad = Math.random() * 10 + 5;
      this.angulo = 0;
      this.resultado = '';
      this.animarRuleta();
    },
    animarRuleta() {
      this.angulo += this.velocidad;
      this.velocidad *= 0.99;
      const ctx = this.ruleta.getContext('2d');
      ctx.clearRect(0, 0, 400, 400);
      ctx.beginPath();
      ctx.arc(200, 200, 180, 0, 2 * Math.PI);
      ctx.lineWidth = 10;
      ctx.strokeStyle = 'black';
      ctx.stroke();
      this.premios.forEach((premio) => {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 180, (premio.angulo * Math.PI / 180), ((premio.angulo + 72) * Math.PI / 180));
        ctx.lineTo(200, 200);
        ctx.fillStyle = premio.color;
        ctx.fill();
        ctx.restore();
        const textoX = 200 + (120 * Math.cos((premio.angulo + 36) * Math.PI / 180));
        const textoY = 200 + (120 * Math.sin((premio.angulo + 36) * Math.PI / 180));
        ctx.font = '24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'black';
        ctx.fillText(premio.nombre, textoX, textoY);
      });
      ctx.save();
      ctx.translate(200, 200);
      ctx.rotate(this.angulo * Math.PI / 180);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(170, 0);
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'lime';
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(180, 0);
      ctx.lineTo(140, -10);
      ctx.lineTo(140, 10);
      ctx.fillStyle = 'lime';
      ctx.fill();
      ctx.restore();
      if (this.velocidad > 0.1) {
        requestAnimationFrame(this.animarRuleta);
      } else {
        this.resultado = this.obtenerResultado();
        this.puntuacion += parseInt(this.resultado);
      }
    },
    obtenerResultado() {
      const anguloFinal = this.angulo % 360;
      const premio = this.premios.find((premio) => {
        return anguloFinal >= premio.angulo && anguloFinal < premio.angulo + 72;
      });
      return premio.nombre;
    },
    seleccionarPregunta() {
      const pregunta = this.preguntas[Math.floor(Math.random() * this.preguntas.length)];
      this.categoria = pregunta.categoria;
      this.pregunta = pregunta.pregunta;
      this.respuestas = pregunta.respuestas;
    },
    seleccionarRespuesta(index) {
      const pregunta = this.preguntas.find((pregunta) => {
        return pregunta.pregunta === this.pregunta;
      });
      if (index === pregunta.respuestaCorrecta) {
        alert('Correcto!');
        this.puntuacion += 100;
      } else {
        alert('Incorrecto!');
      }
      this.seleccionarPregunta();
    }
  }
}
</script>

<style>

.ruleta {
  text-align: center;
}

#ruleta-canvas {
  border: 1px solid black;
}

.categoria {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.pregunta {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.respuestas {
  margin-top: 20px;
}

.respuestas button {
  margin: 10px;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  background-color: #4CAF50;
  color: #fff;
  cursor: pointer;
}

.respuestas button:hover {
  background-color: #3e8e41;
}

</style>
