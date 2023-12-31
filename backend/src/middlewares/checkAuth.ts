import { Request, Response, NextFunction } from 'express';

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.uid) next();
  else res.status(401).json({ msg: 'Você não tem permissão' });
};

export default checkAuth;
