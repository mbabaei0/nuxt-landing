<template>
  <main>
    <br>
    <br>

    <section class="section" v-if="detail">

      <h2 class="portfolio__left heading-2">{{ detail.title }}</h2>
      <div class="portfolio__left ">
        <button
          class="btn-p">
          {{ content[0].tag }}
        </button>
      </div>
      <div class="portfolio__left">
        {{ detail.desc }}

      </div>
      <div class="portfolio__rigth full-img-box" v-if="selectedImg">
        <img :src="selectedImg" />
      </div>
      <div class="services" v-if="images.length">
        <VueSlickCarousel v-bind="slickOptions">
          <div v-for="(client, i) in images" :key="i" class="img-wrapper">
            <img :src="client" @click="selectImg(client)" />
          </div>
        </VueSlickCarousel>
      </div>
      <h2 class="portfolio__left heading-2">
        <br />
      </h2>
    </section>
  </main>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'SectionOurClients',
  components: { VueSlickCarousel },
  data() {
    return {
      content: [],
      detail: null,
      images: [],
      slickOptions: {
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      },
      selectedImg: null,
    }
  },
  async fetch() {
    this.content = await this.$content('portfolio/index')
      .where({
        slug: this.$route.params.slug,
      })
      .fetch()
    this.detail = await this.$content(`portfolio/${this.$route.params.slug}`)
      .fetch()
    this.images = this.detail.imgs.map(img => `portfolio/${this.$route.params.slug}/${img}`)
    this.selectedImg = this.images[0]
  },


  methods: {

    selectImg(client) {
      this.selectedImg = client
    },
  },
}
</script>
<style scoped>
.img-wrapper {
  height: 160px;
  display: flex;
  align-items: center;
  padding: 5px;
}

.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

.slick-prev::before {
  color: var(--p-color);
}

.full-img-box {
  width: 100%;
  height: 50rem;
  background-color: gray;
  border-radius: 6px;
}

.full-img-box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
}
</style>
