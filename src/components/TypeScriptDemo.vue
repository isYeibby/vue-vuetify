<template>
  <div class="typescript-demo">
    <h2>Demostración de TypeScript</h2>
    <p class="subtitle">Interfaces y Clases</p>
    
    <div class="users-list">
      <h3>Lista de Usuarios</h3>
      <div v-for="user in users" :key="user.id" class="user-card">
        <div class="user-header">
          <h4>{{ user.name }}</h4>
          <span 
            :class="['status-badge', user.state.toLowerCase()]"
          >
            {{ user.state }}
          </span>
        </div>
        <p class="user-email">
          <strong>Email:</strong> 
          {{ user.email || 'No disponible' }}
        </p>
        <p class="user-id">
          <strong>ID:</strong> #{{ user.id }}
        </p>
      </div>
    </div>

    <div class="add-user-section">
      <h3>Agregar Nuevo Usuario</h3>
      <form @submit.prevent="addNewUser">
        <input 
          v-model="newUserName" 
          type="text" 
          placeholder="Nombre"
          required
        />
        <input 
          v-model="newUserEmail" 
          type="email" 
          placeholder="Email (opcional)"
        />
        <select v-model="newUserState">
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>
        <button type="submit">Agregar Usuario</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UserClass, type User } from '@/types/User';

export default defineComponent({
  name: 'TypeScriptDemo',
  data() {
    return {
      users: [
        new UserClass("Juan Pérez", "juan@example.com", "ACTIVE", 1),
        new UserClass("María García", "maria@example.com", "ACTIVE", 2),
        new UserClass("Carlos Rodríguez", null, "INACTIVE", 3),
        new UserClass("Ana Martínez", "ana@example.com", "ACTIVE", 4)
      ] as User[],
      newUserName: '',
      newUserEmail: '',
      newUserState: 'ACTIVE' as "ACTIVE" | "INACTIVE",
      nextId: 5
    };
  },
  methods: {
    addNewUser() {
      const newUser = new UserClass(
        this.newUserName,
        this.newUserEmail || null,
        this.newUserState,
        this.nextId
      );
      
      this.users.push(newUser);
      this.nextId++;
      
      // Limpiar formulario
      this.newUserName = '';
      this.newUserEmail = '';
      this.newUserState = 'ACTIVE';
      
      console.log('Nuevo usuario creado:', newUser);
    }
  },
  mounted() {
    console.log('TypeScriptDemo montado con', this.users.length, 'usuarios');
  }
});
</script>

<style scoped>
.typescript-demo {
  padding: 20px;
  border: 2px solid #ff6b6b;
  border-radius: 8px;
  margin: 0;
}

h2 {
  color: #ff6b6b;
  margin-bottom: 5px;
}

.subtitle {
  color: #666;
  font-style: italic;
  margin-bottom: 20px;
}

.users-list {
  margin-bottom: 30px;
}

h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
}

.user-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  transition: all 0.3s;
}

.user-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateX(5px);
}

.user-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.user-header h4 {
  margin: 0;
  color: #2c3e50;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
}

.status-badge.active {
  background-color: #42b983;
  color: white;
}

.status-badge.inactive {
  background-color: #ff6b6b;
  color: white;
}

.user-email,
.user-id {
  margin: 5px 0;
  color: #666;
  font-size: 14px;
}

.add-user-section {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input,
select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
}

input:focus,
select:focus {
  outline: none;
  border-color: #42b983;
}

button[type="submit"] {
  padding: 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #359268;
}
</style>
