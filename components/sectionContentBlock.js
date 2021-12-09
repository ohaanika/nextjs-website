const SectionContentBlock = ({heading=undefined, subheading=undefined, children}) => {
  if (!(typeof heading === 'undefined')) {
    heading = <div className="row pb-2"><h3>{heading}</h3></div>
  }
  if (!(typeof subheading === 'undefined')) {
    subheading = <div className="row pb-2"><h5>{subheading}</h5></div>
  }
  return (
    <div>
      {heading}
      {subheading}
      {children}
    </div>
  )
}

export default SectionContentBlock
