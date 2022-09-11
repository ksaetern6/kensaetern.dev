import * as React from "react"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import GitHubIcon from "@mui/icons-material/GitHub"
import LaunchIcon from "@mui/icons-material/Launch"
import ArticleRichText from "./article-rich-text"
import { Tooltip } from "@mui/material"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

function ArticleCard({ article }) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card variant="elevation" sx={{ boxShadow: { xs: 0, md: 2 } }}>
      <Link to={`/project/${article.slug}`}>
        <GatsbyImage
          image={getImage(article.cover?.localFile)}
          alt={article.cover?.alternativeText}
        />
      </Link>
      <CardContent>
        <Typography
          gutterBottom
          variant="h1"
          component="h3"
          fontSize={{ xs: "1.5rem", md: "2rem" }}
        >
          <Link
            to={`/project/${article.slug}`}
            className="overflow-hidden rounded-lg transition-shadow hover:shadow-md"
          >
            {article.title}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.shortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ mt: "auto" }}>
        {article.githubLink ? (
          <IconButton
            aria-label="link to Github repo"
            href={article.githubLink ?? "/"}
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
        ) : (
          <Tooltip title="Client has opted for this repo to be private">
            <GitHubIcon />
          </Tooltip>
        )}

        <IconButton
          aria-label="Go to external website"
          href={article.externalLink ?? "/"}
          target="_blank"
        >
          <LaunchIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {article.description && (
            <ArticleRichText
              data={article.description.data.childMarkdownRemark.html}
            ></ArticleRichText>
          )}
        </CardContent>
      </Collapse>
    </Card>
  )
}

export const query = graphql`
  fragment ArticleCard on STRAPI_ARTICLE {
    id
    slug
    title
    shortDescription
    githubLink
    externalLink
    description {
      data {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
    cover {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.77)
        }
      }
    }
  }
`
export default ArticleCard
