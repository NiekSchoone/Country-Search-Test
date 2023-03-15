import client from "./http-common";

export const getAllCountries = () => {
  return client.get("/all");
};

export const getCountryByCCA3 = (cca: string) => {
  return client.get("/alpha/" + cca);
};

export const getCountriesByRegion = (region: string) => {
  return client.get("/region/" + region);
};
