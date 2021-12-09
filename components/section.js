const Section = ({id="", backgroundColor="transparent", children}) => (
  <section id={id} style={{backgroundColor: backgroundColor}}>
    <div className="container">
      {children}
    </div>
  </section>
)

export default Section
