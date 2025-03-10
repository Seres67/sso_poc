import { Router } from "express";
import verifySession from "../middlewares/session.middleware";
import userController from "../controllers/user.controller";

const router = Router();

router.get("/me", verifySession, userController.getCurrentUser);

export default router;
