import Layout from '../components/layout'
import Meta from '../components/meta'
import Landing from '../sections/landing'
import ClientLogos from '../sections/clientLogos'
import Services from '../sections/services'
import About from '../sections/about'
import Team from '../sections/team'
import Portfolio from '../sections/portfolio'
import ClientStories from '../sections/clientStories'
import Contact from '../sections/contact'

const Index = () => (
  <Layout>
    <Meta />
    <Landing />
    <ClientLogos />
    <Services />
    <About />
    <Team />
    <ClientStories />
    <Portfolio />
    <Contact />
  </Layout>
)

export default Index
