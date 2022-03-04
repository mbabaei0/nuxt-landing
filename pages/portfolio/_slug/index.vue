<template>
  <main>
    <section class="section">
      <br />
      <br />
      <h2 class="portfolio__left heading-2">نمونه کارها</h2>

      <div class="portfolio__left">
        <button
          v-for="(soft, i) in softs"
          :key="i"
          v-bind:class="{ 'btn-p': soft.selected }"
          class="btn-gray"
          @click="selectSoft(soft)"
        >
          {{ soft.title }}
        </button>
      </div>
      <div class="portfolio__rigth">
        <button v-for="sub in subs" :key="sub.title"  v-bind:class="{ 'btn-p': sub.selected }" class="btn-gray" @click="selectSoft(sub)">
          {{ sub.title }}
        </button>
      </div>
    </section>

    <Projects :selecteds="selectedTags" />
  </main>
</template>
<script>
export default {
  data() {
    return {
      softs: [
        { title: 'آیندزیان', tag: 'indesign', selected: false },
        { title: 'ایلوستریتور', tag: 'illustrator' },
        { title: 'فتوشاپ', tag: 'photoshop' },
        { title: 'اتوکد', tag: 'cad' },
      ],
      subs: [
        { title: 'طراحی', tag: 'design' },
        { title: 'معماری', tag: 'arch' },
      ],

      selectedTags: [],
    }
  },
  methods: {
    selectSoft(soft) {
      this.$set(soft, 'selected', !soft.selected)
      const selectedSofts = this.softs.filter(soft => soft.selected).map(soft => soft.tag)
      const selectedSubs = this.subs.filter(soft => soft.selected).map(soft => soft.tag)
      this.selectedTags = [...selectedSofts, ...selectedSubs]
    },
  },
}
</script>
