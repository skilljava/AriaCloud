import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Server, Gamepad2, Globe, Cloud, ArrowLeft } from 'lucide-react';

const services = [
  {
    icon: Server,
    title: 'سرور مجازی VPS',
    description: 'سرورهای مجازی قدرتمند با منابع اختصاصی، مناسب برای وب‌سایت‌ها و اپلیکیشن‌ها.',
    features: ['منابع اختصاصی', 'SSD NVMe', 'پهنای باند نامحدود'],
    price: 'از ۹۹,۰۰۰ تومان',
    gradient: 'from-orange-500 to-amber-500',
    popular: false,
  },
  {
    icon: Gamepad2,
    title: 'سرور بازی',
    description: 'سرورهای مخصوص بازی با پینگ پایین، پشتیبانی از انواع بازی‌های آنلاین.',
    features: ['پینگ پایین', 'Anti-DDoS', 'Panel اختصاصی'],
    price: 'از ۱۴۹,۰۰۰ تومان',
    gradient: 'from-amber-500 to-yellow-500',
    popular: true,
  },
  {
    icon: Globe,
    title: 'هاست وب',
    description: 'هاست‌های پرسرعت با cPanel، مناسب برای وب‌سایت‌های شخصی و تجاری.',
    features: ['cPanel رایگان', 'SSL رایگان', 'ایمیل نامحدود'],
    price: 'از ۴۹,۰۰۰ تومان',
    gradient: 'from-orange-400 to-orange-600',
    popular: false,
  },
  {
    icon: Cloud,
    title: 'راهکارهای ابری',
    description: 'راهکارهای سازمانی و ابری پیشرفته برای کسب‌وکارهای بزرگ.',
    features: ['مقیاس‌پذیر', 'SLA ۹۹.۹٪', 'پشتیبانی اختصاصی'],
    price: 'تماس بگیرید',
    gradient: 'from-amber-400 to-amber-600',
    popular: false,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm mb-6"
          >
            خدمات ما
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="text-white">راهکارهای </span>
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              ابری حرفه‌ای
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            هر آنچه برای میزبانی وب، بازی و اپلیکیشن‌های خود نیاز دارید.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 right-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-xs font-semibold text-white">
                  پرفروش
                </div>
              )}
              
              <div className={`relative h-full p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border ${service.popular ? 'border-orange-500/50' : 'border-gray-800'} hover:border-orange-500/50 transition-all duration-500`}>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}>
                    <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-orange-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-4">
                    {service.price}
                  </div>

                  {/* CTA */}
                  <Link to={createPageUrl('Pricing')}>
                    <Button className="w-full bg-gray-800 hover:bg-orange-500/20 text-gray-300 hover:text-orange-400 border border-gray-700 hover:border-orange-500/50 transition-all">
                      مشاهده پلن‌ها
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
