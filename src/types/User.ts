// Interfaz User
export interface User {
  name: string;
  email: string | null;
  state: "ACTIVE" | "INACTIVE";
  id: number;
}

// Clase User que implementa la interfaz
export class UserClass implements User {
  constructor(
    public name: string,
    public email: string | null,
    public state: "ACTIVE" | "INACTIVE",
    public id: number
  ) {}
}

// Ejemplo de uso
const user1 = new UserClass("Juan Pérez", "juan@example.com", "ACTIVE", 1);
const user2 = new UserClass("María García", null, "INACTIVE", 2);

console.log("Usuario 1:", user1);
console.log("Usuario 2:", user2);
