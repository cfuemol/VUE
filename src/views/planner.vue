<template>
    <div class="planner-container">
      <h1>Poker Planner</h1>
      <div class="cards-container">
        <div 
          v-for="card in cards" 
          :key="card.value" 
          class="card" 
          @click="selectCard(card.value)"
          :class="{ selected: selectedCard === card.value }"
        >
          {{ card.label }}
        </div>
      </div>
      <div class="selected-card" v-if="selectedCard !== null">
        <h2>Has seleccionado:</h2>
        <div class="card selected">{{ selectedCard }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Planner',
    data() {
      return {
        cards: [
          { value: 1, label: '1' },
          { value: 2, label: '2' },
          { value: 3, label: '3' },
          { value: 5, label: '5' },
          { value: 8, label: '8' },
          { value: 13, label: '13' },
          { value: 21, label: '21' },
          { value: 34, label: '34' },
          { value: 55, label: '55' },
          { value: 89, label: '89' },
          { value: 144, label: '144' },
          { value: '?', label: '?' }
        ],
        selectedCard: null
      };
    },
    methods: {
      selectCard(value) {
        this.selectedCard = value;
      }
    }
  };
  </script>
  
  <style scoped>
  .planner-container {
    text-align: center;
    padding: 20px;
  }
  
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }
  
  .card {
    width: 60px;
    height: 90px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: scale(1.1);
  }
  
  .selected {
    background-color: #4caf50;
    color: white;
  }
  
  .selected-card {
    margin-top: 20px;
  }
  
  .selected-card .card {
    font-size: 24px;
    width: 100px;
    height: 150px;
  }
  </style>