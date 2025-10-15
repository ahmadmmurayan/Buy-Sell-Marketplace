import { useState, useMemo } from "react";
import MarketplaceHeader from "@/components/MarketplaceHeader";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import FilterSidebar from "@/components/FilterSidebar";
import HeroSection from "@/components/HeroSection";
import CreateListingDialog from "@/components/CreateListingDialog";
import ProductDetailDialog from "@/components/ProductDetailDialog";
import type { Product } from "@/types/listing";
import type { Category } from "@/components/CategoryFilter";

// TODO: remove mock data - these are for design prototype
import sofaImage from '@assets/stock_images/modern_furniture_sof_347e1490.jpg';
import laptopImage from '@assets/stock_images/laptop_computer_elec_8301faa5.jpg';
import bikeImage from '@assets/stock_images/bicycle_outdoor_spor_28af4eb8.jpg';
import cameraImage from '@assets/stock_images/camera_photography_e_3ae1f6ca.jpg';

// TODO: remove mock data
const mockCategories: Category[] = [
  { id: 'vehicles', name: 'Cars & Trucks' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'furniture', name: 'Furniture' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'sports', name: 'Sports & Outdoors' },
  { id: 'home', name: 'Home & Garden' },
];

// TODO: remove mock data
const mockProducts: Product[] = [
  {
    id: '1',
    title: '2020 Toyota Camry LE',
    price: 18500,
    image: cameraImage,
    location: 'Los Angeles, CA',
    city: 'Los Angeles',
    state: 'CA',
    timeAgo: '1 hour ago',
    category: 'vehicles',
    vehicleDetails: {
      year: '2020',
      make: 'Toyota',
      model: 'Camry LE',
      mileage: '45000',
      titleStatus: 'clean',
      vin: '4T1B11HK5LU123456'
    }
  },
  {
    id: '2',
    title: '2018 Ford F-150 XLT',
    price: 28900,
    image: bikeImage,
    location: 'Austin, TX',
    city: 'Austin',
    state: 'TX',
    timeAgo: '3 hours ago',
    category: 'vehicles',
    vehicleDetails: {
      year: '2018',
      make: 'Ford',
      model: 'F-150 XLT',
      mileage: '62000',
      titleStatus: 'clean'
    }
  },
  {
    id: '3',
    title: 'Modern Gray Sofa - Like New Condition',
    price: 450,
    image: sofaImage,
    location: 'San Francisco, CA',
    city: 'San Francisco',
    state: 'CA',
    timeAgo: '2 hours ago',
    category: 'furniture'
  },
  {
    id: '4',
    title: 'MacBook Pro 14" M1 Pro 16GB RAM',
    price: 1299,
    image: laptopImage,
    location: 'New York, NY',
    city: 'New York',
    state: 'NY',
    timeAgo: '5 hours ago',
    category: 'electronics'
  },
  {
    id: '5',
    title: '2019 Honda Civic Sport',
    price: 16200,
    image: sofaImage,
    location: 'Miami, FL',
    city: 'Miami',
    state: 'FL',
    timeAgo: '6 hours ago',
    category: 'vehicles',
    vehicleDetails: {
      year: '2019',
      make: 'Honda',
      model: 'Civic Sport',
      mileage: '38000',
      titleStatus: 'clean'
    }
  },
  {
    id: '6',
    title: 'Trek Mountain Bike - Excellent Condition',
    price: 650,
    image: bikeImage,
    location: 'Chicago, IL',
    city: 'Chicago',
    state: 'IL',
    timeAgo: '1 day ago',
    category: 'sports'
  },
  {
    id: '7',
    title: 'Canon EOS R6 Full Frame Camera',
    price: 1899,
    image: cameraImage,
    location: 'San Jose, CA',
    city: 'San Jose',
    state: 'CA',
    timeAgo: '3 days ago',
    category: 'electronics'
  },
  {
    id: '8',
    title: '2021 Chevrolet Silverado 1500',
    price: 32500,
    image: laptopImage,
    location: 'Houston, TX',
    city: 'Houston',
    state: 'TX',
    timeAgo: '2 days ago',
    category: 'vehicles',
    vehicleDetails: {
      year: '2021',
      make: 'Chevrolet',
      model: 'Silverado 1500',
      mileage: '28000',
      titleStatus: 'clean'
    }
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showHero, setShowHero] = useState(true);

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesState = !selectedState || product.state === selectedState;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesState && matchesPrice;
    });
  }, [searchQuery, selectedCategory, selectedState, priceRange]);

  const handleCreateListing = (listing: any) => {
    console.log('New listing created:', listing);
    // TODO: remove mock functionality - replace with actual API call
  };

  const handleBrowseClick = () => {
    setShowHero(false);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <MarketplaceHeader
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        onCreateClick={() => setCreateDialogOpen(true)}
      />
      
      <CategoryFilter
        categories={mockCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {showHero && <HeroSection onBrowseClick={handleBrowseClick} />}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-6">
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar
              priceRange={priceRange}
              selectedState={selectedState}
              onPriceRangeChange={setPriceRange}
              onStateChange={setSelectedState}
              onClearFilters={() => {
                setPriceRange([0, 50000]);
                setSelectedCategory("");
                setSelectedState("");
                setSearchQuery("");
              }}
            />
          </aside>

          <main className="flex-1 min-w-0">
            <div className="mb-6">
              <h2 className="text-2xl font-bold" data-testid="text-results-count">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} available
              </h2>
            </div>
            
            <ProductGrid
              products={filteredProducts}
              onProductClick={setSelectedProduct}
            />
          </main>
        </div>
      </div>

      <CreateListingDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onSubmit={handleCreateListing}
      />

      <ProductDetailDialog
        product={selectedProduct}
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      />
    </div>
  );
}
