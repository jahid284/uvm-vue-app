<template>
  <div class="featured-story" :class="['featured-story--style-'+storyData.style]" :id="['featured-story--'+storyData.id]">
    <div class="container">
      <div class="row">
        <div class="column">
          <div class="divider"></div>
        </div>
      </div>
    </div>
    <div class="container featured-story__main-container">
      <div class="featured-story__magnetic"></div>
      <div class="row featured-story__text-row" v-if="storyData.style!==3">
        <div class="column large-4" :class="{'large-offset-8': storyData.style === 1}">
          

          <div class="featured-story__main">
            <div class="featured-story__label">
              Feature Story
            </div>
            <div class="featured-story__inner">
              <h4 class="featured-story__title">
                {{ storyData.title }}
              </h4>
              <div class="featured-story__desc">
                <p v-for="item in storyData.desc">{{ item }}</p>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div class="row featured-story__image-row">
        <div class="column large-4 featured-story__main-wrapper" v-if="storyData.style===3">
          

          <div class="featured-story__main">
            <div class="featured-story__label">
              Feature Story
            </div>
            <div class="featured-story__inner">
              <h4 class="featured-story__title">
                {{ storyData.title }}
              </h4>
              <div class="featured-story__desc">
                <p v-for="item in storyData.desc">{{ item }}</p>
              </div>
            </div>
          </div>


        </div>
        <div class="column large-6"  :class="{'large-offset-5': storyData.style === 1}">
          <a :href="storyData.url" class="featured-story__image">
            <div class="featured-story__icon">
              <div class="featured-story__icon-main"></div>
            </div>
            <img class="featured-story__image-main" :src="storyData.image.url" :alt="storyData.image.title">
          </a>
        </div>
        <div class="featured-story__person-wrapper">
          <div class="column large-5 featured-story__person-column"  :class="['featured-story__person-column--style-'+storyData.style]" v-if="people[0] && people[0].image">
            <div class="featured-story__person-image-wrapper">
              <div class="featured-story__person-ring-wrapper">
                
                <div class="featured-story__person-ring" :style="{transform: 'rotate('+(Math.floor(Math.random()*360))+'deg) translate(20%,0%)'}">
                  <div class="featured-story__person-ring-inner">
                    <div class="featured-story__person-ring-innest"></div>
                  </div>
                </div>
              </div>

              <div class="featured-story__person-image">
                <img :src="people[0].image.url" :alt="people[0].name + ' Photo'">
              </div>

            </div>

            <div class="featured-story__person-connect"></div>

          </div>

          <div class="column large-5 featured-story__person-column"  :class="['featured-story__person-column--style-'+storyData.style]" v-if="people[0] && people[0].name">

            <div class="featured-story__person-title">
              {{ people[0].name }}
            </div>
            <div class="featured-story__person-connect"></div>
            
          </div>

          <div class="column large-5 featured-story__person-column"  :class="['featured-story__person-column--style-'+storyData.style]" v-if="people[0] && people[0].quote">

            <div class="featured-story__person-quote">
              {{ people[0].quote }}
            </div>
            <div class="featured-story__person-connect"></div>
            
          </div>

          <div class="column large-5 featured-story__person-column"  :class="['featured-story__person-column--style-'+storyData.style]" v-if="people[1] && people[1].image">

            <div class="featured-story__person-image-wrapper">
              
              <div class="featured-story__person-ring-wrapper">
                
                <div class="featured-story__person-ring" :style="{transform: 'rotate('+(Math.floor(Math.random()*360))+'deg) translate(20%,0%)'}">
                  <div class="featured-story__person-ring-inner">
                    <div class="featured-story__person-ring-innest"></div>
                  </div>
                </div>
              </div>

              <div class="featured-story__person-image">
                <img :src="people[1].image.url" :alt="people[1].name + ' Photo'">
              </div>
            </div>

            <div class="featured-story__person-connect"></div>

            
          </div>

          <div class="column large-2 featured-story__person-column"  :class="['featured-story__person-column--style-'+storyData.style]" v-if="people[1] && people[1].name">

            <div class="featured-story__person-title">
              {{ people[1].name }}
            </div>
            <div class="featured-story__person-connect"></div>
            
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>

  import {
      TweenMax, TimelineMax,
  } from 'gsap';

  import ScrollMagic from 'scrollmagic';
  require('animation.gsap');  

  export default {
    props: [
      'storyData'
    ],
    computed: {
      image() {
        return this.storyData.image
      },
      people() {
        return this.storyData.people
      }
    },
    data() {
      return {
      }
    },
    mounted() {

      const tween1 = new TimelineMax ()
        .add([
          TweenMax.fromTo('.featured-story__person-ring-wrapper', 1, {rotation: '0'}, {rotation: '720', ease: Linear.easeNone, transformOrigin:"center center"})
        ]);


      const tempScene1 = new ScrollMagic.Scene({triggerElement: this.$el, triggerHook: 1, duration: this.$el.offsetHeight + window.outerHeight})
              .setTween(tween1); 



      window.setTimeout(() => {
        this.$store.state.scrollMagicController.addScene([ tempScene1 ]);
      },100);
    }
  }
</script>