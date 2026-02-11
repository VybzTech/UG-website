import React from "react";
import { HubotH1, HubotP } from "../ui/HubotText";
import Button from "../ui/Button";

interface SectionHeroProps {
  no: number;
  img: string;
  title: string;
  content: string[];
  CTA: string;
  Btn: () => void;
}

const SectionHero: React.FC<SectionHeroProps> = ({
  no,
  img,
  title,
  content,
  CTA,
  Btn,
}) => {
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 lg:px-24">
      {/* Section Number */}
      <div className="mb-6">
        <span className="text-6xl md:text-8xl font-black text-gray-100 font-hubot">
          {String(no).padStart(2, "0")}
        </span>
      </div>

      {/* Title */}
      <HubotH1
        fontWeight="extrabold"
        size={56}
        className="text-black mb-8 leading-tight tracking-tight"
      >
        {title}
      </HubotH1>

      {/* Content lines */}
      <div className="space-y-4 mb-10">
        {content.map((line, index) => (
          <HubotP
            key={index}
            fontWeight="regular"
            size={18}
            className="text-gray-600 max-w-xl leading-relaxed"
          >
            {line}
          </HubotP>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-4">
        <Button
          variant="primary"
          size="xl"
          onClick={Btn}
          iconName="ArrowRight"
          iconPosition="right"
          className="px-10"
        >
          {CTA}
        </Button>
      </div>
    </div>
  );
};

export default SectionHero;
