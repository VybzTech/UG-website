"use client";

import React, { useState } from "react";
import { HubotH1, HubotH2, HubotH3, HubotP } from "@/components/ui/HubotText";
import { Link } from "react-router-dom";
import Navbar from "../landing/Navbar";
import PageHero from "@/components/common/PageHero";
import OptimizedImageExamples from "@/components/ui/OptimizedImageExamples";

/**
 * Contact Page Component
 * Urban Gravity - Get in Touch
 *
 * Sections:
 * - Yellow House Hero
 * - Contact Form (Left) & FAQ (Right)
 * - Support Categories (3 cards)
 * - Footer with links
 */

interface FormData {
  fullName: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ fullName: "", subject: "", message: "" });

    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Yellow House */}
      <Navbar />
      <PageHero
        backgroundImage="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1400 500'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23cccccc;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e0e0e0;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23bg)' width='1400' height='500'/%3E%3Cg transform='translate(600, 150)'%3E%3Crect x='60' y='80' width='80' height='80' fill='%23FFD43B'/%3E%3Cpolygon points='100,40 60,80 140,80' fill='%23FFC107'/%3E%3Crect x='90' y='120' width='20' height='40' fill='%238B6914'/%3E%3Ccircle cx='108' cy='140' r='2' fill='%23FFD43B'/%3E%3Cline x1='60' y1='80' x2='140' y2='80' stroke='%23FFC107' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E"
        overlayFrom="rgba(0, 0, 0, 0.67)"
        overlayTo="rgba(0, 0, 0, 0.27)"
        heightClass="h-96 md:h-[500px]"
        parallax={false}
      >
        <HubotH1
          fontWeight="extrabold"
          size={72}
          className="text-white drop-shadow-2xl"
        >
          Contact Us
        </HubotH1>
      </PageHero>
      <OptimizedImageExamples />

      {/* FAQ & Form Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <HubotH2
            fontWeight="extrabold"
            size={48}
            className="text-center text-black mb-20"
          >
            Frequently Asked Questions
          </HubotH2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form - Left */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-yellow-600 mb-2"
                  >
                    Full Name:{" "}
                    <span className="text-yellow-500">
                      Your sanity will be confidential
                    </span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-yellow-600 mb-2"
                  >
                    Subject:{" "}
                    <span className="text-yellow-500">
                      This is why you wish to speak with us.
                    </span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your inquiry"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-yellow-600 mb-2"
                  >
                    Message:{" "}
                    <span className="text-yellow-500">
                      You can express your concerns.
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="UG~"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-black hover:bg-gray-900 text-white font-bold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Send Request
                  <span>🚀</span>
                </button>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
                    <HubotP
                      fontWeight="bold"
                      size={13}
                      className="text-green-800"
                    >
                      ✓ Message sent successfully! We'll be in touch soon.
                    </HubotP>
                  </div>
                )}
              </form>
            </div>

            {/* Image Placeholder - Right */}
            <div className="relative h-80 md:h-auto rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">📬</div>
                  <HubotP
                    fontWeight="medium"
                    size={14}
                    className="text-gray-600"
                  >
                    Your message matters to us
                  </HubotP>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Password & Security */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🔐</div>
              <HubotH3 fontWeight="bold" size={24} className="text-black mb-3">
                Password & Security
              </HubotH3>
              <HubotP fontWeight="regular" size={13} className="text-gray-700">
                Make enquires of our pricing and verify account security
                periods. There is a plan for everyone. We are to make you
                comfortable.
              </HubotP>
            </div>

            {/* Billing & Subscriptions */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="text-5xl mb-4">📋</div>
              <HubotH3 fontWeight="bold" size={24} className="text-black mb-3">
                Billing & Subscriptions
              </HubotH3>
              <HubotP fontWeight="regular" size={13} className="text-gray-700">
                Make inquiries of our pricing and subscription validity periods.
                There is a plan for everyone. We are to make the comfortable.
              </HubotP>
            </div>

            {/* Maintenance */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🛠️</div>
              <HubotH3 fontWeight="bold" size={24} className="text-black mb-3">
                Maintenance
              </HubotH3>
              <HubotP fontWeight="regular" size={13} className="text-gray-700">
                Make enquires of our maintenance periods. Request updates needed
                for your location, more.
              </HubotP>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white border-t border-gray-200 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-4xl">🌍</div>
              </div>
              <HubotP
                fontWeight="regular"
                size={13}
                className="text-gray-700 leading-relaxed mb-6"
              >
                Urban Gravity isn't just a housing app. It's a platform built on
                trust, experience, and choice. You're taking on outdated,
                agent-controlled system and flipping it into a user-first,
                digital ecosystem.
              </HubotP>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/urbangravity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-yellow-500 transition duration-200 text-lg"
                  aria-label="Instagram"
                >
                  📷
                </a>
                <a
                  href="https://twitter.com/urbangravity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-yellow-500 transition duration-200 text-lg"
                  aria-label="Twitter"
                >
                  𝕏
                </a>
                <a
                  href="https://linkedin.com/company/urbangravity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-yellow-500 transition duration-200 text-lg"
                  aria-label="LinkedIn"
                >
                  💼
                </a>
              </div>
            </div>

            {/* Legal Column */}
            <div>
              <HubotH3 fontWeight="bold" size={16} className="text-black mb-6">
                Legal
              </HubotH3>
              <ul className="space-y-3">
                {[
                  { href: "/privacy", label: "Privacy Policy" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/refund", label: "Refund Policy" },
                  { href: "/terms", label: "Terms & Conditions" },
                  { href: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-700 hover:text-yellow-500 transition duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <HubotH3 fontWeight="bold" size={16} className="text-black mb-6">
                Company
              </HubotH3>
              <ul className="space-y-3">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/chat", label: "Live Chat" },
                  { href: "/careers", label: "Careers" },
                  { href: "/faqs", label: "FAQs" },
                  { href: "/download", label: "Download App" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-700 hover:text-yellow-500 transition duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empty column for spacing */}
            <div />
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <HubotP fontWeight="regular" size={12} className="text-gray-500">
              © 2025 Urban Gravity. All rights reserved.
            </HubotP>
          </div>
        </div>
      </footer>
    </main>
  );
}
