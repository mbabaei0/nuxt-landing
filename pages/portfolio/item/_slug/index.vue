<template>
  <main>
    <section class="section" v-if="content.length">
      <br />
      <br />
      <h2 class="portfolio__left heading-2">{{ content[0].title }}</h2>
      <div class="portfolio__left ">
        <button
          class="btn-p">
          {{ content[0].tag }}
        </button>
      </div>
      <div class="portfolio__left">
        {{ content[0].title }}
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </div>
      <div class="portfolio__rigth full-img-box" v-if="selectedImg">
        <img :src="selectedImg.pathLong" />
      </div>
      <div class="services" v-if="images.length">
        <VueSlickCarousel v-bind="slickOptions">
          <div v-for="(client, i) in images" :key="i" class="img-wrapper">
            <img :src="client.pathLong" @click="selectImg(client)" />
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
  },
  mounted() {
    this.importAll(
      require.context(`/static/portfolio/guiljann/`, true, /\.jpeg$/)
    )
  },

  methods: {
    importAll(r) {
      r.keys().forEach((key) => {
        this.images.push({ pathLong: r(key), pathShort: key })
      })
      this.selectedImg = [this.images[0]]
    },
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
