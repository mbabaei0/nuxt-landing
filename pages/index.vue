<template>
  <main>
    <div class="main">
      <section class="section">
        <div class="hero">
          <div></div>
          <div class="hero__center">
            <ul class="hero__center-social">
              <li>
                <a href="tel:09214266125">
                  <span class="icon-Layer--3"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=9809214266125&text=hi%20sara"
                  target="_blank"
                >
                  <span class="icon-Layer--2"></span>
                </a>
              </li>
              <li>
                <a href="https://t.me/Sarahaqparast" target="_blank">
                  <span class="icon-Layer-2"></span>
                </a>
              </li>
              <li>
                <a href="https://t.me/sarahaqparast" target="_blank">
                  <span class="icon-Layer--5"></span>
                </a>
              </li>
              <li>
                <a href="https://t.me/sarahaqparast" target="_blank">
                  <span class="icon-Group-8"></span>
                </a>
              </li>
              <li>
                <a href="https://t.me/sarahaqparast" target="_blank">
                  <span class="icon-Layer--1"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/sara-haqparast"
                  target="_blank"
                >
                  <span class="icon-Layer--6"></span>
                </a>
              </li>
              <li>
                <a href="https://t.me/sarahaqparast" target="_blank">
                  <span class="icon-Layer--4"></span>
                </a>
              </li>
            </ul>

            <button
              style="z-index: 1000000; font-size : 2rem"
              class=" btn-p boxShadowAnimation"
            >
              <NuxtLink to="/hbd">🥳 برای شروع ماه تولد کلیک کنید🔥</NuxtLink>
            </button>
                <span class="hero__center-sub-title">تولدت مبارک</span>

            <div class="hero__center-title">

              🎈 ســارا حــق پرســت 🎉
            </div>
            <br />
            <div class="hero__center-sub-title">
              طراح گــرافیک | معمــار (کوچولوی من)
            </div>
          </div>
          <div></div>
          <div></div>

          <div class="hero__bg"></div>
          <div class="hero__photo">
            <figure>
              <img src="~/assets/img/shadow.webp" alt="sara" />
            </figure>
          </div>
        </div>
      </section>

      <About />
      <Services />
      <Projects :action="true" :limit="3" :title="'نمونه کارهای من'" />

      <section class="section blogsSection">
        <!-- <RecentPosts /> -->
        <Customers />
      </section>

      <Contactme />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'landing',

})
</script>
