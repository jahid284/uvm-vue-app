<template>
  <main class="homepage">
    <homepage-hero bg="hero-bg.jpg">
      <h1 style="display: none">UVM</h1>
      <svg id="Logo-Defs" width="750" height="100%" viewBox="0 0 414 287" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="MyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="5%"  stop-color="#fff"/>
          <stop offset="50%" stop-color="#fff" />
          <stop offset="95%" stop-color="#fff"/>
        </linearGradient>
        <g id="Logo-Group">
          <path id="Mark" stroke="white" class="path path-1"  d="M52.2 242.3C17.6 242.3 0 224.7 0 189.9V.6h42.3v189.3c0 7.9 3.1 11.6 9.8 11.6 6.8 0 10-3.7 10-11.6V.6h42.3v189.3c0 34.7-17.5 52.3-52.2 52.4zM3.3 3.9v186c0 33 16 49.1 48.9 49.1 33-.1 49-16.1 49-49.1V3.9H65.4v186c0 12.3-7.2 14.9-13.2 14.9-6 0-13.1-2.6-13.1-14.9V3.9H3.3zm205.2 234.7h-53.4l-24-152.1L119.7.7h42.7l19.3 171L201.1.7h42.7l-11.4 86-23.9 151.9zm-50.6-3.3h47.8l23.5-149.1 10.9-82.3H204l-20.7 182.4H180L159.4 3.9h-36.1L134.2 86l23.7 149.3zm255.4 3.3h-40.9v-94l-20 94h-30.1l-20.8-95.2v95.2h-41.2V.6h41.5l.3 1.3 35 148.7L371.9.6h41.5l-.1 238zm-37.6-3.3H410V3.9h-35.6l-35.8 154.3h-3.2L299.1 3.9h-35.6v231.4h34.7v-107l3.2-.4 23.5 107.4h24.8l22.7-106.7 3.2.3.1 106.4zM22 280.1c0 4.2-2.4 6.3-7.1 6.4-4.7 0-7.1-2.1-7.1-6.4v-24.3h4.9v24.3c0 1.4.7 2 2.1 2 1.4 0 2.2-.7 2.2-2v-24.3h4.9v24.3h.1zm7.3-24.4h4.9l4.7 17.5v-17.5h4.6v30.2h-4.9l-4.5-17v17h-4.7v-30.2h-.1zm21.8 0H56v30.2h-4.9v-30.2zm22.8 30.2h-6.8l-3.5-19.5-1.6-10.7h5l3.5 23.3 3.5-23.3h5l-1.6 10.7-3.5 19.5zm11-30.2h12.8v4.3h-7.9v8.7h6.8v4.3h-6.8v8.6h7.9v4.3H84.9v-30.2zm19.5 0h7.2c4.4 0 6.6 2.1 6.6 6.4v4.5c0 2.7-1.3 4.4-3.9 5.3l5.5 14h-5.4l-4.4-13.3-.6.1v13.2h-4.9v-30.2h-.1zm4.9 4.3v8.7h1.1c.7 0 1.2 0 1.4-.1.9-.3 1.3-1 1.3-1.9v-4.5c0-1.4-.7-2.1-2.1-2.1h-1.7v-.1zm15.9 1.6c0-4.2 2.4-6.3 7.1-6.3 4.7 0 7.1 2.1 7.1 6.3v4.1h-4.9v-4.1c0-1.4-.7-2-2.1-2-1.4 0-2.1.7-2.1 2v2.7c0 1.3 1.5 3 4.6 4.9 3.1 1.9 4.6 4.3 4.6 7v3.8c0 4.2-2.4 6.4-7.1 6.4-4.7 0-7.1-2.1-7.1-6.4v-4.1h4.9v4.1c0 1.4.7 2 2.2 2 1.4 0 2.1-.7 2.1-2v-3.4c0-1.5-1.5-3.2-4.6-5.1-3.1-1.9-4.6-4.3-4.6-7.1v-2.8h-.1zm21.4-5.9h4.9v30.2h-4.9v-30.2zm25.3 0v4.3h-4.6v25.9h-4.9V260h-4.6v-4.3h14.1zm9.8 0l3.4 11.8 3.4-11.8h5.2l-6 17.1-.1.4v12.7h-4.9v-12.7l-.2-.4-6-17.1h5.2zm43.5 24.4c0 4.2-2.4 6.3-7.1 6.4-4.7 0-7.1-2.1-7.1-6.4v-18.5c0-4.2 2.4-6.3 7.1-6.3 4.7 0 7.1 2.1 7.1 6.3v18.5zm-4.9-18.5c0-1.4-.7-2-2.1-2-1.4 0-2.1.7-2.1 2v18.5c0 1.4.7 2 2.1 2 1.4 0 2.2-.7 2.2-2v-18.5h-.1zm12.1-5.9h12.8v4.3h-7.9v8.7h6.8v4.3h-6.8v12.9h-4.9v-30.2zm41.2 30.2h-6.8l-3.5-19.5-1.6-10.7h5l3.5 23.3 3.5-23.3h5l-1.6 10.7-3.5 19.5zm11-30.2h12.8v4.3h-7.9v8.7h6.8v4.3h-6.8v8.6h7.9v4.3h-12.8v-30.2zm19.4 0h7.2c4.4 0 6.6 2.1 6.6 6.4v4.5c0 2.7-1.3 4.4-3.9 5.3l5.5 14H314l-4.4-13.3-.6.1v13.2h-5v-30.2zm5 4.3v8.7h1.1c.7 0 1.2 0 1.4-.1.9-.3 1.3-1 1.3-1.9v-4.5c0-1.4-.7-2.1-2.1-2.1H309v-.1zm26.9 16.4l5.7-20.7h4.9v30.2h-4.7V269l-4.2 16.9h-3.3L330 269v16.9h-4.8v-30.2h4.9l5.8 20.7zm32 3.7c0 4.2-2.4 6.3-7.1 6.4-4.7 0-7.1-2.1-7.1-6.4v-18.5c0-4.2 2.4-6.3 7.1-6.3 4.7 0 7.1 2.1 7.1 6.3v18.5zm-4.9-18.5c0-1.4-.7-2-2.1-2-1.4 0-2.1.7-2.1 2v18.5c0 1.4.7 2 2.1 2 1.4 0 2.2-.7 2.2-2v-18.5h-.1zm12.1-5.9h4.9l4.7 17.5v-17.5h4.6v30.2h-4.9l-4.5-17v17h-4.7v-30.2h-.1zm34.4 0v4.3h-4.6v25.9H400V260h-4.6v-4.3h14.1z"/>
        </g>
          </g>
          </defs>
        </svg>
        <svg id="Logo" class="Animate-Path" width="100%" height="100%"  xml:space="preserve" viewBox="0 0 414 287">
          <use id="Draw-Mark" class="Animate-Draw" xlink:href="#Mark" />
          <use id="Draw-Frame" class="Animate-Draw" xlink:href="#Frame" />
          <use id="Draw-Text" class="Animate-Draw" xlink:href="#Logo-Text" />
          <!--<use class="Animate-Fill" xlink:href="#Logo-Group" /> -->
        </svg> 
    </homepage-hero>
    <first-letter-intro isHomepage="true" text="What is research without real world impact? What are breakthroughs unless they help put something back together? We live by these philosophies at the University of Vermont. The stories you’ll find here highlight
        a synergistic harmony of the arts, sciences and STEM disciplines—one that creates an academic ecosystem that elevates humankind.">
        <!-- fallback plain text // optional -->
        What is research without real world impact? What are breakthroughs unless they help put something back together? We live by these philosophies at the University of Vermont. The stories you’ll find here highlight
                a synergistic harmony of the arts, sciences and STEM disciplines—one that creates an academic ecosystem that elevates humankind.
    </first-letter-intro>

    <div class="featured-story__all">
      <featured-story
        v-for="(story, index) in featuredStories"
        :key="story.id"
        :story-data="story"
        :class="{'featured-story--last': featuredStories.length - 1 === index}">
      </featured-story>
    </div>
    <featured-story-dots :featured-stories="featuredStories"></featured-story-dots>
    <related-stories></related-stories>
  </main>
