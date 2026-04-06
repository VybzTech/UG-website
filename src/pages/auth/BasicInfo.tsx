import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, ArrowRight, User } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const genders = ['Male', 'Female', 'Other', 'Prefer not to say'];

const stagger = {
  animate: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function BasicInfo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [avatar, setAvatar] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result as string);
    reader.readAsDataURL(file);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!dob) newErrors.dob = 'Date of birth is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clear = (field: string) =>
    setErrors((prev) => ({ ...prev, [field]: '' }));

  const handleContinue = () => {
    if (!validate()) return;
    navigate('/preview');
  };

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
            Step 4 of 5
          </span>
        </div>
        <h1 className="font-hubot font-bold text-3xl text-[#1A1A1A] mb-2 leading-tight">
          Complete your profile
        </h1>
        <p className="font-hubot text-sm text-[#666]">
          A complete profile gets 3× more matches.
        </p>
      </motion.div>

      {/* Avatar upload */}
      <motion.div variants={fadeUp} className="flex justify-center mb-8">
        <div className="relative">
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className={`
              w-24 h-24 rounded-full flex items-center justify-center overflow-hidden
              border-2 border-dashed transition-all duration-200 cursor-pointer
              ${avatar
                ? 'border-[#FFCA08]'
                : 'border-[#E0E0E0] bg-[#FAFAFA] hover:border-[#FFCA08] hover:bg-[#FFFBEB]'
              }
            `}
          >
            {avatar ? (
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="flex flex-col items-center gap-1">
                <User size={28} className="text-[#CCC]" strokeWidth={1.5} />
              </div>
            )}
          </button>

          {/* Camera badge */}
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#FFCA08] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer"
          >
            <Camera size={14} className="text-[#1A1A1A]" />
          </button>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />
        </div>
      </motion.div>

      {/* Form fields */}
      <motion.div variants={fadeUp} className="space-y-4 mb-5">
        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="First name"
            placeholder="John"
            value={firstName}
            onChange={(e) => { setFirstName(e.target.value); clear('firstName'); }}
            error={errors.firstName}
            iconName="User"
            required
          />
          <Input
            label="Last name"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => { setLastName(e.target.value); clear('lastName'); }}
            error={errors.lastName}
            required
          />
        </div>

        <Input
          label="Date of birth"
          type="date"
          value={dob}
          onChange={(e) => { setDob(e.target.value); clear('dob'); }}
          error={errors.dob}
          iconName="Calendar"
          required
        />

        {/* Gender pills */}
        <div>
          <label className="block font-hubot text-sm font-semibold text-[#1A1A1A] mb-3">
            Gender
          </label>
          <div className="flex flex-wrap gap-2">
            {genders.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGender(g)}
                className={`
                  px-4 py-2 rounded-full font-hubot text-sm font-medium
                  border transition-all duration-200 cursor-pointer
                  ${gender === g
                    ? 'bg-[#FFCA08] text-[#1A1A1A] border-[#FFCA08] shadow-sm'
                    : 'bg-white text-[#666] border-[#E0E0E0] hover:border-[#FFCA08]/50 hover:bg-[#FFFBEB]'
                  }
                `}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div variants={fadeUp}>
        <Button
          onClick={handleContinue}
          fullWidth
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
        >
          Continue
        </Button>
      </motion.div>
    </motion.div>
  );
}
