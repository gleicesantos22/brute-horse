import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, ReactNode } from "react";

type AccordionItemProps = {
  title: string;
  content: ReactNode;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border rounded-lg mb-2 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full text-left px-4 py-3 bg-white font-bold flex items-center justify-between"
      >
        {title}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && <div className="p-4 border-t bg-gray-50">{content}</div>}
    </div>
  );
};

type AccordionProps = {
  items: {
    title: string;
    description: ReactNode;
  }[];
  allowMultipleOpen?: boolean;
};

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultipleOpen = false,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultipleOpen) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.description}
          isOpen={openIndexes.includes(index)}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};
