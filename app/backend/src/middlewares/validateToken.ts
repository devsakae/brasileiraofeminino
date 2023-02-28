import { NextFunction, Request, Response } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'jwt_secret';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization) return res.status(401).json({ message: 'Token not found' });
    const { headers: { authorization } } = req;
    verify(authorization, secret) as JwtPayload;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validateToken;
