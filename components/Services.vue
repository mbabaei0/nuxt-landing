<template>
  <section class="section">
    <div class="services">
      <h2 class="heading-2">خدمــات من</h2>
      <div class="servicesWrapper">
        <div v-for="s of content" class="serviceBox">
          <div class="serviceBox__icon">
            <img src="~/assets/icons/book.svg" alt="" />
          </div>
          <div class="serviceBox__title">{{ s.title }}</div>
          <div class="serviceBox__link">
            <NuxtLink :to="'/services/' + s.slug">مشاهده نمونه کار</NuxtLink>
          </div>
        </div>
      </div>
      <div class="action">
        <button class="btn-p">سفارش پروژه</button>
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
