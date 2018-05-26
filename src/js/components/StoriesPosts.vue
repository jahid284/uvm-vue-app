<template>
  <section class="stories-posts">
    <div class="container">
      <div class="row">
        <isotope 
          :options="{
              itemSelector: '.story-tile',
              layoutMode: 'packery',
            }"
          :item-selector="'story-tile'"
          :list="stories"
          class="column story-tile__wrapper">
          

          <div
            class="story-tile" :class="[`story-tile--${story.type}`, `story-tile--${story.color}`]" v-for="(story,index) in stories" :key="story.id"
          >

            <div class="story-tile__pad">
              
              <div class="story-tile__border-wrapper">
                <div class="story-tile__border"></div>
                <div class="story-tile__icon"></div>
              </div>
              <div class="story-tile__intro" aria-hidden>
                
                <div class="story-tile__intro-title">
                  {{story.title}}
                </div>

                <div class="story-tile__intro-author">
                  By: {{story.author}}
                </div>
              </div>
              <div class="story-tile__expanded">
                <div class="story-tile__expanded-title">
                  {{story.title}}
                </div>
                <div class="story-tile__expanded-main">
                  {{story.main}}
                </div>
                <div class="story-tile__expanded-author">
                  By: {{story.author}}
                </div>
                <a :href="story.url" class="story-tile__button button">
                  Read Full Article
                </a>
              </div>

              <div class="story-tile__background" v-if="story.image">
                <div class="story-tile__background-regular" :style="{backgroundImage: `url(${story.image.url})`}"></div>
                <div class="story-tile__background-blur" :style="{backgroundImage: `url(${story.image.url})`}"></div>
              </div>
            </div>

            <div class="story-tile__inner"></div>
          </div>

        </isotope>
      </div>
    </div>
  </section>
</template>

<script>
  //import Packery from 'packery'
  //
  //
  import isotope from 'vueisotope'
  require('isotope-packery');


  export default {

    components: {
      isotope,
    },
    data() {
      return {
        archiveSearchTerm: '',
        stories: [
          {
            id:1,
            color: 'green', /// green/yellow/orange/dark-green
            type: 'wide', /// wide/text/tall/text-big
            title: 'Story Title',
            main: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
            author: 'First Name Last Name',
            url: 'story-template-1.html',
            image: {
              url: 'assets/story-wide-1.jpg',
            }
          },

          {
            id:2,
            color: 'orange',
            type: 'tall',
            title: 'Story Title',
            main: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
            author: 'First Name Last Name',
            url: 'story-template-2.html',
            image: {
              url: 'assets/story-tall-1.jpg',
            }
          },

          {
            id:3,
            color: 'dark-green',
            type: 'text',
            title: 'Story Title',
            main: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam  Lorem ipsum dolor sit amet.',
            author: 'First Name Last Name',
            url: 'story-template-3.html'
          },


          {
            id:4,
            color: 'orange',
            type: 'text',
            title: 'Story Title',
            main: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            author: 'First Name Last Name',
            url: 'story-template-4.html'
          },


          {
            id:5,
            color: 'yellow',
            type: 'tall',
            title: 'Story Title',
            main: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
            author: 'First Name Last Name',
            url: 'story-template-5.html',
            image: {
              url: 'assets/story-tall-2.jpg',
            }
          },


          {
            id:6,
            color: 'dark-green',
            type: 'wide',
            title: 'Story Title',
            main: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
            author: 'First Name Last Name',
            url: 'story-template-1.html',
            image: {
              url: 'assets/story-wide-2.jpg',
            }
          },


          {
            id:7,
            color: 'dark-green',
            type: 'wide',
            title: 'Story Title',
            main: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
            author: 'First Name Last Name',
            url: 'story-template-2.html',
            image: {
              url: 'assets/story-wide-3.jpg',
            }
          },


          {
            id:8,
            color: 'dark-green',
            type: 'wide',
            title: 'Story Title',
            main: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
            author: 'First Name Last Name',
            url: 'story-template-3.html',
            image: {
              url: 'assets/story-wide-1.jpg',
            }
          },


          {
            id:9,
            color: 'dark-green',
            type: 'text-big',
            title: 'Story Title',
            main: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
            author: 'First Name Last Name',
            url: 'story-template-4.html'
          }
        ]
      }
    },
    mounted() {
    }
  }
</script>
