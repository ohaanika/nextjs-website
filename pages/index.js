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
import Script from 'next/script'

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
    <Script id="show-banner">
{`
let landingPage = document.getElementById("landing-page");

landingPage.addEventListener("mousemove", (e) => {
  let bounds = landingPage.getBoundingClientRect();
  let x = event.clientX - bounds.left;
  let y = event.clientY - bounds.top;

  let subX = x / bounds["width"];
  subX = subX.toFixed(2);

  const leftHue = 77;
  const rightHue = 176;
  const delta = rightHue - leftHue;

  let newLeftHue = leftHue + subX * delta;
  let newRightHue = rightHue - subX * delta;

  newLeftHue = parseInt(newLeftHue);
  newRightHue = parseInt(newRightHue);
  landingPage.style.backgroundImage = "linear-gradient(to right, hsl(" + newLeftHue + ", 22%, 87%), hsl(" + newRightHue + ", 40%, 87%))";
})
`}
    </Script>
  </Layout>
)

export default Index
