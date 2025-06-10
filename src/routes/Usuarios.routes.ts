// src/routes/usuario.routes.ts
import { Router } from 'express';
import { UsuarioController } from '../controllers/UsuarioController';

const router = Router();
const usuarioController = new UsuarioController();

router.post('/criar-usuario', (req, res) => usuarioController.criarUsuario(req, res));

export default router;