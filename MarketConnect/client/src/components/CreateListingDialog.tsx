import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload } from "lucide-react";
import { US_STATES } from "@/types/listing";

interface CreateListingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit?: (listing: any) => void;
}

export default function CreateListingDialog({ 
  open, 
  onOpenChange,
  onSubmit 
}: CreateListingDialogProps) {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  
  // Vehicle-specific fields
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [mileage, setMileage] = useState("");
  const [titleStatus, setTitleStatus] = useState("");
  const [vin, setVin] = useState("");

  const isVehicle = category === "vehicles";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const baseData = {
      title,
      price: parseFloat(price),
      category,
      description,
      city,
      state,
      location: `${city}, ${state}`,
    };

    const listingData = isVehicle ? {
      ...baseData,
      vehicleDetails: {
        year,
        make,
        model,
        mileage,
        titleStatus,
        vin
      }
    } : baseData;

    onSubmit?.(listingData);
    
    // Reset form
    setTitle("");
    setPrice("");
    setCategory("");
    setDescription("");
    setCity("");
    setState("");
    setYear("");
    setMake("");
    setModel("");
    setMileage("");
    setTitleStatus("");
    setVin("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle data-testid="text-dialog-title">Create New Listing</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="image">Photos</Label>
            <div className="border-2 border-dashed rounded-lg p-8 text-center hover-elevate cursor-pointer">
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Click to upload photos</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger data-testid="select-category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vehicles">Cars & Trucks</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="furniture">Furniture</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="sports">Sports & Outdoors</SelectItem>
                <SelectItem value="home">Home & Garden</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {isVehicle ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    placeholder="2020"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                    data-testid="input-year"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="make">Make</Label>
                  <Input
                    id="make"
                    placeholder="Toyota"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    required
                    data-testid="input-make"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="model">Model</Label>
                <Input
                  id="model"
                  placeholder="Camry"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  required
                  data-testid="input-model"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Full Title</Label>
                <Input
                  id="title"
                  placeholder="2020 Toyota Camry LE"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  data-testid="input-title"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mileage">Mileage</Label>
                  <Input
                    id="mileage"
                    placeholder="45000"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                    required
                    data-testid="input-mileage"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="titleStatus">Title Status</Label>
                  <Select value={titleStatus} onValueChange={setTitleStatus} required>
                    <SelectTrigger data-testid="select-title-status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clean">Clean Title</SelectItem>
                      <SelectItem value="salvage">Salvage</SelectItem>
                      <SelectItem value="rebuilt">Rebuilt</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vin">VIN (Optional)</Label>
                <Input
                  id="vin"
                  placeholder="1HGBH41JXMN109186"
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  data-testid="input-vin"
                />
              </div>
            </>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="What are you selling?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                data-testid="input-title"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              placeholder="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              data-testid="input-price"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                placeholder="San Francisco"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                data-testid="input-city"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Select value={state} onValueChange={setState} required>
                <SelectTrigger data-testid="select-state">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {US_STATES.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder={isVehicle ? "Describe the vehicle condition, features, maintenance history..." : "Describe your item..."}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              required
              data-testid="input-description"
            />
          </div>

          <div className="flex gap-3 justify-end">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              data-testid="button-cancel"
            >
              Cancel
            </Button>
            <Button type="submit" data-testid="button-submit">
              Post Listing
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
