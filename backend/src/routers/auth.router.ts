import { Router } from "express";
import authController from "../controllers/auth.controller";

const router = Router();

router.get("/microsoft", authController.microsoft);
router.get("/callback", authController.callback);
router.get("/logout", authController.logout);

export default router;
