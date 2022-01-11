<template>
  <section class="section">
    <div class="services">
      <h2 class="heading-2">آخرین پروژه ها</h2>
      <div class="servicesWrapper">
        <template v-for="s of content">
          <NuxtLink :to="'/services/' + s.slug">
            <div class="projectBox">
              <div class="projectBox__image">
                <img :src="'portfolio/'+ s.img" alt="" />
              </div>

              <div class="projectBox__drop">
                <span>{{ s.title }}</span>
              </div>
            </div>
          </NuxtLink>
        </template>
      </div>
      <div class="action">
        <a href=""> مشاهده همه پروژه ها</a>
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
    this.content = await this.$content('portfolio/index').fetch()
  },
}
</script>
