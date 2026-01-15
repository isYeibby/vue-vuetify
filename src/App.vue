<script setup lang="ts">
import { ref } from 'vue';
import Contador from './components/Contador.vue';
import ContadorComposition from './components/ContadorComposition.vue';
import ProductCard from './components/ProductCard.vue';
import CardDetail from './components/CardDetail.vue';
import TypeScriptDemo from './components/TypeScriptDemo.vue';
import type { Product } from './types/Product';

// Estado para mostrar/ocultar contadores
const showContadores = ref(true);
const showTypeScriptDemo = ref(true);

// Lista de productos (usando v-for)
const productos = ref<Product[]>([
  {
    id: 1,
    name: 'Laptop Gaming',
    price: 1299.99,
    description: 'Laptop de alto rendimiento para gaming y trabajo profesional',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400',
    inStock: true
  },
  {
    id: 2,
    name: 'Auriculares Inalámbricos',
    price: 199.99,
    description: 'Auriculares con cancelación de ruido y sonido premium',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    inStock: true
  },
  {
    id: 3,
    name: 'Teclado Mecánico',
    price: 149.99,
    description: 'Teclado mecánico RGB para gamers',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
    inStock: false
  },
  {
    id: 4,
    name: 'Mouse Gaming',
    price: 79.99,
    description: 'Mouse ergonómico de alta precisión',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
    inStock: true
  }
]);

// Estado para el diálogo de detalle
const dialogDetail = ref(false);
const selectedProduct = ref<Product | null>(null);

// Carrito de compras
const carrito = ref<Product[]>([]);

// Métodos para manejar eventos
const handleProductClick = (product: Product) => {
  selectedProduct.value = product;
  dialogDetail.value = true;
};

const handleAddToCart = (product: Product) => {
  carrito.value.push(product);
  console.log('Producto agregado al carrito:', product.name);
  console.log('Total de productos en carrito:', carrito.value.length);
};
</script>

<template>
  <v-app>
    <v-app-bar color="primary" prominent>
      <v-app-bar-title>
        <v-icon size="large">mdi-vuejs</v-icon>
        Vue.js + Vuetify - Práctica
      </v-app-bar-title>
      
      <v-spacer></v-spacer>
      
      <v-btn icon>
        <v-badge :content="carrito.length" color="error" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <!-- Sección de título -->
        <v-row>
          <v-col cols="12">
            <h1 class="text-h3 text-center mb-4">
              Práctica de Vue.js + Vuetify
            </h1>
            <p class="text-center text-subtitle-1 mb-8">
              Ejemplos de Options API, Composition API, Props, Eventos y Directivas
            </p>
          </v-col>
        </v-row>

        <!-- Botón para mostrar/ocultar contadores (v-if) -->
        <v-row class="mb-6">
          <v-col cols="12" md="6" class="text-center">
            <v-btn 
              @click="showContadores = !showContadores" 
              color="secondary"
              size="large"
            >
              {{ showContadores ? 'Ocultar Contadores' : 'Mostrar Contadores' }}
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" class="text-center">
            <v-btn 
              @click="showTypeScriptDemo = !showTypeScriptDemo" 
              color="accent"
              size="large"
            >
              {{ showTypeScriptDemo ? 'Ocultar TypeScript' : 'Mostrar TypeScript' }}
            </v-btn>
          </v-col>
        </v-row>

        <!-- Demo de TypeScript (usando v-if) -->
        <v-row v-if="showTypeScriptDemo">
          <v-col cols="12">
            <TypeScriptDemo />
          </v-col>
        </v-row>

        <!-- Contadores (usando v-if) -->
        <v-row v-if="showContadores">
          <v-col cols="12" md="6">
            <Contador />
          </v-col>
          <v-col cols="12" md="6">
            <ContadorComposition />
          </v-col>
        </v-row>

        <!-- Divider -->
        <v-divider class="my-8"></v-divider>

        <!-- Sección de productos -->
        <v-row>
          <v-col cols="12">
            <h2 class="text-h4 mb-4">Catálogo de Productos</h2>
            <p class="text-subtitle-1 mb-6">
              Usando v-for, props y eventos para comunicación entre componentes
            </p>
          </v-col>
        </v-row>

        <!-- Lista de productos (usando v-for) -->
        <v-row>
          <v-col 
            v-for="product in productos" 
            :key="product.id"
            cols="12" 
            sm="6" 
            md="4" 
            lg="3"
          >
            <ProductCard 
              :product="product"
              @add-to-cart="handleAddToCart"
              @product-click="handleProductClick"
            />
          </v-col>
        </v-row>

        <!-- Información del carrito -->
        <v-row class="mt-6">
          <v-col cols="12">
            <v-alert 
              v-if="carrito.length > 0"
              type="success"
              variant="tonal"
            >
              Tienes {{ carrito.length }} producto(s) en el carrito
            </v-alert>
            <v-alert 
              v-else
              type="info"
              variant="tonal"
            >
              Tu carrito está vacío
            </v-alert>
          </v-col>
        </v-row>
      </v-container>

      <!-- Diálogo de detalle del producto (Vuetify) -->
      <CardDetail 
        v-model="dialogDetail"
        :product="selectedProduct"
        @add-to-cart="handleAddToCart"
      />
    </v-main>
  </v-app>
</template>

<style scoped>
.v-container {
  max-width: 100%;
  width: 100%;
  padding: 20px;
}

@media (min-width: 1280px) {
  .v-container {
    max-width: 1600px;
    margin: 0 auto;
  }
}

@media (min-width: 1920px) {
  .v-container {
    max-width: 1800px;
  }
}
</style>
