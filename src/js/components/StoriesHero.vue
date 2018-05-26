<template>
  <section class="hero-stories" :style="{ 'background-image': 'url(assets/' + Background + ')' }">
    <div class="anim">
      <figure class="line">
        <svg id="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80">
          <line x1="0" y1="0" x2="275" y2="136" stroke-dasharray="1, 1" />
        </svg>
      </figure>
      <div class="leaf">
        <img src="/assets/icon-4.svg" alt="" class="animated fadein fadeout">
      </div>
    </div>
    <div class="anim2">
      <figure class="line">
        <svg id="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 80">
          <line x1="0" y1="30" x2="310" y2="97" stroke-dasharray=".7, .7" />
        </svg>
      </figure>
      <div class="leaf">
        <img src="/assets/icon-1.svg" alt="" class="animated fadein">
      </div>
      <figure class="line2">
        <svg id="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 80">
          <line x1="0" y1="0" x2="275" y2="136" stroke-dasharray="1, 1" />
        </svg>
      </figure>
    </div>
    <div class="anim3">
      <figure class="line">
        <svg id="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 1 120 80">
          <g>
            <line x1="50" y1="30" x2="-2" y2="0" stroke-dasharray=".5, .5"></line>
          </g>
        </svg>
      </figure>
      <div class="leaf">
        <img src="/assets/icon-3.svg" alt="" class="animated fadein">
      </div>
      <figure class="line3">
        <svg id="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 80">
          <line x1="40" y1="50" x2="0" y2="0" stroke-dasharray=".6, .6" />
        </svg>
      </figure>
    </div>
    <div class="anim4">
      <figure class="line">
        <svg id="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97 80">
          <line x1="0" y1="0" x2="100" y2="80" stroke-dasharray="1, 1"></line>
        </svg>
      </figure>
      <div class="leaf">
        <img src="/assets/icon-2.svg" alt="" class="animated fadein fadeout">
      </div>
    </div>
    <div class="container align-center">
      <div class="row">
        <div class="columns small-12">
          <div class="hero-stories-content">
            <h1>{{title}}</h1>
            <p>{{subtitle}}<br>-{{meta}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  // import StoryTemplateHero from '../components/StoryTemplateHero.vue'
  export default {
    data(){
      return {
        Background: 'hero-story.jpg',
        title: 'RESEARCH WITH IMPACT Since 1791',
        subtitle: 'The following stories represent a community of over 1,200 faculty scholars',
        meta: 'all doing research to benefit society. ',
        // hero: [
        //   {media: 'story-1.jpg'}
        // ]
      }
    }
  }
</script>

<style lang="scss" scoped>
   
</style>


