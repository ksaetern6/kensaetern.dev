import React from "react"

const ArticleRichText = ({ data }) => {
  return (
    <div className="prose">
      <div
        dangerouslySetInnerHTML={{
          __html: data,
        }}
      />
    </div>
  )
}

export default ArticleRichText
