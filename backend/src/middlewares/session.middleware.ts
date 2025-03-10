import { NextFunction, Request, Response } from "express";

const verifySession = (req: Request, res: Response, next: NextFunction) => {
  //if (!req.session.user) return res.sendStatus(401);
  next();
};

export default verifySession;
