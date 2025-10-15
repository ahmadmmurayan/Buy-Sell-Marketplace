import { Card } from "@/components/ui/card";
import { MapPin, Clock, Gauge } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types/listing";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const isVehicle = product.category === 'vehicles';
  
  return (
    <Card 
      className="overflow-hidden cursor-pointer hover-elevate active-elevate-2 transition-all"
      onClick={onClick}
      data-testid={`card-product-${product.id}`}
    >
      <div className="aspect-square relative overflow-hidden bg-muted">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover"
          data-testid={`img-product-${product.id}`}
        />
        {isVehicle && 'vehicleDetails' in product && (
          <Badge 
            className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm"
            variant="secondary"
          >
            {product.vehicleDetails.titleStatus === 'clean' ? 'Clean Title' : product.vehicleDetails.titleStatus}
          </Badge>
        )}
      </div>
      <div className="p-4 space-y-2">
        <div className="text-2xl font-bold text-foreground" data-testid={`text-price-${product.id}`}>
          ${product.price.toLocaleString()}
        </div>
        <h3 className="text-lg font-semibold line-clamp-2" data-testid={`text-title-${product.id}`}>
          {product.title}
        </h3>
        
        {isVehicle && 'vehicleDetails' in product && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Gauge className="h-3 w-3" />
            <span data-testid={`text-mileage-${product.id}`}>
              {parseInt(product.vehicleDetails.mileage).toLocaleString()} miles
            </span>
          </div>
        )}
        
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span data-testid={`text-location-${product.id}`}>{product.location}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span data-testid={`text-time-${product.id}`}>{product.timeAgo}</span>
        </div>
      </div>
    </Card>
  );
}
