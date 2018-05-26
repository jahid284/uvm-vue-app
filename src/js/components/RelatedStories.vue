<template>
    <section class="related-stories" :style="{ 'background-image': 'url(assets/related-story-bg.jpg)' }">
        <div class="container">
            <div class="row">
                <div class="columns small-12">
                    <div class="label">Related Stories</div>
                </div>
                <div class="columns small-12">
                  <swiper :options="swiperOption">
										<swiper-slide v-for="item in items" :key="item.id">
											<article>
												<div class="img-thumb">
													<img v-bind:src="'/assets/' + item.media" /> 
												</div>
												<div class="story-excerpt">
													<h2>
														<a href="#">{{ item.title }}</a>
														</h2>
													<p>{{item.desc}}</p>
												</div>
											</article>
										</swiper-slide>
      						</swiper>
									<div class="swiper-pagination"  slot="pagination"></div>
									<div class="swiper-button-prev" slot="button-prev"><img src="assets/arrow-left.svg"> Prev</div>
									<div class="swiper-button-next" slot="button-next">Next <img src="assets/arrow-right.svg"></div>
                </div>
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
					slidesPerView: 2,
					spaceBetween: 110,
					// Responsive breakpoints
  				breakpoints: {
						300: {
							slidesPerView: 1,
							spaceBetween: 10
						},
						850: {
							slidesPerView: 1,
							spaceBetween: 10
						},
						1120: {
							slidesPerView: 2,
							spaceBetween: 20
						}
					},
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        items: [
      { 
        id: 0,
        media: 'story-1.jpg',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
        desc: 'Praesent convallis porttitor porttitor. Orci varius natoque penatibus et magnis dis'
      },
      {
        id: 1,
        media: 'story-1.jpg',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit2', 
        desc: 'Praesent convallis porttitor porttitor. Orci varius natoque penatibus et magnis dis'
      },
      {
        id: 2,
        media: 'story-1.jpg',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit3', 
        desc: 'Praesent convallis porttitor porttitor. Orci varius natoque penatibus et magnis dis'
      },
      {
        id: 3,
        media: 'story-1.jpg',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit4', 
        desc: 'Praesent convallis porttitor porttitor. Orci varius natoque penatibus et magnis dis'
      },
    ],
      }
    }
}



</script>




