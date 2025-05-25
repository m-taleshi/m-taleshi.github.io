import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientScripts from "./client-scripts"

export const metadata: Metadata = {
  title: "Mansour Taleshi | Personal Website",
  description:
    "Personal portfolio website of Mansour Taleshi, PhD candidate in Electrical Engineering and Automation-Bioelectronics",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientScripts />
        {children}
      </body>
    </html>
  )
}
