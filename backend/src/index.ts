import "./env";
import express from "express";
import session from "express-session";
import authRouter from "./routers/auth.router";
import calendarRouter from "./routers/calendar.router";
import userRouter from "./routers/user.router";
import logger from "./middlewares/logger.middleware";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, sameSite: "none", httpOnly: false },
  }),
);

app.use(logger);

app.use("/auth", authRouter);
app.use("/calendars", calendarRouter);
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log("server started!");
});
