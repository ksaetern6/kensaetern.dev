import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import { Grid } from "@mui/material"
import SocialBlock from "./social-block"

const HeadingsHome = ({ title, description }) => {
  return (
    <Box
      sx={{
        color: "rgb(64 64 64 / var(--tw-text-opacity))",
        textAlign: "center",
        py: { xs: 2, md: 4 },
        mx: { xs: 8, md: 16 },
      }}
    >
      <Typography variant="h1" fontSize={{ xs: "1.4rem", md: "2rem" }}>
        Hi, my name is <span className="underline">{title}</span> and I'm a web
        developer
      </Typography>
      {description && (
        <Typography
          variant="h2"
          color="rgb(115 115 115 / var(--tw-text-opacity))"
          fontSize={{ xs: "1rem", md: "1.5rem" }}
          py={{ xs: 1, md: 2 }}
        >
          {description}
        </Typography>
      )}
      <Grid item container direction="row" justifyContent="center">
        <SocialBlock></SocialBlock>
      </Grid>
      <Grid item container direction="row" justifyContent="center">
        <Divider
          sx={{
            pt: { xs: 1 },
            width: { xs: "75%", md: "50%" },
          }}
        />
      </Grid>
    </Box>
  )
}

export default HeadingsHome
