<template>
  <div class="contador-composition">
    <p class="subtitle">Hola, soy la versión con Composition API</p>
    <h2>Contador con Composition API</h2>
    <h1>Contador: {{ contador }}</h1>
    <button @click="incrementar" class="btn-increment">Incrementar</button>
    <button @click="decrementar" class="btn-decrement">Decrementar</button>
    <button @click="reiniciar" class="btn-reset">Reiniciar</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const contador = ref(0);

const incrementar = () => {
  contador.value++;
};

const decrementar = () => {
  contador.value--;
};

const reiniciar = () => {
  contador.value = 0;
};

onMounted(() => {
  console.log('Componente ContadorComposition montado. Valor inicial:', contador.value);
});
</script>

<style scoped>
.contador-composition {
  padding: 20px;
  border: 2px solid #4a90e2;
  border-radius: 8px;
  margin: 0;
  text-align: center;
  height: 100%;
}

.subtitle {
  color: #666;
  font-style: italic;
  margin-bottom: 10px;
}

h2 {
  color: #4a90e2;
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
