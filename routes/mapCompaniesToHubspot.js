import { hubspotApi } from "../hubspotApi.js";
import { fetchAllData } from "../utils.js";

export const hubToIntercomCompanyMapping = {};

export const mapCompaniesToHubspot = async (req, res) => {
  try {
    const companies = await fetchAllData("/companies");
    const inputBody = [];
    companies.forEach((company) => {
      inputBody.push({
        properties: {
          intercom_comp_id: company.id,
          name: company.name,
        },
        id: company.id,
        idProperty: "intercom_comp_id",
      });
    });
    hubspotApi
      .post("crm/v3/objects/companies/batch/upsert", {
        inputs: inputBody,
      })
      .then((response) => {
        response.data.results.forEach((result) => {
          hubToIntercomCompanyMapping[result.properties.intercom_comp_id] =
            result.id;
        });
        res.send("Upsert successful");
      })
      .catch((error) => {
        console.error(error);
        res.send("Batch upsert not successful");
      });
  } catch (error) {
    res.send("Batch upsert not successful");
  }
};
