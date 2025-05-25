# Mansour Taleshi - Personal Academic Website

A modern, responsive personal website for Mansour Taleshi, PhD candidate in Electrical Engineering and Automation-Bioelectronics at Aalto University, Finland.

🌐 **Live Website**: [https://m-taleshi.github.io](https://m-taleshi.github.io)

## ✨ Features

### 🎨 Design & User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme Toggle**: Animated theme switcher with smooth transitions
- **Interactive Particle Background**: Dynamic particle system using Particles.js
- **Smooth Animations**: CSS animations and transitions throughout the site
- **Professional Typography**: Multi-font system with Poppins, Inter, JetBrains Mono, and Orbitron

### 🔍 Advanced Search
- **Cosmic Search Bar**: Animated search interface with cosmic visual effects
- **Real-time Search**: Instant search across all pages and content
- **Modal Search Results**: Full-screen search results with highlighted matches
- **Semantic Search**: Intelligent content matching and relevance scoring

### 📱 Navigation
- **Fixed Navigation**: Sticky header with smooth scrolling
- **Dynamic Underlines**: Animated navigation links with gradient effects
- **Mobile-Optimized**: Hamburger menu for mobile devices
- **Active Page Indicators**: Visual feedback for current page

### 📄 Content Sections
- **Home**: Animated profile with gradient text effects and social links
- **Projects**: Interactive project cards with modal popups and embedded videos
- **Publications**: Research papers with images, status indicators, and external links
- **Experience**: Timeline-based layout with skill progress bars
- **Blogs**: Dynamic content area (expandable for future posts)
- **Contact**: Professional contact form with validation

### 🎥 Multimedia Integration
- **Autoplay Videos**: YouTube videos with autoplay functionality in project modals
- **Video Controls**: Automatic play/pause/reset when modals open/close
- **Responsive Video Embeds**: 16:9 aspect ratio maintained across devices
- **Multiple Video Support**: Support for regular YouTube videos and YouTube Shorts

### 🛠 Technical Features
- **Pure HTML/CSS/JavaScript**: No frameworks for maximum compatibility
- **GitHub Pages Ready**: Optimized for GitHub Pages deployment
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured content
- **Performance Optimized**: Efficient CSS and JavaScript with minimal dependencies
- **Cross-Browser Compatible**: Works across modern browsers

## 🏗 Project Structure

```
m-taleshi.github.io/
├── index.html                    # Homepage 
├── projects/
│   └── index.html               # Projects
├── publications/
│   └── index.html               # Research publications
├── experience/
│   └── index.html               # Professional timeline & skills
├── blogs/
│   └── index.html               # Blog posts 
├── contact/
│   └── index.html               # Contact form
├── css/
│   └── styles.css               # Comprehensive stylesheet 
├── js/
│   └── main.js                  # Core functionality & interactions
├── images/
│   ├── mansour-profile.jpeg     # Profile photo
│   └── publications/            # Publication images
│       ├── 1_BFR_observing.png
│       ├── 2_BFR_coh.png
│       ├── 3_impact_noise.png
│       ├── 4_deep_learning.png
│       ├── 5_muscle_synergy.png
│       └── 6_variation_spatiotemporal.png
└── .nojekyll                    # GitHub Pages configuration
```

## 🚀 Key Technologies

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Animations**: CSS Keyframes, Transitions, Transforms
- **Particles**: Particles.js for interactive background
- **Icons**: Font Awesome 6.5.1
- **Fonts**: Google Fonts (Poppins, Inter, JetBrains Mono, Orbitron)
- **Video**: YouTube Embed API with autoplay controls
- **Deployment**: GitHub Pages

## 🎯 Highlighted Projects

The website showcases several research projects with embedded demonstration videos:

1. **Robustness of Motor Unit Decoding and Clustering via NMF**
2. **Blood Flow Restriction Effects on Motor Neurons** (with demo video)
3. **Prosthetic Hand Control with EMG-Armband** (with multiple demo videos)
4. **Neural Decoding of Handwriting Errors**
5. **High-Frequency Paired Associative Stimulation**
6. **Dextrimeter for Stroke Rehabilitation**
7. **mTMS Pulse Effects on Motor Force**

## 📊 Publications

Features peer-reviewed publications with:
- Visual abstracts and figures
- Publication status (Published, Under Review, In Preparation)
- Author information and journal details
- Direct links to papers and DOIs

## 🛠 Local Development

### Prerequisites
- Modern web browser
- Local web server (recommended)

### Setup
```bash
# Clone the repository
git clone https://github.com/m-taleshi/m-taleshi.github.io.git
cd m-taleshi.github.io

# Option 1: Python server
python -m http.server 8000

# Option 2: Node.js server
npx http-server

# Option 3: VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Visit `http://localhost:8000` to view the website locally.

## 🚀 Deployment

### GitHub Pages (Automatic)
1. Fork or clone this repository
2. Push changes to the `main` branch
3. GitHub Pages will automatically deploy to `https://yourusername.github.io/repository-name/`

### Manual Deployment
The website is built with static files and can be deployed to any web server:
- Upload all files to your web server
- Ensure the server supports HTML5 and modern CSS/JavaScript
- No server-side processing required

## 🎨 Customization

### Content Updates
- **Personal Info**: Edit the profile section in `index.html`
- **Projects**: Update project cards and modals in `projects/index.html`
- **Publications**: Modify publication entries in `publications/index.html`
- **Experience**: Update timeline and skills in `experience/index.html`

### Styling
- **Colors**: Modify CSS variables in `:root` section of `styles.css`
- **Fonts**: Update font imports and variables
- **Animations**: Adjust keyframes and transition durations
- **Layout**: Modify grid systems and responsive breakpoints

### Functionality
- **Search Content**: Update search data in `js/main.js`
- **Animations**: Modify animation triggers and effects
- **Theme Toggle**: Customize light/dark mode variables

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/improvement`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍🎓 About

**Mansour Taleshi**  
PhD Candidate in Electrical Engineering and Automation-Bioelectronics  
Aalto University, Finland

**Research Focus**: Neuroengineering, Motor Unit Analysis, Human-Machine Interfaces, Signal Processing

**Contact**: [mansour.taleshi@gmail.com](mailto:mansour.taleshi@gmail.com)

---

⭐ **Star this repository if you find it useful!**

```text file=".nojekyll" type="code"
# This file ensures that GitHub Pages doesn't process your site with Jekyll
