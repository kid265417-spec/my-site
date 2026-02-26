"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, Package, PenTool, Music, Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "首页", icon: null },
  { href: "/photography", label: "摄影", icon: Camera },
  { href: "/resources", label: "资源", icon: Package },
  { href: "/blog", label: "博客", icon: PenTool },
  { href: "/music", label: "音乐", icon: Music },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="glass-strong px-4 py-1.5 rounded-xl border border-white/35 shadow-[0_10px_40px_-10px_rgba(168,85,247,0.5)]">
              <span className="text-white font-semibold tracking-wide">Kidd</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-white/20 backdrop-blur-xl border border-white/30 text-white shadow-[0_4px_16px_0_rgba(31,38,135,0.2)]"
                      : "text-white/75 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-white/75 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-white/20 border border-white/25 text-white"
                        : "text-white/75 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.icon && <item.icon className="w-5 h-5" />}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
