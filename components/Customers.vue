<template>
  <div class="services" v-if="content">
    <h2 class="heading-2">به من اعتماد کرده اند</h2>
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for="(client, i) in content.imgs" :key="i" class="logoBox">
        <div class="logoBox__image">
          <img :src="'customers/' + client" />
        </div>
      </div>
    </VueSlickCarousel>
    <!-- <div class="logoBox">
        <div class="logoBox__image">
          <img src="customers/logo1.webp" alt="" />
        </div>
      </div> -->
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      content:null,
      slickOptions: {
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
      },
      selectedImg: null,
    }
  },
  async fetch() {
    this.content = await this.$content('customers').fetch()
  },
}
</script>
