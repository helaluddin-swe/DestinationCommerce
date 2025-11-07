// utils/categories.tsx
import {
  Footprints,
  Monitor,
  Book,
  Lamp,
  Syringe,
  Dumbbell,
  ToyBrick,
  Utensils,

  
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CategoryType {
  name: string;
  icon: LucideIcon; // ✅ store icon *component*, not JSX
  slug: string;
}

export const categoryData: CategoryType[] = [
  {
    name: "Pants & Trousers",
    icon: Footprints,
    slug: "pants",
  },
 
  
  {
    name: "Electronics",
    icon: Monitor,
    slug: "electronics",
  },
  {
    name: "Books",
    icon: Book,
    slug: "books",
  },
  {
    name: "Home Decor",
    icon: Lamp,
    slug: "home-decor",
  },
  {
    name: "Beauty & Health",
    icon: Syringe,
    slug: "beauty-health",
  },
  {
    name: "Sports Gear",
    icon: Dumbbell,
    slug: "sports-gear",
  },
  {
    name: "Kids & Toys",
    icon: ToyBrick,
    slug: "kids-toys",
  },
  {
    name: "Kitchenware",
    icon: Utensils,
    slug: "kitchenware",
  },
];
