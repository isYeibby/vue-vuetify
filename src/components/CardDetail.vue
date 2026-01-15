<template>
  <v-dialog v-model="dialogVisible" max-width="600px">
    <v-card v-if="product">
      <v-card-title class="headline">
        {{ product.name }}
      </v-card-title>
      
      <v-img
        :src="product.image"
        :alt="product.name"
        height="300"
        cover
      ></v-img>
      
      <v-card-text>
        <div class="product-details">
          <p class="text-h5 mb-2">
            Precio: 
            <span class="text-success font-weight-bold">${{ product.price.toFixed(2) }}</span>
          </p>
          
          <v-chip
            :color="product.inStock ? 'success' : 'error'"
            class="mb-3"
            small
          >
            {{ product.inStock ? 'En Stock' : 'Agotado' }}
          </v-chip>
          
          <p class="text-body-1">{{ product.description }}</p>
          
          <v-divider class="my-4"></v-divider>
          
          <div class="product-info">
            <p><strong>ID del producto:</strong> {{ product.id }}</p>
            <p><strong>Disponibilidad:</strong> {{ product.inStock ? 'Disponible para envío inmediato' : 'Próximamente disponible' }}</p>
          </div>
        </div>
      </v-card-text>
      
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="grey"
          variant="text"
          @click="close"
        >
          Cerrar
        </v-btn>
        <v-btn
          color="primary"
          variant="elevated"
          :disabled="!product.inStock"
          @click="addToCart"
        >
          <v-icon left>mdi-cart-plus</v-icon>
          Agregar al carrito
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Product } from '@/types/Product';

const props = defineProps<{
  product: Product | null;
  modelValue: boolean;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  'add-to-cart': [product: Product];
}>();

const dialogVisible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const close = () => {
  emit('update:modelValue', false);
};

const addToCart = () => {
  if (props.product) {
    emit('add-to-cart', props.product);
    close();
  }
};
</script>

<style scoped>
.product-details {
  padding: 10px 0;
}

.product-info {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
}

.product-info p {
  margin: 8px 0;
  color: #666;
}
</style>
