import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Server, CreditCard, Settings, LogOut, Clock, CheckCircle,
  AlertCircle, Zap, Plus, ArrowLeft, RefreshCw, HardDrive,
  Cpu, Wifi, User, Bell, MessageSquare, BarChart3
} from 'lucide-react';

const mockServices = [
  {
    id: 1,
    name: 'VPS Pro - سرور اصلی',
    type: 'VPS',
    status: 'active',
    plan: 'حرفه‌ای',
    specs: { cpu: '4 Core', ram: '8 GB', storage: '100 GB NVMe' },
    ip: '185.x.x.x',
    renewDate: '۱۴۰۳/۱۰/۱۵',
    price: '۳۹۹,۰۰۰',
  },
  {
    id: 2,
    name: 'سرور CS2',
    type: 'Game',
    status: 'active',
    plan: 'کامیونیتی',
    specs: { cpu: '4 Core', ram: '8 GB', players: '64 Player' },
    ip: '185.x.x.x:27015',
    renewDate: '۱۴۰۳/۱۰/۲۰',
    price: '۲۹۹,۰۰۰',
  },
  {
    id: 3,
    name: 'هاست وبسایت شرکت',
    type: 'Hosting',
    status: 'expiring',
    plan: 'تجاری',
    specs: { storage: '50 GB', bandwidth: 'نامحدود' },
    domain: 'example.ir',
    renewDate: '۱۴۰۳/۰۹/۲۵',
    price: '۱۹۹,۰۰۰',
  },
];

const mockInvoices = [
  { id: '#INV-1234', date: '۱۴۰۳/۰۹/۱۵', amount: '۳۹۹,۰۰۰', status: 'paid' },
  { id: '#INV-1233', date: '۱۴۰۳/۰۸/۱۵', amount: '۲۹۹,۰۰۰', status: 'paid' },
  { id: '#INV-1232', date: '۱۴۰۳/۰۷/۱۵', amount: '۱۹۹,۰۰۰', status: 'paid' },
];

