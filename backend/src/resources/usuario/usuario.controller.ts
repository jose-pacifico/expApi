import { Request, Response } from 'express';
import {
  getAllUsuarios,
  createUsuario,
  getUsuario,
  updateUsuario,
} from './usuario.services';

const index = async (req: Request, res: Response) => {
  try {
    const usuarios = await getAllUsuarios();
    res.status(200).json(usuarios);
  } catch (e) {
    res.status(500).json(e);
  }
};

const create = async (req: Request, res: Response) => {
  const usuario = req.body;
  try {
    const newUsuario = await createUsuario(usuario);
    res.status(201).json(newUsuario);
  } catch (e) {
    res.status(500).json(e);
  }
};

const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usuario = await getUsuario(id);
    if (usuario === null) res.status(400).json({ msg: 'Usuário não existe' });
    else res.status(200).json(usuario);
  } catch (e) {
    res.status(500).json(e);
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = req.body;
  try {
    const result = await updateUsuario(id, usuario);
    if (usuario === null) res.status(400).json({ msg: 'Usuário não existe' });
    else res.status(200).json({ msg: 'Usuário Atualizado' });
  } catch (e) {
    res.status(500).json(e);
  }
};

const remove = async (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
