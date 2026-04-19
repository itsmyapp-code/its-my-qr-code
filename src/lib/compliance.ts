import { Metadata } from 'next';

export const COMPLIANCE_CONSTANTS = {
  PROJECT_NAME: "Its My QR Code",
  DOCUMENT_DATE: "February 24, 2026",
  CONTACT_EMAIL: "hello@itsmyapp.co.uk",
  STATUS: "Future-Proofed (Compliant through Spring 2027)",
};

export const PRIVACY_POLICY = `
# Privacy Policy
*Last Updated: ${COMPLIANCE_CONSTANTS.DOCUMENT_DATE}*

## Core Promise: Browser-Only Processing
${COMPLIANCE_CONSTANTS.PROJECT_NAME} operates using a strict "Zero-Backend" architecture. All QR code generation is processed entirely within your device's browser memory. Your entered links, files, and custom logos are **never transmitted to our servers**, nor are they stored by us. 

## 1. Data Collection
- **Identity & Contact Data**: By default, no personal data is collected as user accounts are not required to generate QR codes. If you reach out for support, we will process your Email and Name to assist you.
- **Technical & Usage Data**: (Optional depending on your cookie choice) Device information, browser type, and anonymous interaction metrics to improve the service structure. 

## 2. Legitimate Interests (2027 Update)
We process necessary anonymous technical data for "Recognised Legitimate Interests" including security, emergency response, and crime prevention (DDoS mitigation, bot protection) without requiring a balancing test. 

## 3. Automated Decisions & Subscriptions
We do not make significant automated decisions based on your data. Currently, ${COMPLIANCE_CONSTANTS.PROJECT_NAME} is free with no active paid subscriptions or Hidden Drip Pricing. 

## 4. Complaint Rights
Users have a right to complain directly via our electronic form or by emailing [${COMPLIANCE_CONSTANTS.CONTACT_EMAIL}](mailto:${COMPLIANCE_CONSTANTS.CONTACT_EMAIL}). We will acknowledge all complaints within 30 days.
`;

export const TERMS_CONDITIONS = `
# Terms of Service
*Last Updated: ${COMPLIANCE_CONSTANTS.DOCUMENT_DATE}*

Welcome to ${COMPLIANCE_CONSTANTS.PROJECT_NAME}. 

## 1. Acceptance & Use
By using ${COMPLIANCE_CONSTANTS.PROJECT_NAME}, you agree to these terms. As a browser-only tool, the code generator runs on your local machine.

## 2. User Responsibilities
Users are entirely responsible for the data encoded into the generated QR codes. 

## 3. Prohibited Uses
No unlawful use, transmitting malware, phishing links, or impersonating personnel via generated QR codes.

## 4. Subscription & Pricing Logic (DMCCA 2027)
${COMPLIANCE_CONSTANTS.PROJECT_NAME} is free-to-use. If premium subscriptions are introduced, we adhere strictly to the "Easy Exit" rule. Cancellation will be simple, transparent, and sludge-free. 
Prices shown (if any) will strictly follow "Anti-Drip Pricing" regulations, including all mandatory fees upfront.

## 5. Liability & Termination
${COMPLIANCE_CONSTANTS.PROJECT_NAME} is not liable for indirect or consequential damages. We reserve the right to suspend access for breaches of these terms.
`;

export const COOKIE_POLICY = `
# Cookie Policy
*Last Updated: ${COMPLIANCE_CONSTANTS.DOCUMENT_DATE}*

Our application uses a strict consent management system applying "Equal Prominence" logic in compliance with the 2027 Data Act.

## 1. Strictly Necessary Cookies
Essential for website security, bot mitigation, and basic routing. These cannot be disabled.

## 2. Consent Exemptions (2027 Update)
Under current laws, consent is not required for:
- **Statistical Cookies**: Used solely for anonymous website usage metrics.
- **Security & Fraud**: Preventing DDoS or malicious access.
- **User Appearance**: Remembering UI preferences, such as Dark Mode or your last QR styling type.

## 3. Third-Party Tracking & Marketing
Non-essential trackers (e.g., Meta Pixel, Google Ads) remain fully blocked until a positive "Accept All" action occurs. Currently, we utilize no external marketing trackers.
`;

export const ACCESSIBILITY_STATEMENT = `
# Accessibility Statement
*Last Updated: ${COMPLIANCE_CONSTANTS.DOCUMENT_DATE}*

## Commitment
${COMPLIANCE_CONSTANTS.PROJECT_NAME} targets WCAG 2.1 Level AA compliance to ensure digital equality for all our users.

## Support 
Our platform includes comprehensive keyboard navigation and screen reader compatibility across the generation dashboard and legal pages. We specifically ensure color contrast is high, and form controls are fully navigable without a pointing device.

If you encounter accessibility barriers, contact us at [${COMPLIANCE_CONSTANTS.CONTACT_EMAIL}](mailto:${COMPLIANCE_CONSTANTS.CONTACT_EMAIL}).
`;

export const HELP_GUIDE = `
# User Guide: Its My QR Code

Welcome to the zero-backend, privacy-first QR Code generator. This guide will help you create stunning, professional QR codes in seconds.

## 1. Enter Your Information
Choose the type of data you want to encode from the top tabs:
*   **URL**: Enter a website link (e.g., \`https://itsmyapp.co.uk\`).
*   **Text**: Enter any plain text or notes.
*   **Email**: Pre-fill a recipient, subject, and message.
*   **WiFi**: Enter your Network Name (SSID) and Password to let guests join your network instantly with a scan.
*   **vCard**: Create a digital business card with your contact details.

## 2. Customize the Design
Scroll down to the **Customize Design** section to make your QR code stand out:
*   **Colors**: Choose solid colors or beautiful linear gradients for both the QR dots and the background.
*   **Shapes**: Change the pattern of the dots (Square, Rounded, Extra Rounded, etc.) and the "Eye" frames to suit your brand.
*   **Logo**: Upload your own logo to be automatically centered within the QR code.
*   **Label**: Add a call-to-action directly below your QR code, such as **"Scan Here for WiFi"** or **"Follow Us!"**. You can also customize the text color here.

## 3. Preview & Download
Watch your QR code update in real-time in the **Live Preview** pane. Once you are happy with the design:
1.  Verify the scan with your phone's camera directly on the screen.
2.  Select your preferred format: **PNG** (standard image), **SVG** (vector for high-res printing), or **PDF**.
3.  The file will be generated locally in your browser and downloaded instantly.

---

### 🔒 Privacy & Security Note
**Its My QR Code** is 100% browser-based. 
*   **No Data Transmission**: Your links, passwords, and logos never leave your computer.
*   **Offline Ready**: Once the page is loaded, you can disconnect from the internet and it will still work perfectly.
*   **No Tracking**: We do not store your data, track your links, or use any backend databases.

---
*Generated by ItsMyApp.co.uk | © 2026 All Rights Reserved*
`;

export const TESTIMONIALS = [
  {
    name: "Martin",
    role: "Designer",
    content: "The best browser-only QR generator I've used. I can't believe this is free. 5/5 stars!",
    stars: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Small Business Owner",
    content: "I love that my WiFi passwords never leave my computer. Private, fast, and beautiful UI. Highly recommend.",
    stars: 5
  },
];
