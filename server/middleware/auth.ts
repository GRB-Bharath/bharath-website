import type { Request, Response, NextFunction } from "express";

export interface AuthRequest extends Request {
  session: {
    isAdmin?: boolean;
    [key: string]: any;
  };
}

export const requireAuth = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.session.isAdmin) {
    next();
  } else {
    res.redirect('/admin/login');
  }
};

export const adminCredentials = {
  username: 'bharathb451@gmail.com',
  password: '7760344951@Grb'
};