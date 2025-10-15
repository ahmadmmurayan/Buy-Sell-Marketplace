import ProductCard from '../ProductCard';
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

export default function ProductCardExample() {
  return (
    <div className="max-w-xs">
      <ProductCard 
        product={mockProduct}
        onClick={() => console.log('Product clicked:', mockProduct.id)}
      />
    </div>
  );
}
