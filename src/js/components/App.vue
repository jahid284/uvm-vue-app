<template>
  <div class="app-inner">
    <nav-top></nav-top>
    <slot></slot>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import NavTop from './NavTop.vue'
  import FooterComponent from './Footer.vue'
  export default {
    components: {
      NavTop,
      FooterComponent
    }

  }
</script>
