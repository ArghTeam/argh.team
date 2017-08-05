import React from 'react'

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.markdownRemark

    return (
      <div>
        <h1>{project.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: project.html }} />
      </div>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug }}) {
    html
    frontmatter {
      title
    }
  }
}
`
