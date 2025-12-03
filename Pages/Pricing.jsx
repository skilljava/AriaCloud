import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  Check, 
  X, 
  ArrowLeft,
  Server,
  Gamepad2,
  Globe,
  Cloud,
  Zap,
  Shield,
  HeadphonesIcon
} from 'lucide-react';

const plans = [
  {
    name: 'استارتر',
    description: 'مناسب برای پروژه‌های کوچک و تست',
    monthlyPrice: 199000,
    yearlyPrice: 1990000,
    icon: Server,
    features: [
      { name: '۲ هسته CPU', included: true },
      { name: '۲ گیگابایت رم', included: true },
      { name: '۲۰ گیگابایت NVMe', included: true },
      { name: 'ترافیک نامحدود', included: true },
      { name: '۱ IP اختصاصی', included: true },
      { name: 'محافظت DDoS', included: true },
      { name: 'بکاپ روزانه', included: false },
      { name: 'پشتیبانی VIP', included: false },
    ],
    popular: false,
  },
  {
    name: 'پرو',
    description: 'محبوب‌ترین انتخاب برای حرفه‌ای‌ها',
    monthlyPrice: 399000,
    yearlyPrice: 3990000,
    icon: Zap,
    features: [
      { name: '۴ هسته CPU', included: true },
      { name: '۸ گیگابایت رم', included: true },
      { name: '۸۰ گیگابایت NVMe', included: true },
      { name: 'ترافیک نامحدود', included: true },
      { name: '۲ IP اختصاصی', included: true },
      { name: 'محافظت DDoS Pro', included: true },
      { name: 'بکاپ روزانه', included: true },
      { name: 'پشتیبانی VIP', included: false },
    ],
    popular: true,
  },
  {
    name: 'بیزینس',
    description: 'برای کسب‌وکارهای در حال رشد',
    monthlyPrice: 799000,
    yearlyPrice: 7990000,
    icon: Shield,
    features: [
      { name: '۸ هسته CPU', included: true },
      { name: '۱۶ گیگابایت رم', included: true },
      { name: '۲۰۰ گیگابایت NVMe', included: true },
      { name: 'ترافیک نامحدود', included: true },
      { name: '۴ IP اختصاصی', included: true },
      { name: 'محافظت DDoS Enterprise', included: true },
      { name: 'بکاپ روزانه', included: true },
      { name: 'پشتیبانی VIP', included: true },
    ],
    popular: false,
  },
  {
    name: 'اینترپرایز',
    description: 'راهکار سفارشی برای سازمان‌ها',
    monthlyPrice: null,
    yearlyPrice: null,
    icon: Cloud,
    features: [
      { name: 'CPU سفارشی', included: true },
      { name: 'رم سفارشی', included: true },
      { name: 'فضای سفارشی', included: true },
      { name: 'ترافیک نامحدود', included: true },
      { name: 'IP نامحدود', included: true },
      { name: 'محافظت DDoS سفارشی', included: true },
      { name: 'بکاپ Real-time', included: true },
      { name: 'مدیر اختصاصی', included: true },
    ],
    popular: false,
  },
];

const addons = [
  { name: 'IP اضافه', price: '۵۰,۰۰۰', unit: '/ماه' },
  { name: 'بکاپ روزانه', price: '۹۹,۰۰۰', unit: '/ماه' },
  { name: 'فایروال پیشرفته', price: '۱۴۹,۰۰۰', unit: '/ماه' },
  { name: 'SSL پریمیوم', price: '۲۹۹,۰۰۰', unit: '/سال' },
  { name: 'نظارت ۲۴/۷', price: '۱۹۹,۰۰۰', unit: '/ماه' },
  { name: 'CDN', price: '۲۴۹,۰۰۰', unit: '/ماه' },
];

const formatPrice = (price) => {
  if (!price) return 'تماس بگیرید';
  return price.toLocaleString('fa-IR');
};

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 text-sm font-medium text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20 mb-4"
          >
            تعرفه‌ها
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            پلن مناسب
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"> خود را انتخاب کنید</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
          >
            با ۲۰٪ تخفیف سالانه، هزینه‌های خود را بهینه کنید
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <Label className={`text-sm ${!isYearly ? 'text-white' : 'text-gray-500'}`}>ماهانه</Label>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-orange-500"
            />
            <Label className={`text-sm ${isYearly ? 'text-white' : 'text-gray-500'}`}>
              سالانه
              <Badge className="mr-2 bg-green-500/20 text-green-400 border-green-500/30">۲۰٪ تخفیف</Badge>
            </Label>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-orange-500/20 to-amber-500/10 border-orange-500/30 scale-105 z-10'
                  : 'bg-white/5 border-white/10 hover:border-orange-500/30'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 px-4">
                  محبوب‌ترین
                </Badge>
              )}

              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-orange-500 to-amber-500'
                    : 'bg-white/10'
                }`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-white">
                  {formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                </p>
                {plan.monthlyPrice && (
                  <p className="text-sm text-gray-500 mt-1">
                    تومان / {isYearly ? 'سال' : 'ماه'}
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-gray-500/20 flex items-center justify-center">
                        <X className="w-3 h-3 text-gray-500" />
                      </div>
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {plan.monthlyPrice ? 'انتخاب پلن' : 'تماس با ما'}
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">افزونه‌ها</h2>
          <p className="text-gray-400">سرویس خود را با افزونه‌های اضافی ارتقا دهید</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {addons.map((addon, index) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all text-center"
            >
              <h4 className="text-sm font-medium text-white mb-2">{addon.name}</h4>
              <p className="text-lg font-bold text-orange-400">
                {addon.price}
                <span className="text-xs text-gray-500">{addon.unit}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-orange-500/20"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">ضمانت بازگشت وجه</h3>
              <p className="text-sm text-gray-400">۷ روز ضمانت بازگشت بدون قید و شرط</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                <Zap className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">آپتایم ۹۹.۹۹٪</h3>
              <p className="text-sm text-gray-400">تضمین دسترسی با SLA رسمی</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                <HeadphonesIcon className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">پشتیبانی ۲۴/۷</h3>
              <p className="text-sm text-gray-400">تیم متخصص آماده پاسخگویی</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
