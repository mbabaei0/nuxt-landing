<template>
  <main>
    <div class="main">
      <section class="section">
        <div class="hero">
          <div></div>
          <div class="hero__center">
            <ul class="hero__center-social">
              <li><img src="~/assets/icons/socail.svg" alt="" /></li>
              <li><img src="~/assets/icons/social2.svg" alt="" /></li>
              <li><img src="~/assets/icons/socail.svg" alt="" /></li>
              <li><img src="~/assets/icons/social2.svg" alt="" /></li>
              <li><img src="~/assets/icons/social2.svg" alt="" /></li>
            </ul>
            <div class="hero__center-title">ســارا حــق پرســت</div>
            <br />
            <div class="hero__center-sub-title">طراح گــرافیک | معمــار</div>
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
      <Projects />

      <section class="section blogsSection">
        <RecentPosts />
        <Customers />

      </section>

      <Contactme />
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
