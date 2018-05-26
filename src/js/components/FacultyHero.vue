<template>
  <section class="faculty-hero">
    <div class="hero__content">
      <slot></slot>
    </div>
    <div class="hero-bg" :style="{ 'background-image': 'url(assets/' + bg + ')' }" alt="" aria-hidden="true">
        <div class="row grid-x" aria-hidden="true">
            <div class="medium-offset-2 medium-4 large-offset-0 large-3 column">
                <div class="square-container">
                    <div class="blurry"></div>
                </div>
            </div>
            <div class="small-12 medium-12 large-6 column"></div>
            <div class="medium-offset-0 medium-4 large-3 column">
                <div class="square-container" >
                    <div class="blurry"></div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['bg']
  } 
</script>
