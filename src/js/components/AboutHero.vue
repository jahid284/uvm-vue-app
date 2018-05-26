<template>
  <section class="about-hero">
    <div class="row fullwidth">
      <div class="small-12">
        <!-- swiper -->
        <swiper :options="swiperOption">
          <swiper-slide :style="{ 'background-image': 'url(assets/' + slide.media + ')' }" v-if="slide.media" v-for="slide in slides" :key="slide.id">
            <div class="container">
              <div class="slider-caption">
                <h2 class="title" data-swiper-parallax="-200" v-if="slide.title">{{slide.title}}</h2>
                  <div class="text" data-swiper-parallax="300" v-if="slide.text">
                    <p>{{slide.text}}</p>
                  </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"><img src="assets/arrow-left.svg"> Prev</div>
          <div class="swiper-button-next" slot="button-next">Next <img src="assets/arrow-right.svg"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
      return {
        swiperOption: {
          loop: true,
          effect: 'fade',
          speed: 600,
          parallax: true,
          slidesPerView: 1,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        slides: [
          {
            id: 1,
            media: 'about-hero-1.jpg',
            title: 'ABOUT UVM RESEARCH',
            text: 'Research at the University of  Vermont is supported by grant funding, sponsored awards, graduate and undergraduate programs, and faculty scholars.'
          },
          {
            id: 2,
            media: 'about-number-1.jpg',
            title: 'ABOUT UVM RESEARCH 2',
            text: '2 Research at the University of  Vermont is supported by grant funding, sponsored awards, graduate and undergraduate programs, and faculty scholars.'
          },
          {
            id: 3,
            media: 'about-hero-1.jpg',
            title: 'ABOUT UVM RESEARCH 3',
            text: 'Research at the University of  Vermont is supported by grant funding, sponsored awards, graduate and undergraduate programs, and faculty scholars.'
          }
        ],
      }
    }
}
</script>






