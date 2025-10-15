import ProductCard from "./ProductCard";
import type { Product } from "@/types/listing";

interface ProductGridProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
}

export default function ProductGrid({ products, onProductClick }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16" data-testid="text-no-results">
        <p className="text-muted-foreground text-lg">No items found</p>
        <p className="text-muted-foreground text-sm mt-2">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-testid="grid-products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductClick?.(product)}
        />
      ))}
    </div>
  );
}
