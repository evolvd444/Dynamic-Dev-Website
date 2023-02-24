import Footer from './Bottom/page'
export default function Layout({ children }) {
    return (
      <>
        
        <main>{children}</main>
        <Footer />
      </>
    )
  }