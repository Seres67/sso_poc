import express from "express";
import { config } from "dotenv";
import session from "express-session";
import {
  AuthorizationUrlRequest,
  ConfidentialClientApplication,
  Configuration,
} from "@azure/msal-node";

config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  session({
    secret: "REDACTED", //TODO: change me
    resave: false,
    saveUninitialized: true,
  }),
);

const msalConfig: Configuration = {
  auth: {
    clientId: "REDACTED", //TODO: change me
    authority: "https://login.microsoftonline.com/REDACTED", //TODO: change me
    clientSecret: "REDACTED", //TODO: change me
  },
};

const cca = new ConfidentialClientApplication(msalConfig);

app.get("/auth/microsoft", (req, res) => {
  const authCodeUrlParameters: AuthorizationUrlRequest = {
    scopes: ["openid", "profile", "email"],
    redirectUri: "http://localhost:3000/auth/callback",
  };
  cca
    .getAuthCodeUrl(authCodeUrlParameters)
    .then((response) => {
      res.redirect(response);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.get("/auth/callback", async (req, res) => {
  const tokenRequest = {
    code: req.query.code,
    scopes: ["openid", "profile", "email"],
    redirectUri: "http://localhost:3000/auth/callback",
  };
  try {
    const response = await cca.acquireTokenByCode(tokenRequest);
    req.session.user = response.account;
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.get("/", (req, res) => {
  if (req.session.user) res.send(`Hello ${req.session.user.name}`);
  else res.redirect("/auth/microsoft");
});

app.listen(PORT, () => {});
