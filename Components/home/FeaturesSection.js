import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Headphones, Server, Cpu, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'سرعت فوق‌العاده',
    description: 'سرورهای NVMe با پهنای باند نامحدود و لیتنسی بسیار پایین برای بهترین عملکرد.',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: Shield,
    title: 'امنیت کامل',
    description: 'محافظت DDoS پیشرفته، فایروال هوشمند و پشتیبان‌گیری خودکار روزانه.',
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Globe,
    title: 'دیتاسنترهای متعدد',
    description: 'دیتاسنترهای اروپا، آسیا و آمریکا با بهترین مسیریابی برای ایران.',
    gradient: 'from-orange-400 to-orange-600',
  },
  {
    icon: Headphones,
    title: 'پشتیبانی ۲۴/۷',
    description: 'تیم پشتیبانی متخصص و پاسخگو در تمام ساعات شبانه‌روز.',
    gradient: 'from-amber-400 to-amber-600',
  },
  {
    icon: Server,
    title: 'مقیاس‌پذیری آسان',
    description: 'ارتقاء منابع بدون توقف سرویس، در هر زمانی که نیاز داشتید.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Cpu,
    title: 'سخت‌افزار نسل جدید',
    description: 'پردازنده‌های AMD EPYC و Intel Xeon نسل آخر با حداکثر کارایی.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Clock,
    title: 'راه‌اندازی فوری',
    description: 'سرور شما در کمتر از ۵ دقیقه آماده و قابل استفاده خواهد بود.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Award,
    title: 'ضمانت بازگشت وجه',
    description: 'اگر رضایت نداشتید، هزینه شما تا ۷ روز کامل بازگردانده می‌شود.',
    gradient: 'from-orange-600 to-amber-600',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm mb-6"
          >
            چرا آریاکلود؟
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="text-white">مزایای </span>
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              انتخاب ما
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            با آریاکلود، از بهترین زیرساخت‌های ابری با پشتیبانی حرفه‌ای بهره‌مند شوید.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-b from-gray-800/40 to-gray-900/40 border border-gray-800 hover:border-orange-500/30 transition-all duration-500"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-5`}>
                  <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-orange-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
