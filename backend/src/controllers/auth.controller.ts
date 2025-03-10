import { Request, Response } from "express";
import authService from "../services/auth.service";

const microsoft = async (req: Request, res: Response) => {
  try {
    const response = await authService.microsoft();
    res.redirect(response);
  } catch (err) {
    res.sendStatus(500);
  }
};

const callback = async (req: Request, res: Response) => {
  try {
    const response = await authService.callback(req.query.code as string);
    req.session.user = response;
    res.redirect("http://localhost:5173/home");
  } catch (err) {
    res.sendStatus(500);
  }
};

const logout = (req: Request, res: Response) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

export default { microsoft, callback, logout };
