# 🚀 Tensu Qiuwulu - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, showcasing my skills and projects as a Full Stack Developer.

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth scroll animations using Framer Motion
- **SEO Optimized**: Built with Next.js App Router for better performance
- **Dark Mode Ready**: Styled with TailwindCSS v4 and CSS variables
- **Component Library**: Built with Shadcn UI components

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Development**: Turbopack

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/tensuqiuwulu/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/
│   │   ├── animated.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── avatar.tsx
│   ├── Navigation.tsx
│   └── Footer.tsx
└── lib/
    └── utils.ts
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/sections/HeroSection.tsx` - Name, bio, and profile image
- `src/components/sections/AboutSection.tsx` - Skills and experience
- `src/components/sections/ProjectsSection.tsx` - Your projects
- `src/components/sections/ContactSection.tsx` - Contact information

### Styling
- Colors: Edit `src/app/globals.css` for color scheme
- Components: Modify `components.json` for Shadcn UI configuration
- Animations: Adjust `src/components/ui/animated.tsx` for custom animations

### Images
Add your images to the `public/` folder or update the Unsplash URLs in:
- Hero section profile image
- Project screenshots

## 🌟 Sections

1. **Hero Section**: Introduction with profile image and CTA buttons
2. **About Section**: Skills, experience, and personal information
3. **Projects Section**: Portfolio of work with live demos and GitHub links
4. **Contact Section**: Ways to get in touch and availability status

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Performance

- **Fast Loading**: Built with Next.js for optimal performance
- **SEO Ready**: Proper meta tags and structured data
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for better load times

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
```bash
npm run build
npm run start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- **Email**: tensuqiuwulu@example.com
- **LinkedIn**: [linkedin.com/in/tensuqiuwulu](https://linkedin.com/in/tensuqiuwulu)
- **GitHub**: [github.com/tensuqiuwulu](https://github.com/tensuqiuwulu)

---

Made with ❤️ using Next.js and TailwindCSS
