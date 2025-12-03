import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, AlertCircle, XCircle, Clock, 
  Server, Globe, Shield, Wifi, RefreshCw 
} from 'lucide-react';

const servers = [
  {
    name: 'دیتاسنتر آلمان - فرانکفورت',
    location: 'DE-FRA',
    status: 'operational',
    uptime: '99.99%',
    latency: '45ms',
    services: [
      { name: 'VPS Servers', status: 'operational' },
      { name: 'Game Servers', status: 'operational' },
      { name: 'Web Hosting', status: 'operational' },
      { name: 'DNS', status: 'operational' },
    ],
  },
  {
    name: 'دیتاسنتر هلند - آمستردام',
    location: 'NL-AMS',
    status: 'operational',
    uptime: '99.97%',
    latency: '52ms',
    services: [
      { name: 'VPS Servers', status: 'operational' },
      { name: 'Game Servers', status: 'operational' },
      { name: 'Web Hosting', status: 'operational' },
      { name: 'DNS', status: 'operational' },
    ],
  },
  {
    name: 'دیتاسنتر فنلاند - هلسینکی',
    location: 'FI-HEL',
    status: 'degraded',
    uptime: '99.85%',
    latency: '68ms',
    services: [
      { name: 'VPS Servers', status: 'operational' },
      { name: 'Game Servers', status: 'degraded' },
      { name: 'Web Hosting', status: 'operational' },
      { name: 'DNS', status: 'operational' },
    ],
  },
];

const incidents = [
  {
    date: '۱۴۰۳/۰۹/۱۸',
    title: 'کاهش عملکرد سرورهای بازی - دیتاسنتر فنلاند',
    status: 'investigating',
    description: 'در حال بررسی کاهش عملکرد برخی سرورهای بازی. تیم فنی در حال رفع مشکل است.',
  },
  {
    date: '۱۴۰۳/۰۹/۱۵',
    title: 'به‌روزرسانی زیرساخت شبکه',
    status: 'resolved',
    description: 'به‌روزرسانی برنامه‌ریزی شده با موفقیت انجام شد. تمام سرویس‌ها عملیاتی هستند.',
  },
  {
    date: '۱۴۰۳/۰۹/۱۰',
    title: 'قطعی کوتاه DNS',
    status: 'resolved',
    description: 'مشکل DNS شناسایی و در کمتر از ۵ دقیقه رفع شد.',
  },
];

const getStatusIcon = (status) => {
  switch (status) {
    case 'operational':
      return <CheckCircle className="w-5 h-5 text-green-400" />;
    case 'degraded':
      return <AlertCircle className="w-5 h-5 text-yellow-400" />;
    case 'down':
      return <XCircle className="w-5 h-5 text-red-400" />;
    default:
      return <Clock className="w-5 h-5 text-gray-400" />;
  }
};

const getStatusBadge = (status) => {
  switch (status) {
    case 'operational':
      return <Badge className="bg-green-500/20 text-green-400">عملیاتی</Badge>;
    case 'degraded':
      return <Badge className="bg-yellow-500/20 text-yellow-400">کاهش عملکرد</Badge>;
    case 'down':
      return <Badge className="bg-red-500/20 text-red-400">قطع</Badge>;
    case 'investigating':
      return <Badge className="bg-yellow-500/20 text-yellow-400">در حال بررسی</Badge>;
    case 'resolved':
      return <Badge className="bg-green-500/20 text-green-400">رفع شده</Badge>;
    default:
      return <Badge className="bg-gray-500/20 text-gray-400">نامشخص</Badge>;
  }
};

export default function ServerStatus() {
  const allOperational = servers.every(s => s.status === 'operational');

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border mb-8 ${
                allOperational 
                  ? 'bg-green-500/10 border-green-500/20' 
                  : 'bg-yellow-500/10 border-yellow-500/20'
              }`}
            >
              {allOperational ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-medium">تمام سرویس‌ها عملیاتی هستند</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-medium">برخی سرویس‌ها با مشکل مواجه هستند</span>
                </>
              )}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">وضعیت </span>
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                سرورها
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400"
            >
              وضعیت لحظه‌ای دیتاسنترها و سرویس‌های آریاکلود
            </motion.p>
          </div>
        </div>
      </section>

      {/* Servers Status */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {servers.map((server, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/50 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-700 flex items-center justify-center">
                          <Server className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{server.name}</h3>
                          <p className="text-gray-400 text-sm">{server.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-gray-400 text-xs">Uptime</p>
                          <p className="text-white font-semibold">{server.uptime}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-400 text-xs">پینگ ایران</p>
                          <p className="text-white font-semibold">{server.latency}</p>
                        </div>
                        {getStatusBadge(server.status)}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {server.services.map((service, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-3 rounded-lg bg-gray-900/50 border border-gray-800"
                        >
                          {getStatusIcon(service.status)}
                          <span className="text-sm text-gray-300">{service.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incidents */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">رویدادهای اخیر</h2>
            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-gray-800/50 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <h3 className="font-semibold text-white">{incident.title}</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400 text-sm">{incident.date}</span>
                          {getStatusBadge(incident.status)}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{incident.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Uptime Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">آپتایم ۳۰ روز اخیر</h2>
            <Card className="bg-gray-800/50 border-gray-800">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-8 rounded ${
                        i === 15 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      title={i === 15 ? 'کاهش عملکرد' : 'عملیاتی'}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>۳۰ روز پیش</span>
                  <span>امروز</span>
                </div>
                <div className="flex gap-6 mt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded bg-green-500" />
                    <span className="text-gray-400">عملیاتی</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded bg-yellow-500" />
                    <span className="text-gray-400">کاهش عملکرد</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded bg-red-500" />
                    <span className="text-gray-400">قطع</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
