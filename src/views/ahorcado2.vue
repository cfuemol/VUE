<template>
    <div>
      <input v-model="letra" @keyup.enter="ingresarLetra" />
      <button @click="ingresarLetra">Ingresar letra</button>
      <p>Palabra: {{ palabra }}</p>
      <p>Intentos restantes: {{ intentosRestantes }}</p>
      <div v-html="dibujoAhorcado"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        palabra: "_ _ _ _ _ _",
        letra: "",
        intentosRestantes: 6,
        dibujoAhorcado: "",
      };
    },
    methods: {
      ingresarLetra() {
        // Comprobar si la letra es correcta
        if (this.palabra.includes(this.letra)) {
          // Actualizar la palabra
          this.palabra = this.palabra.replace("_", this.letra);
        } else {
          // Disminuir el número de intentos restantes
          this.intentosRestantes--;
          // Dibujar el ahorcado
          this.dibujarAhorcado();
        }
        // Limpiar el input
        this.letra = "";
      },
      dibujarAhorcado() {
        // Dibujar el ahorcado según el número de intentos restantes
        switch (this.intentosRestantes) {
          case 5:
            this.dibujoAhorcado = "<div>_______</div>";
            break;
          case 4:
            this.dibujoAhorcado = "<div>_______</div><div>|</div>";
            break;
          case 3:
            this.dibujoAhorcado = "<div>_______</div><div>|</div><div>/</div>";
            break;
          case 2:
            this.dibujoAhorcado = "<div>_______</div><div>|</div><div>/</div><div>\\</div>";
            break;
          case 1:
            this.dibujoAhorcado = "<div>_______</div><div>|</div><div>/</div><div>\\</div><div>|</div>";
            break;
          default:
            this.dibujoAhorcado = "<div>_______</div><div>|</div><div>/</div><div>\\</div><div>|</div><div>_____</div>";
            break;
        }
      },
    },
  };
  </script>
  