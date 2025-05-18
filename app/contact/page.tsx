"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState } from "react"
import ParticlesBackground from "@/components/particles-background"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [response, setResponse] = useState({ message: "", type: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setResponse({
        message: "Thank you for your message. I'll get back to you soon.",
        type: "success",
      })
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)

      // Clear success message after 5 seconds
      setTimeout(() => {
        setResponse({ message: "", type: "" })
      }, 5000)
    }, 1500)
  }

  return (
    <>
      <Navigation />
      <ParticlesBackground />

      <main className="page-content">
        <div className="container">
          <header className="page-header">
            <h1>Contact</h1>
            <p>Get in touch with me for collaborations, questions, or just to say hello.</p>
          </header>

          <div className="contact-container">
            <div className="card">
              <div className="card-header">
                <h2>Send a Message</h2>
              </div>
              <div className="card-content">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {response.message && <div className={`form-response ${response.type}`}>{response.message}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
