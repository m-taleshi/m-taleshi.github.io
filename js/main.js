document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Theme Toggle Functionality
  initThemeToggle()

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

  // Cosmic Search Functionality
  const searchInput = document.querySelector('.input')
  if (searchInput) {
    // Define searchable content for all pages
    const searchData = {
      'index.html': {
        title: 'Home - Mansour Taleshi',
        content: 'Mansour Taleshi PhD candidate Electrical Engineering Automation Bioelectronics neuroengineering brain movement motor control neural interfaces signal processing machine learning deep learning computational modeling',
        url: '/'
      },
      '/projects': {
        title: 'Projects - Research Projects',
        content: 'Robustness Motor Unit Decoding Clustering NMF Human Machine Interfacing Blood Flow Restriction Motor Neurons Synaptic Input Enhancing Prosthetic Hand Control EMG Armband Machine Learning Mind Muscle Neural Decoding Handwriting Errors High-Frequency Paired Associative Stimulation Neuromuscular Effects Dextrimeter Stroke Rehabilitation Finger Force Metrics mTMS Pulse Effects HD-EMG Mapping force measurement TMS rehabilitation neural drives MEP analysis Python MATLAB signal processing data analysis PyQt EMG MEG neuroscience',
        url: '/projects'
      },
      '/publications': {
        title: 'Publications - Research Papers',
        content: 'Observing Changes Motoneuron Characteristics Distorted Sensorimotor Input Blood Flow Restriction Effects Motoneurons Synchronization Impact Noise Deep Learning Pseudo-Online Gesture Recognition High-Density EMG Muscle Synergy-driven Motor Unit Clustering Human-Machine Interfacing Variation Spatiotemporal Arm Muscle Synergies Drawing Spirals Circles Analysis Learning Exploring effect training muscle synergies kinematics spiral tracking task Journal Applied Physiology Frontiers Neural Circuits EMBC IEEE ICBME neural control movement motor learning adaptation',
        url: '/publications'
      },
      '/experience': {
        title: 'Experience - Professional Background',
        content: 'Researcher Bionic Rehabilitation Engineering Aalto University Finland Sensitivity High-Fidelity Neural Interfaces Perturbations algorithms robust motor unit decomposition signal quality neural interface performance MSc Students Advisor Daniel Fasel Pham Manh Tuan Marcus Talke Teaching Assistantships Translational Engineering Forum Neurorobotics Embedded Real-Time Systems Full-time Laboratory Teacher University Tehran Linear Control Systems Lab Biological Signal Lab Research Assistant Computational Neuroscience lab computational model human motor control arm reaching movements muscle synergies EMG signals Python MATLAB TensorFlow PyTorch Triton Cluster Computing visualization tools',
        url: '/experience'
      },
      '/blogs': {
        title: 'Blogs - News & Updates',
        content: 'News Blogs research updates technical insights neuroengineering bioelectronics coming soon',
        url: '/blogs'
      },
      '/contact': {
        title: 'Contact - Get in Touch',
        content: 'Contact collaborations questions send message name email subject mansour.taleshi@gmail.com',
        url: '/contact'
      }
    }

    let searchResults = null
    let debounceTimer = null

    // Create search results container
    function createSearchResults() {
      if (searchResults) return

      searchResults = document.createElement('div')
      searchResults.id = 'search-results'
      searchResults.innerHTML = `
        <div class="search-results-container">
          <div class="search-results-header">
            <div class="search-input-container">
              <input
                type="text"
                class="search-results-input"
                placeholder="Continue searching..."
              />
            </div>
            <div class="search-header-bottom">
              <h3>Search Results</h3>
              <button class="close-search" aria-label="Close search">×</button>
            </div>
          </div>
          <div class="search-results-content"></div>
        </div>
      `
      document.body.appendChild(searchResults)

      // Get the new search input in the modal
      const modalSearchInput = searchResults.querySelector('.search-results-input')

      // Sync the modal search input with the main search input
      modalSearchInput.addEventListener('input', (e) => {
        // Update the main search input
        searchInput.value = e.target.value
        // Perform search
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => {
          performSearch(e.target.value)
        }, 300)
      })

      // Handle Enter key in modal search
      modalSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault()
          clearTimeout(debounceTimer)
          performSearch(e.target.value)
        }
      })

      // Close search results
      searchResults.querySelector('.close-search').addEventListener('click', () => {
        searchResults.style.display = 'none'
      })

      // Close on background click
      searchResults.addEventListener('click', (e) => {
        if (e.target === searchResults) {
          searchResults.style.display = 'none'
        }
      })
    }

    // Search function
    function performSearch(query) {
      if (!query.trim()) {
        if (searchResults) {
          searchResults.style.display = 'none'
        }
        return
      }

      createSearchResults()
      const results = []
      const searchTerm = query.toLowerCase().trim()

      // Search through all pages
      Object.entries(searchData).forEach(([page, data]) => {
        const titleMatch = data.title.toLowerCase().includes(searchTerm)
        const contentMatch = data.content.toLowerCase().includes(searchTerm)
        
        if (titleMatch || contentMatch) {
          // Calculate relevance score
          let score = 0
          if (titleMatch) score += 10
          if (contentMatch) score += 5
          
          // Count occurrences for better scoring
          const titleOccurrences = (data.title.toLowerCase().match(new RegExp(searchTerm, 'g')) || []).length
          const contentOccurrences = (data.content.toLowerCase().match(new RegExp(searchTerm, 'g')) || []).length
          score += titleOccurrences * 5 + contentOccurrences

          results.push({
            ...data,
            score
          })
        }
      })

      // Sort by relevance
      results.sort((a, b) => b.score - a.score)

      // Display results
      displaySearchResults(results, searchTerm)
    }

    // Display search results
    function displaySearchResults(results, searchTerm) {
      const resultsContent = searchResults.querySelector('.search-results-content')
      const modalSearchInput = searchResults.querySelector('.search-results-input')
      
      // Update the modal search input with the current search term
      if (modalSearchInput) {
        modalSearchInput.value = searchTerm
      }
      
      if (results.length === 0) {
        resultsContent.innerHTML = `
          <div class="no-results">
            <p>No results found for "${searchTerm}"</p>
            <p>Try different keywords or browse through the pages manually.</p>
          </div>
        `
      } else {
        resultsContent.innerHTML = results.map(result => `
          <div class="search-result-item">
            <h4><a href="${result.url}">${result.title}</a></h4>
            <p>${getPreview(result.content, searchTerm)}</p>
            <span class="result-url">${result.url}</span>
          </div>
        `).join('')
      }

      searchResults.style.display = 'flex'
      
      // Focus on the modal search input
      if (modalSearchInput) {
        setTimeout(() => modalSearchInput.focus(), 100)
      }
    }

    // Get preview text with highlighted search term
    function getPreview(content, searchTerm) {
      const index = content.toLowerCase().indexOf(searchTerm.toLowerCase())
      if (index === -1) return content.substring(0, 150) + '...'
      
      const start = Math.max(0, index - 50)
      const end = Math.min(content.length, index + searchTerm.length + 50)
      let preview = content.substring(start, end)
      
      if (start > 0) preview = '...' + preview
      if (end < content.length) preview = preview + '...'
      
      // Highlight search term
      const regex = new RegExp(`(${searchTerm})`, 'gi')
      return preview.replace(regex, '<mark>$1</mark>')
    }

    // Debounced search input
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => {
        performSearch(e.target.value)
      }, 300)
    })

    // Handle Enter key
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        clearTimeout(debounceTimer)
        performSearch(e.target.value)
      }
    })

    // Handle search icon click
    const searchIcon = document.querySelector('#search-icon')
    if (searchIcon) {
      searchIcon.addEventListener('click', () => {
        performSearch(searchInput.value)
      })
    }
  }

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
    const skillPercentages = document.querySelectorAll(".skill-percentage")
    const skillItems = document.querySelectorAll(".skill-item")
    const animatedBars = new Set()

    // Function to check if an element is in viewport with offset
    function isInViewport(element, offset = 100) {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      return (
        rect.top >= -offset &&
        rect.top <= windowHeight - offset
      )
    }

    // Function to animate counting for percentage text
    function animateCountUp(element, targetPercentage, duration = 2000) {
      const startTime = performance.now()
      const startValue = 0

      function updateCount(currentTime) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = Math.round(startValue + (targetPercentage - startValue) * easeOutQuart)
        
        element.textContent = currentValue + '%'
        
        // Add pulse effect during counting
        if (progress < 1) {
          element.classList.add('counting')
          requestAnimationFrame(updateCount)
        } else {
          element.classList.remove('counting')
        }
      }
      
      requestAnimationFrame(updateCount)
    }

    // Function to animate skill bars with staggered entrance
    function animateSkillBars() {
      skillItems.forEach((item, index) => {
        if (isInViewport(item) && !animatedBars.has(item)) {
          // Add entrance animation with stagger
          setTimeout(() => {
            item.classList.add('animate')
            
            const progressBar = item.querySelector('.skill-progress')
            const percentageElement = item.querySelector('.skill-percentage')
            const targetPercentage = parseInt(progressBar.dataset.percentage)
            
            // Animate the progress bar width
            setTimeout(() => {
              progressBar.style.width = targetPercentage + '%'
              progressBar.classList.add('animated')
              
              // Start counting animation
              animateCountUp(percentageElement, targetPercentage)
            }, 200)
            
          }, index * 100) // Stagger by 100ms for each skill
          
          animatedBars.add(item)
        }
      })
    }

    // Enhanced intersection observer for better performance
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animatedBars.has(entry.target)) {
            const index = Array.from(skillItems).indexOf(entry.target)
            
            setTimeout(() => {
              entry.target.classList.add('animate')
              
              const progressBar = entry.target.querySelector('.skill-progress')
              const percentageElement = entry.target.querySelector('.skill-percentage')
              const targetPercentage = parseInt(progressBar.dataset.percentage)
              
              setTimeout(() => {
                progressBar.style.width = targetPercentage + '%'
                progressBar.classList.add('animated')
                animateCountUp(percentageElement, targetPercentage)
              }, 200)
              
            }, index * 100)
            
            animatedBars.add(entry.target)
          }
        })
      }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      })

      skillItems.forEach(item => observer.observe(item))
    } else {
      // Fallback for browsers without IntersectionObserver
      const handleScroll = () => {
        requestAnimationFrame(animateSkillBars)
      }
      
      // Initial check
      setTimeout(animateSkillBars, 500)
      
      // Check on scroll with throttling
      let scrollTimeout
      window.addEventListener("scroll", () => {
        if (scrollTimeout) {
          clearTimeout(scrollTimeout)
        }
        scrollTimeout = setTimeout(handleScroll, 10)
      })
    }

    // Add hover effects for better interactivity
    skillItems.forEach(item => {
      const progressBar = item.querySelector('.skill-progress')
      
      item.addEventListener('mouseenter', () => {
        if (animatedBars.has(item)) {
          progressBar.style.animation = 'skillBarGlow 1.5s ease-in-out infinite'
        }
      })
      
      item.addEventListener('mouseleave', () => {
        progressBar.style.animation = ''
      })
    })
  }

  // Initialize particles.js
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 1200,
          },
        },
        color: {
          value: "#a9c7ff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.4,
          random: true,
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            size_min: 1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#6e8cff",
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "bounce",
          bounce: true,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: ["repulse", "bubble"],
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 120,
            duration: 1.2,
            factor: 3,
            speed: 0.8,
          },
          bubble: {
            distance: 200,
            size: 6,
            duration: 0.8,
            opacity: 0.8,
            speed: 2,
          },
          push: {
            particles_nb: 3,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    })
  }
})

// Theme Toggle Functions
function initThemeToggle() {
  // Check for saved theme preference or default to dark theme
  const savedTheme = localStorage.getItem('theme') || 'dark'
  const themeToggle = document.getElementById('theme-input')
  
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme')
    if (themeToggle) {
      themeToggle.checked = false // Sun mode (unchecked)
    }
  } else {
    document.body.classList.remove('light-theme')
    if (themeToggle) {
      themeToggle.checked = true // Moon mode (checked)
    }
  }
  
  // Add event listener for theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('change', function() {
      if (this.checked) {
        // Dark theme (moon)
        document.body.classList.remove('light-theme')
        localStorage.setItem('theme', 'dark')
      } else {
        // Light theme (sun)
        document.body.classList.add('light-theme')
        localStorage.setItem('theme', 'light')
      }
    })
  }
}
