import type { Request, Response, NextFunction } from "express";
import type { Session } from "express-session";

export interface AuthRequest extends Request {
  session: Session & {
    isAdmin?: boolean;
  };
}

export const requireAuth = (req: AuthRequest, res: Response, next: NextFunction) => {
  console.log('Auth check - session exists:', !!req.session);
  console.log('Auth check - isAdmin:', req.session?.isAdmin);
  
  if (req.session && req.session.isAdmin) {
    next();
  } else {
    console.log('Auth failed - redirecting to login');
    res.redirect('/admin/login');
  }
};

export const adminCredentials = {
  username: 'bharathb451@gmail.com',
  password: '7760344951@Grb'
};