import { useState } from 'react';
import CategoryFilter from '../CategoryFilter';

const mockCategories = [
  { id: 'electronics', name: 'Electronics' },
  { id: 'furniture', name: 'Furniture' },
  { id: 'vehicles', name: 'Vehicles' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'sports', name: 'Sports' },
];

export default function CategoryFilterExample() {
  const [selected, setSelected] = useState('');
  
  return (
    <CategoryFilter 
      categories={mockCategories}
      selectedCategory={selected}
      onSelectCategory={(id) => {
        setSelected(id);
        console.log('Selected category:', id || 'all');
      }}
    />
  );
}
