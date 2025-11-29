import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import { saveAccessToken } from "./utils.js";
import { contacts } from "./routes/contacts.js";
import { companies } from "./routes/companies.js";
import { mapContactsToHubspot } from "./routes/mapContactsToHubspot.js";
import { mapCompaniesToHubspot } from "./routes/mapCompaniesToHubspot.js";
import { associateContactsToCompanies } from "./routes/associateContactsToCompanies.js";

dotenv.config();

export const app = express();

const port = process.env.PORT || 3000;

const clientId = process.env.INTERCOM_CLIENT_ID;
const clientSecret = process.env.INTERCOM_CLIENT_SECRET;

app.get("/auth/intercom", (req, res) => {
  const redirectUri = "http://localhost:3000/oauth/callback";
  const url = `https://app.intercom.com/oauth?client_id=${clientId}&redirect_uri=${redirectUri}`;

  res.redirect(url);
});

app.get("/oauth/callback", (req, res) => {
  const { code } = req.query;
  axios
    .post("https://api.intercom.io/auth/eagle/token", {
      code,
      client_id: clientId,
      client_secret: clientSecret,
    })
    .then((response) => {
      saveAccessToken(response.data.token);
      res.send("Token saved successfully");
    })
    .catch((error) => {
      //redirect to try again later page
      console.error(error);
    });
});

app.get("/contacts", contacts);
app.get("/companies", companies);
app.get("/map-contacts", mapContactsToHubspot);
app.get("/map-companies", mapCompaniesToHubspot);
app.get("/associate-contact-company", associateContactsToCompanies);

app.listen(port, () => console.log(`This app is listening on port ${port}`));
