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

           <li>
          <NuxtLink to="/hbd">🎁  تولد </NuxtLink>
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
    <footer class="footer">
        <div class="footer__item">
          <div class="footer__item-title">
            طراحی شده با <span>&hearts;</span> توسط:
          </div>
          <div class="footer__item-link">ســارا حق پرســت</div>
        </div>
        <div class="footer__item">
          <div class="footer__item-title">توسعه دهنده :</div>
          <div class="footer__item-link">محــمد بابایی</div>
        </div>
      </footer>
  </main>
</template>
