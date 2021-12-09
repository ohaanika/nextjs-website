const Section = (props) => (
  <section id={props.id}>
    <div className="container">
      {props.children}
    </div>
  </section>
)

export default Section
