import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Cloud, Mail, Phone, MapPin, Instagram, Twitter, Send, MessageCircle } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'سرور مجازی VPS', href: 'Services' },
    { name: 'سرور بازی', href: 'Services' },
    { name: 'هاست وب', href: 'Services' },
    { name: 'راهکارهای ابری', href: 'Services' },
  ],
  company: [
    { name: 'درباره ما', href: 'About' },
    { name: 'تماس با ما', href: 'Contact' },
    { name: 'بلاگ', href: 'Blog' },
    { name: 'سوالات متداول', href: 'FAQ' },
  ],
  support: [
    { name: 'داشبورد کاربری', href: 'Dashboard' },
    { name: 'وضعیت سرورها', href: 'ServerStatus' },
    { name: 'مستندات', href: 'Blog' },
    { name: 'تیکت پشتیبانی', href: 'Contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-orange-500/10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 to-transparent pointer-events-none" />
      
      <div className="relative container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Cloud className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                AriaCloud
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              قدرت بی‌وقفه، گیمینگ بدون مرز. ارائه‌دهنده خدمات ابری حرفه‌ای با کیفیت بین‌المللی و پشتیبانی ۲۴ ساعته.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500/20 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500/20 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500/20 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500/20 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">خدمات</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={createPageUrl(link.href)}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">شرکت</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={createPageUrl(link.href)}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">تماس با ما</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>support@ariacloud.ir</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-orange-400" />
                <span dir="ltr">021-1234-5678</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span>تهران، خیابان ولیعصر، برج آریا</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © ۱۴۰۳ آریاکلود. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
              قوانین و مقررات
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
              حریم خصوصی
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
