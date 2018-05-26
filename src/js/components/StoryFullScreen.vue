<template>
  <div class="story-section__full-screen" @click="jumpNow">
    <slot></slot>
  </div>
</template>
<script>
  import ScrollMagic from 'scrollmagic';
  import jump from 'jump.js'
  export default {
    props: [
      'superParent'
    ],
    methods: {
      jumpNow() {
        jump(this.superParent.nextElementSibling)
      }
    },
    mounted() {

      //const imageWrap = this.superParent.querySelector('.image-wrap')
      setTimeout(() => {
        var scene = new ScrollMagic.Scene({triggerElement: this.$el.parentNode, triggerHook: 0.4, duration: Math.max(this.superParent.offsetHeight)}) 
          .setClassToggle(this.superParent, "image-wrap--full-screen")
          .addTo(this.$store.state.scrollMagicController)
        
      }, 100)
        
    }
  }
</script>