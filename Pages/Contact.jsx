import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, Phone, MapPin, Clock, Send, 
  MessageCircle, Headphones, Building 
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'ایمیل',
    value: 'support@ariacloud.ir',
    description: 'پاسخگویی در کمتر از ۲۴ ساعت',
  },
  {
    icon: Phone,
    title: 'تلفن',
    value: '۰۲۱-۱۲۳۴-۵۶۷۸',
    description: 'شنبه تا پنجشنبه، ۹ صبح تا ۶ عصر',
  },
  {
    icon: MapPin,
    title: 'آدرس',
    value: 'تهران، خیابان ولیعصر، برج آریا',
    description: 'دفتر مرکزی',
  },
  {
    icon: Clock,
    title: 'ساعت کاری',
    value: '۹:۰۰ - ۱۸:۰۰',
    description: 'پشتیبانی آنلاین ۲۴/۷',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

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
              تماس با ما
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">در کنار شما </span>
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                هستیم
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400"
            >
              سوال، پیشنهاد یا نیاز به کمک دارید؟ تیم پشتیبانی ما آماده پاسخگویی است.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-800 hover:border-orange-500/30 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-orange-400 font-medium mb-1">{info.value}</p>
                <p className="text-gray-500 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">ارسال پیام</h2>
                  <p className="text-gray-400 text-sm">فرم زیر را تکمیل کنید</p>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">پیام شما ارسال شد!</h3>
                  <p className="text-gray-400">به زودی با شما تماس خواهیم گرفت.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">نام و نام خانوادگی</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-gray-900/50 border-gray-700 focus:border-orange-500 text-white"
                        placeholder="نام شما"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">ایمیل</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-gray-900/50 border-gray-700 focus:border-orange-500 text-white"
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">شماره تماس</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-gray-900/50 border-gray-700 focus:border-orange-500 text-white"
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-300">موضوع</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-gray-900/50 border-gray-700 focus:border-orange-500 text-white"
                        placeholder="موضوع پیام"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">پیام</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-gray-900/50 border-gray-700 focus:border-orange-500 text-white resize-none"
                      placeholder="پیام خود را بنویسید..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-6 text-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        در حال ارسال...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        ارسال پیام
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Support Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Quick Support */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-orange-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                    <Headphones className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">پشتیبانی سریع</h3>
                    <p className="text-gray-400">پاسخگویی در کمتر از ۱ ساعت</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  تیم پشتیبانی فنی ما ۲۴ ساعته آماده کمک به شماست. 
                  برای مشکلات فنی فوری، از طریق تیکت یا چت آنلاین اقدام کنید.
                </p>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10">
                  ایجاد تیکت پشتیبانی
                </Button>
              </div>

              {/* Business Contact */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gray-800 flex items-center justify-center">
                    <Building className="w-7 h-7 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">همکاری تجاری</h3>
                    <p className="text-gray-400">برای شرکت‌ها و سازمان‌ها</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  برای پروژه‌های بزرگ و سفارشی، مشاوره رایگان و قیمت‌گذاری اختصاصی دریافت کنید.
                </p>
                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                  <p className="text-gray-300 text-sm mb-1">ایمیل فروش:</p>
                  <p className="text-orange-400 font-medium">sales@ariacloud.ir</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-2xl bg-gray-800/30 border border-gray-800">
                <p className="text-gray-400 mb-4">ما را در شبکه‌های اجتماعی دنبال کنید:</p>
                <div className="flex gap-4">
                  {['اینستاگرام', 'تلگرام', 'توییتر', 'لینکدین'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 rounded-lg bg-gray-800 text-gray-400 hover:text-orange-400 hover:bg-gray-700 transition-all text-sm"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
