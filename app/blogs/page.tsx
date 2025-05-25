import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ParticlesBackground from "@/components/particles-background"

export default function Blogs() {
  return (
    <>
      <Navigation />
      <ParticlesBackground />

      <main className="page-content">
        <div className="container">
          <header className="page-header">
            <h1>News & Blogs</h1>
            <p>Stay updated with my latest research news, insights, and blog posts.</p>
          </header>

          <div className="empty-state">
            <div className="empty-state-icon">
              <i className="fas fa-newspaper"></i>
            </div>
            <h2>Coming Soon</h2>
            <p>
              Blog posts and research updates will be available here soon.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
