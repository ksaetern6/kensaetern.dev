import { Grid } from "@mui/material"
import React from "react"

const BlockRichText = ({ data }) => {
  return (
    <Grid item xs={12} md={6} className="prose py-8">
      {/* <div className="prose py-8"> */}
      <div
        dangerouslySetInnerHTML={{
          __html: data.richTextBody.data.childMarkdownRemark.html,
        }}
      />
      {/* </div> */}
    </Grid>
  )
}

export default BlockRichText
