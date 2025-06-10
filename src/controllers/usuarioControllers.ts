// src/controllers/UsuarioController.ts
import { Request, Response } from 'express';
import { UsuarioService } from '../services/UsuarioServices';

export class UsuarioController {
  private usuarioService = new UsuarioService();

  public async criarUsuario(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;
      const id = await this.usuarioService.criarUsuario({ name, email, password });
      res.status(201).json({ id });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