const mockTickets = [
  { id: '#TKT-456', subject: 'مشکل در دسترسی SSH', status: 'answered', date: '۱۴۰۳/۰۹/۱۲' },
  { id: '#TKT-455', subject: 'درخواست ارتقاء RAM', status: 'closed', date: '۱۴۰۳/۰۹/۰۵' },
];

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await base44.auth.me();
        setUser(userData);
      } catch (error) {
        // User not logged in
      }
      setIsLoading(false);
    };
    loadUser();
  }, []);

  const handleLogin = () => {
    base44.auth.redirectToLogin();
  };

  const handleLogout = () => {
    base44.auth.logout();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-md mx-auto text-center py-20">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-8">
              <User className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">ورود به حساب کاربری</h1>
            <p className="text-gray-400 mb-8">
              برای دسترسی به داشبورد و مدیریت سرویس‌های خود، وارد حساب کاربری شوید.
            </p>
            <Button
              onClick={handleLogin}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 px-8 py-6 text-lg"
            >
              ورود / ثبت‌نام
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              سلام، {user?.full_name || 'کاربر'}
            </h1>
            <p className="text-gray-400">به داشبورد آریاکلود خوش آمدید</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <Bell className="w-4 h-4 ml-2" />
              اعلان‌ها
            </Button>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-red-500/30 text-red-400 hover:bg-red-500/10"
            >
              <LogOut className="w-4 h-4 ml-2" />
              خروج
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          {[
            { label: 'سرویس فعال', value: '3', icon: Server, color: 'text-green-400' },
            { label: 'تیکت باز', value: '1', icon: MessageSquare, color: 'text-blue-400' },
            { label: 'اعتبار کیف پول', value: '۰', icon: CreditCard, color: 'text-orange-400' },
            { label: 'سرویس در حال انقضا', value: '1', icon: AlertCircle, color: 'text-yellow-400' },
          ].map((stat, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Main Content */}
        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="bg-gray-800/50 border border-gray-700 p-1">
            <TabsTrigger value="services" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <Server className="w-4 h-4 ml-2" />
              سرویس‌ها
            </TabsTrigger>
            <TabsTrigger value="invoices" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <CreditCard className="w-4 h-4 ml-2" />
              صورتحساب‌ها
            </TabsTrigger>
            <TabsTrigger value="tickets" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <MessageSquare className="w-4 h-4 ml-2" />
              تیکت‌ها
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <Settings className="w-4 h-4 ml-2" />
              تنظیمات
            </TabsTrigger>
          </TabsList>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">سرویس‌های شما</h2>
              <Link to={createPageUrl('Pricing')}>
                <Button className="bg-gradient-to-r from-orange-500 to-amber-500">
                  <Plus className="w-4 h-4 ml-2" />
                  سفارش جدید
                </Button>
              </Link>
            </div>

            <div className="grid gap-6">
              {mockServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`bg-gray-800/50 border-gray-800 ${service.status === 'expiring' ? 'border-yellow-500/50' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            service.type === 'VPS' ? 'bg-blue-500/20 text-blue-400' :
                            service.type === 'Game' ? 'bg-purple-500/20 text-purple-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {service.type === 'VPS' ? <Server className="w-6 h-6" /> :
                             service.type === 'Game' ? <Zap className="w-6 h-6" /> :
                             <HardDrive className="w-6 h-6" />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-white">{service.name}</h3>
                              <Badge className={
                                service.status === 'active' ? 'bg-green-500/20 text-green-400' :
                                'bg-yellow-500/20 text-yellow-400'
                              }>
                                {service.status === 'active' ? 'فعال' : 'در حال انقضا'}
                              </Badge>
                            </div>
                            <p className="text-gray-400 text-sm mb-2">پلن: {service.plan}</p>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                              {Object.entries(service.specs).map(([key, value]) => (
                                <span key={key} className="flex items-center gap-1">
                                  {key === 'cpu' && <Cpu className="w-3 h-3" />}
                                  {key === 'ram' && <BarChart3 className="w-3 h-3" />}
                                  {key === 'storage' && <HardDrive className="w-3 h-3" />}
                                  {value}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col lg:items-end gap-2">
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Clock className="w-4 h-4" />
                            تمدید: {service.renewDate}
                          </div>
                          <p className="text-lg font-bold text-orange-400">{service.price} تومان/ماه</p>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="border-gray-700 text-gray-300">
                              <RefreshCw className="w-4 h-4 ml-1" />
                              تمدید
                            </Button>
                            <Button size="sm" variant="outline" className="border-gray-700 text-gray-300">
                              مدیریت
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Invoices Tab */}
          <TabsContent value="invoices" className="space-y-6">
            <h2 className="text-xl font-bold text-white">صورتحساب‌ها</h2>
            <Card className="bg-gray-800/50 border-gray-800">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-right p-4 text-gray-400 font-medium">شماره</th>
                      <th className="text-right p-4 text-gray-400 font-medium">تاریخ</th>
                      <th className="text-right p-4 text-gray-400 font-medium">مبلغ</th>
                      <th className="text-right p-4 text-gray-400 font-medium">وضعیت</th>
                      <th className="text-right p-4 text-gray-400 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockInvoices.map((invoice) => (
                      <tr key={invoice.id} className="border-b border-gray-800 last:border-0">
                        <td className="p-4 text-white">{invoice.id}</td>
                        <td className="p-4 text-gray-400">{invoice.date}</td>
                        <td className="p-4 text-white">{invoice.amount} تومان</td>
                        <td className="p-4">
                          <Badge className="bg-green-500/20 text-green-400">پرداخت شده</Badge>
                        </td>
                        <td className="p-4">
                          <Button size="sm" variant="ghost" className="text-orange-400">
                            دانلود
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tickets Tab */}
          <TabsContent value="tickets" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">تیکت‌های پشتیبانی</h2>
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500">
                <Plus className="w-4 h-4 ml-2" />
                تیکت جدید
              </Button>
            </div>
            <Card className="bg-gray-800/50 border-gray-800">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-right p-4 text-gray-400 font-medium">شماره</th>
                      <th className="text-right p-4 text-gray-400 font-medium">موضوع</th>
                      <th className="text-right p-4 text-gray-400 font-medium">تاریخ</th>
                      <th className="text-right p-4 text-gray-400 font-medium">وضعیت</th>
                      <th className="text-right p-4 text-gray-400 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockTickets.map((ticket) => (
                      <tr key={ticket.id} className="border-b border-gray-800 last:border-0">
                        <td className="p-4 text-white">{ticket.id}</td>
                        <td className="p-4 text-white">{ticket.subject}</td>
                        <td className="p-4 text-gray-400">{ticket.date}</td>
                        <td className="p-4">
                          <Badge className={
                            ticket.status === 'answered' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-gray-500/20 text-gray-400'
                          }>
                            {ticket.status === 'answered' ? 'پاسخ داده شده' : 'بسته شده'}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <Button size="sm" variant="ghost" className="text-orange-400">
                            مشاهده
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-xl font-bold text-white">تنظیمات حساب</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-800/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <User className="w-5 h-5 text-orange-400" />
                    اطلاعات کاربری
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">نام و نام خانوادگی</label>
                    <p className="text-white">{user?.full_name || '-'}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">ایمیل</label>
                    <p className="text-white">{user?.email || '-'}</p>
                  </div>
                  <Button variant="outline" className="border-gray-700 text-gray-300">
                    ویرایش اطلاعات
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-orange-400" />
                    کیف پول
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">موجودی</label>
                    <p className="text-2xl font-bold text-orange-400">۰ تومان</p>
                  </div>
                  <Button className="bg-gradient-to-r from-orange-500 to-amber-500">
                    افزایش اعتبار
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
