import { hubspotApi } from "../hubspotApi.js";
import { fetchAllData } from "../utils.js";

export const hubToIntercomContactMapping = {};

export const mapContactsToHubspot = async (req, res) => {
  try {
    const contacts = await fetchAllData("/contacts");
    const inputBody = [];
    contacts.forEach((contact) => {
      inputBody.push({
        properties: {
          firstname: contact.name,
          phone: contact.phone,
          intercom_contact_id: contact.id,
        },
        id: contact.id,
        idProperty: "intercom_contact_id",
      });
    });
    hubspotApi
      .post("crm/v3/objects/contacts/batch/upsert", {
        inputs: inputBody,
      })
      .then((response) => {
        response.data.results.forEach((result) => {
          hubToIntercomContactMapping[result.properties.intercom_contact_id] =
            result.id;
        });
        res.send("Upsert successful", response.data.results);
      })
      .catch((error) => {
        console.error(error);
        res.send("Batch upsert not successful");
      });
  } catch (error) {
    res.send("Batch upsert not successful");
  }
};
