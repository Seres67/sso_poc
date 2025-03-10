import {
  AuthorizationUrlRequest,
  ConfidentialClientApplication,
  Configuration,
} from "@azure/msal-node";

const msalConfig: Configuration = {
  auth: {
    clientId: process.env.CLIENT_ID as string,
    authority: process.env.AUTHORITY,
    clientSecret: process.env.CLIENT_SECRET,
  },
};

const cca = new ConfidentialClientApplication(msalConfig);

const scopes = ["profile", "Calendars.ReadWrite", "Calendars.ReadWrite.Shared"];

const microsoft = async () => {
  const authCodeUrlParameters: AuthorizationUrlRequest = {
    scopes,
    redirectUri: process.env.CALLBACK_URL as string,
  };
  try {
    const res = await cca.getAuthCodeUrl(authCodeUrlParameters);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const callback = async (code: string) => {
  const tokenRequest = {
    code,
    scopes,
    redirectUri: process.env.CALLBACK_URL as string,
  };
  try {
    const response = await cca.acquireTokenByCode(tokenRequest);
    console.log(response);
    return response.account;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default { microsoft, callback };
