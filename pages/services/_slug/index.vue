<template>
  <main>
   Services page Works
    <NuxtLink to="/"> Home PAge </NuxtLink>

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
