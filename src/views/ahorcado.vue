<template>
    <div class="container-V1">

        <div id="navbar">
        <Navbar />
        </div>

    <div class="juego-V1">
        
        <div class="izquierda-V1">

            <div class="info-V1">
                <p class="info-p-V1">Intentos: {{ intentos }} / {{ maxIntentos }}</p>
                <p>Palabra: {{ palabra.split('').map((letra) => (letrasAdivinadas.includes(letra) ? letra : '_')).join(' ') }}</p>
            </div>

            <div class="alfabeto-V1">
                <button
                    v-for="letra in alfabeto"
                    :key="letra"
                    @click="manejarIntento(letra)"
                    :disabled="letrasAdivinadas.includes(letra) || intentos >= maxIntentos || letrasIncorrectas.includes(letra)"
                    :class="`boton-letra-V1 ${botonColores[letra] || ''}`"
                >
                {{ letra }}
                </button>
            </div>

        </div>

        <div class="dibujo_ahorcado-V1">
            <img :src="imagenes[intentos]" alt="Ahorcado" />
        </div>

    </div>

    <div v-if="showModalPerder" class="modal-V1">
        <div class="modal-content-V1">
            <h2>¡Has perdido!</h2>
            <p>La palabra era: {{ palabra }}</p>
            <button @click="handleCloseModalPerder"  class="modal_boton-V1">Reiniciar</button>
        </div>

    </div>

    <div v-if="showModalGanar" class="modal-V1">
        <div class="modal-content-V1">
            <h2>¡Has ganado!</h2>
            <p>Felicidades, has adivinado la palabra: {{ palabra }}</p>
            <button @click="handleCloseModalGanar" class="modal_boton-V1">Reiniciar</button>
        </div>

    </div>
</div>

</template>

<script>
    import Navbar from '@/components/NavBar.vue'; 
    import imagen0 from '@/assets/ahorcado_6.png';
    import imagen1 from '@/assets/ahorcado_5.png';
    import imagen2 from '@/assets/ahorcado_4.png';
    import imagen3 from '@/assets/ahorcado_3.png';
    import imagen4 from '@/assets/ahorcado_2.png';
    import imagen5 from '@/assets/ahorcado_1.png';
    import imagen6 from '@/assets/ahorcado_0.png';

    export default {
        name: 'Ahorcado',
        components: {
            Navbar,
        },
        data() {
            return {
                maxIntentos: 6,
                palabras: ['EJEMPLO', 'REACT', 'JAVASCRIPT', 'PROGRAMACION', 'DESARROLLO', 'EXPRESS', 'MERN', 'CSS', 'VISUALBASIC', 'PYTHON', 'PHP', 'SQL', 'JAVA', 'ANGULAR'],
                intentos: 0,
                letrasAdivinadas: [],
                letrasIncorrectas: [],
                showModalPerder: false,
                showModalGanar: false,
                palabra: '',
                botonColores: {},
                alfabeto: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
                imagenes: [imagen0, imagen1, imagen2, imagen3, imagen4, imagen5, imagen6],
            };
        },

        mounted() {
            this.seleccionarPalabraAleatoria();
        },

        methods: {
            seleccionarPalabraAleatoria() {
                const palabraAleatoria = this.palabras[Math.floor(Math.random() * this.palabras.length)];
                this.palabra = palabraAleatoria;
                this.intentos = 0;
                this.letrasAdivinadas = [];
                this.letrasIncorrectas = [];
                this.showModalPerder = false;
                this.showModalGanar = false;
                this.botonColores = {};
            },

            manejarIntento(letra) {
                if (this.maxIntentos > this.intentos) {
                    if (this.palabra.includes(letra)) {
                        const nuevasLetrasAdivinadas = [...this.letrasAdivinadas, letra];
                        this.letrasAdivinadas = nuevasLetrasAdivinadas;
                        const todasLetrasAdivinadas = this.palabra.split('').every((letra) => nuevasLetrasAdivinadas.includes(letra));
                        if (todasLetrasAdivinadas) {
                        this.showModalGanar = true;
                        }
                    } else {
                        this.intentos++;
                        console.log(this.intentos);
                        this.letrasIncorrectas = [...this.letrasIncorrectas, letra];
                        if (this.intentos >= this.maxIntentos) {
                        this.showModalPerder = true;
                        }
                    }
                    this.botonColores = { ...this.botonColores, [letra]: this.palabra.includes(letra) ? 'green' : 'red' };
                }
            },

        handleCloseModalPerder() {
            this.showModalPerder = false;
            this.seleccionarPalabraAleatoria();
        },

        handleCloseModalGanar() {
            this.showModalGanar = false;
            this.seleccionarPalabraAleatoria();
        },
        },
    };
</script>

<style scoped>

    .container-V1 {
        position: absolute;
        top: 0;
        left: 0;
        min-width: 100%;
        min-height: 100%;
        background-color: rgb(47, 87, 133); /* Azul */
        color: #ffffff; /* Blanco */
        text-align: center;
        padding: 20px;
    }

    .juego-V1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        margin-top: 5%;
    }

    .izquierda-V1 {
        display: block;
        justify-content: center;
        align-items: center;
        width: 50%;
        margin-top: -5%;
        z-index: 0;
    }

    .info-V1 {
        display: block;
        border: 2px solid white;
        border-radius: 10px;
        width: 100%;
        margin-bottom: 2%;
    }

    .info-p-V1 {
        margin-top: 2.5%;
    }

    .alfabeto-V1 {
        display: block;
        border: 2px solid white;
        border-radius: 10px;
        width: 100%;
    }

    .boton-letra-V1 {
        background-color: white;
        color: black;
        padding: 10px 20px;
        border: 2px solid #ccc;
        border-radius: 10px;
        margin: 5px;
        cursor: pointer;
    }

    .boton-letra-V1.green {
        background-color: green;
        color: white;
    }

    .boton-letra-V1.red {
        background-color: red;
        color: white;
    }

    .dibujo_ahorcado-V1 {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        width: 75%;
        height: 75%;
        filter: invert(100%);
        margin-top: 5%;
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
    }

    .modal_boton-V1{
        background-color: green;
        color: white;
    }

</style>
