"use client"

import { memo } from "react"
import {
  Container,
  Grid2 as Grid,
  Card,
  CardMedia,
  Typography,
  Box,
  Button,
  Paper,
  Divider,
} from "@mui/material"
import { Add, Print as PrintIcon } from "@mui/icons-material"
import { RecipeItem } from "@/types/recipes"

interface RecipeDetailProps {
  recipe: RecipeItem
}

const RecipeDetail = memo(({ recipe }: RecipeDetailProps) => {
  const handleSaveRecipe = () => {
    if (recipe) {
      console.log("Saving PDF:", recipe)
    }
  }

  const handlePrintRecipe = () => {
    if (recipe?.pdfUrl) {
      console.log("Downloading PDF:", recipe.pdfUrl)
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Left Column - Information */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={0} sx={{ p: 3, backgroundColor: "transparent" }}>
            <Typography variant="h4" component="h1" gutterBottom>
              {recipe.title}
            </Typography>

            <Typography variant="body1" color="text.secondary" component="p">
              {recipe.description}
            </Typography>

            <Divider sx={{ my: 3 }} />

            {/* Time Information */}
            <Grid container spacing={2}>
              <Grid size={12}>
                <Box display="flex" alignItems="center" gap={1}></Box>
              </Grid>
              <Grid size={4}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Prep
                </Typography>
                <Typography variant="body1">{recipe.prepTime}</Typography>
              </Grid>
              <Grid size={4}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Bake
                </Typography>
                <Typography variant="body1">{recipe.bakeTime}</Typography>
              </Grid>
              <Grid size={4}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Total
                </Typography>
                <Typography variant="body1">{recipe.totalTime}</Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* Yield Information */}
            <Grid container spacing={1}>
              <Grid size={5}>
                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    gutterBottom
                  >
                    Yield
                  </Typography>
                  <Typography variant="body1">{recipe.yield}</Typography>
                </Box>
              </Grid>
              {/* Action Buttons */}
              <Grid size={5}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Add />}
                  onClick={handleSaveRecipe}
                  fullWidth
                >
                  Save Recipe
                </Button>
              </Grid>
              <Grid size={2}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<PrintIcon />}
                  onClick={handlePrintRecipe}
                  fullWidth
                >
                  Print
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Right Column - Image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={recipe.imageUrl}
              alt={recipe.title}
              sx={{ objectFit: "cover" }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
})

RecipeDetail.displayName = "RecipeDetail"

export { RecipeDetail }
