import { Button, Typography, Grid } from "@mui/material"

const YieldSection = () => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <Typography variant="body1">This is the report section.</Typography>
      </Grid>
      <Grid item xs={6} container justifyContent="flex-end">
        <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>
          Download
        </Button>
        <Button variant="outlined" color="secondary">
          Share
        </Button>
      </Grid>
    </Grid>
  )
}

export default YieldSection
