import { Request, Response } from "express";

const getCurrentUser = (req: Request, res: Response) => {
  //if (!req.session.user) return res.sendStatus(401);
  console.log(req.session);
  res.json(req.session.user);
};

export default { getCurrentUser };
