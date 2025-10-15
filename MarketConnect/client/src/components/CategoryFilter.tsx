import { Badge } from "@/components/ui/badge";

export interface Category {
  id: string;
  name: string;
  icon?: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory?: string;
  onSelectCategory?: (categoryId: string) => void;
}

export default function CategoryFilter({ 
  categories, 
  selectedCategory,
  onSelectCategory 
}: CategoryFilterProps) {
  return (
    <div className="border-b bg-card">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <Badge
            variant={!selectedCategory ? "default" : "secondary"}
            className="cursor-pointer whitespace-nowrap hover-elevate active-elevate-2"
            onClick={() => onSelectCategory?.("")}
            data-testid="badge-category-all"
          >
            All Items
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "secondary"}
              className="cursor-pointer whitespace-nowrap hover-elevate active-elevate-2"
              onClick={() => onSelectCategory?.(category.id)}
              data-testid={`badge-category-${category.id}`}
            >
              {category.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
