<template>
  <section class="section">
    <div class="services">
      <h2 class="heading-2">{{title}}</h2>
      <div class="servicesWrapper">
        <template v-for="s of content">
          <NuxtLink :to="'/portfolio/item/' + s.slug">
            <div class="projectBox">
              <div class="projectBox__image">
                <img :src="'portfolio/' + s.img" alt="" />
              </div>

              <div class="projectBox__drop">
                <span>{{ s.title }}</span>
              </div>
            </div>
          </NuxtLink>
        </template>
      </div>
      <div v-if="action" class="action">

         <NuxtLink to="/portfolio/all"> مشاهده همه پروژه ها</NuxtLink>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: String,
    limit: Number,
    action: Boolean,
    selecteds: Array,
  },
  data() {
    return {

      content: [],
    }
  },
  async fetch() {
    this.content = await this.$content('portfolio/index').limit(this.limit).fetch()
  },
  watch: {
      	async selecteds(newVal) { // watch it
          if(newVal.length) this.content = await this.$content('portfolio/index').where({ tag: { $in: newVal } }).limit(this.limit).fetch()
          else this.content = await this.$content('portfolio/index').fetch()

        }
      }
}
</script>
