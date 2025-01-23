import { memo } from "react"
import { Grid2 as Grid, Container } from "@mui/material"
import { RecipeCard } from "@/components/Recipe/RecipeCard"
import type { RecipeItem } from "@/types/recipes"
import { PageHeader } from "@/components/Header"

interface RecipeListProps {
  recipes: RecipeItem[]
}

export const RecipeList = memo(function RecipeList({
  recipes,
}: RecipeListProps) {
  return (
    <>
      <PageHeader
        title="Our Recipes"
        subtitle="Discover our collection of artisanal bread recipes"
      />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {recipes.map((recipe) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
})
