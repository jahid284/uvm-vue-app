<template>
  <div class="story-navigation">

    <ul class="story-navigation__list">
      <li class="story-navigation__item" v-for="(articleSection, index) in article"  @click="jumpNow('#story-section--'+index)" :class="{'story-navigation__item--active': articleSection.title === currentSection.title}">
        <div class="story-navigation__text" v-html="articleSection.title">
          
        </div>
      </li>
        
    </ul>
  </div>
</template>
<script>
  import ScrollMagic from 'scrollmagic';
  import jump from 'jump.js'
  export default {
    props: ['article', 'currentSection'],
    methods: {
      jumpNow(el) {
        jump(el)
      }
    },
    mounted() {

      /*
      const articleSectionWrapper = document.querySelector('.story-section__wrapper')
      new ScrollMagic.Scene({triggerElement: articleSectionWrapper, triggerHook: 0.5, duration: articleSectionWrapper.offsetHeight })
              .setClassToggle(this.$el, "story-navigation--visible")
              .addTo(this.$store.state.scrollMagicController)

      const articleSectionElements = document.querySelectorAll('.story-section')
      const articleSectionMenuItems = document.querySelectorAll('.story-navigation__item')

      Array.from(articleSectionElements, (el, index) => {
        new ScrollMagic.Scene({triggerElement: el, triggerHook: 0.5, duration: el.offsetHeight })
                .setClassToggle(articleSectionMenuItems[index], "story-navigation__item--active")
                .addTo(this.$store.state.scrollMagicController)

      })
      */
     
     var scene = new ScrollMagic.Scene({triggerElement: this.$el.parentNode, triggerHook: 0.3, duration: this.$el.parentNode.offsetHeight - this.$el.offsetHeight})
        .setPin(this.$el)
        .addTo(this.$store.state.scrollMagicController)
      
    }
  }
</script>