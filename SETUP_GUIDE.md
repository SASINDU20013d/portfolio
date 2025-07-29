# 📧 EmailJS Setup Guide for Gmail Integration

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up with your email
3. Verify your email address

## Step 2: Add Gmail Service
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"**
4. Click **"Connect Account"** and authorize with your Gmail (`sasindumudawagedara@gmail.com`)
5. Name your service (e.g., "Gmail_Service")
6. Copy the **Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Set up your template like this:

```
Subject: New Contact from {{from_name}} - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key
1. Go to **"Account"** → **"General"**
2. Copy your **Public Key**

## Step 5: Update Your Website Code
1. Open `index.html` and replace `YOUR_PUBLIC_KEY` with your actual public key:
```html
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY_HERE");
```

2. Open `script.js` and update these values:
```javascript
const serviceID = 'YOUR_ACTUAL_SERVICE_ID';
const templateID = 'YOUR_ACTUAL_TEMPLATE_ID';
const publicKey = 'YOUR_ACTUAL_PUBLIC_KEY';
```

## Step 6: Test the Contact Form
1. Deploy your website to GitHub Pages
2. Go to `https://sasindu.tech`
3. Fill out the contact form and submit
4. Check your Gmail for the message

## Step 7: GitHub Pages Setup for Custom Domain

### A. Repository Setup
1. Create a new repository named `sasindu.tech` (or any name)
2. Upload your website files
3. Go to repository **Settings** → **Pages**
4. Select **Deploy from a branch** → **main** → **/ (root)**

### B. Custom Domain Configuration
1. In your repository, create a file named `CNAME` (no extension)
2. Add just one line: `sasindu.tech`
3. In your domain registrar (where you got the free domain):
   - Add A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add CNAME record: `www` → `sasindu.tech`

### C. Enable HTTPS
1. Wait 24-48 hours for DNS propagation
2. In GitHub Pages settings, check **"Enforce HTTPS"**

## 📱 Mobile Optimizations Included

The website now includes:
- ✅ Better touch interactions
- ✅ Swipe gestures
- ✅ Optimized animations for mobile
- ✅ Improved navigation for small screens
- ✅ Better form handling on mobile
- ✅ Performance monitoring
- ✅ Reduced motion support
- ✅ Touch-friendly buttons and cards

## 🚀 Performance Tips
- Images will load faster with lazy loading
- Animations are automatically disabled on low-performance devices
- Heavy effects are turned off on mobile for better battery life
- All interactions are optimized for touch devices

## 🎯 Final Steps
1. Test the contact form thoroughly
2. Monitor EmailJS usage (free plan has limits)
3. Consider upgrading EmailJS if you get many messages
4. Add Google Analytics if you want visitor tracking

## 📧 EmailJS Free Plan Limits
- 200 emails per month
- Basic support
- EmailJS branding in emails

For higher volume, consider upgrading to a paid plan.

## 🔒 Security Notes
- Your EmailJS keys are safe to expose on frontend
- Gmail credentials are handled by EmailJS, not your website
- No sensitive data is stored in your repository

## 📞 Support
If you need help:
- EmailJS Documentation: https://www.emailjs.com/docs/
- GitHub Pages Documentation: https://docs.github.com/en/pages
- Feel free to ask me any questions!

Happy coding! 🚀
