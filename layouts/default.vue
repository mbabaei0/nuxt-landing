<template>
  <main>
    <section class="section">
      <nav class="nav">
        <ul class="nav__menu">
          <li class="nav__menu-logo">
            <img src="~/assets/img/logo.png" alt="" />
          </li>
          <li>
          <NuxtLink to="/"> خانه</NuxtLink>
          </li>
          <li >
            <NuxtLink to="/services/all"> خدمات من</NuxtLink>
          </li>
          <li>نمونه کارها</li>
          <li>تماس با من</li>
          <li>
            <NuxtLink to="/blog"> بلاگ</NuxtLink>
          </li>
        </ul>
        <div class="nav__actions">
          <button class="btn-s">دریافت رزومه</button>
          <button class="btn-p boxShadowAnimation">سفارش پروژه</button>
        </div>
      </nav>
    </section>

    <Nuxt />
  </main>
</template>
