# 🌐 Domain Configuration Guide for sasindu.tech

## DNS Records to Add

### **A Records (for root domain sasindu.tech):**
Add these A records in your domain registrar's DNS settings:

```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.108.153

Type: A  
Name: @ (or leave blank for root domain)
Value: 185.199.109.153

Type: A
Name: @ (or leave blank for root domain)  
Value: 185.199.110.153

Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.111.153
```

### **CNAME Record (for www subdomain):**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

## Step-by-Step Setup:

### 1. **Domain Registrar Settings:**
   - Login to your domain registrar (where you bought sasindu.tech)
   - Go to DNS management/DNS settings
   - Add the A records and CNAME record above
   - Save changes (may take 24-48 hours to propagate)

### 2. **GitHub Pages Settings:**
   - After pushing code to GitHub
   - Go to repository → Settings → Pages
   - Source: Deploy from a branch → main → / (root)
   - Custom domain: sasindu.tech
   - Check "Enforce HTTPS"

### 3. **Verification:**
   - Wait for DNS propagation (can take up to 48 hours)
   - Check https://sasindu.tech
   - GitHub will automatically verify your domain

## Common Domain Registrars:

### **GoDaddy:**
1. Login → My Products → DNS → Manage
2. Add A records and CNAME record
3. Save

### **Namecheap:**
1. Domain List → Manage → Advanced DNS
2. Add A records and CNAME record
3. Save

### **Cloudflare:**
1. DNS → Records
2. Add A records and CNAME record
3. Save

### **Other Registrars:**
Look for "DNS Management", "DNS Settings", or "Name Servers" in your account.

## Verification Commands:

After DNS changes, check with these commands:

```bash
# Check A records
nslookup sasindu.tech

# Check CNAME
nslookup www.sasindu.tech

# Check if GitHub recognizes the domain
curl -I https://sasindu.tech
```

## Timeline:
- **Code push**: Immediate
- **GitHub Pages activation**: 5-10 minutes
- **DNS propagation**: 24-48 hours
- **SSL certificate**: Automatic after domain verification

## Troubleshooting:
- If domain doesn't work after 48 hours, check DNS records
- Ensure CNAME file contains only: sasindu.tech
- Check GitHub Pages settings for any errors
- Use online DNS checkers to verify propagation
