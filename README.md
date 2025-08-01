# 🚀 Sasindu Mudawagedara - Portfolio Website

A modern, futuristic portfolio website showcasing creative web design, graphic design, and academic support services. Built with cutting-edge animations, mobile-first design, PWA support, and comprehensive form validation.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat&logo=pwa&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-FF6B6B?style=flat&logo=gmail&logoColor=white)

## ✨ New Features Added

### 🎯 Enhanced UI/UX
- **Accessibility Improvements**: Skip links, ARIA labels, keyboard navigation, screen reader support
- **Enhanced Loading Screen**: Animated loading with dots and better UX
- **Back-to-Top Button**: With scroll progress indicator
- **Form Validation**: Real-time validation with error states and success feedback
- **Blog Section**: Latest insights with newsletter signup
- **Enhanced Footer**: Comprehensive links and social media integration

### 📱 Mobile Responsiveness
- **Improved Touch Targets**: Minimum 44px touch targets throughout
- **Better Typography Scaling**: Fluid typography using clamp() for better readability
- **Enhanced Mobile Navigation**: Better hamburger menu with accessibility
- **Touch-Friendly Forms**: Improved mobile form experience
- **Optimized Performance**: Disabled heavy animations on mobile for better performance

### ⚡ Performance & SEO
- **Progressive Web App (PWA)**: Installable with offline support
- **Service Worker**: Caching strategy for offline functionality  
- **Enhanced SEO**: Meta tags, Open Graph, Twitter Cards, structured data
- **Sitemap & Robots.txt**: Better search engine optimization
- **Privacy Policy**: GDPR-compliant privacy policy
- **Performance Optimizations**: Lazy loading, image optimization, code minification

### 🛠 Technical Enhancements
- **Form Validation System**: Comprehensive client-side validation
- **Newsletter Integration**: Email subscription with validation
- **Notification System**: Toast notifications for user feedback
- **Error Handling**: Better error states and user feedback
- **Code Organization**: Modular JavaScript with classes and improved structure

## ✨ Features

### 🎨 **Design & Aesthetics**
- **Futuristic UI/UX** with glassmorphism effects
- **Neon color scheme** with electric blue and cyber purple
- **Smooth animations** and micro-interactions
- **Mobile-first responsive design**
- **Dynamic background effects** with geometric shapes

### 📱 **Mobile Optimization**
- **Touch-friendly interactions** with proper feedback
- **Optimized animations** for mobile performance
- **Keyboard-aware form handling**
- **Smooth scroll and navigation**
- **Performance monitoring** with FPS optimization

### 📧 **Contact & Integration**
- **EmailJS integration** for direct Gmail delivery
- **WhatsApp integration** for instant messaging
- **Google Maps integration** for location sharing
- **Dynamic placeholder examples** in form fields
- **Real-time form validation** with visual feedback

### 🎯 **Interactive Elements**
- **Animated counters** for statistics
- **Portfolio filtering** with smooth transitions
- **Service card hover effects** 
- **Dynamic contact form** with glance effects
- **Notification system** for user feedback

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced styling with animations and gradients
- **JavaScript ES6+** - Interactive functionality and animations
- **EmailJS** - Contact form email delivery
- **Font Awesome** - Professional icons
- **Google Fonts** - Orbitron & Rajdhani typography

## 🚀 Live Demo

Visit the live website: **[sasindu.tech](https://sasindu.tech)**

## 📥 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/sasindumudawagedara/portfolio-website.git
   cd portfolio-website
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   # Or use a local server for development
   ```

3. **For development** (optional)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## 📧 EmailJS Configuration

The contact form uses EmailJS for email delivery. To set up your own:

1. **Create EmailJS account** at [emailjs.com](https://www.emailjs.com/)
2. **Configure Gmail service** with your credentials
3. **Create email template** with the following variables:
   - `{{from_name}}` - Visitor's name
   - `{{mobile_number}}` - Visitor's mobile
   - `{{message}}` - Visitor's message
4. **Update credentials** in `index.html`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   // Update serviceID and templateID in script.js
   ```

📖 **Detailed setup guide**: [EMAILJS_SETUP_GUIDE.md](./EMAILJS_SETUP_GUIDE.md)

## 🎨 Customization

### **Colors**
Update CSS variables in `styles.css`:
```css
:root {
    --electric-blue: #00d4ff;
    --neon-pink: #ff0080;
    --cyber-purple: #8b5cf6;
    /* Customize your color scheme */
}
```

### **Content**
- Update personal information in `index.html`
- Modify services, portfolio items, and about section
- Replace contact details and social links

### **Animations**
- Adjust animation durations in CSS
- Modify JavaScript interactions
- Customize mobile optimizations

## 📱 Mobile Features

- **Responsive breakpoints** for all device sizes
- **Touch gestures** and swipe interactions
- **Performance optimization** with reduced animations on low-end devices
- **Keyboard handling** for form inputs
- **Visual feedback** for all touch interactions

## 🔧 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- **Lighthouse Score**: 95+ Performance
- **Mobile Optimized**: 60fps animations
- **Load Time**: <2 seconds on 3G
- **SEO Optimized**: Semantic HTML structure

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Sasindu Mudawagedara**
- 📧 Email: [pradeepsasindu2001@gmail.com](mailto:pradeepsasindu2001@gmail.com)
- 📱 WhatsApp: [+94 70 518 7952](https://wa.me/+94705187952)
- 📍 Location: [Navinna, Maharagama, Sri Lanka](https://maps.app.goo.gl/fDFoQxdqmydhSq3n8)
- 🌐 Website: [sasindu.tech](https://sasindu.tech)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **EmailJS** for seamless email integration
- **Font Awesome** for professional icons
- **Google Fonts** for beautiful typography
- **GitHub Pages** for free hosting

---

⭐ **If you found this project helpful, please give it a star!** ⭐

Built with ❤️ by [Sasindu Mudawagedara](https://sasindu.tech)
