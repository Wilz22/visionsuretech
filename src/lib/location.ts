import type { CompanyAddress } from '../data/company.ts';
export function buildLocation(address: CompanyAddress | null) {
  if (!address?.streetAddress) return null;
  const label = [
    address.streetAddress,
    address.locality,
    address.region,
    address.postalCode,
  ]
    .filter(Boolean)
    .join(', ');
  const query = encodeURIComponent(label + ', Canada');
  return {
    label,
    directions: `https://www.google.com/maps/search/?api=1&query=${query}`,
    embed: `https://maps.google.com/maps?q=${query}&z=15&hl=en&output=embed`,
  };
}
