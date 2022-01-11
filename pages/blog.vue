<template>
  <main>
    <NuxtLink to="/"> Home PAge </NuxtLink>
    <nuxt-content :document="page" />
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
