"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

export function PageHeader({ title, subtitle, icon }: PageHeaderProps) {
  return (
    <div className="text-center mb-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center space-x-3 mb-4"
      >
        {icon && (
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm">
            {icon}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
      </motion.div>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-white/60 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
