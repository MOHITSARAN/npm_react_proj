import React from "react"
import ContentLoader from "react-content-loader" 

const ChartLoader = props => (
    <ContentLoader 
    speed={2}
    width={400}
    height={320}
    viewBox="0 20 250 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="121" cy="124" r="80" /> 
    <rect x="25" y="258" rx="0" ry="0" width="206" height="7" /> 
    <rect x="41" y="286" rx="0" ry="0" width="166" height="6" /> 
    <rect x="55" y="314" rx="0" ry="0" width="136" height="18" /> 
  </ContentLoader>
)

export default ChartLoader