import React from "react"
import ArticleCard from "./article-card"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

const ArticlesGrid = ({ articles }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={4} columnSpacing={4}>
        {articles.map((article) => (
          <Grid item xs={12} md={6}>
            {/* p={{ xs: 2, md: 4 }} */}
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ArticlesGrid
