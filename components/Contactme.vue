
<template>
  <section class="section">
    <div class="services">
      <h2 class="heading-2">ارتباط با من</h2>
      <div class="hero contactHero">
        <div></div>
        <div class="hero__center">
          <div class="hero__center-title"> ســارا حــق پرســت</div>
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
      <div class="servicesWrapper">
        <ul class="social">
          <li>
            <a href="tel:09214266125">
              <span class="icon-Layer--3"></span>
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=9809214266125&text=hi%20sara"
              target="_blank"
            >
              <span class="icon-Layer--2"></span>
            </a>
          </li>
          <li>
            <a href="https://t.me/Sarahaqparast" target="_blank">
              <span class="icon-Layer-2"></span>
            </a>
          </li>
          <li>
            <a href="https://t.me/sarahaqparast" target="_blank">
              <span class="icon-Layer--5"></span>
            </a>
          </li>
          <li>
            <a href="https://t.me/sarahaqparast" target="_blank">
              <span class="icon-Group-8"></span>
            </a>
          </li>
          <li>
            <a href="https://t.me/sarahaqparast" target="_blank">
              <span class="icon-Layer--1"></span>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/sara-haqparast" target="_blank">
              <span class="icon-Layer--6"></span>
            </a>
          </li>
          <li>
            <a href="https://t.me/sarahaqparast" target="_blank">
              <span class="icon-Layer--4"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      content: [],
    }
  },
}
</script>
<style lang="scss">
.social {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
  li {
    margin: 0 10px;
    a {
      display: flex;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #fff;
      color: #000;
      font-size: 20px;
      transition: all 0.3s ease;
      &:hover {
        background-image: linear-gradient(
          to bottom,
          var(--p-color),
          var(--s-color)
        );

        span::before {
          color: #fff;
        }
      }
    }
  }
}
.contactHero {
  display: flex;
  flex-direction: row-reverse !important;
  height: 50vh !important;
}
</style>
