"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    document.body.classList.toggle("no-scroll")
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
    document.body.classList.remove("no-scroll")
  }, [pathname])

  return (
    <>
      <nav className="main-nav">
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className="nav-links">
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className={pathname === "/projects" ? "active" : ""}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/publications" className={pathname === "/publications" ? "active" : ""}>
              Publications
            </Link>
          </li>
          <li>
            <Link href="/experience" className={pathname === "/experience" ? "active" : ""}>
              Experience
            </Link>
          </li>
          <li>
            <Link href="/blogs" className={pathname === "/blogs" ? "active" : ""}>
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <button className="close-menu" aria-label="Close navigation" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </button>
        <ul className="mobile-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/publications">Publications</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={`mobile-overlay ${mobileMenuOpen ? "show" : ""}`} onClick={toggleMenu}></div>
    </>
  )
}
