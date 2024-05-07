import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "_X_nAN-1CU1vws6A_XtRAPcrpgzhG63VLRNpbiYn1Lo";

export const fetchData = async () => {
  const { data } = await axios.get("photos", {
    params: { client_id: API_KEY },
  });
  console.log(data);
  return data;
};
export const fetchSearchData = async ({ query, page }) => {
  console.log(page);
  const { data } = await axios.get("search/photos", {
    params: { client_id: API_KEY, query: query, page: page },
  });
  console.log(data);
  return data;
};
