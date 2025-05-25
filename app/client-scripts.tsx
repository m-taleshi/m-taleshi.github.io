"use client"

import { useEffect } from "react"

export default function ClientScripts() {
  useEffect(() => {
    // Set current year in footer
    const currentYearElement = document.getElementById("current-year")
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear().toString()
    }
  }, [])

  return null
}
