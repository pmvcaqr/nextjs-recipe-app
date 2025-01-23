import { Suspense } from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { RecipeDetail } from "@/components/Recipe/RecipeDetail"
import { fetchItemDetail } from "@/services/api"

interface RecipePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params,
}: RecipePageProps): Promise<Metadata> {
  const { id } = await params
  const recipe = await fetchItemDetail(id)

  if (!recipe) {
    return {
      title: "Recipe Not Found",
    }
  }

  return {
    title: recipe.title,
    description: recipe.description,
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      images: [recipe.imageUrl],
    },
  }
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params
  const recipe = await fetchItemDetail(id)

  if (!recipe) {
    notFound()
  }

  return (
    <Suspense>
      <RecipeDetail recipe={recipe} />
    </Suspense>
  )
}
