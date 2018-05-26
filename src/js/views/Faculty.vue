<template>
  <main class="faculty">
    <faculty-hero bg=faculty-hero-bg.jpg>
        <div class="row grid-x">
            <div class="medium-offset-2 medium-4 large-offset-0 large-3 column">
                <div class="square-container" >
                    <div class="dotted circle75" aria-hidden="true"></div>
                    <div class="solid circle50" aria-hidden="true"></div>
                    <h1>12:1</h1>
                </div>
            </div>
            <div class="small-12 medium-12 large-6 column">
                <h1>meet our newest minds</h1>
                <p>with every fresh hire comes fresh ideas. Below you'll find some of the newest faculty members in our academic ecosystem.</p>
            </div>
            <div class="medium-offset-0 medium-4 large-3 column">
                <div class="square-container" >
                    <div class="dotted circle75" aria-hidden="true"></div>
                    <div class="solid circle50" aria-hidden="true" ></div>
                    <h1>25+<h3>New Faculty</h3></h1>
                </div>
            </div>
        </div>
    </faculty-hero>
    <faculty-index></faculty-index>
  </main>
</template>
<script>
    import FacultyHero from '../components/FacultyHero.vue'
    import FacultyIndex from '../components/FacultyIndex.vue'

    export default {
      components: {
        FacultyHero,
        FacultyIndex
      }
    }
</script>
