<template>
  <div class="product-card" @click="handleClick">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
      <span v-if="!product.inStock" class="out-of-stock">Agotado</span>
    </div>
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p class="description">{{ product.description }}</p>
      <div class="product-footer">
        <span class="price">${{ product.price.toFixed(2) }}</span>
        <button 
          @click.stop="addToCart" 
          :disabled="!product.inStock"
          class="btn-add"
        >
          {{ product.inStock ? 'Agregar' : 'No disponible' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Product } from '@/types/Product';

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  emits: ['add-to-cart', 'product-click'],
  methods: {
    addToCart() {
      if (this.product.inStock) {
        this.$emit('add-to-cart', this.product);
      }
    },
    handleClick() {
      this.$emit('product-click', this.product);
    }
  }
});
</script>

<style scoped>
.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  background: white;
  max-width: 300px;
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

.product-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f5f5f5;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.out-of-stock {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff6b6b;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.product-info {
  padding: 15px;
}

.product-info h3 {
  margin: 0 0 10px 0;
  color: #2c3e50;
  font-size: 1.2em;
}

.description {
  color: #666;
  font-size: 0.9em;
  margin-bottom: 15px;
  line-height: 1.4;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 1.5em;
  font-weight: bold;
  color: #42b983;
}

.btn-add {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 14px;
}

.btn-add:hover:not(:disabled) {
  background-color: #359268;
}

.btn-add:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
