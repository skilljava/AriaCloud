import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Server, 
  Gamepad2, 
  Globe, 
  Cloud,
  ArrowLeft,
  Check,
  Cpu,
  HardDrive,
  Wifi,
  Shield,
  Zap,
  Clock
} from 'lucide-react';

const services = {
  vps: {
    title: 'سرور مجازی VPS',
    description: 'سرورهای مجازی پرقدرت با منابع اختصاصی و کنترل کامل بر سیستم‌عامل',
    icon: Server,
    features: [
      'پردازنده‌های AMD EPYC / Intel Xeon',
      'دیسک‌های NVMe SSD فوق سریع',
      'شبکه ۱۰ گیگابیت',
      'ترافیک نامحدود',
      'پنل مدیریت اختصاصی',
      'نصب خودکار سیستم‌عامل',
      'بکاپ روزانه رایگان',
      'محافظت DDoS'
    ],
    plans: [
      { name: 'استارتر', cpu: '۲ هسته', ram: '۲ GB', disk: '۲۰ GB NVMe', bw: 'نامحدود', price: '۱۹۹,۰۰۰' },
      { name: 'پرو', cpu: '۴ هسته', ram: '۴ GB', disk: '۴۰ GB NVMe', bw: 'نامحدود', price: '۳۴۹,۰۰۰', popular: true },
      { name: 'بیزینس', cpu: '۶ هسته', ram: '۸ GB', disk: '۸۰ GB NVMe', bw: 'نامحدود', price: '۵۹۹,۰۰۰' },
      { name: 'اینترپرایز', cpu: '۸ هسته', ram: '۱۶ GB', disk: '۱۶۰ GB NVMe', bw: 'نامحدود', price: '۹۹۹,۰۰۰' },
    ]
  },
  game: {
    title: 'سرور بازی',
    description: 'سرورهای اختصاصی بازی با پینگ فوق‌العاده پایین و محافظت DDoS',
    icon: Gamepad2,
    features: [
      'پینگ پایین زیر ۱۰ میلی‌ثانیه',
      'محافظت DDoS پیشرفته',
      'پنل مدیریت بازی',
      'نصب خودکار مود و پلاگین',
      'بکاپ خودکار',
      'پشتیبانی ۲۴/۷',
      'آپگرید آنی منابع',
      'مانیتورینگ Real-time'
    ],
    plans: [
      { name: 'Minecraft', cpu: '۴ هسته', ram: '۴ GB', disk: '۳۰ GB NVMe', bw: 'نامحدود', price: '۲۴۹,۰۰۰' },
      { name: 'FiveM', cpu: '۶ هسته', ram: '۸ GB', disk: '۶۰ GB NVMe', bw: 'نامحدود', price: '۴۹۹,۰۰۰', popular: true },
      { name: 'CS2', cpu: '۴ هسته', ram: '۴ GB', disk: '۴۰ GB NVMe', bw: 'نامحدود', price: '۲۹۹,۰۰۰' },
      { name: 'Rust', cpu: '۸ هسته', ram: '۱۶ GB', disk: '۱۰۰ GB NVMe', bw: 'نامحدود', price: '۷۹۹,۰۰۰' },
    ]
  },
  hosting: {
    title: 'هاست وب',
    description: 'میزبانی وب حرفه‌ای با کنترل پنل cPanel و SSL رایگان',
    icon: Globe,
    features: [
      'کنترل پنل cPanel/Plesk',
      'گواهی SSL رایگان',
      'ایمیل نامحدود',
      'دیتابیس نامحدود',
      'نصب یک کلیکی CMS',
      'بکاپ هفتگی',
      'PHP ۸.x / Node.js',
      'وردپرس بهینه‌سازی شده'
    ],
    plans: [
      { name: 'اکونومی', cpu: '۱ هسته', ram: '۵۱۲ MB', disk: '۵ GB SSD', bw: '۱۰۰ GB', price: '۴۹,۰۰۰' },
      { name: 'استاندارد', cpu: '۲ هسته', ram: '۱ GB', disk: '۲۰ GB SSD', bw: 'نامحدود', price: '۹۹,۰۰۰', popular: true },
      { name: 'پرمیوم', cpu: '۴ هسته', ram: '۲ GB', disk: '۵۰ GB SSD', bw: 'نامحدود', price: '۱۹۹,۰۰۰' },
      { name: 'آلتیمیت', cpu: '۶ هسته', ram: '۴ GB', disk: '۱۰۰ GB SSD', bw: 'نامحدود', price: '۳۴۹,۰۰۰' },
    ]
  },
  cloud: {
    title: 'راهکار ابری',
    description: 'زیرساخت ابری مقیاس‌پذیر برای استارتاپ‌ها و شرکت‌های بزرگ',
    icon: Cloud,
    features: [
      'Auto Scaling خودکار',
      'Load Balancing',
      'Kubernetes Ready',
      'Object Storage',
      'API پیشرفته',
      'مانیتورینگ جامع',
      'Terraform Support',
      'SLA 99.99%'
    ],
    plans: [
      { name: 'استارتاپ', cpu: '۴ هسته', ram: '۸ GB', disk: '۱۰۰ GB NVMe', bw: 'نامحدود', price: '۷۹۹,۰۰۰' },
      { name: 'گروث', cpu: '۸ هسته', ram: '۱۶ GB', disk: '۲۰۰ GB NVMe', bw: 'نامحدود', price: '۱,۴۹۹,۰۰۰', popular: true },
      { name: 'اسکیل', cpu: '۱۶ هسته', ram: '۳۲ GB', disk: '۵۰۰ GB NVMe', bw: 'نامحدود', price: '۲,۹۹۹,۰۰۰' },
      { name: 'اینترپرایز', cpu: 'سفارشی', ram: 'سفارشی', disk: 'سفارشی', bw: 'نامحدود', price: 'تماس بگیرید' },
    ]
  },
};

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 text-sm font-medium text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20 mb-4"
          >
            خدمات ما
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            راهکارهای ابری
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"> حرفه‌ای</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            از سرور مجازی تا راهکارهای ابری سازمانی، هر آنچه برای موفقیت نیاز دارید
          </motion.p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="vps" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-transparent h-auto mb-12">
            {Object.entries(services).map(([key, service]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="flex items-center gap-2 px-6 py-4 rounded-xl border border-white/10 bg-white/5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:border-transparent data-[state=active]:text-white text-gray-400 hover:bg-white/10 transition-all"
              >
                <service.icon className="w-5 h-5" />
                <span className="font-medium">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(services).map(([key, service]) => (
            <TabsContent key={key} value={key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-12"
              >
                {/* Service Info */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                    </div>
                    <p className="text-gray-400 text-lg mb-8">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                            <Check className="w-3 h-3 text-orange-400" />
                          </div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Cpu, label: 'پردازنده قدرتمند', value: 'AMD EPYC' },
                      { icon: HardDrive, label: 'دیسک SSD', value: 'NVMe Gen4' },
                      { icon: Wifi, label: 'شبکه', value: '۱۰ Gbps' },
                      { icon: Shield, label: 'محافظت', value: 'DDoS Pro' },
                      { icon: Zap, label: 'آپتایم', value: '۹۹.۹۹٪' },
                      { icon: Clock, label: 'پشتیبانی', value: '۲۴/۷' },
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <item.icon className="w-5 h-5 text-orange-400 mb-2" />
                        <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                        <p className="text-sm font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {service.plans.map((plan, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-br from-orange-500/20 to-amber-500/10 border-orange-500/30'
                          : 'bg-white/5 border-white/10 hover:border-orange-500/30'
                      }`}
                    >
                      {plan.popular && (
                        <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0">
                          محبوب‌ترین
                        </Badge>
                      )}
                      
                      <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Cpu className="w-4 h-4 text-orange-400" />
                          <span className="text-gray-400">CPU:</span>
                          <span className="text-white">{plan.cpu}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Server className="w-4 h-4 text-orange-400" />
                          <span className="text-gray-400">RAM:</span>
                          <span className="text-white">{plan.ram}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <HardDrive className="w-4 h-4 text-orange-400" />
                          <span className="text-gray-400">دیسک:</span>
                          <span className="text-white">{plan.disk}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Wifi className="w-4 h-4 text-orange-400" />
                          <span className="text-gray-400">ترافیک:</span>
                          <span className="text-white">{plan.bw}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-3xl font-bold text-white">
                          {plan.price}
                          {plan.price !== 'تماس بگیرید' && (
                            <span className="text-sm text-gray-500 mr-1">تومان/ماه</span>
                          )}
                        </p>
                      </div>

                      <Link to={createPageUrl('Pricing')}>
                        <Button
                          className={`w-full ${
                            plan.popular
                              ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white'
                              : 'bg-white/10 hover:bg-white/20 text-white'
                          }`}
                        >
                          سفارش
                          <ArrowLeft className="w-4 h-4 mr-2" />
                        </Button>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </div>
  );
}
