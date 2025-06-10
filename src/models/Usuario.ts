// src/models/Usuario.ts
// src/models/Usuario.ts
export class Usuario {
  public readonly name: string;
  public readonly email: string;
  public readonly password: string;

  constructor(name: string, email: string, password: string) {
    if (!name || !email || !password) {
      throw new Error('Nome, email e senha são obrigatórios.');
    }
    if (name.length < 3) {
      throw new Error('O nome deve ter no mínimo 3 caracteres.');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Formato de email inválido.');
    }
    if (password.length < 6) {
      throw new Error('A senha deve ter no mínimo 6 caracteres.');
    }

    this.name = name;
    this.email = email;
    this.password = password;
  }
}