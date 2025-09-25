# ISM Kakkanad Website

A modern, responsive website for the Islamic Society of Muslims (ISM) Kakkanad Zone - the youth wing of Kerala Nadvathul Mujahideen (KNM).

## 🌟 Features

### 🏠 **Main Sections**
- **Hero Section** - Welcoming introduction with call-to-action
- **About ISM** - Mission, vision, and organizational overview
- **Four Pillars** - Core focus areas with interactive cards
- **Our Programs** - Comprehensive program listings with detailed pages
- **Leadership** - Executive committee and program convenors
- **Masjids & Madrasas** - Islamic institutions directory
- **Testimonials** - Community feedback and endorsements
- **Get Involved** - Membership and participation information

### 📱 **Program Pages**
- **QHLS** - Qur'an & Hadith Learning Series with unit coordinators
- **Velicham** - Qur'anic education initiative with contact details
- **Isthiqaama** - Monthly spiritual gatherings with WhatsApp integration
- **ISM Inspire** - Professional wing with website and WhatsApp links
- **Eelaf** - Volunteer wing for social service and dawah
- **Other Programs** - Additional seminars and workshops

### 🕌 **Masjids & Madrasas Directory**
- **Masjids Page** - Complete listing of Salafi Masjids across 8 units
- **Madrasas Page** - Islamic educational institutions with contact options
- **Interactive Cards** - Large images, contact buttons, and location links
- **Unit Coverage** - Kakkanad, Athani, Cheranallore, Kalamassery, Mattakkad, Edappally, Kangarappady, Padamugal

### 🎨 **Design & UX**
- **Premium UI** - Apple/Nike-inspired design with smooth animations
- **Dark Mode** - Full theme support across all pages
- **Responsive Design** - Mobile-first approach with perfect scaling
- **Modern Components** - shadcn/ui with Tailwind CSS styling
- **Hover Effects** - Interactive elements with smooth transitions

### 📞 **Contact Integration**
- **Phone Dialer** - Direct calling with `tel:` links
- **WhatsApp Integration** - Direct messaging with `wa.me` links
- **Location Links** - Google Maps integration (ready for coordinates)
- **Contact Cards** - Beautiful coordinator contact information

## 🛠 Development

### **Prerequisites**
- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### **Local Development**

```sh
# Clone the repository
git clone https://github.com/muneerjabbar/ismkakkanad.git

# Navigate to project directory
cd ismkakkanad

# Install dependencies
npm install

# Start development server
npm run dev
```

### **GitHub Codespaces**
- Click "Code" → "Codespaces" → "New codespace"
- Edit directly in the browser environment

## 🚀 Tech Stack

### **Frontend Framework**
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with full IntelliSense
- **Vite** - Lightning-fast build tool and development server

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Lucide React** - Beautiful, customizable icons
- **CSS Grid & Flexbox** - Modern layout techniques

### **Routing & Navigation**
- **React Router DOM** - Client-side routing with proper base URL handling
- **Smooth Scrolling** - Enhanced navigation experience

### **Theme & Accessibility**
- **Custom Theme Provider** - Dark/light mode with persistence
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG compliant components

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navbar.tsx       # Navigation with theme toggle
│   ├── Hero.tsx         # Landing section
│   ├── About.tsx        # Organization overview
│   ├── Pillars.tsx      # Four pillars section
│   ├── Events.tsx       # Programs overview
│   ├── Leadership.tsx   # Team and coordinators
│   ├── MasjidsMadrasas.tsx # Institution directory
│   ├── Testimonials.tsx # Community feedback
│   └── Footer.tsx       # Site footer
├── pages/               # Route components
│   ├── Index.tsx        # Main landing page
│   ├── Masjids.tsx      # Masjids directory
│   ├── Madrasas.tsx     # Madrasas directory
│   └── programs/        # Individual program pages
│       ├── QHLS.tsx
│       ├── Velicham.tsx
│       ├── Isthiqaama.tsx
│       ├── Inspire.tsx
│       ├── Eelaf.tsx
│       └── Other.tsx
├── hooks/               # Custom React hooks
│   └── useTheme.tsx     # Theme management
└── assets/              # Static assets and constants
```

## 🖼️ Image Management

### **Directory Structure**
```
public/
├── images/             # Profile pictures and logos
├── masjids/            # Masjid images (placeholder ready)
└── madrasas/           # Madrasa images (placeholder ready)
```

### **Adding Images**
1. **Profile Pictures**: Add to `public/images/`
2. **Masjid Images**: Add to `public/masjids/` with unit names (e.g., `kakkanad.jpg`)
3. **Madrasa Images**: Add to `public/madrasas/` with unit names (e.g., `athani.jpg`)

## 🌐 Deployment

### **GitHub Pages**
- Configured with base URL: `/ism_kakkanad/`
- Automatic deployment on push to main branch
- Custom domain support available

### **Lovable Platform**
- Visit [Lovable Project](https://lovable.dev/projects/6e133537-4e8a-43c6-acd1-b9dd7a70f5ab)
- Click Share → Publish for instant deployment

### **Custom Domain**
- Navigate to Project > Settings > Domains
- Click "Connect Domain" and follow the guide
- [Custom Domain Setup Guide](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## 🤝 Contributing

### **Content Updates**
- Update coordinator information in respective program files
- Add new testimonials in `Testimonials.tsx`
- Update leadership information in `Leadership.tsx`

### **Image Updates**
- Replace placeholder images with actual photos
- Maintain naming convention: `{unit-name}.jpg`
- Optimize images for web (recommended: 800x600px, <200KB)

### **Feature Requests**
- Open an issue with detailed description
- Use the Lovable IDE for AI-assisted development
- Follow the existing code patterns and styling

## 📞 Contact Information

**ISM Kakkanad Zone**
- Youth Wing of Kerala Nadvathul Mujahideen (KNM)
- Serving the Islamic community across 8 units
- Focus on youth empowerment and community service

---

**Built with ❤️ for the ISM Kakkanad community**
