import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { US_STATES } from "@/types/listing";

interface FilterSidebarProps {
  priceRange: [number, number];
  selectedState?: string;
  onPriceRangeChange?: (range: [number, number]) => void;
  onStateChange?: (state: string) => void;
  onClearFilters?: () => void;
}

export default function FilterSidebar({ 
  priceRange, 
  selectedState = "",
  onPriceRangeChange,
  onStateChange,
  onClearFilters 
}: FilterSidebarProps) {
  const maxPrice = priceRange[1] >= 30000 ? 50000 : 5000;
  
  return (
    <Card className="p-6 space-y-6 sticky top-20">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold" data-testid="text-filters-title">Filters</h3>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={onClearFilters}
          data-testid="button-clear-filters"
        >
          <X className="h-4 w-4 mr-1" />
          Clear
        </Button>
      </div>

      <div className="space-y-4">
        <Label className="text-sm font-medium">State</Label>
        <Select value={selectedState || "all"} onValueChange={(value) => onStateChange?.(value === "all" ? "" : value)}>
          <SelectTrigger data-testid="select-state-filter">
            <SelectValue placeholder="All states" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All States</SelectItem>
            {US_STATES.map((state) => (
              <SelectItem key={state.value} value={state.value}>
                {state.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <Label className="text-sm font-medium">Price Range</Label>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={(value) => onPriceRangeChange?.(value as [number, number])}
            min={0}
            max={maxPrice}
            step={maxPrice === 50000 ? 500 : 50}
            data-testid="slider-price-range"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span data-testid="text-price-min">${priceRange[0].toLocaleString()}</span>
            <span data-testid="text-price-max">${priceRange[1].toLocaleString()}{priceRange[1] >= maxPrice ? '+' : ''}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
