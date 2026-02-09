"use client";

import React from "react";
import { HubotH1, HubotH2, HubotH3, HubotP } from "@/components/ui/HubotText";
import Navbar from "../landing/Navbar";
import PageHero from "@/components/common/PageHero";

/**
 * About Page Component
 * Urban Gravity - About Us
 *
 * Sections:
 * - Yellow Brick Building Hero
 * - Our Vision Section with Image
 * - Our Services (3 Cards)
 * - Footer with Legal & Company Links
 */

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section - Yellow Building Background */}
      <PageHero
        backgroundImage="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1400 400'%3E%3Crect fill='%23FFD43B' width='1400' height='400'/%3E%3Cg opacity='0.1'%3E%3Crect x='0' y='0' width='1400' height='400' fill='%23000'/%3E%3C/g%3E%3C/svg%3E"
        overlayFrom="rgba(255, 212, 59, 0.3)"
        overlayTo="rgba(211, 211, 211, 0.2)"
        heightClass="h-80 md:h-96"
        parallax={true}
      >
        <HubotH1
          fontWeight="extrabold"
          size={72}
          className="text-white drop-shadow-2xl"
        >
          About Us
        </HubotH1>
      </PageHero>

      {/* Our Vision Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image - Left Side */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-50" />
              {/* Placeholder for vision image */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-50">
                <div className="text-center">
                  <div className="text-8xl mb-4">🔑</div>
                  <HubotP
                    fontWeight="medium"
                    size={14}
                    className="text-yellow-700"
                  >
                    Keys to Your Dream Home
                  </HubotP>
                </div>
              </div>
            </div>

            {/* Content - Right Side */}
            <div>
              <HubotH2
                fontWeight="extrabold"
                size={48}
                className="text-black mb-6 leading-tight"
              >
                Our Vision
              </HubotH2>

              <HubotP
                fontWeight="regular"
                size={15}
                className="text-gray-800 leading-relaxed mb-8"
              >
                Urban Gravity isn't just a housing app. It's a platform built on{" "}
                <span className="font-bold">
                  trust, experience, and choice.
                </span>{" "}
                You're taking on outdated, agent-controlled system and flipping
                it into a user-first, digital ecosystem — and that's disruptive
                in very good way. I need to send payment-marketplaces,{" "}
                <span className="font-bold">trust is the product.</span> People
                don't remember agents or prices as much as the feeling they get.
                Your brand promise should make them feel safer, happier, with
                less money, time, and home security at stake.
              </HubotP>

              {/* <Link href="#services"> */}
              <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-bold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Learn More
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section
        id="services"
        className="py-20 md:py-32 px-6 md:px-12 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <HubotH2
            fontWeight="extrabold"
            size={48}
            className="text-center text-black mb-20"
          >
            Our Services
          </HubotH2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Swipe Real Matches */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💝
              </div>

              <HubotH3
                fontWeight="extrabold"
                size={28}
                className="text-black mb-4"
              >
                Swipe Real Matches
              </HubotH3>

              <HubotP
                fontWeight="regular"
                size={14}
                className="text-gray-700 leading-relaxed mb-8 min-h-32"
              >
                Find homes that truly fit your lifestyle, not just your budget.
                Urban Gravity's smart swipe matching system curates property
                listings based on your preferences, location, and needs. We make
                finding your next home personal, fast, and fun.
              </HubotP>

              <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-bold rounded-lg transition-colors duration-200 text-sm">
                Sign Up
              </button>
            </div>

            {/* Card 2: Verified Properties */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                ✅
              </div>

              <HubotH3
                fontWeight="extrabold"
                size={28}
                className="text-black mb-4"
              >
                Verified Properties
              </HubotH3>

              <HubotP
                fontWeight="regular"
                size={14}
                className="text-gray-700 leading-relaxed mb-8 min-h-32"
              >
                Every listing you see is verified. Every vendor is vetted. From
                ownership checks to documentation verification, Urban Gravity
                ensures what you see is what you get — zero fake listings, zero
                scams.
              </HubotP>

              <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-bold rounded-lg transition-colors duration-200 text-sm">
                Sign Up
              </button>
            </div>

            {/* Card 3: Dispute Resolution */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                ⚖️
              </div>

              <HubotH3
                fontWeight="extrabold"
                size={28}
                className="text-black mb-4"
              >
                Dispute Resolution
              </HubotH3>

              <HubotP
                fontWeight="regular"
                size={14}
                className="text-gray-700 leading-relaxed mb-8 min-h-32"
              >
                We stand by you — even after the deal. Urban Gravity provides an
                integrated dispute resolution channel where users and vendors
                can report and resolve issues fairly. Secure documentation and
                transparent communication.
              </HubotP>

              <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-bold rounded-lg transition-colors duration-200 text-sm">
                Sign Up
              </button>
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
                    {/* <Link 
                      href={link.href}
                      className="text-gray-700 hover:text-yellow-500 transition duration-200 text-sm"
                    >
                      {link.label}
                    </Link> */}
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
                    {/* <Link 
                      href={link.href}
                      className="text-gray-700 hover:text-yellow-500 transition duration-200 text-sm"
                    >
                      {link.label}
                    </Link> */}
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
