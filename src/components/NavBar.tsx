"use client"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Link from "next/link"

type NavBarProps = {
  pages: string[]
}

const NavBar = ({ pages }: NavBarProps) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h5" noWrap component="a" href="/">
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page}
                href={`/${page.toLowerCase()}`}
                style={{
                  color: "white",
                  opacity: "1",
                  margin: "0px 30px",
                }}
              >
                <p> {page.toUpperCase()} </p>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar
