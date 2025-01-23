"use client"

import React, { ReactNode } from "react"
import { usePathname } from "next/navigation"
import {
  Grid2 as Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material"

type BreadcrumbProps = {
  homeElement: ReactNode
  separator: ReactNode
  capitalizeLinks?: boolean
}

const Breadcrumb = ({
  homeElement,
  separator,
  capitalizeLinks,
}: BreadcrumbProps) => {
  const paths = usePathname()
  const pathNames = paths.split("/").filter((path) => path)

  return (
    <Grid
      container
      size={12}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
      }}
    >
      <List
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexBasis: 0,
          alignItems: "center",
        }}
      >
        <ListItem disablePadding>
          <ListItemButton component="a" href={"/"}>
            <ListItemText primary={homeElement} />
          </ListItemButton>
        </ListItem>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`

          const itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link
          return (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton component="a" href={href}>
                  <ListItemText primary={itemLink} />
                </ListItemButton>
              </ListItem>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          )
        })}
      </List>
    </Grid>
  )
}

export default Breadcrumb
