import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown, HelpCircle, MessageCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const faqs = [
  {
    category: 'سفارش و پرداخت',
    questions: [
      {
        q: 'چگونه سفارش ثبت کنم؟',
        a: 'برای ثبت سفارش، ابتدا وارد حساب کاربری خود شوید. سپس سرویس مورد نظر را انتخاب کرده و پلن مناسب را انتخاب کنید. پس از تکمیل فرم سفارش و پرداخت، سرویس شما در کمتر از ۵ دقیقه فعال خواهد شد.',
      },
      {
        q: 'چه روش‌های پرداختی پشتیبانی می‌شود؟',
        a: 'ما از درگاه‌های پرداخت آنلاین بانکی (زرین‌پال، آی‌دی‌پی)، کارت به کارت و پرداخت ارزی (USDT, WebMoney) پشتیبانی می‌کنیم.',
      },
      {
        q: 'آیا امکان پرداخت ماهانه وجود دارد؟',
        a: 'بله، تمام سرویس‌های ما امکان پرداخت ماهانه، سه ماهه، شش ماهه و سالانه را دارند. با پرداخت‌های بلندمدت‌تر، تخفیف بیشتری دریافت خواهید کرد.',
      },
      {
        q: 'آیا ضمانت بازگشت وجه دارید؟',
        a: 'بله، ۷ روز ضمانت بازگشت وجه بدون قید و شرط برای تمام سرویس‌ها ارائه می‌دهیم. اگر به هر دلیلی از سرویس رضایت نداشتید، هزینه شما بازگردانده می‌شود.',
      },
    ],
  },
  {
    category: 'سرور مجازی VPS',
    questions: [
      {
        q: 'سرور VPS چیست و چه تفاوتی با هاست دارد؟',
        a: 'سرور مجازی (VPS) یک سرور کامل مجازی با منابع اختصاصی است که کنترل کامل روی سیستم‌عامل و نرم‌افزارها به شما می‌دهد. برخلاف هاست اشتراکی، منابع VPS بین کاربران دیگر تقسیم نمی‌شود.',
      },
      {
        q: 'چه سیستم‌عامل‌هایی پشتیبانی می‌شود؟',
        a: 'انواع توزیع‌های لینوکس (Ubuntu, CentOS, Debian, Fedora, AlmaLinux) و ویندوز سرور (2016, 2019, 2022) قابل نصب هستند.',
      },
      {
        q: 'آیا امکان ارتقاء سرور وجود دارد؟',
        a: 'بله، در هر زمان می‌توانید منابع سرور (RAM, CPU, Storage) را بدون توقف سرویس ارتقاء دهید. این کار از طریق پنل کاربری یا تیکت پشتیبانی امکان‌پذیر است.',
      },
      {
        q: 'پینگ سرورها به ایران چقدر است؟',
        a: 'سرورهای ما در دیتاسنترهای آلمان و هلند قرار دارند که با مسیریابی بهینه، پینگ ۴۰ تا ۸۰ میلی‌ثانیه به ایران دارند.',
      },
    ],
  },
  {
    category: 'سرور بازی',
    questions: [
      {
        q: 'چه بازی‌هایی پشتیبانی می‌شود؟',
        a: 'ما از انواع بازی‌ها از جمله CS2, Minecraft, FiveM, Rust, ARK, Garry\'s Mod و بسیاری دیگر پشتیبانی می‌کنیم. برای بازی‌های خاص با پشتیبانی تماس بگیرید.',
      },
      {
        q: 'آیا پنل مدیریت دارید؟',
        a: 'بله، پنل‌های Pterodactyl و TCAdmin را برای مدیریت آسان سرور بازی ارائه می‌دهیم که امکان نصب مود، مدیریت پلیرها و پشتیبان‌گیری را فراهم می‌کند.',
      },
      {
        q: 'محافظت DDoS چگونه کار می‌کند؟',
        a: 'تمام سرورهای بازی دارای محافظت DDoS پیشرفته هستند که حملات را شناسایی و خنثی می‌کند. برای سرورهای حساس، محافظت Premium نیز موجود است.',
      },
    ],
  },
  {
    category: 'هاست وب',
    questions: [
      {
        q: 'آیا SSL رایگان ارائه می‌شود؟',
        a: 'بله، SSL Let\'s Encrypt رایگان برای تمام هاست‌ها ارائه می‌شود. همچنین SSL Premium با گارانتی نیز قابل خرید است.',
      },
      {
        q: 'چگونه وردپرس نصب کنم؟',
        a: 'از طریق Softaculous در cPanel، می‌توانید وردپرس را با یک کلیک نصب کنید. همچنین هاست‌های آماده وردپرس با بهینه‌سازی ویژه ارائه می‌دهیم.',
      },
      {
        q: 'آیا امکان انتقال سایت وجود دارد؟',
        a: 'بله، انتقال رایگان سایت از سرویس‌دهنده قبلی توسط تیم فنی ما انجام می‌شود. کافیست تیکت پشتیبانی ارسال کنید.',
      },
    ],
  },
  {
    category: 'پشتیبانی فنی',
    questions: [
      {
        q: 'ساعات کاری پشتیبانی چگونه است؟',
        a: 'پشتیبانی فنی ما ۲۴ ساعته و ۷ روز هفته فعال است. تیکت‌ها معمولاً در کمتر از ۱ ساعت پاسخ داده می‌شوند.',
      },
      {
        q: 'چگونه با پشتیبانی ارتباط برقرار کنم؟',
        a: 'از طریق سیستم تیکت در پنل کاربری، چت آنلاین در سایت، تلگرام یا تماس تلفنی می‌توانید با پشتیبانی ارتباط برقرار کنید.',
      },
      {
        q: 'آیا پشتیبانی مدیریت سرور ارائه می‌شود؟',
        a: 'بله، در پلن‌های VIP و سازمانی، مدیریت کامل سرور توسط تیم ما انجام می‌شود. برای پلن‌های دیگر نیز این خدمات قابل خرید است.',
      },
    ],
  },
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.includes(searchQuery) || q.a.includes(searchQuery)
    ),
  })).filter(category => category.questions.length > 0);

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
              سوالات متداول
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">پاسخ </span>
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                سوالات شما
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 mb-8"
            >
              پاسخ سوالات رایج را در اینجا پیدا کنید. اگر پاسخی نیافتید، با پشتیبانی تماس بگیرید.
            </motion.p>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-md mx-auto relative"
            >
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو در سوالات..."
                className="pr-12 bg-gray-900/50 border-gray-700 focus:border-orange-500 text-white h-12"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {filteredFaqs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-orange-400" />
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((faq, questionIndex) => {
                    const isOpen = openItems[`${categoryIndex}-${questionIndex}`];
                    return (
                      <div
                        key={questionIndex}
                        className="rounded-xl bg-gray-800/30 border border-gray-800 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(categoryIndex, questionIndex)}
                          className="w-full p-5 text-right flex items-center justify-between gap-4 hover:bg-gray-800/50 transition-colors"
                        >
                          <span className="text-white font-medium">{faq.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-orange-400 flex-shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="px-5 pb-5 text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20">
            <MessageCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">پاسخ خود را پیدا نکردید؟</h3>
            <p className="text-gray-400 mb-6">
              تیم پشتیبانی ما ۲۴/۷ آماده پاسخگویی به سوالات شماست.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                تماس با پشتیبانی
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
