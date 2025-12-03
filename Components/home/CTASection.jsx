import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Headphones, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-amber-600/10 to-orange-600/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[150px]" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="text-white">آماده شروع </span>
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              هستید؟
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            همین حالا سرور خود را راه‌اندازی کنید و از قدرت بی‌وقفه آریاکلود بهره‌مند شوید.
            تیم پشتیبانی ما ۲۴ ساعته در کنار شماست.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to={createPageUrl('Pricing')}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all group"
              >
                مشاهده تعرفه‌ها
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to={createPageUrl('Contact')}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                تماس با ما
              </Button>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mt-12 pt-12 border-t border-white/10"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <Headphones className="w-5 h-5 text-orange-400" />
              <span>پشتیبانی ۲۴/۷</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span>۹۹.۹٪ آپتایم</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>🔒</span>
              <span>پرداخت امن</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>💰</span>
              <span>ضمانت بازگشت وجه</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
