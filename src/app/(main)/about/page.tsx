// app/about/page.tsx
"use client"

import {
  Container,
  Typography,
  Box,
  Grid2 as Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
} from "@mui/material"

interface TeamMember {
  name: string
  role: string
  bio: string
  imageUrl: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "Head Baker",
    bio: "With over 15 years of experience in artisanal baking, Sarah brings traditional European techniques to our recipes.",
    imageUrl: "https://picsum.photos/seed/picsum/150/150",
  },
  {
    name: "Michael Chen",
    role: "Recipe Developer",
    bio: "A graduate of Le Cordon Bleu, Michael specializes in creating recipes that are both approachable and innovative.",
    imageUrl: "https://picsum.photos/seed/picsum/150/150",
  },
  {
    name: "Emma Williams",
    role: "Food Photographer",
    bio: "Emma captures the beauty of our baked goods through her lens, making every recipe look as good as it tastes.",
    imageUrl: "https://picsum.photos/seed/picsum/150/150",
  },
]

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Hero Section */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Our Bakery
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Crafting artisanal breads and sharing our passion since 1995
        </Typography>
      </Box>

      {/* Story Section */}
      <Grid container spacing={6} sx={{ mb: 8 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" paragraph>
              What started as a small family bakery in downtown Seattle has
              grown into a beloved institution, known for our commitment to
              traditional baking methods and quality ingredients.
            </Typography>
            <Typography variant="body1" paragraph>
              Every loaf of bread, every pastry, and every recipe we share is
              crafted with the same care and attention to detail that has been
              our hallmark for over 25 years.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="https://picsum.photos/seed/picsum/600/400"
            alt="Our Bakery"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 8 }} />

      {/* Team Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Meet Our Team
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          The passionate individuals behind our recipes and creations
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid size={{ xs: 12, md: 6 }} key={member.name}>
              <Card elevation={2}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Avatar
                    src={member.imageUrl}
                    alt={member.name}
                    sx={{ width: 120, height: 120, margin: "0 auto", mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Values Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Values
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box textAlign="center">
              <Typography variant="h6" gutterBottom>
                Quality Ingredients
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We source the finest organic ingredients from local suppliers
                whenever possible.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box textAlign="center">
              <Typography variant="h6" gutterBottom>
                Traditional Methods
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We honor time-tested baking techniques while embracing modern
                innovation.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box textAlign="center">
              <Typography variant="h6" gutterBottom>
                Community First
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We believe in building strong relationships with our customers
                and community.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default AboutPage
