import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    const decodedData = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).userId = (decodedData as any).id;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Token verification failed' });
  }
};

export default auth;