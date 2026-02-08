import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import PhoneMockup from "@/components/ui/PhoneMockup";
import logo from "@/assets/images/ug-logo.png";
import {
  Check,
  Heart,
  X as XIcon,
  Star,
  MessageCircle,
  Home,
  User,
  ShieldCheck,
} from "lucide-react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ComboText from "@/components/ui/ComboText";
import { COLORS } from "@/constants/colors";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-yellow-200">
      <Navbar />
      <Hero />
      {/* Feature Section 1: Create Profile */}
      <section
        id="services"
        className="py-20 lg:py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32">
            <motion.div
              className="flex-1 space-y-8 relative z-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="hidden md:block text-9xl font-black text-gray-100 absolute -z-10 -mt-10 -ml-10 select-none">
                1
              </div>
              <div className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 text-white font-bold text-xl shadow-lg mb-4">
                1
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Create your <br /> smart profile.
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Say goodbye to repetitive paperwork. Build your Verified Profile
                once and use it to apply to verified listings. Our AI recommends
                homes that match your lifestyle, not just your budget.
              </p>

              <ul className="space-y-4">
                {[
                  "Identity Verification & Safety Badges",
                  "AI-Powered Lifestyle Matching",
                  "Secure Document Storage",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <div className="p-1 rounded-full bg-yellow-100 text-yellow-600">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-xl mt-4"
                onClick={() => navigate("/signup")}
              >
                Get Started
              </Button>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <PhoneMockup className="rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                {/* Simulating Profile Screen */}
                <div className="bg-gray-50 h-full flex flex-col">
                  <div className="h-48 bg-gray-200 relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-24 h-24 bg-white rounded-full p-1 shadow-lg">
                      <div className="w-full h-full bg-gray-300 rounded-full overflow-hidden">
                        <img
                          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                          alt="User"
                        />
                      </div>
                      <div className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-full border-2 border-white">
                        <ShieldCheck size={12} />
                      </div>
                    </div>
                  </div>
                  <div className="pt-16 px-6 text-center space-y-1">
                    <h3 className="font-bold text-xl text-gray-900">
                      Alex Peterson
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Product Designer • 28 y/o
                    </p>
                  </div>
                  <div className="px-6 py-4 mt-4 space-y-3">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                      <div className="p-2 bg-yellow-100 rounded-lg text-yellow-700">
                        <User size={16} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-400">
                          Verifications
                        </div>
                        <div className="text-sm font-semibold">
                          100% Verified
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                      <div className="p-2 bg-yellow-100 rounded-lg text-yellow-700">
                        <Home size={16} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-400">Looking for</div>
                        <div className="text-sm font-semibold">
                          1 Bedroom Apt
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section 2: Swipe & Match */}
      <section className="py-20 lg:py-32 bg-gray-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-32">
            <motion.div
              className="flex-1 space-y-8 md:text-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="hidden md:inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400 text-gray-900 font-bold text-xl shadow-lg md:ml-auto">
                2
              </div>
              <div className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400 text-gray-900 font-bold text-xl shadow-lg mb-4">
                2
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Swipe, Match, <br /> Connect.
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed md:ml-auto max-w-xl">
                Finding a home should be exciting, not exhausting. We've brought
                the ease of dating apps to real estate. Swipe right on homes you
                love, match with landlords, and start chatting instantly.
              </p>

              <div className="flex flex-wrap gap-3 justify-end">
                <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium text-gray-700 border border-gray-100">
                  Direct Chat
                </span>
                <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium text-gray-700 border border-gray-100">
                  No Middleman
                </span>
                <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium text-gray-700 border border-gray-100">
                  Real-time Alerts
                </span>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center md:justify-start"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Decorative cards behind */}
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-[2rem] rotate-[-6deg] scale-90 -z-10 translate-y-4"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gray-300 rounded-[2rem] rotate-[-3deg] scale-95 -z-10 translate-y-2"></div>

                <PhoneMockup>
                  {/* Simulating Swipe Screen */}
                  <div className="flex flex-col h-full bg-gray-50 p-4 pt-12">
                    <div className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden relative group">
                      <div className="absolute inset-0 bg-gray-200">
                        <img
                          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                          className="w-full h-full object-cover"
                          alt="Apartment"
                        />
                      </div>
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                        <h4 className="font-bold text-lg">
                          Sunny Loft in Brooklyn
                        </h4>
                        <p className="text-sm opacity-90">$2,400 / month</p>
                      </div>

                      {/* Like badge simulation */}
                      <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded rotate-12 opacity-0 group-hover:opacity-100 transition-opacity">
                        LIKE
                      </div>
                    </div>
                    <div className="h-20 flex items-center justify-center gap-6 mt-4">
                      <button className="w-12 h-12 rounded-full bg-white shadow-lg text-red-500 flex items-center justify-center hover:scale-110 transition-transform">
                        <XIcon size={24} />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-white shadow-md text-blue-400 flex items-center justify-center hover:scale-110 transition-transform">
                        <Star size={20} fill="currentColor" />
                      </button>
                      <button className="w-12 h-12 rounded-full bg-green-500 shadow-lg shadow-green-200 text-white flex items-center justify-center hover:scale-110 transition-transform">
                        <Heart size={24} fill="currentColor" />
                      </button>
                    </div>
                  </div>
                </PhoneMockup>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section 3: Move In */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32">
            <motion.div
              className="flex-1 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="hidden md:inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 text-white font-bold text-xl shadow-lg">
                3
              </div>
              <div className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 text-white font-bold text-xl shadow-lg mb-4">
                3
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Move in <br /> faster.
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-md">
                Secure your dream home with secure in-app payments and digital
                leases. We handle the details so you can focus on moving in.
              </p>

              <Button
                className="bg-[#FFCA08] text-gray-900 font-bold px-8 py-3 rounded-xl hover:bg-yellow-500 transition-colors shadow-lg shadow-yellow-200/50"
                onClick={() => navigate("/signup")}
              >
                Join Now
              </Button>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center md:justify-end"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <PhoneMockup>
                {/* Simulating Success/Chat Screen */}
                <div className="flex flex-col h-full bg-white pt-12 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-32 bg-yellow-400 -z-10 rounded-b-[3rem]"></div>
                  <div className="flex-1 px-6 pt-8 flex flex-col items-center">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-6">
                      <Check
                        size={40}
                        className="text-green-500"
                        strokeWidth={3}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      You're Approved!
                    </h3>
                    <p className="text-center text-gray-500 text-sm mb-8">
                      Landlord Sarah accepted your application for the Brooklyn
                      Loft.
                    </p>

                    <div className="w-full bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                        <img
                          src="https://i.pravatar.cc/150?u=sarah"
                          alt="Landlord"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-sm">Sarah Jenkins</div>
                        <div className="text-xs text-gray-400">Landlord</div>
                      </div>
                      <button className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        <MessageCircle size={16} />
                      </button>
                    </div>

                    <div className="w-full bg-gray-900 text-white py-3 rounded-xl text-center font-bold text-sm shadow-xl cursor-pointer">
                      Sign Lease Now
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-white border-t border-gray-100 pt-20 pb-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <img
                  src={logo}
                  alt="Urban Gravity"
                  className="h-8 w-auto opacity-90"
                />
                <span className="font-bold text-lg">Urban Gravity</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Urban Gravity isn't just a housing app. It's a platform built on
                trust, experience, and choice. You're taking an outdated,
                agent-controlled system and flipping it into a user-first,
                digital ecosystem.
              </p>
              <div className="flex gap-4">
                {/* Social Icons */}
                {["IG", "X", "LN"].map((social, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black transition-all cursor-pointer font-bold text-xs"
                  >
                    {social}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:ml-auto">
              <div>
                <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
                <ul className="space-y-4 text-gray-500 text-sm">
                  <li className="hover:text-yellow-500 cursor-pointer transition-colors">
                    Privacy Policy
                  </li>
                  <li className="hover:text-yellow-500 cursor-pointer transition-colors">
                    Pricing
                  </li>
                  <li className="hover:text-yellow-500 cursor-pointer transition-colors">
                    Refund Policy
                  </li>
                  <li className="hover:text-yellow-500 cursor-pointer transition-colors">
                    Terms & Conditions
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-6">Company</h4>
                <ul className="space-y-4 text-gray-500 text-sm">
                  <li className="hover:text-yellow-500 cursor-pointer transition-colors">
                    About Us
                  </li>
                  <li className="hover:text-yellow-500 cursor-pointer transition-colors">
                    Live Chat
                  </li>
                  <li className="hover:text-yellow-500 cursor-pointer transition-colors">
                    Careers
                  </li>
                  <li className="hover:text-yellow-500 cursor-pointer transition-colors">
                    FAQs
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-6">Download</h4>
                <div className="space-y-3">
                  <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors w-fit">
                    <span className="text-2xl"></span>
                    <div className="flex flex-col leading-none">
                      <span className="text-[10px] uppercase">
                        Download on the
                      </span>
                      <span className="font-bold text-sm">App Store</span>
                    </div>
                  </div>
                  <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors w-fit">
                    <span className="text-xl">▶</span>
                    <div className="flex flex-col leading-none">
                      <span className="text-[10px] uppercase">Get it on</span>
                      <span className="font-bold text-sm">Google Play</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
              © 2026 Urban Gravity. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-400">
              <span className="cursor-pointer hover:text-gray-600">
                Privacy
              </span>
              <span className="cursor-pointer hover:text-gray-600">Terms</span>
              <span className="cursor-pointer hover:text-gray-600">
                Sitemap
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
 