# Mansour Taleshi - Personal Website

This is the personal website for Mansour Taleshi, PhD candidate in Electrical Engineering and Automation-Bioelectronics.

## Features

- Responsive design for all device sizes
- Interactive particle background
- Sections for publications, projects, experience, blogs, and contact
- Animated UI elements

## Structure

The website is built with pure HTML, CSS, and JavaScript for maximum compatibility with GitHub Pages:

\`\`\`
mansour-website/
├── index.html                # Main homepage
├── publications/             # Publications page
│   └── index.html
├── projects/                 # Projects page
│   └── index.html
├── experience/               # Experience page
│   └── index.html
├── blogs/                    # Blogs page
│   └── index.html
├── contact/                  # Contact page
│   └── index.html
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
└── images/
    ├── mansour-profile.jpeg # Profile image
    └── publications/        # Publication images
        ├── 1_BFR_observing.png
        ├── 2_BFR_coh.png
        └── ...
\`\`\`

## Deployment to GitHub Pages

1. Fork or clone this repository
2. Push to your GitHub repository
3. Go to repository settings > Pages
4. Select the main branch as the source
5. Your site will be published at `https://yourusername.github.io/repository-name/`

## Local Development

To test the website locally:

1. Clone the repository
2. Open any HTML file in your browser
3. For a more realistic experience, use a local server:
   - With Python: `python -m http.server`
   - With Node.js: Install `http-server` and run it
   - With VS Code: Use the Live Server extension

## Customization

- Edit the HTML files to update content
- Modify `styles.css` to change the appearance
- Update `main.js` for custom functionality
- Replace images in the images directory

## Credits

- Particles.js for the interactive background
- Font Awesome for icons
- Google Fonts for the Inter font family

## License

[MIT](LICENSE)
\`\`\`

```text file=".nojekyll" type="code"
# This file ensures that GitHub Pages doesn't process your site with Jekyll
