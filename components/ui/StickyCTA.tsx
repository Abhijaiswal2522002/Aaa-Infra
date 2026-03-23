"use client";

import { MessageSquare, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function StickyCTA() {
  const whatsappNumber = "919792443651";
  const phoneNumber = "+919170541976";

  const buttons = [
    {
      icon: <MessageSquare size={24} />,
      label: "WhatsApp",
      href: `https://wa.me/${whatsappNumber}`,
      color: "bg-green-600",
      delay: 0.1,
    },
    {
      icon: <Phone size={24} />,
      label: "Call Now",
      href: `tel:${phoneNumber}`,
      color: "bg-accent-blue",
      delay: 0.2,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-4">
      {buttons.map((btn, i) => (
        <motion.a
          key={i}
          href={btn.href}
          target={btn.label === "WhatsApp" ? "_blank" : undefined}
          rel={btn.label === "WhatsApp" ? "noopener noreferrer" : undefined}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: btn.delay, type: "spring", stiffness: 260, damping: 20 }}
          className={`${btn.color} text-off-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-2 group`}
          aria-label={btn.label}
        >
          {btn.icon}
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold label-stat whitespace-nowrap">
            {btn.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
