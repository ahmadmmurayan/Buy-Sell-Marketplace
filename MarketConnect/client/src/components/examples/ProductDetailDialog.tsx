import { useState } from 'react';
import ProductDetailDialog from '../ProductDetailDialog';
import { Button } from '@/components/ui/button';
import sofaImage from '@assets/stock_images/modern_furniture_sof_347e1490.jpg';

const mockProduct = {
  id: '1',
  title: 'Modern Gray Sofa - Like New',
  price: 450,
  image: sofaImage,
  location: 'San Francisco, CA',
  city: 'San Francisco',
  state: 'CA',
  timeAgo: '2 hours ago',
  category: 'furniture' as const
};

export default function ProductDetailDialogExample() {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <Button onClick={() => setOpen(true)}>View Product Details</Button>
      <ProductDetailDialog 
        product={mockProduct}
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
}
