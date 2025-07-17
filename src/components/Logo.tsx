'use client';

import { FC } from "react";

const Logo: FC = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center gap-2 group cursor-pointer"
      aria-label="Scroll to top"
    >
      {/* Logo Text */}
      <div className="hidden sm:block">
        <p className="text-xl font-extrabold tracking-widest drop-shadow-sm transition-colors duration-300">
          <span className="text-indigo-500 dark:text-indigo-400">&lt;</span>
          <span className="text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-indigo-400 dark:via-purple-400 dark:to-pink-500 animate-pulse">
            KM
          </span>
          <span className="text-pink-500 dark:text-pink-400">/&gt;</span>
        </p>
      </div>
    </button>
  );
};

export default Logo;
