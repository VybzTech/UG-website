// ─────────────────────────────────────────────────────────────────────────────
// Site-wide content constants
// All copy / data used across Landing, About, and Contact pages lives here.
// Import what you need; never hard-code strings in page components.
// ─────────────────────────────────────────────────────────────────────────────

// ── Navigation ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",         href: "#home",           id: "home"     },
  { label: "About Us",     href: "/about",          id: "about"    },
  { label: "Our Services", href: "/about#services", id: "services" },
  { label: "Contact",      href: "/contact",        id: "contact"  },
] as const;

// ── Social links ──────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "Instagram", icon: "instagram", href: "https://instagram.com"  },
  { label: "Twitter",   icon: "twitter",   href: "https://twitter.com"    },
  { label: "LinkedIn",  icon: "linkedin",  href: "https://linkedin.com"   },
  { label: "WhatsApp",  icon: "whatsapp",  href: "https://wa.me/1234567890" },
  { label: "Urban Gravity", icon: "urbangravity", href: "/" },
] as const;

// ── Footer links ──────────────────────────────────────────────────────────────
export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy",    href: "#privacy" },
  { label: "Pricing",           href: "#pricing" },
  { label: "Refund Policy",     href: "#refund"  },
  { label: "Terms & Conditions",href: "#terms"   },
  { label: "Contact Us",        href: "/contact" },
] as const;

export const FOOTER_COMPANY_LINKS = [
  { label: "About Us",    href: "/about"    },
  { label: "Live Chat",   href: "#live-chat"},
  { label: "Careers",     href: "#careers"  },
  { label: "FAQs",        href: "#faqs"     },
  { label: "Download App",href: "#download" },
] as const;

// ── Landing — scroll sections ─────────────────────────────────────────────────
export const LANDING_SCROLL_SECTIONS = [
  {
    number: 1,
    heading:  "Discover Something New",
    subtitle: "Explore a world of possibilities right at your fingertips. Built for speed, designed for you.",
    ctaLabel: "Get Started",
  },
  {
    number: 2,
    heading:  "Stay Connected Always",
    subtitle: "Real-time updates, seamless sync across devices. Your life, perfectly in sync wherever you go.",
    ctaLabel: "Learn More",
  },
  {
    number: 3,
    heading:  "Achieve More Together",
    subtitle: "Collaborate with your team, share instantly, and move faster than ever before.",
    ctaLabel: "Download Now",
  },
] as const;

// ── About — vision copy ───────────────────────────────────────────────────────
export const ABOUT_VISION = {
  heading: "Our Vision",
  body: [
    "Urban Gravity isn't just a housing app. It's a platform built on trust, experience, and choice.",
    "You're taking an outdated, agent-controlled system and flipping it into a user-first, digital ecosystem — and that's disruptive in the very best way.",
    "In payment-marketplaces, trust is the product. People don't remember agents or prices as much as the feeling they get. Our brand promise is simple: feel safer, happier, with less time, money, and uncertainty at stake.",
  ],
  ctaLabel: "Learn More",
} as const;

// ── About — services ──────────────────────────────────────────────────────────
export const ABOUT_SERVICES = [
  {
    emoji:    "💝",
    heading:  "Swipe Real Matches",
    body:     "Find homes that truly fit your lifestyle, not just your budget. Urban Gravity's smart swipe matching system curates property listings based on your preferences, location, and needs. We make finding your next home personal, fast, and fun.",
    ctaLabel: "Sign Up",
  },
  {
    emoji:    "✅",
    heading:  "Verified Properties",
    body:     "Every listing you see is verified. Every vendor is vetted. From ownership checks to documentation verification, Urban Gravity ensures what you see is what you get — zero fake listings, zero scams.",
    ctaLabel: "Sign Up",
  },
  {
    emoji:    "⚖️",
    heading:  "Dispute Resolution",
    body:     "We stand by you — even after the deal. Urban Gravity provides an integrated dispute resolution channel where users and vendors can report and resolve issues fairly. Secure documentation and transparent communication.",
    ctaLabel: "Sign Up",
  },
] as const;

// ── Contact — support categories ─────────────────────────────────────────────
export const CONTACT_SUPPORT_CATEGORIES = [
  {
    emoji:    "🔐",
    heading:  "Password & Security",
    body:     "Make enquiries about our security measures and verify account security periods. There is a plan for everyone — we are here to make you comfortable.",
  },
  {
    emoji:    "📋",
    heading:  "Billing & Subscriptions",
    body:     "Make inquiries about our pricing and subscription validity periods. There is a plan for everyone. We are here to make you comfortable.",
  },
  {
    emoji:    "🛠️",
    heading:  "Maintenance",
    body:     "Make enquiries about our maintenance periods. Request updates needed for your location and more.",
  },
] as const;

// ── Contact — FAQ items ───────────────────────────────────────────────────────
export const CONTACT_FAQS = [
  {
    question: "How do I create an account?",
    answer:   "Download the app, tap Sign Up, and follow the guided onboarding. It takes under two minutes.",
  },
  {
    question: "Is Urban Gravity free to use?",
    answer:   "Core features are free. Premium plans unlock advanced matching, priority listings, and more.",
  },
  {
    question: "How are properties verified?",
    answer:   "Every listing goes through ownership checks and documentation review before it appears in search.",
  },
  {
    question: "What if I have a dispute with a landlord?",
    answer:   "Use the in-app Dispute Resolution channel — our team mediates and documents every case fairly.",
  },
] as const;
