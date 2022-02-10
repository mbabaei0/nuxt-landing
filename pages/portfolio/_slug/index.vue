<template>
  <main>
   <Projects />


  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('hello').fetch()

    return {
      page,
    }
  },
}
</script>
