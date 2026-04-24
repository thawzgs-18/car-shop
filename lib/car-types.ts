export interface CarListing {
  id: string;
  name: string;
  brand: string;
  price: number;
  year: number;
  km: number;
  type: string;
  location: string;
  image: string;
  status: string;
  transmission: string;
  fuel: string;
  engine: string;
  features: string[];
  description: string;
  adminStatus?: string;
  createdAt?: string;
}