</template>

<script>
  import HomepageHero from '../components/HomepageHero.vue'
  import FeaturedStory from '../components/FeaturedStory.vue'
  import FirstLetterIntro from '../components/FirstLetterIntro.vue'
  import FeaturedStoryDots from '../components/FeaturedStoryDots.vue'
  import RelatedStories from '../components/RelatedStories.vue'

  export default {
    components: {
      HomepageHero,
      FirstLetterIntro,
      
      FeaturedStory,
      FeaturedStoryDots,
      RelatedStories
    },
    data() {
      return {
        scrollMagicController: null,
        featuredStories: [
          {
            id: 0,
            style:1,
            title: 'The Young Giant',
            url: 'story-template-1.html',
            desc: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae iure assumenda veniam repellat eum.'],
            image: {
              title: 'The Young Giant Picture',
              url: 'assets/jesse-orrico-60373.png'
            },
            people: [
              {
                name: 'First Name Last Name PHD',
                image: {
                  url: 'assets/potter-20160302.png'
                },
              },
              {
                name: 'First Name Also Name',
                image: {
                  url: 'assets/albaugh-3923.png'
                }
              }
            ]
          },
          {
            id:1,
            style:2,
            title: 'The Consequences of Inequality',
            url: 'story-template-2.html',
            desc: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae iure assumenda veniam repellat eum.'],
            image: {
              title: 'The Young Giant Picture',
              url: 'assets/rawpixel-com-196464.png'
            },
            people: [
              {
                name: 'First Name Last Name PHD',
                image: {
                  url: '//placeimg.com/167/167/people'
                },
                quote: '“I want my students to understand how these inequalities are created”'

              }
            ]
          },
          {
            id:2,
            style:3,
            title: 'Climate Change',
            url: 'story-template-3.html',
            desc: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae iure assumenda veniam repellat eum.'],
            image: {
              title: 'The Young Giant Picture',
              url: '//placeimg.com/518/404/nature'
            },
            people: [
              
              {
                name: 'First Name Last Name PHD',
                image: {
                  url: 'assets/potter-20160302.png'
                },
              },
              {
                name: 'First Name Also Name',
                image: {
                  url: 'assets/albaugh-3923.png'
                }
              }
            ]
          }
        ]

      }

    },

    mounted() {
    }
  }
</script>
