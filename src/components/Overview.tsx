import { Grid, Typography, Paper } from "@mui/material"

const OverviewSection = () => {
  return (
    <Grid container spacing={3}>
      {["Item 1", "Item 2", "Item 3"].map((item, index) => (
        <Grid size={12} sm={4} key={index}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">{item}</Typography>
            <Typography variant="body1">Value {index + 1}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default OverviewSection
