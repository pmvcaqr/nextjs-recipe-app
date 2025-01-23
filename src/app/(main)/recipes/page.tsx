import { Suspense } from "react"
import { RecipeList } from "@/components/Recipe/RecipeList"
import { fetchItems } from "@/services/api"

export const metadata = {
  title: "Recipes",
  description: "Browse our collection of artisanal bread recipes",
}

export default async function RecipesPage() {
  const recipes = await fetchItems()

  return (
    <Suspense>
      <RecipeList recipes={recipes} />
    </Suspense>
  )
}
