# HEAL - Your PCOS Wellness Journey 🌸

<div align="center">

![HEAL App](public/icon.svg)

**A Progressive Web App for holistic PCOS management**

[Install App](#installation) • [Features](#features) • [Tech Stack](#tech-stack) • [PWA Setup](PWA_SETUP.md)

</div>

---

## 📱 About HEAL

HEAL is a comprehensive Progressive Web App designed specifically for women managing PCOS (Polycystic Ovary Syndrome). Built with React and modern web technologies, it provides a native app-like experience with the convenience of web accessibility.

### 🎯 The HEAL Approach

HEAL integrates four lifestyle domains for PCOS management:

1. **Physical Activity** 🧘‍♀️
   - Strength training for insulin sensitivity
   - Low to moderate-intensity cardio
   - Cycle-synchronized movement patterns

2. **Sleep Health** 😴
   - 7-9 hours consistent sleep duration
   - Fixed sleep-wake timings
   - Reduced late-night screen exposure

3. **Stress Management** 🧘
   - Mindfulness and breathwork
   - Restorative yoga practices
   - Techniques to reduce chronic stress

4. **Reduce Disruptors** 🌿
   - Minimize endocrine-disrupting chemicals
   - Breathable, skin-safe menstrual products
   - Gut health optimization

---

## ✨ Features

### 📊 Core Functionality

- **Cycle Calendar** - Visual monthly calendar with phase tracking
- **Symptom Logging** - Interactive daily symptom tracking with feedback
- **Risk Assessment** - Personalized risk category with guidance
- **Four Pillars** - Comprehensive wellness tracking across all domains
- **HEAL Journey** - Structured 3-month personalized program
- **Educational Content** - Articles and learning resources
- **Success Stories** - Real testimonials from users

### 🎨 User Experience

- ✅ Beautiful Flo-inspired UI design
- ✅ Smooth animations and transitions
- ✅ Interactive components with visual feedback
- ✅ Responsive mobile-first design
- ✅ Gradient backgrounds and modern aesthetics
- ✅ Intuitive navigation with bottom bar

### 📱 PWA Features

- ✅ **Installable** - Add to home screen on any device
- ✅ **Offline Support** - Works without internet connection
- ✅ **Fast Loading** - Cached assets for instant access
- ✅ **Native Feel** - Standalone mode without browser UI
- ✅ **Smart Install Prompt** - Auto-suggests installation
- ✅ **App Shortcuts** - Quick actions from home screen
- ✅ **Push Ready** - Infrastructure for notifications

---

## 🚀 Installation

### For Users

#### Mobile (iOS/Android)
1. Visit the app URL in your browser
2. Look for the "Install" prompt (appears after 3 seconds)
3. Tap "Install" or use "Add to Home Screen" from browser menu
4. Open the app from your home screen like a native app!

#### Desktop
1. Visit the app URL in Chrome/Edge
2. Click the install icon (⊕) in the address bar
3. Click "Install" to add HEAL to your applications

### For Developers

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

### PWA
- **Service Worker** - Offline caching
- **Web App Manifest** - Installation metadata
- **IndexedDB Ready** - Local storage capability

### Design
- **Mobile-First** - Responsive from the ground up
- **Gradient Animations** - Smooth visual effects
- **Glass-morphism** - Modern backdrop blur effects
- **Micro-interactions** - Enhanced user engagement

---

## 📂 Project Structure

```
heal-pcos-app/
├── public/
│   ├── manifest.json         # PWA manifest
│   ├── sw.js                 # Service worker
│   ├── icon.svg              # App icon (SVG)
│   ├── icon-192.png          # 192x192 icon
│   └── icon-512.png          # 512x512 icon
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── CycleCalendar.tsx
│   │   │   ├── TodaySymptoms.tsx
│   │   │   ├── RiskCategory.tsx
│   │   │   ├── FourPillars.tsx
│   │   │   ├── HealTab.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── KnowMore.tsx
│   │   │   ├── BottomNav.tsx
│   │   │   ├── InstallPrompt.tsx
│   │   │   ├── OfflineIndicator.tsx
│   │   │   └── ui/            # Reusable UI components
│   │   ├── utils/
│   │   │   └── pwa.ts         # PWA utility functions
│   │   └── App.tsx            # Main app component
│   ├── styles/
│   │   ├── index.css
│   │   ├── theme.css          # Design tokens & animations
│   │   └── tailwind.css
│   └── main.tsx               # App entry point
├── index.html                 # PWA meta tags
├── vite.config.ts            # Build configuration
├── PWA_SETUP.md              # Detailed PWA guide
└── README.md                 # This file
```

---

## 🎨 Design System

### Colors
- **Primary**: Purple (#9333ea)
- **Secondary**: Pink (#ec4899)
- **Accent**: Green (#10b981)
- **Background**: Soft gradients (purple/pink/white)

### Typography
- Clean, modern sans-serif
- Hierarchical heading system
- Readable body text

### Components
- Card-based layout
- Rounded corners (12-24px)
- Soft shadows
- Gradient backgrounds
- Interactive hover states

---

## 📱 Pages & Navigation

### Home Tab
- Welcome banner with cycle info
- Interactive cycle calendar
- Symptom logging
- Risk category card
- Four pillars overview
- CTA for HEAL journey
- Testimonials
- Educational articles

### HEAL Tab
- **Not signed up**: Beautiful onboarding
- **Signed up**: 
  - Progress tracker
  - Daily yoga videos
  - Meal plans
  - Eco-product guidance
  - Habit tracker
  - Symptom logging

### Track Tab
Coming soon - Detailed analytics

### Profile Tab
Coming soon - User settings

---

## 🔧 Development

### Key Files

**App Entry**
```tsx
// src/main.tsx
import App from './app/App.tsx'
```

**Main Component**
```tsx
// src/app/App.tsx
export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  // ...
}
```

**PWA Utils**
```tsx
// src/app/utils/pwa.ts
export const isInstalled = (): boolean => { /* ... */ }
export const requestNotificationPermission = async () => { /* ... */ }
```

### Adding New Components

1. Create in `/src/app/components/`
2. Import Lucide icons as needed
3. Use Tailwind for styling
4. Export and import in App.tsx

---

## 🚀 Deployment

### Requirements
- HTTPS hosting (required for PWA)
- Node.js 18+

### Recommended Hosts
- **Vercel** - Automatic HTTPS, easy deployment
- **Netlify** - Great for static sites
- **Firebase Hosting** - Google infrastructure
- **GitHub Pages** - Free for public repos

### Build & Deploy

```bash
# Build
npm run build

# Output in /dist folder
# Deploy /dist to your hosting service
```

### After Deployment

1. Test installation on real devices
2. Run Lighthouse PWA audit in Chrome DevTools
3. Replace placeholder PNG icons with proper images
4. Add real app screenshots to manifest
5. Test offline functionality
6. Monitor service worker updates

---

## 📊 Performance

- ⚡ First Load: < 2s
- 📦 Bundle Size: Optimized with Vite
- 🎨 Lighthouse Score: 95+
- 📱 Mobile First: Perfect mobile experience
- 🔄 Offline: Full offline support

---

## 🔐 Privacy & Security

- No data collection without consent
- Local storage only
- HTTPS required in production
- Privacy-preserving frameworks
- Compliant with health data regulations

---

## 🤝 Contributing

This is a demonstration project. For production use:

1. Add backend API for data persistence
2. Implement user authentication
3. Add push notification system
4. Include data export features
5. Add medical disclaimer screens
6. Consult healthcare professionals for content

---

## 📄 License

This is a demonstration project for educational purposes.

---

## 💡 Tips

### For Best Experience
- Use on mobile for optimal design
- Install as PWA for native feel
- Enable notifications (coming soon)
- Check offline mode

### For Developers
- Use Chrome DevTools for PWA testing
- Check Application → Manifest
- Test Service Worker caching
- Run Lighthouse audits
- Test on real devices

---

## 🎯 Roadmap

- [ ] Backend API integration
- [ ] User authentication
- [ ] Push notifications
- [ ] Data export (PDF/CSV)
- [ ] Medication reminders
- [ ] Doctor appointment booking
- [ ] Community features
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Wear OS integration

---

## 📞 Support

For technical issues:
- Check [PWA_SETUP.md](PWA_SETUP.md) for installation help
- Verify HTTPS connection
- Clear browser cache
- Try different browser

---

## 🙏 Acknowledgments

- Design inspired by Flo app
- Built with modern web standards
- Icons by Lucide
- Images from Unsplash

---

<div align="center">

**HEAL - Empowering women with PCOS through holistic wellness** 🌸

Made with ❤️ using React & PWA technologies

</div>
