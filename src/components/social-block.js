import React from "react"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import { Stack } from "@mui/material"
import { IconButton } from "gatsby-theme-material-ui"
import { useStaticQuery, graphql } from "gatsby"

export default function SocialBlock() {
  const { allStrapiSocial } = useStaticQuery(graphql`
    query {
      allStrapiSocial(sort: { fields: id }) {
        nodes {
          name
          link
        }
      }
    }
  `)

  const { nodes } = allStrapiSocial

  const renderIcon = (name, link) => {
    switch (name) {
      case "github":
        return (
          <IconButton aria-label="github" href={link} target="_blank">
            <GitHubIcon />
          </IconButton>
        )
      case "linkedin":
        return (
          <IconButton aria-label="linkedin" href={link} target="_blank">
            <LinkedInIcon />
          </IconButton>
        )
      default:
        return ""
    }
  }
  return (
    <Stack direction="row" spacing={1}>
      {nodes.map(({ name, link }) => renderIcon(name, link))}
    </Stack>
  )
}
