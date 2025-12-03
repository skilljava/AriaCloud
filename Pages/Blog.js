import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, Tag, Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';

const blogPosts = [
  {
    id: 1,
    title: 'راهنمای کامل انتخاب سرور مجازی VPS مناسب',
    excerpt: 'در این مقاله به بررسی نکات مهم در انتخاب سرور مجازی می‌پردازیم. از جمله میزان RAM، CPU و فضای ذخیره‌سازی مورد نیاز برای پروژه‌های مختلف.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    category: 'آموزش',
    date: '۱۴۰۳/۰۹/۱۵',
    readTime: '۸ دقیقه',
    author: 'علی محمدی',
  },
  {
    id: 2,
    title: 'چگونه سرور بازی Minecraft راه‌اندازی کنیم؟',
    excerpt: 'آموزش گام به گام راه‌اندازی سرور Minecraft با امکانات کامل، نصب پلاگین‌ها و مدیریت بازیکنان.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop',
    category: 'سرور بازی',
    date: '۱۴۰۳/۰۹/۱۰',
    readTime: '۱۲ دقیقه',
    author: 'محمد رضایی',
  },
  {
    id: 3,
    title: 'بهینه‌سازی سرعت وردپرس در ۱۰ گام ساده',
    excerpt: 'با این ۱۰ روش ساده، سرعت سایت وردپرسی خود را تا ۵۰٪ افزایش دهید و رتبه بهتری در گوگل کسب کنید.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    category: 'وردپرس',
    date: '۱۴۰۳/۰۹/۰۵',
    readTime: '۶ دقیقه',
    author: 'سارا احمدی',
  },
  {
    id: 4,
    title: 'معرفی محافظت DDoS و اهمیت آن برای سرورها',
    excerpt: 'حملات DDoS چیست و چگونه می‌توانید سرور خود را در برابر این حملات محافظت کنید؟ راهکارهای عملی.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop',
    category: 'امنیت',
    date: '۱۴۰۳/۰۸/۲۸',
    readTime: '۱۰ دقیقه',
    author: 'علی محمدی',
  },
  {
    id: 5,
    title: 'مقایسه Linux و Windows برای سرور مجازی',
    excerpt: 'کدام سیستم‌عامل برای سرور VPS شما مناسب‌تر است؟ مقایسه جامع لینوکس و ویندوز از نظر امنیت، سرعت و قیمت.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=400&fit=crop',
    category: 'آموزش',
    date: '۱۴۰۳/۰۸/۲۰',
    readTime: '۷ دقیقه',
    author: 'محمد رضایی',
  },
  {
    id: 6,
    title: 'آخرین به‌روزرسانی‌های آریاکلود - آذر ۱۴۰۳',
    excerpt: 'معرفی سرویس‌های جدید، ارتقاء زیرساخت و تخفیف‌های ویژه ماه آذر. همه چیز درباره تغییرات جدید.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    category: 'اخبار',
    date: '۱۴۰۳/۰۸/۱۵',
    readTime: '۴ دقیقه',
    author: 'تیم آریاکلود',
  },
];

const categories = ['همه', 'آموزش', 'سرور بازی', 'وردپرس', 'امنیت', 'اخبار'];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('همه');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.includes(searchQuery) || post.excerpt.includes(searchQuery);
    const matchesCategory = activeCategory === 'همه' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
              بلاگ آریاکلود
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">آموزش و </span>
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                اخبار
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400"
            >
              آموزش‌ها، راهنماها و آخرین اخبار دنیای هاستینگ و سرور
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو در مقالات..."
                className="pr-12 bg-gray-900/50 border-gray-700 focus:border-orange-500 text-white"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-800 hover:border-orange-500/30 overflow-hidden transition-all"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-orange-500/90 text-white text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-orange-400 hover:text-orange-300 hover:bg-orange-500/10"
                    >
                      ادامه مطلب
                      <ArrowLeft className="w-4 h-4 mr-1" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400">مقاله‌ای یافت نشد.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-3">خبرنامه آریاکلود</h3>
            <p className="text-gray-400 mb-6">
              جدیدترین مقالات، آموزش‌ها و تخفیف‌ها را در ایمیل خود دریافت کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="ایمیل شما"
                className="bg-gray-900/50 border-gray-700 focus:border-orange-500 text-white"
              />
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 whitespace-nowrap">
                عضویت
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
