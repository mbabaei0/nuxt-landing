<template>
  <main>
   <div class="main">
   <br>
   <br>
   <br>
    <section class="section">
      <div class="services">
        <form class="form"  @submit.prevent="order">
          <h1>فرم زیر را پر کنید تا با شما در تماس باشم</h1>
          <br>
          <br>
          <br>
          <div  class="form__group" >
            <label class="form__label" for="name">نام و نام خانوادگی</label>

           <input  v-model="name" class="form__input" type="text" />
           </div>
          <div class="form__group">
          <label class="form__label" for="name">آدرس ایمیل</label>
           <input v-model="email" class="form__input" type="email" />
          </div>
          <div class="form__group">
           <label class="form__label" for="name">شماره تلفن</label>
           <input v-model="phone" class="form__input" type="tel" /></div>
          <div class="form__group">
           <label class="form__label" for="name">توضیحات</label>
           <textarea v-model="desc" class="form__input" rows="4" placeholder="چند خط کوتاه درمورد پروژه"></textarea>
           </div>

          <div style="display:flex">
           <button class="btn-p"> ثبت سفارش </button>
            	&nbsp;
           <a  href="tel:+989214266125"> <button class="btn-s"> تماس مستقیم </button></a>
           </div>

        </form>
      </div>
    </section>
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
      this.$router.push("/");
    },
  },
}
</script>
