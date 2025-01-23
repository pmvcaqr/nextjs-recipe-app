import { memo } from "react"
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material"
import Link from "next/link"
import { BlogPost } from "@/types/blogs"

interface RecipeCardProps {
  blog: BlogPost
}

export const BlogCard = memo(function RecipeCard({ blog }: RecipeCardProps) {
  return (
    <Link href={`/blog/${blog.id}`} passHref style={{ textDecoration: "none" }}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={blog.imageUrl}
          alt={blog.title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {blog.title}
          </Typography>
          <Box
            mt={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="caption" color="text.secondary">
              By {blog.author}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {new Date(blog.date).toLocaleDateString()}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  )
})
