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
  DollarSign,
  Mail,
} from "lucide-react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ComboText from "@/components/ui/ComboText";
import { COLORS } from "@/constants/colors";
import Footer from "@/components/common/Footer";
import FeatureScrollSection, {
  FEATURES,
} from "@/components/landing/FeatureScrollSection";
import AdvancedFeatureScrollSection from "@/components/landing/AdvancedFeatureScrollSection";
import ButtonExamples from "@/components/ui/ButtonExamples";
import { Input } from "@/components/ui";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import InputExamples from "@/components/ui/InputExamples";
import ScrollSection from "./ScrollSection";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-yellow-200">
      <Navbar />
      <Hero /> 
      <ScrollSection /> 
      
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;
