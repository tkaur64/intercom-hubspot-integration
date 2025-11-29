import { fetchAllData } from "../utils.js";
export const companies = async (req, res) => {
  try {
    const data = await fetchAllData("/companies");
    res.send(data);
  } catch (error) {
    console.error(error);
    res.send([]);
  }
};
