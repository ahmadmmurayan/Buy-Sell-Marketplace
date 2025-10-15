import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Tag, Gauge, Calendar, FileCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types/listing";

interface ProductDetailDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProductDetailDialog({ 
  product, 
  open, 
  onOpenChange 
}: ProductDetailDialogProps) {
  if (!product) return null;

  const isVehicle = product.category === 'vehicles';
  const vehicleDetails = isVehicle && 'vehicleDetails' in product ? product.vehicleDetails : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-square md:aspect-auto md:min-h-[500px] bg-muted relative">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-full object-cover"
              data-testid="img-detail-product"
            />
          </div>
          
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="text-3xl font-bold" data-testid="text-detail-price">
                ${product.price.toLocaleString()}
              </div>
              <h2 className="text-2xl font-semibold" data-testid="text-detail-title">
                {product.title}
              </h2>
              
              {isVehicle && vehicleDetails && (
                <div className="space-y-3 p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold text-sm">Vehicle Details</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-muted-foreground">Year</div>
                        <div className="font-medium" data-testid="text-detail-year">{vehicleDetails.year}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-muted-foreground">Mileage</div>
                        <div className="font-medium" data-testid="text-detail-mileage">
                          {parseInt(vehicleDetails.mileage).toLocaleString()} mi
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileCheck className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-muted-foreground">Title</div>
                        <Badge 
                          variant={vehicleDetails.titleStatus === 'clean' ? 'default' : 'secondary'}
                          className="mt-1"
                          data-testid="badge-detail-title-status"
                        >
                          {vehicleDetails.titleStatus === 'clean' ? 'Clean' : vehicleDetails.titleStatus}
                        </Badge>
                      </div>
                    </div>
                    {vehicleDetails.vin && (
                      <div className="col-span-2">
                        <div className="text-muted-foreground">VIN</div>
                        <div className="font-mono text-xs" data-testid="text-detail-vin">{vehicleDetails.vin}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span data-testid="text-detail-location">{product.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span data-testid="text-detail-time">{product.timeAgo}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="secondary" data-testid="badge-detail-category">
                    {product.category}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Description</h3>
              <p className="text-muted-foreground" data-testid="text-detail-description">
                {product.description || `This is a great ${isVehicle ? 'vehicle' : 'item'} in excellent condition. Well maintained and ready for a new ${isVehicle ? 'owner' : 'home'}. Contact seller for more details and to arrange ${isVehicle ? 'a test drive or' : ''} pickup or delivery.`}
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <Button className="w-full" size="lg" data-testid="button-contact-seller">
                Contact Seller
              </Button>
              <Button variant="outline" className="w-full" data-testid="button-make-offer">
                Make Offer
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
