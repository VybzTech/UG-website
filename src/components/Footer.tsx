import FooterLink from './FooterLink';
import SocialButton from './SocialButton';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white py-16">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-base font-bold">🏢</span>
              </div>
              <span className="text-xl font-bold">Urban Gravity</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Urban Gravity is a housing app. It's a platform for tenant experience and choice. You're taking an educated, agent-controlled system and fixing it for the first, right, digital way.
            </p>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-6">Legal</h3>
            <nav className="space-y-3">
              <FooterLink href="#privacy">Privacy Policy</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#refund">Refund Policy</FooterLink>
              <FooterLink href="#terms">Terms & Conditions</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </nav>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-6">Company</h3>
            <nav className="space-y-3">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#live-chat">Live Chat</FooterLink>
              <FooterLink href="#careers">Careers</FooterLink>
              <FooterLink href="#faqs">FAQs</FooterLink>
              <FooterLink href="#download">Download App</FooterLink>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <Phone size={18} />
                <span className="text-sm">+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:hello@urbangravity.com"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <Mail size={18} />
                <span className="text-sm">hello@urbangravity.com</span>
              </a>
              <a
                href="#location"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <MapPin size={18} />
                <span className="text-sm">123 Main Street, NY</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            2025 © Urban Gravity Corporation. All rights reserved.
          </p>

          {/* Social Buttons */}
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">Connect with us on Social Media</span>
            <div className="flex gap-3">
              <SocialButton icon="instagram" href="https://instagram.com" />
              <SocialButton icon="twitter" href="https://twitter.com" />
              <SocialButton icon="linkedin" href="https://linkedin.com" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
          {/* // Usage in JSX: */}
          // <div className="space-y-4">
          //   <h3 className="text-lg font-bold text-white mb-6">Legal</h3>
          //   <nav className="space-y-3">
          //     {links.legal.map((link) => (
          //       <FooterLink key={link.label} href={link.href}>
          //         {link.label}
          //       </FooterLink>
          //     ))}
          //   </nav>
          // </div>