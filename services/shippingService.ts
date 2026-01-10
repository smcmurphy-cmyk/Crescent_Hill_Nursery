// services/shippingService.ts

// 1. Define the shape of a Shipping Rate
export interface ShippingRate {
  id: string;
  provider: 'USPS' | 'UPS' | 'FedEx';
  serviceName: string; // e.g., "Priority Mail"
  price: number;
  estimatedDays: number;
}

// 2. Mock Logic (Replace with API call later)
export const calculateShippingRates = async (
  zipCode: string, 
  cartWeight: number
): Promise<ShippingRate[]> => {
  
  // Simulate API delay (like a real server request)
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Logic: Heavier packages cost more, Local zips are cheaper
  const isLocal = zipCode.startsWith('94'); // Crescent Hill Local Area
  const baseRate = isLocal ? 10 : 15;
  const weightSurcharge = cartWeight * 0.50; // 50 cents per lb

  return [
    {
      id: 'rate_1',
      provider: 'USPS',
      serviceName: 'Ground Advantage',
      price: Number((baseRate + weightSurcharge).toFixed(2)),
      estimatedDays: isLocal ? 2 : 5
    },
    {
      id: 'rate_2',
      provider: 'UPS',
      serviceName: '2nd Day Air',
      price: Number((baseRate * 2.5 + weightSurcharge).toFixed(2)),
      estimatedDays: 2
    }
  ];
};

// 3. Validation Helper
export const isValidZip = (zip: string) => /^\d{5}(-\d{4})?$/.test(zip);