import * as React from "react"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepContent from "@mui/material/StepContent"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  StepLabel,
} from "@mui/material"
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded"

const steps = [
  {
    id: 1,
    company: "PlumbingSupply.com",
    year: "2020",
    role: "Web Team Lead",
    duration: "November 2020 - July 2022",
    description: [
      "Manage company web department consisting of developers and non-developers",
      "Takeover the 5+ year company wide project of updating its internal and external web app spanning multiple departments",
      "Implement and carry out project features given by management and stakeholders.",
      "Revamp software development from Waterfall methodology to more Agile methodology by integrating Code Reviews, Git Deployments, and Kanban Boards.",
    ],
  },
  {
    id: 2,
    company: "PlumbingSupply.com",
    year: "2019",
    role: "Web Developer",
    duration: "September 2019 - November 2020",
    description: [
      "Maintained and updated company website written in Perl, Javascript, HTML, and CSS",
      "Improve SEO content of website by staying up-to-date with current SEO web standards",
      "Collaborate with a team of other web developers to maintain consistency",
    ],
  },
]

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleStep = (step) => () => {
    setActiveStep(step)
  }

  return (
    <Box sx={{ maxWidth: 500, margin: "auto" }} className="py-4">
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.id}>
            <StepLabel
              onClick={handleStep(index)}
              StepIconComponent={"p"}
              sx={{ cursor: "pointer" }}
            >
              {/* <StepButton color="inherit"> */}
              <Typography fontSize={"1rem"} fontWeight={300}>
                {`${step.year} | ${step.company}`}
              </Typography>
              {/* </StepButton> */}
            </StepLabel>
            <StepContent>
              <Typography
                textAlign={"left"}
                component={"h3"}
                fontSize={"1.3rem"}
              >
                {step.role}
              </Typography>
              <Typography
                textAlign={"left"}
                paragraph
                className="py-1"
                fontSize=".9rem"
              >
                {step.duration}
              </Typography>
              {/* <Typography textAlign={"left"} paragraph>
                {step.description}
              </Typography> */}
              <List>
                {step.description.map((content) => (
                  <ListItem disablePadding fontSize={"2.5rem"}>
                    <ListItemIcon>
                      <ArrowRightRoundedIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary={content} />
                  </ListItem>
                ))}
              </List>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Box>
  )
}
