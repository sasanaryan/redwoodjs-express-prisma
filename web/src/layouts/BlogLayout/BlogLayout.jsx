import Footer from "src/components/Footer/Footer"
import Navbar from "src/components/Navbar/Navbar"


const BlogLayout = ({ children }) => {
  return <>
  <Navbar />
  {children}
  <Footer />
  </>
}

export default BlogLayout
