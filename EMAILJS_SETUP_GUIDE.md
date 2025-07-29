# EmailJS Setup Guide for Portfolio Contact Form

## 🚀 Complete Setup Instructions

### Step 1: EmailJS Dashboard Setup

1. **Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)**
2. **Sign in** with your account
3. **Navigate to Email Templates**

### Step 2: Create Email Template

**Click "Create New Template" and use these settings:**

#### Template Configuration:
- **Template ID**: `template_i86xhlg` ✅ (Already configured in your code)
- **Template Name**: "Portfolio Contact Form"
- **Service**: Your Gmail service (`service_0khwsub`)

#### Template Content:
```
Subject: 🚀 New Contact from {{from_name}} - Portfolio Website

Hi Sasindu,

You have received a new message from your portfolio website (sasindu.tech):

👤 Name: {{from_name}}
📱 Mobile: {{mobile_number}}
💬 Message: 
{{message}}

---
🌐 Sent from: sasindu.tech
📧 Reply to: {{from_name}} at {{mobile_number}}
⏰ Received: {{current_time}}
```

#### Template Variables (Add these exactly):
- `{{from_name}}` - Visitor's name
- `{{mobile_number}}` - Visitor's mobile number  
- `{{message}}` - Visitor's message
- `{{reply_to}}` - Reply email format
- `{{current_time}}` - Timestamp (optional)

### Step 3: Test Template

#### Example Test Data:
```
from_name: "John Smith"
mobile_number: "+94 77 123 4567"
message: "Hi Sasindu, I would like to discuss a web design project for my business. Could we schedule a call this week?"
```

### Step 4: Email Service Setup

**Ensure your Gmail service is configured:**
- **Service ID**: `service_0khwsub` ✅
- **Service Type**: Gmail
- **From Email**: sasindumudawagedara@gmail.com
- **From Name**: Sasindu Mudawagedara

### Step 5: Advanced Template (Optional)

For a more professional look, you can use this HTML template:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px;">
    <div style="background: linear-gradient(135deg, #00d4ff, #8b5cf6); padding: 20px; border-radius: 10px; color: white; text-align: center;">
        <h2>🚀 New Contact from Portfolio</h2>
        <p>sasindu.tech</p>
    </div>
    
    <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h3 style="color: #333; margin-bottom: 20px;">Contact Details:</h3>
        
        <div style="margin-bottom: 15px;">
            <strong>👤 Name:</strong> {{from_name}}
        </div>
        
        <div style="margin-bottom: 15px;">
            <strong>📱 Mobile:</strong> {{mobile_number}}
        </div>
        
        <div style="margin-bottom: 20px;">
            <strong>💬 Message:</strong>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #00d4ff;">
                {{message}}
            </div>
        </div>
        
        <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center; color: #666;">
            <p>📧 Sent from <strong>sasindu.tech</strong></p>
            <p>Reply directly to this email or contact {{from_name}} at {{mobile_number}}</p>
        </div>
    </div>
</div>
```

## 📱 Example Messages You'll Receive

### Example 1: Web Design Inquiry
```
Name: Sarah Johnson
Mobile: +94 71 234 5678
Message: Hi Sasindu, I loved your portfolio! I'm looking for a modern website for my boutique. Can we discuss the project and pricing?
```

### Example 2: Graphic Design Request
```
Name: Mike Chen
Mobile: +94 77 987 6543
Message: Hello, I need a complete brand identity package for my startup. Your designs are exactly what I'm looking for. When can we start?
```

### Example 3: Assignment Help
```
Name: Priya Patel
Mobile: +94 76 555 4321
Message: Hi, I'm struggling with my web development assignment. Can you help me with responsive design concepts? It's due next week.
```

## 🔧 Troubleshooting

### Common Issues:

1. **Template not found error**
   - Check Template ID: `template_i86xhlg`
   - Ensure template is published/active

2. **Service not found error**
   - Verify Service ID: `service_0khwsub`
   - Check Gmail service is connected

3. **Public key error**
   - Confirm Public Key: `_d_cHJHp9X7IMQdlU`
   - Check it's properly initialized in HTML

4. **Template variables not working**
   - Use exact variable names: `{{from_name}}`, `{{mobile_number}}`, `{{message}}`
   - Check for typos in template

### Testing Steps:

1. **Test in EmailJS Dashboard** - Use the test feature
2. **Test on localhost** - Fill out your contact form
3. **Check Gmail** - Verify emails are received
4. **Mobile test** - Test on actual mobile device

## ✅ Verification Checklist

- [ ] Template ID matches: `template_i86xhlg`
- [ ] Service ID matches: `service_0khwsub`
- [ ] Public key matches: `_d_cHJHp9X7IMQdlU`
- [ ] Template variables are correct
- [ ] Gmail service is connected
- [ ] Test email received successfully
- [ ] Mobile form works properly
- [ ] Labels don't overlap on mobile

## 🎉 You're All Set!

Your contact form is now configured to:
- ✅ Send emails to sasindumudawagedara@gmail.com
- ✅ Include visitor's name, mobile, and message
- ✅ Work perfectly on mobile devices
- ✅ Show professional success/error messages
- ✅ Have smooth animations and no label overlapping

**Need help?** Contact me through the form itself once it's working! 😄
