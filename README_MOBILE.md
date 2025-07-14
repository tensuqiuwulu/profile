# 📱 Mobile-First Social Media Portfolio

A modern, mobile-first portfolio website designed like a social media app with bottom navigation and social media-style components.

## ✨ Features

### 🎨 Design & UI
- **Mobile-First Design**: Optimized for mobile devices with social media-inspired UI
- **Bottom Navigation**: Instagram-style bottom navigation with active states
- **Social Media Components**: Stories, posts, and feed-like layout
- **Responsive Layout**: Adapts beautifully to all screen sizes
- **Modern UI**: Built with Shadcn UI components and TailwindCSS

### 📱 Mobile Experience
- **Touch-Friendly**: Optimized for touch interactions
- **Smooth Animations**: Framer Motion powered transitions
- **Progressive Web App**: PWA features for app-like experience
- **Fast Loading**: Optimized images and code splitting

### 🔧 Technical Features
- **Next.js 15**: Latest App Router with TypeScript
- **TailwindCSS v4**: Modern CSS framework with inline theme
- **Framer Motion**: Smooth animations and transitions
- **Shadcn UI**: High-quality component library
- **SEO Optimized**: Meta tags, structured data, and performance

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Components**: Shadcn UI
- **Animation**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Deployment**: Vercel ready

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tensuqiuwulu/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🎯 Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles with TailwindCSS
│   ├── layout.tsx           # Root layout with mobile container
│   └── page.tsx             # Main page with navigation logic
├── components/
│   ├── sections/            # Page sections
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── CreatePostSection.tsx
│   ├── ui/                  # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── MobileHeader.tsx     # Mobile header with notifications
│   ├── MobileBottomNav.tsx  # Bottom navigation component
│   ├── MobileStories.tsx    # Stories component
│   └── MobilePost.tsx       # Post component
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Design System

### Color Palette
- **Primary**: Emerald (Tech/Growth theme)
- **Background**: Clean white/dark mode
- **Accent**: Subtle grays and muted tones
- **Interactive**: Hover states and animations

### Typography
- **Font**: System fonts for optimal performance
- **Hierarchy**: Clear heading structure
- **Readability**: Optimized for mobile screens

### Components
- **Cards**: Social media-style cards with shadows
- **Buttons**: Touch-friendly with proper sizing
- **Navigation**: Bottom-fixed with visual feedback
- **Forms**: Clean, mobile-optimized inputs

## 📱 Features Breakdown

### Home Feed
- **Stories Bar**: Horizontal scrollable stories
- **Post Feed**: Social media-style posts
- **Interactive Actions**: Like, comment, share, bookmark
- **Smooth Scrolling**: Optimized for mobile

### Profile Section
- **About Me**: Professional information
- **Skills**: Technology badges and categories
- **Experience**: Timeline-style work history
- **Statistics**: Projects, experience, technologies

### Projects Showcase
- **Project Cards**: GitHub-style project display
- **Live Demos**: Direct links to projects
- **Technology Tags**: Skills used in each project
- **Social Actions**: Like and share projects

### Contact Form
- **Mobile-Optimized**: Touch-friendly form fields
- **Multiple Channels**: Email, phone, social media
- **Availability Status**: Real-time availability
- **Quick Actions**: One-tap communication

### Create Post
- **Post Creation**: Social media-style posting
- **Quick Actions**: Photo, location, emotions
- **Recent Activity**: Activity timeline
- **Interactive Elements**: Smooth animations

## 🔧 Customization

### Personalizing Content
1. **Update personal information** in `src/app/page.tsx`
2. **Modify projects** in `src/components/sections/ProjectsSection.tsx`
3. **Change contact details** in `src/components/sections/ContactSection.tsx`
4. **Update social links** throughout components

### Styling Customization
1. **Colors**: Modify TailwindCSS variables in `globals.css`
2. **Components**: Customize Shadcn UI components in `components/ui/`
3. **Animations**: Adjust Framer Motion settings in components
4. **Layout**: Modify mobile container and navigation

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
npx vercel --prod
```

### Manual Deployment
```bash
npm run build
npm run start
```

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for mobile
- **Bundle Size**: Minimal and tree-shaken
- **SEO**: Structured data and meta tags

## 🛠️ Development

### Available Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build
- `npm run start`: Production server
- `npm run lint`: ESLint checking
- `npm run type-check`: TypeScript checking

### Code Quality
- **ESLint**: Configured for Next.js and TypeScript
- **TypeScript**: Strict type checking
- **Prettier**: Code formatting (optional)
- **Husky**: Git hooks for quality assurance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Shadcn**: For the beautiful component library
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations
- **Lucide**: For beautiful icons

---

Built with ❤️ by [Tensu Qiuwulu](https://github.com/tensuqiuwulu)

**Live Demo**: [tensuqiuwulu.vercel.app](https://tensuqiuwulu.vercel.app)
**GitHub**: [github.com/tensuqiuwulu/portfolio](https://github.com/tensuqiuwulu/portfolio)
