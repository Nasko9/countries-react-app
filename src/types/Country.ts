export interface Country {
  ccn3: string;
  population: number;
  name: { common: string };
  region: string;
  flags: { svg: string };
  capital: string[];
}
