import { TipoUsuario } from '../../models/TipoUsuario';

export const listTipoUsuario = async (): Promise<TipoUsuario[]> => {
  const tipos = await TipoUsuario.findAll();
  return tipos.map((t) => t.toJSON());
};
