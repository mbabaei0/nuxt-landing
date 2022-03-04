<template>
  <main>
    <!-- <NuxtLink to="/"> خانه </NuxtLink> -->

    <!-- <nuxt-content :document="page" /> -->

    <div class="hero contactHero">
        <div></div>
        <div class="hero__center">
          <div class="hero__center-title">این صفحه به زودی راه اندازی می شود</div>
          <br />
          <div class="hero__center-sub-title">...</div>
        </div>
        <div></div>
        <div></div>
        <div class="hero__bg"></div>

      </div>
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
  data() {
    return {
      loading: false,
      success: false,
      errored: false,
      name: '',
      email: '',
      phone: '',
      desc: '',
      password: '',
    }
  },
  methods: {
    async signIn() {
      const { user, error } = await this.$supabase.auth.signUp({
        email: this.email,
        password: this.password,
      })
      console.log(user, error)
    },
    async order() {
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        desc: this.desc,
      }

      const { resp, error } = await this.$supabase.from('orders').insert(data)

      console.log(resp, error)
      const { res, err } = await this.$supabase.rpc('telegram', {
        msg: `${data.desc} Name :  ${data.name} Phone :  ${data.phone} Email :  ${data.email}`,
      })
      console.log(res, err)
    },
  },
}
</script>
