// src/services/UsuarioService.ts
import { Usuario } from '../models/Usuario';
import { UsuarioRepository } from '../repositories/UsuarioRepository';

export class UsuarioService {
  private usuarioRepository = new UsuarioRepository();

  async criarUsuario(dados: { name: string; email: string; password: string }): Promise<number> {
    const usuario = new Usuario(dados.name, dados.email, dados.password);
    return await this.usuarioRepository.salvar(usuario);
  }
}