# Mansour Taleshi - Personal Website

This is the personal website for Mansour Taleshi, PhD candidate in Electrical Engineering and Automation-Bioelectronics.

## Features

- Responsive design for all device sizes
- Interactive particle background
- Sections for publications, projects, experience, blogs, and contact
- Animated UI elements

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS (via global CSS)
- react-particles for background effects

## Development

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

To build the site for production:

\`\`\`bash
npm run build
\`\`\`

This will create a static export in the `out` directory that can be deployed to GitHub Pages or any static hosting service.

## Deployment to GitHub Pages

### Automatic Deployment with GitHub Actions

1. Create a `.github/workflows/deploy.yml` file with the following content:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
          branch: gh-pages
\`\`\`

2. Push your code to GitHub
3. Go to your repository settings, navigate to Pages, and set the source to the gh-pages branch

### Manual Deployment

1. Build the project:
\`\`\`bash
npm run build
\`\`\`

2. Create a `.nojekyll` file in the `out` directory to prevent GitHub Pages from processing the files with Jekyll:
\`\`\`bash
touch out/.nojekyll
\`\`\`

3. Deploy the contents of the `out` directory to your GitHub Pages repository.

## License

[MIT](LICENSE)
\`\`\`

```html file="index.html" type="html"
&lt;!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mansour Taleshi | Personal Website</title>
  <meta name="description" content="Personal portfolio website of Mansour Taleshi, PhD candidate in Electrical Engineering and Automation-Bioelectronics">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* Base styles */
    :root {
      --background: #000000;
      --foreground: #ffffff;
      --primary: #7c4dff;
      --primary-light: rgba(124, 77, 255, 0.2);
      --secondary: #1a1a1a;
      --muted: #666666;
      --border: #333333;
      --card-bg: rgba(26, 26, 26, 0.5);
      --radius: 0.5rem;
      --nav-height: 60px;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: "Inter", sans-serif;
      background-color: var(--background);
      color: var(--foreground);
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
      position: relative;
      z-index: 10;
    }

    a {
      color: var(--foreground);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--primary);
    }

    /* Navigation */
    .main-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      background-color: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      z-index: 100;
      height: var(--nav-height);
    }

    .menu-toggle {
      position: absolute;
      left: 1rem;
      background: none;
      border: none;
      color: var(--foreground);
      font-size: 1.25rem;
      cursor: pointer;
      display: none;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }

    .nav-links a {
      font-size: 0.875rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.6);
      transition: color 0.3s ease;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: var(--foreground);
    }

    /* Mobile menu */
    .mobile-menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 80%;
      max-width: 300px;
      height: 100vh;
      background-color: var(--background);
      z-index: 200;
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      padding: 2rem;
      display: flex;
      flex-direction: column;
    }

    .mobile-menu.open {
      transform: translateX(0);
    }

    .close-menu {
      align-self: flex-end;
      background: none;
      border: none;
      color: var(--foreground);
      font-size: 1.25rem;
      cursor: pointer;
      margin-bottom: 2rem;
    }

    .mobile-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .mobile-links a {
      font-size: 1.25rem;
      font-weight: 500;
    }

    .mobile-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 150;
      display: none;
    }

    .mobile-overlay.show {
      display: block;
    }

    /* Home page */
    .home-page {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 0;
      flex: 1;
      position: relative;
    }

    .home-container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding-top: var(--nav-height);
    }

    .home-content {
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;
    }

    /* Profile section with image and text side by side */
    .profile-section {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      margin-bottom: 1rem;
    }

    .profile-text {
      text-align: left;
      flex: 1;
    }

    /* Profile image */
    .profile-image-container {
      flex-shrink: 0;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      overflow: hidden;
      border: 3px solid var(--primary);
      box-shadow: 0 0 20px rgba(124, 77, 255, 0.3);
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease, transform 0.8s ease;
      background-color: transparent;
    }

    .profile-image-container.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .profile-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .profile-image:hover {
      transform: scale(1.05);
    }

    /* Animated text elements */
    .name,
    .bio,
    .social-links,
    .tagline {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease, transform 0.8s ease;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    }

    .name.visible,
    .bio.visible,
    .social-links.visible,
    .tagline.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .name {
      font-size: 3rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin-bottom: 1rem;
      color: var(--foreground);
    }

    .bio {
      font-size: 1.125rem;
      color: var(--foreground);
      opacity: 0.8;
      max-width: 600px;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin: 0.5rem 0;
    }

    .social-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background-color: rgba(26, 26, 26, 0.6);
      color: var(--foreground);
      transition: all 0.3s ease;
      border: 1px solid var(--border);
      backdrop-filter: blur(5px);
    }

    .social-button:hover {
      background-color: var(--primary-light);
      color: var(--primary);
      transform: translateY(-3px);
    }

    .tagline {
      font-size: 1.125rem;
      color: var(--foreground);
      opacity: 0.8;
      max-width: 700px;
      margin: 0 auto;
      text-align: center;
    }

    /* Footer */
    footer {
      padding: 1.5rem 0;
      text-align: center;
      border-top: 1px solid var(--border);
      margin-top: auto;
      position: relative;
      z-index: 10;
      background-color: rgba(0, 0, 0, 0.8);
    }

    footer p {
      font-size: 0.875rem;
      color: var(--muted);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
      }

      .nav-links {
        display: none;
      }

      .profile-section {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
      }

      .profile-text {
        text-align: center;
      }

      .name {
        font-size: 2.5rem;
      }

      .profile-image-container {
        width: 150px;
        height: 150px;
        margin: 0 auto;
      }
    }

    /* Animations */
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes slideInUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .animate-in {
      animation: slideInUp 0.5s ease forwards;
      opacity: 0;
    }

    /* Particles */
    #particles-js {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  </style>
