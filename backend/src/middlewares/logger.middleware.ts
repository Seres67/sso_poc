import { NextFunction, Request, Response } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
  // DATE IP STATUS METHOD ENDPOINT
  const date = new Date();
  console.log(
    `${req.ip} - [${date.toISOString()}] "${req.method} ${req.path} ${req.protocol}" "${req.protocol}://${req.get("Host")}${req.path}" "${req.get("User-Agent")}"\n`,
  );
  next();
};

export default logger;
