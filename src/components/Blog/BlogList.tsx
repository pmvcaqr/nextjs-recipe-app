import { memo } from "react"
import { Container, Grid2 as Grid, Typography } from "@mui/material"
import { BlogPost } from "@/types/blogs"
import { BlogCard } from "./BlogCard"

interface BlogListProps {
  posts: BlogPost[]
}

export const BlogList = memo(function BlogList({ posts }: BlogListProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Blog Posts
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid sx={{ xs: 12, md: 6, lg: 4 }} key={post.id}>
            <BlogCard blog={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
})
