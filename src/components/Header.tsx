"use client"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { memo } from "react"

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export const PageHeader = memo(function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <Box
      component="header"
      sx={{
        py: { xs: 4, md: 6 },
        bgcolor: "customBg.light",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h6" color="text.secondary" textAlign="center">
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  )
})
