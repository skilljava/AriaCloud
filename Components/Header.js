import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Server, Gamepad2, Globe, Cloud, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'صفحه اصلی', href: 'Home' },
  { 
    name: 'خدمات', 
    href: 'Services',
    submenu: [
      { name: 'سرور مجازی VPS', href: 'Services', icon: Server },
      { name: 'سرور بازی', href: 'Services', icon: Gamepad2 },
      { name: 'هاست وب', href: 'Services', icon: Globe },
      { name: 'راهکارهای ابری', href: 'Services', icon: Cloud },
    ]
  },
  { name: 'تعرفه‌ها', href: 'Pricing' },
  { name: 'درباره ما', href: 'About' },
  { name: 'بلاگ', href: 'Blog' },
  { name: 'تماس با ما', href: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-orange-500/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              AriaCloud
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  to={createPageUrl(item.href)}
                  className="flex items-center gap-1 px-4 py-2 text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                <AnimatePresence>
                  {item.submenu && activeSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-56 bg-black/95 backdrop-blur-xl rounded-2xl border border-orange-500/20 shadow-xl shadow-black/50 overflow-hidden"
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={createPageUrl(subitem.href)}
                          className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 transition-all"
                        >
                          <subitem.icon className="w-5 h-5" />
                          <span className="text-sm">{subitem.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to={createPageUrl('Dashboard')}>
              <Button variant="ghost" className="text-gray-300 hover:text-orange-400 hover:bg-orange-500/10">
                <User className="w-4 h-4 ml-2" />
                ورود
              </Button>
            </Link>
            <Link to={createPageUrl('Pricing')}>
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all">
                شروع کنید
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-orange-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-orange-500/10"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.href)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-gray-300 hover:text-orange-400 transition-colors border-b border-gray-800"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex gap-3 pt-4">
                <Link to={createPageUrl('Dashboard')} className="flex-1">
                  <Button variant="outline" className="w-full border-orange-500/30 text-orange-400 hover:bg-orange-500/10">
                    ورود
                  </Button>
                </Link>
                <Link to={createPageUrl('Pricing')} className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500">
                    شروع کنید
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
