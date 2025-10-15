import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MarketplaceHeaderProps {
  onSearchChange?: (value: string) => void;
  onCreateClick?: () => void;
  searchValue?: string;
}

export default function MarketplaceHeader({ 
  onSearchChange, 
  onCreateClick,
  searchValue = ""
}: MarketplaceHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-card">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        <h1 className="text-xl font-bold text-primary flex-shrink-0" data-testid="text-logo">
          Marketplace
        </h1>
        
        <div className="flex-1 max-w-2xl relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search marketplace..."
            className="pl-10"
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            data-testid="input-search"
          />
        </div>

        <Button 
          onClick={onCreateClick}
          data-testid="button-create-listing"
        >
          <Plus className="h-4 w-4 mr-2" />
          Sell Item
        </Button>
      </div>
    </header>
  );
}