</head>
<body>
  &lt;!-- Particles Background -->
  <div id="particles-js"></div>

  &lt;!-- Navigation -->
  <nav class="main-nav">
    <button class="menu-toggle" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>
    <ul class="nav-links">
      <li><a href="index.html" class="active">Home</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="publications.html">Publications</a></li>
      <li><a href="experience.html">Experience</a></li>
      <li><a href="blogs.html">Blogs</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>

  &lt;!-- Mobile menu -->
  <div class="mobile-menu">
    <button class="close-menu" aria-label="Close navigation">
      <i class="fas fa-times"></i>
    </button>
    <ul class="mobile-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="publications.html">Publications</a></li>
      <li><a href="experience.html">Experience</a></li>
      <li><a href="blogs.html">Blogs</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </div>
  <div class="mobile-overlay"></div>

  &lt;!-- Main Content -->
  <main class="home-page">
    <div class="container home-container">
      <div class="home-content">
        <div class="profile-section">
          <div class="profile-image-container">
            <img src="images/mansour-profile.jpeg" alt="Mansour Taleshi" class="profile-image">
          </div>

          <div class="profile-text">
            <h1 class="name">Mansour Taleshi</h1>
            <p class="bio">
              PhD candidate in Electrical Engineering and Automation-Bioelectronics, specializing in
              neuroengineering with an interest in the brain, movement, and the full spectrum between these two.
            </p>
          </div>
        </div>

        <div class="social-links">
          <a href="mailto:mansour.taleshi@aalto.fi" class="social-button" aria-label="Email">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/m-taleshi" target="_blank" rel="noreferrer" class="social-button" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://x.com/MansourTaleshi" target="_blank" rel="noreferrer" class="social-button" aria-label="X (Twitter)">
            <i class="fab fa-x-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/mansour-taleshi-334364117/" target="_blank" rel="noreferrer" class="social-button" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://www.researchgate.net/profile/Mansour-Taleshi" target="_blank" rel="noreferrer" class="social-button" aria-label="ResearchGate">
            <i class="fab fa-researchgate"></i>
          </a>
          <a href="https://scholar.google.com/citations?user=2DVrFwkAAAAJ&hl=en" target="_blank" rel="noreferrer" class="social-button" aria-label="Google Scholar">
            <i class="fas fa-graduation-cap"></i>
          </a>
        </div>

        <p class="tagline">
          Skilled in designing and implementing data-driven experiments, advanced signal processing, ML/DL
          algorithms, and computational modeling.
        </p>
      </div>
    </div>
  </main>

  &lt;!-- Footer -->
  <footer>
    <div class="container">
      <p>&copy; <span id="current-year"></span> Mansour Taleshi. All rights reserved.</p>
    </div>
  </footer>

  &lt;!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      // Set current year in footer
      document.getElementById("current-year").textContent = new Date().getFullYear();

      // Mobile menu toggle
      const menuToggle = document.querySelector(".menu-toggle");
      const closeMenu = document.querySelector(".close-menu");
      const mobileMenu = document.querySelector(".mobile-menu");
      const mobileOverlay = document.querySelector(".mobile-overlay");

      menuToggle.addEventListener("click", function() {
        mobileMenu.classList.add("open");
        mobileOverlay.classList.add("show");
        document.body.style.overflow = "hidden";
      });

      closeMenu.addEventListener("click", function() {
        mobileMenu.classList.remove("open");
        mobileOverlay.classList.remove("show");
        document.body.style.overflow = "";
      });

      mobileOverlay.addEventListener("click", function() {
        mobileMenu.classList.remove("open");
        mobileOverlay.classList.remove("show");
        document.body.style.overflow = "";
      });

      // Animate elements on load
      setTimeout(() => {
        document.querySelector(".profile-image-container").classList.add("visible");
      }, 300);
      
      setTimeout(() => {
        document.querySelector(".name").classList.add("visible");
      }, 600);
      
      setTimeout(() => {
        document.querySelector(".bio").classList.add("visible");
      }, 900);
      
      setTimeout(() => {
        document.querySelector(".social-links").classList.add("visible");
      }, 1200);
      
      setTimeout(() => {
        document.querySelector(".tagline").classList.add("visible");
      }, 1500);

      // Initialize particles.js
      particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 40,
            "density": {
              "enable": true,
              "value_area": 1000
            }
          },
          "color": {
            "value": "#e0e0e0"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            }
          },
          "opacity": {
            "value": 0.3,
            "random": false,
            "anim": {
              "enable": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#e0e0e0",
            "opacity": 0.2,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.8,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "repulse": {
              "distance": 100,
              "duration": 0.4
            }
          }
        },
        "retina_detect": true
      });
    });
  </script>
</body>
</html>
