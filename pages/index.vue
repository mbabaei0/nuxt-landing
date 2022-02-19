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
      <Projects :action="true" :limit="3" :title="'نمونه کارهای من'" />

      <section class="section blogsSection">
        <RecentPosts />
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
