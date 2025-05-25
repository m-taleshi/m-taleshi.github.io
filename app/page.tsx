"use client"

import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ParticlesBackground from "@/components/particles-background"
import { useEffect, useState } from "react"

export default function Home() {
  const [visible, setVisible] = useState({
    profile: false,
    name: false,
    bio: false,
    social: false,
    tagline: false,
  })

  useEffect(() => {
    // Staggered animation for text elements
    const timeouts = [
      setTimeout(() => setVisible((prev) => ({ ...prev, profile: true })), 300),
      setTimeout(() => setVisible((prev) => ({ ...prev, name: true })), 600),
      setTimeout(() => setVisible((prev) => ({ ...prev, bio: true })), 900),
      setTimeout(() => setVisible((prev) => ({ ...prev, social: true })), 1200),
      setTimeout(() => setVisible((prev) => ({ ...prev, tagline: true })), 1500),
    ]

    return () => timeouts.forEach((timeout) => clearTimeout(timeout))
  }, [])

  return (
    <>
      <Navigation />

      <main className="home-page">
        <ParticlesBackground />

        <div className="container home-container">
          <div className="home-content">
            <div className="profile-section">
              <div className={`profile-image-container ${visible.profile ? "visible" : ""}`}>
                <Image
                  src="/images/mansour-profile.jpeg"
                  alt="Mansour Taleshi"
                  width={200}
                  height={200}
                  className="profile-image"
                  priority
                />
              </div>

              <div className="profile-text">
                <h1 className={`name ${visible.name ? "visible" : ""}`}>Mansour Taleshi</h1>
                <p className={`bio ${visible.bio ? "visible" : ""}`}>
                  PhD candidate in Electrical Engineering and Automation-Bioelectronics, specializing in
                  neuroengineering with an interest in the brain, movement, and the full spectrum between these two.
                </p>
              </div>
            </div>

            <div className={`social-links ${visible.social ? "visible" : ""}`}>
              <a href="mailto:mansour.taleshi@gmail.com" className="social-button" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://github.com/m-taleshi"
                target="_blank"
                rel="noreferrer"
                className="social-button"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://x.com/MansourTaleshi"
                target="_blank"
                rel="noreferrer"
                className="social-button"
                aria-label="X (Twitter)"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mansour-taleshi-334364117/"
                target="_blank"
                rel="noreferrer"
                className="social-button"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.researchgate.net/profile/Mansour-Taleshi"
                target="_blank"
                rel="noreferrer"
                className="social-button"
                aria-label="ResearchGate"
              >
                <i className="fa-brands fa-researchgate"></i>
              </a>
              <a
                href="https://scholar.google.com/citations?user=2DVrFwkAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="social-button"
                aria-label="Google Scholar"
              >
                <i className="fas fa-graduation-cap"></i>
              </a>
            </div>

            <p className={`tagline ${visible.tagline ? "visible" : ""}`}>
              Skilled in designing and implementing data-driven experiments, advanced signal processing, ML/DL
              algorithms, and computational modeling.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
