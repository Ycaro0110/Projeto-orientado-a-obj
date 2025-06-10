// src/repositories/UsuarioRepository.ts
import { Usuario } from '../models/Usuario';
import { db } from '../database/sqlite';

export class UsuarioRepository {
  async salvar(usuario: Usuario): Promise<number> {
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [usuario.name, usuario.email, usuario.password], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.lastID);
        }
      });
    });
  }
}