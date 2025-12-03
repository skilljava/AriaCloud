import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Rocket, 
  Shield, 
  Zap,
  Globe,
  Server
} from 'lucide-react';

const stats = [
  { value: '+۱۰,۰۰۰', label: 'کاربر فعال', icon: Users },
  { value: '+۵۰۰', label: 'سرور فعال', icon: Server },
  { value: '۵+', label: 'سال تجربه', icon: Award },
  { value: '۹۹.۹۹٪', label: 'آپتایم', icon: Zap },
];

const values = [
  {
    icon: Shield,
    title: 'امنیت',
    description: 'امنیت داده‌های شما اولویت اول ماست. از پیشرفته‌ترین تکنولوژی‌های امنیتی استفاده می‌کنیم.',
  },
  {
    icon: Zap,
    title: 'سرعت',
    description: 'با استفاده از سخت‌افزارهای نسل جدید، سریع‌ترین عملکرد را ارائه می‌دهیم.',
  },
  {
    icon: Heart,
    title: 'اعتماد',
    description: 'اعتماد مشتریان ارزشمندترین دارایی ماست و همیشه به تعهداتمان پایبندیم.',
  },
  {
    icon: Rocket,
    title: 'نوآوری',
    description: 'همیشه در حال به‌روزرسانی و ارائه جدیدترین تکنولوژی‌ها هستیم.',
  },
];

const team = [
  {
    name: 'علی محمدی',
    role: 'مدیرعامل',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'سارا احمدی',
    role: 'مدیر فنی',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'محمد رضایی',
    role: 'مدیر زیرساخت',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'زهرا کریمی',
    role: 'مدیر پشتیبانی',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 text-sm font-medium text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20 mb-4"
            >
              درباره ما
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              داستان
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"> آریا کلود</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              آریا کلود با هدف ارائه خدمات ابری با کیفیت جهانی و قیمت مناسب برای کاربران ایرانی تأسیس شده است. 
              ما معتقدیم که هر کسی حق دسترسی به زیرساخت‌های ابری پیشرفته را دارد.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 text-center group hover:border-orange-500/30 transition-all"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-orange-400" />
                <p className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">مأموریت ما</h2>
              <p className="text-gray-400 leading-relaxed">
                مأموریت ما ارائه زیرساخت‌های ابری پایدار، امن و مقرون‌به‌صرفه است که به کسب‌وکارها و افراد کمک کند 
                تا ایده‌های خود را به واقعیت تبدیل کنند. ما می‌خواهیم موانع فنی را از سر راه خلاقیت برداریم.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">چشم‌انداز ما</h2>
              <p className="text-gray-400 leading-relaxed">
                چشم‌انداز ما تبدیل شدن به اولین انتخاب کاربران ایرانی برای خدمات ابری است. 
                می‌خواهیم با ارائه بهترین خدمات و پشتیبانی، استاندارد جدیدی در صنعت هاستینگ ایران ایجاد کنیم.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20 mb-4">
              ارزش‌های ما
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              اصولی که به آن پایبندیم
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-orange-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20 mb-4">
              چرا آریا کلود؟
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              مزیت‌های رقابتی ما
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'دیتاسنتر اروپا',
                description: 'سرورهای ما در دیتاسنترهای Tier 4 اروپا قرار دارند با اتصال مستقیم به ایران.',
              },
              {
                icon: Zap,
                title: 'سخت‌افزار نسل جدید',
                description: 'استفاده از پردازنده‌های AMD EPYC و دیسک‌های NVMe Gen4 برای حداکثر سرعت.',
              },
              {
                icon: Shield,
                title: 'امنیت سازمانی',
                description: 'محافظت DDoS تا ۱ ترابیت، فایروال هوشمند و رمزنگاری End-to-End.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 hover:border-orange-500/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20 mb-4">
              تیم ما
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              انسان‌های پشت آریا کلود
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-500/30 group-hover:border-orange-500 transition-all">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
