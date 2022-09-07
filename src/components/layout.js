import React from "react"
import Footer from "./footer"
import Navbar from "./navbar"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

const Layout = ({ children }) => {
  return (
    <>
      <Container maxWidth="xl" disableGutters>
        <Box sx={{ pt: { md: 4 } }}>
          <Navbar />
        </Box>
        <Box sx={{ mx: { md: 6 } }}>{children}</Box>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
