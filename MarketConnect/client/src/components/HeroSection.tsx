import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface HeroSectionProps {
  onBrowseClick?: () => void;
}

export default function HeroSection({ onBrowseClick }: HeroSectionProps) {
  return (
    <div className="relative h-96 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200')] bg-cover bg-center opacity-20"></div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center justify-center">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="text-hero-title">
            Buy and Sell Locally
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-hero-subtitle">
            Discover amazing deals on items in your community. Connect with local sellers and buyers.
          </p>
          <Button 
            size="lg" 
            onClick={onBrowseClick}
            data-testid="button-hero-browse"
          >
            <Search className="mr-2 h-5 w-5" />
            Browse Items
          </Button>
        </div>
      </div>
    </div>
  );
}
