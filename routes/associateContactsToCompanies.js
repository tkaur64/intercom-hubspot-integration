import { hubspotApi } from "../hubspotApi.js";
import { fetchAllData } from "../utils.js";
import { hubToIntercomCompanyMapping } from "./mapCompaniesToHubspot.js";
import { hubToIntercomContactMapping } from "./mapContactsToHubspot.js";

export const associateContactsToCompanies = async (req, res) => {
  try {
    const contacts = await fetchAllData("/contacts");
    const inputs = [];
    contacts.forEach((contact) => {
      const companySource = contact.companies.data.map((c) => c.id);
      companySource.forEach((company) => {
        inputs.push({
          from: { id: hubToIntercomContactMapping[contact.id] },
          to: { id: hubToIntercomCompanyMapping[company] },
          type: "contact_to_company",
        });
      });
    });
    hubspotApi
      .post("/crm/v3/associations/contact/company/batch/create", {
        inputs,
      })
      .then(() => {
        res.send("Association successful");
      })
      .catch((error) => {
        res.send("Association not successful");
      });
  } catch (error) {
    res.send("Association not successful");
    console.error(e);
  }
};
