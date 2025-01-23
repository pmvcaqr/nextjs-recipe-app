import { memo } from "react"
import { Container, Typography, Box, Divider, Paper } from "@mui/material"
import { BlogPost } from "@/types/blogs"

interface BlogDetailProps {
  blog: BlogPost
}

export const BlogDetail = memo(({ blog }: BlogDetailProps) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box
          component="img"
          src={blog.imageUrl}
          alt={blog.title}
          sx={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: 1,
            mb: 4,
          }}
        />

        <Typography variant="h3" component="h1" gutterBottom>
          {blog.title}
        </Typography>

        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography variant="subtitle1" color="text.secondary">
            By {blog.author}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {new Date(blog.date).toLocaleDateString()}
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {blog.content}
        </Typography>
      </Paper>
    </Container>
  )
})

BlogDetail.displayName = "BlogDetail"

export default BlogDetail
