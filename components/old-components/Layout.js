import Header from './header'
import Footer from './footer'

const Layout = (props) => (
  <div>
    <Header />
    <div>{props.children}</div>
    <Footer />
  </div>
)

export default Layout
