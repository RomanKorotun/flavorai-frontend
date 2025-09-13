export interface ICreateRecipe {
  title: string;
  description: string;
  cookTime: number;
  ingredients: string;
  instructions: string;
  category: string;
  cuisine: string;
}

export interface IRecipe {
  id: number;
  title: string;
  description: string;
  cookTime: number;
  ingredients: string;
  instructions: string;
  category: string;
  cuisine: string;
  rating: number;
  imageUrl: string;
}

export interface RecipeState {
  recipes: IRecipe[];
  loading: boolean;
  error: boolean;
}
