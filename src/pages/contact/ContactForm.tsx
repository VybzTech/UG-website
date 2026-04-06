import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import PostBg from '@/assets/images/landing/la-poste.jpg';

interface FormData {
  fullName: string;
  subject: string;
  message: string;
}

const INITIAL: FormData = { fullName: '', subject: '', message: '' };

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setFormData(INITIAL);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl border border-gray-100">

      {/* ── LEFT — Form ──────────────────────────────────────────────────── */}
      <div className="bg-white p-8 md:p-10 flex flex-col justify-between gap-8">
        <div>
          <h3 className="font-hubot text-2xl font-extrabold text-black mb-1">
            Send us a message
          </h3>
          <p className="font-hubot text-sm text-gray-500">
            We'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. John Adeyemi"
            iconName="User"
            required
          />

          <Input
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            iconName="Tag"
            required
          />

          <Textarea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what's on your mind…"
            textareaSize="lg"
            autoResize
            required
          />

          <Button
            type="submit"
            variant="secondary"
            size="lg"
            fullWidth
            iconName="Send"
            iconPosition="right"
          >
            Send Request
          </Button>
        </form>

        {/* Success toast */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
              <p className="font-hubot text-sm text-green-800 font-medium">
                Message sent! We'll be in touch soon.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── RIGHT — Image ────────────────────────────────────────────────── */}
      <div className="relative min-h-[320px] md:min-h-0">
        <img
          src={PostBg}
          alt="Urban Gravity — get in touch"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient scrim so the image transitions into the form side */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent pointer-events-none" />

        {/* Floating label */}
        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
          <p className="font-hubot text-xs text-gray-500">Response time</p>
          <p className="font-hubot text-sm font-bold text-gray-900">Under 24 hours</p>
        </div>
      </div>

    </div>
  );
};

export default ContactForm;
