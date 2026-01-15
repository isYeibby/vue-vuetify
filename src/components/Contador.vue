<template>
  <div class="contador-options">
    <h2>Contador con Options API</h2>
    <h1>Contador: {{ count }}</h1>
    <button @click="increase" class="btn-increment">Incrementar</button>
    <button @click="decrease" class="btn-decrement">Decrementar</button>
    <button @click="reset" class="btn-reset">Reiniciar</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Contador',
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
    reset() {
      this.count = 0;
    }
  },
  mounted() {
    console.log('Componente Contador montado. Valor inicial:', this.count);
  }
};
</script>

<style scoped>
.contador-options {
  padding: 20px;
  border: 2px solid #42b983;
  border-radius: 8px;
  margin: 0;
  text-align: center;
  height: 100%;
}

h2 {
  color: #42b983;
  margin-bottom: 10px;
}

h1 {
  color: #2c3e50;
  font-size: 2.5em;
  margin: 20px 0;
}

button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: all 0.3s;
}

.btn-increment {
  background-color: #42b983;
  color: white;
}

.btn-increment:hover {
  background-color: #359268;
}

.btn-decrement {
  background-color: #ff6b6b;
  color: white;
}

.btn-decrement:hover {
  background-color: #ee5a5a;
}

.btn-reset {
  background-color: #4a90e2;
  color: white;
}

.btn-reset:hover {
  background-color: #357abd;
}
</style>
