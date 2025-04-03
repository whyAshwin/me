# Personal Portfolio Website

A modern, minimalist personal website template for product managers. This template features smooth scrolling transitions, responsive design, and a clean aesthetic.

## Features

- Modern and minimalist design
- Smooth scrolling navigation
- Animated sections on scroll
- Responsive layout for all devices
- Portfolio showcase with hover effects
- Contact form
- Social media integration

## Project Structure

```
personal-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Stylesheet
├── js/
│   └── main.js        # JavaScript functionality
└── images/            # Add your images here
```

## Customization

### 1. Personal Information
Edit the `index.html` file to update:
- Your name
- Professional title
- About section content
- Skills list
- Work experience
- Portfolio items
- Contact information
- Social media links

### 2. Styling
The website uses CSS variables for easy color customization. Edit the following variables in `css/style.css`:
```css
:root {
    --primary-color: #2c3e50;    /* Main color */
    --secondary-color: #3498db;  /* Accent color */
    --text-color: #333;          /* Text color */
    --light-gray: #f5f6fa;       /* Background color */
    --white: #ffffff;            /* White color */
}
```

### 3. Images
1. Create an `images` folder in the root directory
2. Add your portfolio images
3. Update the image paths in `index.html`

### 4. Contact Form
The contact form currently shows an alert message. To make it functional:
1. Edit the form submission logic in `main.js`
2. Add your preferred form handling solution (e.g., email service, backend API)

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- AOS (Animate On Scroll) library
- Font Awesome icons

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Customize the content and styling as needed
4. Deploy to your preferred hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required. 