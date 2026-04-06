import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Briefcase, Check, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const roles = [
  {
    id: 'TENANT',
    label: 'Tenant',
    emoji: '🏠',
    icon: Home,
    desc: 'Looking for a place to rent',
    color: '#FFCA08',
    benefits: [
      'Swipe through curated properties',
      'Get matched with verified landlords',
      'Negotiate rent directly — no agent fees',
      'Track all your matches in one place',
    ],
  },
  {
    id: 'LANDLORD',
    label: 'Landlord',
    emoji: '🏢',
    icon: Building2,
    desc: 'Own property and want to list it',
    color: '#FFCA08',
    benefits: [
      'List unlimited properties for free',
      'Find verified, vetted tenants',
      'Manage your entire portfolio easily',
      'Get instant match notifications',
    ],
  },
  {
    id: 'AGENT',
    label: 'Agent',
    emoji: '💼',
    icon: Briefcase,
    desc: 'Managing properties for clients',
    color: '#FFCA08',
    benefits: [
      'Manage multiple landlord accounts',
      'Access our full tenant pool',
      'Earn from successful placements',
      'Premium analytics dashboard',
    ],
  },
];

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function ChooseRole() {
  const [selected, setSelected] = useState('TENANT');
  const navigate = useNavigate();

  const selectedRole = roles.find((r) => r.id === selected)!;

  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="w-full"
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="mb-7">
        <div className="inline-flex items-center gap-1.5 bg-[#FFCA08]/12 border border-[#FFCA08]/25 rounded-full px-3 py-1 mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFCA08]" />
          <span className="font-hubot text-xs font-semibold text-[#1A1A1A]">
            Step 3 of 5
          </span>
        </div>
        <h1 className="font-hubot font-bold text-3xl text-[#1A1A1A] mb-2 leading-tight">
          Choose your role
        </h1>
        <p className="font-hubot text-sm text-[#666]">
          How will you use Urban Gravity? You can change this later.
        </p>
      </motion.div>

      {/* Role cards */}
      <motion.div variants={fadeUp} className="space-y-3 mb-6">
        {roles.map((role) => {
          const isSelected = selected === role.id;
          return (
            <motion.button
              key={role.id}
              layout
              onClick={() => setSelected(role.id)}
              className={`w-full text-left rounded-2xl border-2 overflow-hidden transition-all duration-250 cursor-pointer ${
                isSelected
                  ? 'border-[#FFCA08] bg-[#FFFBEB] shadow-md shadow-[#FFCA08]/15'
                  : 'border-[#EFEFEF] bg-white hover:border-[#FFCA08]/40 hover:bg-[#FAFAFA]'
              }`}
            >
              {/* Card header */}
              <div className="flex items-center gap-3.5 p-4">
                {/* Icon bg */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-250 ${
                    isSelected ? 'bg-[#FFCA08]' : 'bg-[#F5F5F5]'
                  }`}
                >
                  <role.icon
                    size={22}
                    className={isSelected ? 'text-[#1A1A1A]' : 'text-[#999]'}
                    strokeWidth={1.8}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-hubot font-bold text-base text-[#1A1A1A]">
                      {role.label}
                    </h3>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 bg-[#FFCA08] rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <Check size={11} className="text-[#1A1A1A]" strokeWidth={3} />
                      </motion.div>
                    )}
                  </div>
                  <p className="font-hubot text-xs text-[#999] mt-0.5">{role.desc}</p>
                </div>
              </div>

              {/* Benefits — animated expand */}
              <AnimatePresence initial={false}>
                {isSelected && (
                  <motion.div
                    key="benefits"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-0 border-t border-[#FFCA08]/20">
                      <ul className="space-y-2 pt-3">
                        {role.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex items-center gap-2.5 text-xs text-[#444] font-hubot"
                          >
                            <div className="w-4 h-4 rounded-full bg-[#FFCA08]/25 flex items-center justify-center flex-shrink-0">
                              <Check size={9} className="text-[#1A1A1A]" strokeWidth={3} />
                            </div>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </motion.div>

      {/* CTA */}
      <motion.div variants={fadeUp}>
        <Button
          onClick={() => navigate('/basic-info')}
          fullWidth
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
        >
          Continue as {selectedRole.label}
        </Button>
      </motion.div>
    </motion.div>
  );
}
