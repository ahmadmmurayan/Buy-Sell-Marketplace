export interface VehicleDetails {
  year: string;
  make: string;
  model: string;
  mileage: string;
  titleStatus: 'clean' | 'salvage' | 'rebuilt' | 'other';
  vin?: string;
}

export interface BaseProduct {
  id: string;
  title: string;
  price: number;
  image: string;
  location: string;
  state: string;
  city: string;
  timeAgo: string;
  category: string;
  description?: string;
}

export interface VehicleProduct extends BaseProduct {
  category: 'vehicles';
  vehicleDetails: VehicleDetails;
}

export interface GeneralProduct extends BaseProduct {
  category: 'electronics' | 'furniture' | 'clothing' | 'sports' | 'home';
}

export type Product = VehicleProduct | GeneralProduct;

export const US_STATES = [
  { value: 'CA', label: 'California' },
  { value: 'NY', label: 'New York' },
  { value: 'TX', label: 'Texas' },
  { value: 'FL', label: 'Florida' },
  { value: 'IL', label: 'Illinois' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'OH', label: 'Ohio' },
  { value: 'GA', label: 'Georgia' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'MI', label: 'Michigan' },
] as const;
