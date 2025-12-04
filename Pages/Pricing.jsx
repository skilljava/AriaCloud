<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>تعرفه‌ها</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-900 text-white">

  <!-- Hero Section -->
  <section class="py-24 text-center">
    <span class="inline-block px-4 py-1.5 text-sm font-medium text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20 mb-4">
      تعرفه‌ها
    </span>
    <h1 class="text-5xl font-bold mb-6">
      پلن مناسب
      <span class="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
        خود را انتخاب کنید
      </span>
    </h1>
    <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
      با ۲۰٪ تخفیف سالانه، هزینه‌های خود را بهینه کنید
    </p>
    <div class="flex items-center justify-center gap-4 mb-16">
      <span class="text-white text-sm">ماهانه</span>
      <div class="w-12 h-6 bg-gray-700 rounded-full relative cursor-pointer">
        <div class="w-6 h-6 bg-orange-500 rounded-full absolute left-0 top-0 transition-all"></div>
      </div>
      <span class="text-gray-500 text-sm">
        سالانه
        <span class="ml-2 px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs">۲۰٪ تخفیف</span>
      </span>
    </div>
  </section>

  <!-- Pricing Cards -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <!-- Plan Example -->
    <div class="relative p-6 rounded-2xl border bg-white/5 border-white/10 hover:border-orange-500/30">
      <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-1 rounded-full text-sm">
        محبوب‌ترین
      </span>
      <div class="text-center mb-6">
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 bg-gradient-to-br from-orange-500 to-amber-500">
          <!-- آیکون پلن -->
          <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white mb-1">پرو</h3>
        <p class="text-sm text-gray-500">محبوب‌ترین انتخاب برای حرفه‌ای‌ها</p>
      </div>
      <div class="text-center mb-6">
        <p class="text-4xl font-bold text-white">۳,۹۹۰,۰۰۰</p>
        <p class="text-sm text-gray-500 mt-1">تومان / سال</p>
      </div>
      <ul class="space-y-3 mb-8">
        <li class="flex items-center gap-2">
          <div class="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg class="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span class="text-sm text-gray-300">۴ هسته CPU</span>
        </li>
        <!-- سایر ویژگی‌ها مشابه این -->
      </ul>
      <button class="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2 rounded-lg font-bold">
        انتخاب پلن
      </button>
    </div>

    <!-- سایر پلن‌ها مشابه این -->
  </section>

  <!-- Add-ons Section -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-white mb-4">افزونه‌ها</h2>
      <p class="text-gray-400">سرویس خود را با افزونه‌های اضافی ارتقا دهید</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <div class="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all text-center">
        <h4 class="text-sm font-medium text-white mb-2">IP اضافه</h4>
        <p class="text-lg font-bold text-orange-400">۵۰,۰۰۰<span class="text-xs text-gray-500">/ماه</span></p>
      </div>
      <!-- سایر افزونه‌ها مشابه این -->
    </div>
  </section>

  <!-- Guarantee Section -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
    <div class="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-orange-500/20 grid md:grid-cols-3 gap-8 text-center">
      <div>
        <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-500/20 flex items-center justify-center">
          <svg class="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v18m9-9H3"></path>
          </svg>
        </div>
        <h3 class="text-lg font-bold text-white mb-2">ضمانت بازگشت وجه</h3>
        <p class="text-sm text-gray-400">۷ روز ضمانت بازگشت بدون قید و شرط</p>
      </div>
      <!-- سایر کارت‌های تضمین مشابه این -->
    </div>
  </section>

</body>
</html>
