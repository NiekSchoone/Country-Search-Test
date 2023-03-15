export type Country = {
  flags: {
    png: string;
    svg: string;
  };
  capital: Array<string>;
  name: {
    common: string;
    official: string;
  };
  cca3: string;
  borders: Array<string>;
  population: number;
  region: string;
  maps: {
    googleMaps: string;
  };
};
