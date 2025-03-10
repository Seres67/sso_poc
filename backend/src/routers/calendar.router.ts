import { Router } from "express";
import verifySession from "../middlewares/session.middleware";
import calendarController from "../controllers/calendar.controller";

const router = Router();

router.get("/", verifySession, calendarController.getAllCalendars);

router.get("/events", verifySession, calendarController.getAllEvents);

router.post("/events", verifySession, calendarController.createEvent);

export default router;
