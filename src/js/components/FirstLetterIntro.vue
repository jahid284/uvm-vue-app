<template>
<section :class="{'homepage-intro': isHomepage, 'firstletter-intro': !isHomepage}">
  <div class="row">
    <div class="medium-12 small-12 columns">
      <p><span class="firstcharacter">{{ firstCharacter }}</span>{{ rest }}</p>
    </div>
  </div>
</section>
</template>

<script>
export default {
  props: ['text', 'isHomepage'],
  computed: {
    firstCharacter() {
      return this.text.substring(0, 1)
    },
    rest() {
      return this.text.substring(1)
    }
  }
}
</script>
