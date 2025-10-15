import { useState } from 'react';
import FilterSidebar from '../FilterSidebar';

export default function FilterSidebarExample() {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  
  return (
    <div className="w-80">
      <FilterSidebar 
        priceRange={priceRange}
        onPriceRangeChange={(range) => {
          setPriceRange(range);
          console.log('Price range changed:', range);
        }}
        onClearFilters={() => {
          setPriceRange([0, 5000]);
          console.log('Filters cleared');
        }}
      />
    </div>
  );
}
