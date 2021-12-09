const SectionContentBlock = ({heading=undefined, subheading=undefined, children}) => {
  if (!(typeof heading === 'undefined')) {
    heading = <div className="row pb-2">
      <h3 style={{color: "var(--color-primary)"}}>{heading}</h3>
    </div>
  }
  if (!(typeof subheading === 'undefined')) {
    subheading = <div className="row pb-2">
      <p style={{fontSize: "1.2em"}}>{subheading}</p>
    </div>
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
