<template>
  <main>
    <div class="main">
      <br />
      <br />
      <br />
      <section class="section">
        <div class="services">
          <form v-if="!success" class="form" @submit.prevent="order">
            <h1> 😊 لطفا اطلاعات زیر را پر کنید</h1>
            <br />
            <br />
            <br />
            <div class="form__group">
              <label class="form__label" for="name">چه غذایی دوس داری برات بپرم ؟ 🥡</label>

              <input v-model="cock" class="form__input" type="text" />
            </div>
            <div class="form__group">
              <label class="form__label" for="name">چه غذایی دوس داری بیرون بخوری؟ 🥘</label>
              <input v-model="food" class="form__input" type="text" />
            </div>
            <div class="form__group">
              <label class="form__label" for="name"> دوس داری تولد کجا باشه ؟ (طبیعت ؟ - کافه ؟ - خونه ؟ - با دوستات؟) 📍</label>
              <input v-model="location" class="form__input" type="text" />
            </div>
            <div class="form__group">
              <label class="form__label" for="name"> سفر یک روزه کجا میخوای بریم ؟  🗺️</label>
              <input v-model="travel" class="form__input" type="text" />
            </div>

            <div class="form__group">
              <label class="form__label" for="name">نظرتو در مورد ماه تولدت بگو</label>
              <textarea
                v-model="desc"
                class="form__input"
                rows="4"
                placeholder="چیزی میخوای اد کنی ؟"
              ></textarea>
            </div>

            <div style="display: flex">
              <button v-if="!loading" class="btn-p">✨ برنامه ریزی کن ❤️</button>
              <span v-else class="btn-gray">
                 🌇درحال برنامه ریزی تولد لطفا صبر کنید ... ⏳
              </span>

            </div>
          </form>
          <div v-else class="form__group suc">
            <br />

            <h1>برنامه ریزی با موفقیت انجام شد 🥂</h1>
            <br />
            <h3> 🤳 لطفا از این صفحه اسکرین بگیر برای یادگاری</h3>

            <br />
            <br />
            <br />
            <div class="form__group">
              <label class="form__label" for="name">چه غذایی دوس داری برات بپرم ؟ 🥡</label>

              {{cock}}
            </div>
            <div class="form__group">
              <label class="form__label" for="name">چه غذایی دوس داری بیرون بخوری؟ 🥘</label>
              {{food}}
            </div>
            <div class="form__group">
              <label class="form__label" for="name"> دوس داری تولد کجا باشه ؟ (طبیعت ؟ - کافه ؟ - خونه ؟ - با دوستات؟) 📍</label>
              {{location}}
            </div>
            <div class="form__group">
              <label class="form__label" for="name"> سفر یک روزه کجا میخوای بریم ؟  🗺️</label>
              {{travel}}
            </div>

            <div class="form__group">
              <label class="form__label" for="name">نظرتو در مورد ماه تولدت بگو</label>
              {{desc}}
            </div>

          </div>
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
      cock: '',
      food: '',
      location: '',
      travel: '',
      desc: '',
      email: 'sarahaqparast@gmail.com',
    }
  },
  methods: {
    async order() {
      const data = {
        email: this.email,
        cock: this.cock,
        food: this.food,
        location: this.location,
        travel: this.travel,
        desc: this.desc,
      }
      this.loading = true
      const { resp, error } = await this.$axios.post('https://submit-form.com/pulVdyzA', data)

      console.log(resp, error)

      this.loading = false
      this.success = true
      this.$toast.success('برنامه ریزی با موفقیت انجام شد💘 ', {
        duration: 5000,
        position:  'top-center'
      })
      // this.$router.push("/");
    },
  },
}
</script>
<style>
.suc {
      text-align: center;
    display: flex;
    flex-direction: column;
}
</style>
