<template>
  <section class="story-section" :class="`${articleSection.style ? 'story-section--'+articleSection.style : 'story-section--two-images'} ${articleSection.modifier ? 'story-section--'+articleSection.modifier : ''}`">
    

    <div class="image-wrap" v-if="articleSection.images">
      <div class="container" v-if="!articleSection.style || articleSection.style === 'images-below-header' || articleSection.style === 'two-images-alt'" >
        <div class="row">
          <div class="column story-section__image-column">
            
            <div class="story-section__image" :class="['story-section__image--'+index]" v-for="(image, index) in articleSection.images" >
              <img :src="image.url" :alt="image.title">  
              <div class="story-section__image-inner-helper story-section__image-inner-helper--0"></div>
              <div class="story-section__image-inner-helper story-section__image-inner-helper--1"></div>
            </div>
            
          </div>
        </div>
      </div>

      <div v-else>
        
        <div class="story-section__image" :class="['story-section__image--'+index]" v-for="(image, index) in articleSection.images" >
          
          <img v-if="articleSection.style !== 'fullwidth'" :src="image.url" :alt="image.title">
          <div class="story-section__image-inner" :style="{'background-image': `url(${image.url})`}" v-else></div>

          <div class="story-section__image-inner-helper story-section__image-inner-helper--0"></div>
          <div class="story-section__image-inner-helper story-section__image-inner-helper--1"></div>
          <story-full-screen v-if="articleSection.style === 'fullwidth'" :superParent="imageWrap">
            <div class="story-section__full-screen-fill" :style="{'background-image': `url(${image.url})`}"></div>
          </story-full-screen>
        </div>

      </div>
        

      <div class="story-section__image-helper">
        <div class="story-section__image-helper-top"></div>
        <div class="story-section__image-helper-bottom"></div>
      </div>
    </div>
    <div class="container title-wrap" v-if="articleSection.title">
      <div class="row">
        <div class="column large-7 large-offset-1">
          

          <h3 class="story-section__title" v-html="articleSection.title">
          </h3>
        </div>
      </div>
    </div>
    <div class="container paragraph-wrap">
      <div class="row">
        <div class="column" :class="{'large-7': nav | articleSection.pad, 'large-offset-1': nav, 'large-8': !nav, 'large-offset-2': !(nav || articleSection.pad), 'large-offset-3': articleSection.pad}">

          <story-navigation v-if="nav" :article="article" :currentSection="articleSection"></story-navigation>


          <div v-for="paragraph in articleSection.paragraphs">
            <p v-if="!paragraph.style">
              {{ paragraph.text }}  
            </p>
            <span v-if="paragraph.style === 'with-quote'">
              <p class="story-section__quote">
                {{ paragraph.quote }}
              </p>
              <p>
                {{ paragraph.text }}
              </p>
            </span>
            <div class="story-section__photo-quote" v-if="paragraph.style === 'photo-quote'">
              <div class="story-section__photo-quote-image">
                <div class="story-section__photo-quote-image-inner">
                  
                  <img :src="paragraph.photo.url" alt=""> 

                  <div class="story-section__photo-quote-ring-wrapper">
                    
                    <div class="story-section__photo-quote-ring" :style="{transform: 'rotate('+(Math.floor(Math.random()*360))+'deg) translate(40%,0%)'}">
                      <div class="story-section__photo-quote-ring-inner">
                        <div class="story-section__photo-quote-ring-innest"></div>
                      </div>
                    </div>
                  </div>
                  <div class="story-section__photo-quote-circle"></div>
                </div>

              </div>
              <div class="story-section__photo-quote-link"></div>
              <div class="story-section__photo-quote-main">
                
                <p class="story-section__photo-quote-text">
                  {{ paragraph.quote}}
                </p>
                <p class="story-section__photo-quote-author">
                  -{{ paragraph.author }}
                </p>
              </div>
            </div>
            <div class="story-section__inline-image" v-if="paragraph.style === 'inline-image'">
              <img :src="paragraph.image.url" :alt="paragraph.image.title">
            </div>
            <p class="story-section__inline-quote" v-if="paragraph.style === 'inline-quote'">
              {{ paragraph.quote }}
            </p>

            <div class="story-section__inline-quote-huge" v-if="paragraph.style === 'inline-quote-huge'">
              <p>
                {{ paragraph.quote }}
              </p>
            </div>
            
            <div class="story-section__side-quote" v-if="paragraph.style === 'side-quote'">
              <p class="story-section__side-quote-text" v-html="paragraph.quote">
              </p>
              <p class="story-section__side-quote-author">
                -{{ paragraph.author }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  </section>
</template>
<script>

  import StoryNavigation from '../components/StoryNavigation.vue'
  import StoryFullScreen from '../components/StoryFullScreen.vue'
  export default {
    components: {
      StoryNavigation,
      StoryFullScreen
    },
    data() {
      return {
        imageWrap: null
      }
    },
    props: [
      'nav', 
      'article',
      'articleSection' 
    ],
    mounted() {
      this.imageWrap = this.$el.querySelector('.image-wrap')
    }
    
  }
</script>