import ProductGrid from '../ProductGrid';
import sofaImage from '@assets/stock_images/modern_furniture_sof_347e1490.jpg';
import laptopImage from '@assets/stock_images/laptop_computer_elec_8301faa5.jpg';
import bikeImage from '@assets/stock_images/bicycle_outdoor_spor_28af4eb8.jpg';
import cameraImage from '@assets/stock_images/camera_photography_e_3ae1f6ca.jpg';

const mockProducts = [
  {
    id: '1',
    title: 'Modern Gray Sofa - Like New',
    price: 450,
    image: sofaImage,
    location: 'San Francisco, CA',
    city: 'San Francisco',
    state: 'CA',
    timeAgo: '2 hours ago',
    category: 'furniture' as const
  },
  {
    id: '2',
    title: 'MacBook Pro 14" M1',
    price: 1299,
    image: laptopImage,
    location: 'Oakland, CA',
    city: 'Oakland',
    state: 'CA',
    timeAgo: '5 hours ago',
    category: 'electronics' as const
  },
  {
    id: '3',
    title: 'Mountain Bike - Trek',
    price: 650,
    image: bikeImage,
    location: 'Berkeley, CA',
    city: 'Berkeley',
    state: 'CA',
    timeAgo: '1 day ago',
    category: 'sports' as const
  },
  {
    id: '4',
    title: 'Canon EOS R6 Camera',
    price: 1899,
    image: cameraImage,
    location: 'San Jose, CA',
    city: 'San Jose',
    state: 'CA',
    timeAgo: '3 days ago',
    category: 'electronics' as const
  },
];

export default function ProductGridExample() {
  return (
    <div className="p-4">
      <ProductGrid 
        products={mockProducts}
        onProductClick={(product) => console.log('Product clicked:', product)}
      />
    </div>
  );
}
