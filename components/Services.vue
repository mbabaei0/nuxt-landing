<template>
  <section class="section">
    <div class="services">
      <h2 class="heading-2">خدمــات من</h2>

      <div class="servicesWrapper">
        <div v-for="s of content" class="serviceBox">
          <NuxtLink :to="'/services/' + s.slug">
            <div class="serviceBox__icon">
              <span v-bind:class="s.icon"></span>
            </div>
          </NuxtLink>

          <div class="serviceBox__title">{{ s.title }}</div>
          <div class="serviceBox__link">
            <NuxtLink to="/portfolio/all"> مشاهده نمونه کارها</NuxtLink>
          </div>
        </div>
      </div>
      <div class="action">
        <button class="btn-p boxShadowAnimation">
          <NuxtLink to="/order"> سفارش پروژه</NuxtLink>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      content: [],
    }
  },
  async fetch() {
    this.content = await this.$content('services/services').fetch()
  },
}
</script>
