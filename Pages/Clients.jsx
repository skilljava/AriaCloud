import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ArrowLeft, Users, Building, Gamepad2, Globe } from 'lucide-react';

const testimonials = [
  {
    name: 'محمد رضایی',
    role: 'مدیر فنی استارتاپ',
    company: 'تک‌نوآور',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: 'آریاکلود بهترین انتخاب برای سرورهای VPS بود. سرعت فوق‌العاده و پشتیبانی عالی دارند. از وقتی سرورهایمان را به آریاکلود منتقل کردیم، مشکلات قبلی کاملاً برطرف شد.',
    rating: 5,
    service: 'سرور مجازی VPS',
  },
  {
    name: 'سارا احمدی',
    role: 'مدیر سرور بازی',
    company: 'گیمرز ایران',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    content: 'سرور CS2 ما با پینگ بسیار پایین کار می‌کند و بازیکنان راضی هستند. پنل مدیریت هم خیلی کاربردی است. ممنون از تیم پشتیبانی که همیشه پاسخگو هستند.',
    rating: 5,
    service: 'سرور بازی',
  },
  {
    name: 'علی کریمی',
    role: 'توسعه‌دهنده وب',
    company: 'فریلنسر',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    content: 'چندین پروژه وردپرسی روی هاست آریاکلود دارم و از سرعت لود و آپتایم راضی هستم. SSL رایگان و LiteSpeed واقعاً فرق می‌کند.',
    rating: 5,
    service: 'هاست وب',
  },
  {
    name: 'زهرا محمدی',
    role: 'مدیر IT',
    company: 'شرکت راهکار نوین',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    content: 'برای سرورهای شرکت از راهکارهای سازمانی آریاکلود استفاده می‌کنیم. SLA تضمینی و مدیر اختصاصی بسیار کمک‌کننده بوده.',
    rating: 5,
    service: 'راهکار سازمانی',
  },
  {
    name: 'امیر حسینی',
    role: 'یوتیوبر',
    company: 'گیمینگ ایران',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    content: 'سرور Minecraft ما با ۱۰۰+ پلیر بدون مشکل کار می‌کند. Anti-DDoS عالی و backup خودکار خیال‌مان را راحت کرده.',
    rating: 5,
    service: 'سرور بازی',
  },
  {
    name: 'نگار رحیمی',
    role: 'مالک فروشگاه آنلاین',
    company: 'دیجی‌استایل',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    content: 'سایت فروشگاهی ما روی هاست تجاری آریاکلود خیلی سریع لود می‌شود. این موضوع روی فروش و تجربه کاربری تاثیر مستقیم داشته.',
    rating: 5,
    service: 'هاست وب',
  },
];

const stats = [
  { value: '+۱۰۰۰', label: 'مشتری فعال', icon: Users },
  { value: '+۵۰۰', label: 'پروژه موفق', icon: Building },
  { value: '+۲۰۰', label: 'سرور بازی', icon: Gamepad2 },
  { value: '+۱۰۰۰', label: 'وبسایت میزبانی', icon: Globe },
];

export default function Clients() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm mb-6"
            >
              مشتریان ما
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">نظرات </span>
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                مشتریان
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400"
            >
              ببینید مشتریان ما درباره خدمات آریاکلود چه می‌گویند
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-800 text-center"
              >
                <stat.icon className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-800 hover:border-orange-500/30 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>

                    <div className="relative mb-6">
                      <Quote className="absolute -top-2 -right-2 w-8 h-8 text-orange-500/20" />
                      <p className="text-gray-300 leading-relaxed relative z-10">
                        {testimonial.content}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-white">{testimonial.name}</p>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <span className="text-xs text-orange-400 bg-orange-500/10 px-2 py-1 rounded-full">
                        {testimonial.service}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">برخی از مشتریان ما</h2>
            <p className="text-gray-400">شرکت‌ها و برندهایی که به آریاکلود اعتماد کرده‌اند</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {['تک‌نوآور', 'گیمرز ایران', 'راهکار نوین', 'دیجی‌استایل', 'استارت‌آپ ایران', 'وب‌نویس'].map((name, i) => (
              <div
                key={i}
                className="text-2xl font-bold text-gray-500 hover:text-orange-400 transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">به خانواده آریاکلود بپیوندید</h2>
            <p className="text-gray-400 mb-8">
              همین حالا سرویس خود را سفارش دهید و از مزایای خدمات ابری حرفه‌ای بهره‌مند شوید.
            </p>
            <Link to={createPageUrl('Pricing')}>
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 px-8 py-6 text-lg">
                مشاهده تعرفه‌ها
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
