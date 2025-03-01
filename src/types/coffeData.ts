export type Temperature = "Hot" | "Cold" | "Both";

export interface Coffee {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  temperature: Temperature;
}
