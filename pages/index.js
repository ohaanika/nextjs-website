import Layout from "../components/layout"
import Meta from "../components/meta"
import Landing from "../sections/landing"
import Services from "../sections/services"
import About from "../sections/about"
import Team from "../sections/team"
import Portfolio from "../sections/portfolio"
import Contact from "../sections/contact"

const Index = () => (
  <Layout>
    <Meta/>
    <Landing/>
    <Services/>
    <About/>
    <Team/>
    <Portfolio/>
    <Contact/>
  </Layout>
)

export default Index
