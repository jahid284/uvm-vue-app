<template>

  <section class="hero-full-screen story-template-hero"  :style="{ 'background-image': 'url('+ bg + ')' }">
    <div class="row">
      <div class="medium-12 small-12 columns">
        <div class="hero-full-screen_container">
          
          <h1>{{textData.header}}</h1>
          <p class="story-template-hero__subheader" v-if="textData.subheader" :class="{'story-template-hero__subheader--solo': !textData.author}">
            {{textData.subheader}}
          </p>
          <div class="story-template-hero__author" v-if="textData.author">
            By {{textData.author}}
          </div>
          <div class="social-media">
            <a href="#">
              <svg viewBox="0 0 512 512">
              <title>Facebook</title>
              <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/></svg>
            </a>
            <a href="#">
              <svg viewBox="0 0 512 512">
              <title>Twitter</title>
              <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"/></svg>
            </a>
            <a href="#">
             <svg viewBox="0 0 512 512">
             <title>LinkedIn</title>
             <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/></svg>
            </a>
            <a href="#">
              <svg viewBox="0 0 512 512">
              <title>Mail</title>
              <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="story-template-hero__scroll" aria-label="Scroll Down" v-if="scroll" @click="scrollDown">
      <div class="story-template-hero__scroll-label">
        Scroll
      </div>
      <div class="story-template-hero__scroll-arrow">
        <div class="story-template-hero__scroll-arrow-animation">
          <div class="story-template-hero__scroll-arrow-inner">
            ➔    
          </div>
        </div>
        <div class="story-template-hero__scroll-arrow-animation">
          <div class="story-template-hero__scroll-arrow-inner">
            ➔    
          </div>
        </div>
        <div class="story-template-hero__scroll-arrow-animation">
          <div class="story-template-hero__scroll-arrow-inner">
            ➔    
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import jump from 'jump.js'
  export default {
    methods: {
      scrollDown() {
        jump(this.$el.nextElementSibling)
      }
    },
    props: ['bg', 'scroll', 'textData']
  } 
</script>

