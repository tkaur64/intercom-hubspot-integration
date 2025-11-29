import { fetchAllData } from "../utils.js";
export const contacts = async (req, res) => {
  try {
    const data = await fetchAllData("/contacts");
    res.send(data);
  } catch (error) {
    console.error(error);
    res.send([]);
  }
};
