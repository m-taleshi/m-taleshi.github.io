document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const closeMenu = document.querySelector(".close-menu")
  const mobileMenu = document.querySelector(".mobile-menu")
  const mobileOverlay = document.querySelector(".mobile-overlay")

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("open")
    mobileOverlay.classList.add("show")
    document.body.style.overflow = "hidden"
  })

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("open")
    mobileOverlay.classList.remove("show")
    document.body.style.overflow = ""
  })

  mobileOverlay.addEventListener("click", () => {
    mobileMenu.classList.remove("open")
    mobileOverlay.classList.remove("show")
    document.body.style.overflow = ""
  })

  // Animate elements on home page
  if (document.querySelector(".profile-image-container")) {
    setTimeout(() => {
      document.querySelector(".profile-image-container").classList.add("visible")
    }, 300)

    setTimeout(() => {
      document.querySelector(".name").classList.add("visible")
    }, 600)

    setTimeout(() => {
      document.querySelector(".bio").classList.add("visible")
    }, 900)

    setTimeout(() => {
      document.querySelector(".social-links").classList.add("visible")
    }, 1200)

    setTimeout(() => {
      document.querySelector(".tagline").classList.add("visible")
    }, 1500)
  }

  // Animate skill bars on experience page
  if (document.querySelectorAll(".skill-progress").length > 0) {
    const skillBars = document.querySelectorAll(".skill-progress")

    // Function to check if an element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }

    // Function to animate skill bars
    function animateSkillBars() {
      skillBars.forEach((bar) => {
        if (isInViewport(bar)) {
          // The width is already set in the HTML
          bar.style.transition = "width 1.5s ease-in-out"
        }
      })
    }

    // Initial check
    setTimeout(animateSkillBars, 500)

    // Check on scroll
    window.addEventListener("scroll", animateSkillBars)
  }

  // Initialize particles.js
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 40,
          density: {
            enable: true,
            value_area: 1000,
          },
        },
        color: {
          value: "#e0e0e0",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.3,
          random: false,
          anim: {
            enable: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#e0e0e0",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "bounce",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      retina_detect: true,
    })
  }
})
