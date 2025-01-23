import { memo } from "react"
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
} from "@mui/material"
import { AccessTime } from "@mui/icons-material"
import Link from "next/link"
import type { RecipeItem } from "@/types/recipes"

interface RecipeCardProps {
  recipe: RecipeItem
}

export const RecipeCard = memo(function RecipeCard({
  recipe,
}: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={recipe.imageUrl}
          alt={recipe.title}
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>
            {recipe.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {recipe.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AccessTime fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {recipe.totalTime}
            </Typography>
            <Chip label={recipe.yield} size="small" sx={{ ml: "auto" }} />
          </Box>
        </CardContent>
      </Card>
    </Link>
  )
})
