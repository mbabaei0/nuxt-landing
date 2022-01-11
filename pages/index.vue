<template>
  <main>
    <div class="main">
      <section class="section">
        <div class="hero">
          <div></div>
          <div class="hero__center">
            <ul class="hero__center-social">
              <li><img src="~/assets/icons/socail.svg" alt="" /></li>
              <li><img src="~/assets/icons/social2.svg" alt="" /></li>
              <li><img src="~/assets/icons/socail.svg" alt="" /></li>
              <li><img src="~/assets/icons/social2.svg" alt="" /></li>
              <li><img src="~/assets/icons/social2.svg" alt="" /></li>
            </ul>
            <div class="hero__center-title">ســارا حــق پرســت</div>
            <br />
            <div class="hero__center-sub-title">طراح گــرافیک | معمــار</div>
          </div>
          <div></div>
          <div></div>
          <div class="hero__bg"></div>
          <div class="hero__photo">
            <figure>
              <img src="~/assets/img/shadow.webp" alt="sara" />
            </figure>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="about">
          <div class="about__desc">
            <h3 class="heading-2">دربـاره مــن</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <div class="about__desc-actions">
              <button class="btn-s">ریافت رزومه</button>
              <button class="btn-p boxShadowAnimation">سفارش پروژه</button>
            </div>
          </div>
          <div class="about__photo">
            <img src="~/assets/img/about.webp" alt />
          </div>
        </div>
      </section>

      <Services />
      <Projects />

      <section class="section blogsSection">
        <RecentPosts />
        <Customers />

      </section>

      <section class="section">
        <div class="services">
          <h2 class="heading-2">ارتباط با من</h2>
          <div class="servicesWrapper">
            <div class="contactBox">
              <div class="contactBox__icon">
                <img src="~/assets/icons/book.svg" alt="" />
              </div>
              <div class="contactBox__title">اینستاگرام</div>
            </div>
            <div class="contactBox">
              <div class="contactBox__icon">
                <img src="~/assets/icons/book.svg" alt="" />
              </div>
              <div class="contactBox__title">تلگرام</div>
            </div>
            <div class="contactBox">
              <div class="contactBox__icon">
                <img src="~/assets/icons/book.svg" alt="" />
              </div>
              <div class="contactBox__title">ایمیل</div>
            </div>
          </div>
          <div class="action">
            <button class="btn-p">سفارش پروژه</button>
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="footer__item">
          <div class="footer__item-title">
            طراحی شده با <span>&hearts;</span> توسط:
          </div>
          <div class="footer__item-link">ســارا حق پرســت</div>
        </div>
        <div class="footer__item">
          <div class="footer__item-title">توسعه دهنده :</div>
          <div class="footer__item-link">محــمد بابایی</div>
        </div>
      </footer>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'landing',
})
</script>
