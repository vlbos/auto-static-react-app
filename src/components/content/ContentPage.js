import React from 'react'
import { string } from 'prop-types'

const ContentPage = ({ content }) => (
  <div className="Content-page">
    { content }
  </div>
)

ContentPage.propTypes = {
  content: string.isRequired,
}

export default ContentPage
