import { Container, Typography } from "@mui/material"
import React from "react"
import ExperienceStepper from "./experience-stepper"

export default function ExperienceBlock() {
  return (
    <Container className="py-8 text-center">
      <Typography component={"h2"} fontSize={"3rem"} fontWeight={300}>
        Experience
      </Typography>
      <ExperienceStepper></ExperienceStepper>
    </Container>
  )
}
