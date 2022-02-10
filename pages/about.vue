<template>
  <main>
    <div class="main">
      <br />
      <br />
      <br />
      <About />
    </div>
  </main>
</template>
<script>
export default {
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
        msg: `${data.desc}   Name: ${data.name}  Phone : ${data.phone}   Email: ${data.email}`,
      })
      console.log(res, err)
      this.$router.push('/')
    },
  },
}
</script>
