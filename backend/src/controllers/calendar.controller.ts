import { Request, Response } from "express";
import calendarService from "../services/calendar.service";

const getAllCalendars = async (req: Request, res: Response) => {
  try {
    const response = await calendarService.getAllCalendars();
    res.json(response);
  } catch (err) {
    res.sendStatus(500);
  }
};

const getAllEvents = async (req: Request, res: Response) => {
  try {
    const response = await calendarService.getAllEvents();
    res.json(response);
  } catch (err) {
    res.sendStatus(500);
  }
};

const createEvent = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const response = await calendarService.createEvent();
    res.json(response);
  } catch (err) {
    res.sendStatus(500);
  }
};

export default { getAllCalendars, getAllEvents, createEvent };
