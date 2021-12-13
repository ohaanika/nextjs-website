const Section = ({id="", backgroundColor="transparent", stretch=false, children}) => (
  <section id={id} style={{backgroundColor: backgroundColor}}>
    <div className={(stretch === true) ? "" : "container"}>
      {children}
    </div>
  </section>
)

export default Section
