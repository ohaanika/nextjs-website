import Header from './header'
import Footer from './footer'

const Layout = (props) => (
  <div className="layout">
    <Header />
    <main>{props.children}</main>
    <Footer />
  </div>
)

export default Layout
