import Layout from '../components/layout/layout'
import Meta from '../components/meta'
import Landing from '../sections/landing'
import ClientLogos from '../sections/clientLogos'
import Services from '../sections/services'
import About from '../sections/about'
import Team from '../sections/team'
import Portfolio from '../sections/portfolio'
import ClientTestimonials from '../sections/clientTestimonials'
import Contact from '../sections/contact'

import { getAllPostData } from '../utils/mdx'

export const getStaticProps = async () => {
  const portfolioPosts = getAllPostData('portfolio')
  return {
    props: {
      portfolioPosts,
    },
  }
}

const Index = ({ portfolioPosts }) => (
  <Layout>
    <Meta />
    <Landing />
    <ClientLogos />
    <About />
    <Team />
    <Services />
    <Portfolio posts={portfolioPosts} />
    <ClientTestimonials />
    <Contact />
  </Layout>
)

export default Index
