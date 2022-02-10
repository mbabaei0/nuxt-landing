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
          <li>
              <NuxtLink to="/portfolio/all"> نمونه کارها</NuxtLink>
          </li>
          <li>
             <NuxtLink to="/about">دربار من </NuxtLink>
          </li>
          <li>
             <NuxtLink to="/contact"> تماس با من </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog"> بلاگ</NuxtLink>
          </li>
        </ul>
        <div class="nav__actions">
          <button class="btn-s">دریافت رزومه</button>
          <button class="btn-p boxShadowAnimation">
            <NuxtLink to="/order"> سفارش پروژه</NuxtLink>
          </button>
        </div>
      </nav>
    </section>

    <Nuxt />
  </main>
</template>
