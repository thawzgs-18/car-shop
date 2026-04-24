import prisma from "@/lib/prisma";
import { CARS } from "@/app/data/cars";
import { EXTRA_CARS } from "@/app/data/extra-cars";
import type { CarListing } from "@/lib/car-types";

const FALLBACK_CARS: CarListing[] = [...CARS, ...EXTRA_CARS].map((car) => ({
  ...car,
  adminStatus: "approved",
}));

function mergeCars(primary: CarListing[], fallback: CarListing[]) {
  const seen = new Set(primary.map((car) => `${car.name}-${car.year}`.toLowerCase()));
  const extra = fallback.filter((car) => !seen.has(`${car.name}-${car.year}`.toLowerCase()));
  return [...primary, ...extra];
}

function normalizeCar(car: {
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
  createdAt?: Date;
}): CarListing {
  return {
    ...car,
    createdAt: car.createdAt?.toISOString(),
  };
}

export async function getApprovedCars(): Promise<CarListing[]> {
  try {
    const cars = await prisma.car.findMany({
      where: { adminStatus: "approved" },
      orderBy: { createdAt: "desc" },
    });

    if (cars.length > 0) {
      return mergeCars(cars.map(normalizeCar), FALLBACK_CARS);
    }
  } catch {
    // Fall back to local demo data when the database is unavailable.
  }

  return FALLBACK_CARS;
}

export async function getFeaturedCars(limit = 6): Promise<CarListing[]> {
  const cars = await getApprovedCars();
  return cars.slice(0, limit);
}

export async function getCarById(id: string): Promise<CarListing | null> {
  try {
    const car = await prisma.car.findFirst({
      where: {
        id,
        adminStatus: "approved",
      },
    });

    if (car) {
      return normalizeCar(car);
    }
  } catch {
    // Fall back to local demo data when the database is unavailable.
  }

  return FALLBACK_CARS.find((car) => car.id === id) ?? null;
}
