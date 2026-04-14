import StickyCallBar from "./StickyCallBar"
import Header from "./Header"
import Footer from "./Footer"
import FloatingCTA from "./FloatingCTA"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <StickyCallBar />
      <Header />
      <main role="main" id="main-content">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
