<template>
  <main class="story-template">
    <div class="story-template-top">
      
      <story-template-hero
        bg="assets/uvm-story-1-hero.jpg"
        scroll="true"
        :textData="heroText"> <!-- fed by object in data currently-->
      </story-template-hero> 
      <first-letter-intro :text="introText.text" v-if="introText.style === 'firstletter'"></first-letter-intro>

    </div>
    <div class="story-section__wrapper">
      <story-template-section
        v-for="(articleSection, index) in article"
        :key="articleSection.id"
        :article="article"
        :nav="true"
        :articleSection="articleSection"
        :class="`${ index === article.length - 1 ? 'story-section--last' : ''}`"
        :id="`story-section--${index}`">
      </story-template-section>
      <div class="container story-section__end">
        <div class="row">
          <div class="column large-7 large-offset-1">
            <div class="divider"></div>
            <a href="#" class="button-green">
              support UVM
            </a>
          </div>
        </div>
      </div>
    </div>
    <related-stories></related-stories>
  </main>
</template>
<script>
  import StoryTemplateHero from '../components/StoryTemplateHero.vue'
  import StoryTemplateSection from '../components/StoryTemplateSection.vue'
  import RelatedStories from '../components/RelatedStories.vue'
  import FirstLetterIntro from '../components/FirstLetterIntro.vue'

  export default {
    components: {
      StoryTemplateHero,
      StoryTemplateSection,
      RelatedStories,
      FirstLetterIntro
    },
    data() {
      return {
        heroText: { 
          header: 'Climate of Change',
          subheader: 'UVM faculty add to the body of knowledge on climate change effects around the world and close to home', // optional
          author: 'Joshua Brown and Jeffrey Wakefield' // optional
        },
        introText: {
          style: 'firstletter',
          text: 'Across the University of Vermont, faculty members are pursuing research and leading initiatives to understand and potentially impact the slow, sure, and perilous changes in the Earth’s climate caused by humankind’s industrialization of the planet over the last three centuries. The following is just a sampling of the scholarly work and community action taking place that is influenced by this vital and controversial topic'
        },
        article: [
          {
            id: 0,
            title: 'Leading Assessment in the&nbsp;Northeast',
            images: [
              {
                title: 'Image Title',
                url: 'assets/story-1-1a.jpg'
              },

              {
                title: 'Image Title Other',
                url: 'assets/story-1-1b.jpg'
              }
            ],
            paragraphs: [
              {
                text: 'Lesley-Ann Dupigny-Giroux, Ph.D., chair of the Department of Geography, was named regional lead of the northeast chapter of the fourth National Climate Assessment (NCA) in November of 2016. Dupigny-Giroux was selected from nearly 200 experts across the United States nominated by her peers to serve as author on NCA4.'
              },
              {
                text: 'David Reidmiller, director of the National Climate Assessment, described her as having “a unique set of qualifications, experiences, and perspectives that will elevate the utility of the Northeast Chapter -- and the NCA4 as a whole.” The National Climate Assessment is the U.S. Government’s premier resource for articulating the risks posed to the nation by climate change, as well as what is being and can be done to minimize those risks.  It is an inter-agency effort, bringing together experts from not only the 13 federal agencies of the U.S. Global Change Research Program, but the broader federal government, and hundreds of experts in the academic, non-profit, and private sectors.'
              },
              {
                text: 'Dupigny-Giroux is also the State Climatologist for Vermont. Her work takes her across Vermont to assist colleagues in state agencies dealing with transportation, emergency management, agriculture, and forestry, as well as outreach to the state’s legislators, to help plan for and adapt to climate change. She is an expert in floods, droughts and severe weather and the ways in which these affect Vermont\'s landscape and people.'
              },
              {
                text: 'In 2016, Dupigny-Giroux was also one of the lead organizers of the 14th Annual Climate Prediction Applications Science Workshop in Burlington. The international conference, launched in 2002 by the National Weather Service’s Climate Services Division, brought together a diverse group of climate researchers, climate product developers, and climate information users to share developments in'
              },
            ]
          },
          {
            id: 1,
            title: 'What We Think About Climate',
            style: 'single-image',
            images: [

              {
                title: 'Image Title Other',
                url: 'assets/story-1-2a.jpg'
              }
            ],
            paragraphs: [
              {
                text: 'Research published in 2016 by Meredith Niles, Ph.D., of the Department of Nutrition and Food Sciences in the journal Global Environmental Change suggests that Irrigation systems designed to buffer farmers from the effects of a warming planet may be causing them to think their local area is cooler and wetter than it is -- perceptions that other studies suggest may slow their efforts to address climate change. The paper is the first to show the impact of infrastructure on climate perception.'
              },
              {
                text: 'The research compares the climate record since 1980 of two wine producing regions in New Zealand, Marlborough and Hawke\'s Bay, with resident farmers\' perceptions of climate change. Both areas rely heavily on irrigation for growing grapes and other crops.'
              },
              {
                text: '“This study is the first to suggest that infrastructure like irrigation that can help farmers deal with the climate may actually affect how they perceive climate change,” said Niles. “What may have previously been dry pasture is now lush with green leaves and grapes. It’s not surprising that some farmers believe precipitation has increased.”'
              },
              {
                text: 'The findings are especially significant because of their behavioral implications. In an earlier paper, in PLoS One, Niles showed that experience with, and belief in, human-induced climate change, was necessary for farmers to want to reduce their greenhouse gas impacts and adopt adaptive strategies. Absent these experiences and beliefs, farmers indicated they would be less likely to make these behavioral changes.'
              },
              {
                text: '"This could be a significant factor we\'re overlooking," she said. "While many of these infrastructure systems are critical to help us adapt and manage the climate, they might also influence how we perceive change. And given that experience with climate change is shown to be a critical factor for behavior change and policy support, this might have profound effects.”'
              },
            ]
          },
          {
            id: 2,
            title: 'Mountaintops, Clean Water, and Climate Change',
            style: 'fullwidth',
            images: [

              {
                title: 'Image Title Other',
                url: 'assets/story-1-3.jpg'
              }
            ],
            paragraphs: [
              {
                text: 'Mountains are far more than rocks. They also confer various natural benefits— half the world’s drinking water, for example filters through high-elevation forests, plants, and soils.'
              },
              {
                text: 'Nathan Sanders, Ph.D., — an ecologist at the University of Vermont and director of UVM\'s Environmental Program — helped lead, a first-of-its kind study, published in the journal Nature in February 2017, that shows how these mountain ecosystems around the globe may be threatened by climate change.Rising temperatures over the next decades appear likely to “decouple” key nutrient cycles in mountain soils and plants, an international team of sixteen scientists reports in the journal. Their study suggests that this is expected to disrupt the function of mountaintop ecosystems, as plant communities above and at treeline are thrown into turmoil faster than trees can migrate uphill in a warmer world.'
              },
              {
                style: 'with-quote',
                quote: '“Humanity relies on mountains”',
                text: 'says the new study that gathered data at treeline in New Zealand, Colorado, Canada, Australia, central Europe, Japan and Patagonia.'
              },
              {
                text: '“We found in all these places that temperature change drives many other kinds of change, potentially disturbing biodiversity, and that could have a profound effect on the ecosystem services mountains provide to people—like clean water.”'
              },
              {
                text: 'The new study overcame a problem researchers have wrestled with for years: that the effects of climate change occur over a much longer time than the duration of traditional scientific experiments.'
              },
              {
                text: 'The study’s predictions are worrisome. For example, “we see that at lower elevations the nitrogen cycle speeds up with warming,” says co-author UVM ecologist Aimée Classen, Ph.D. So the scientists expect that global warming will improve the nitrogen nutrition available to mountain plants. However, decreasing elevation did not increase the availability of phosphorus, another key nutrient for plants. In other words, as mountaintops warm, “you\'re like to get this disconnect—a decoupling—between the balance of those two nutrient cycles that are needed to build plant materials,” Classen says. Over decades and centuries, this lost balance between nitrogen and phosphorus could “slow productivity,” of mountaintop ecosystems, she says, threatening their health and the downslope benefits they provide to other plants, animals and people.'
              },
              {
                text: '“All the climate models assume that plants can just march up the mountains as it gets warmer,” says UVM’s Classen, an associate professor in the Rubenstein School of Environment and Natural Resources. “But this study shows that march might not be so easy.”'
              },
              {
                text: '“This study looks at mountains to show how ecological linkages can become unlinked with climate warming,” says UVM’s Nathan Sanders, “and shows that it’s a global phenomena.”'
              },
            ]
          },
          {
            id: 3,
            title: 'Greenland on Thin Ice?',
            style: 'darker',
            paragraphs: [
              {
                text: 'The ice sheet covering Greenland is four times bigger than California — and holds enough water to raise the global sea level more than twenty feet if it were to melt. Today, sea levels are rising, and the melting of Greenland is a major contributor. UVM geologist Paul Bierman, Ph.D., from the College of Arts and Sciences and his students have traveled to this remote island many times, seeking to better understand: how fast could Greenland melt in a warming world?'
              },
              {
                text: 'Bierman’s latest study, published in December 2016 in the journal Nature, provides powerful new insight into this question—and generated media stories around the world, including in TIME magazine, Scientific American, the BBC, Popular Science, Agence France-Presse, and many other outlets.“The melting we are seeing today,” Bierman says, “may be out of the bounds of how the Greenland ice sheet has behaved for many millions of years.”To make better predictions about the future of the ice sheet, Bierman and other scientists have tried to understand its past, hoping to glean what the ice was doing millions of years ago when the Earth was three or more degrees Fahrenheit warmer than it is now. But their understanding of the ice sheet\'s complex behavior before about 125,000 years ago has been fragmentary at best.'
              },
              {
                text: 'Bierman’s Nature study—with one of his students and a team of other scientists—was paired with another study in the journal. Both applied an innovative new technique: using radioactive isotopes found in quartz to estimate how long the island\'s bedrock was exposed to the sky versus buried under the ice. This approach allowed the scientists to peer into the deep history of the Greenland ice sheet, looking back millions of years farther than previous techniques allowed. But the new, deeper view raised an important scientific debate about the ice sheet’s behavior, which plays out in recent media coverage.'
              },
              {
                style: 'photo-quote',
                photo: {
                  url: 'assets/story-1-4.jpg'
                },
                quote: '“We must recognize the importance of advancing polar science to understand how our world works. And, right now, because we\'re pumping huge plumes of greenhouse gases into the atmosphere, we really need to know how our world works,”',
                author: 'Bierman'

              }
            ]
          },
          {
            id: 4,
            title: 'Climate Change and Lake Champlain',
            style: 'images-below-header',
            images: [
              {
                title: 'Image Title',
                url: 'assets/story-1-5a.jpg'
              },

              {
                title: 'Image Title Other',
                url: 'assets/story-1-5b.jpg'
              }
            ],
            paragraphs: [
              {
                text: 'Closer to home, new research published in the journal Environmental Research Letters in November 2016 suggests that Lake Champlain may be more susceptible to damage from climate change than was previously understood—and that, therefore, the rules created by the Environmental Protection Agency to protect the lake may be inadequate to prevent algae blooms and water quality problems as the region gets hotter and wetter.'
              },
              {
                text: '“This paper provides very clear evidence that the lake could be far more sensitive to climate change than is captured by the current approach of the EPA,” says UVM professor Asim Zia, Ph.D., the lead author of the study. “We may need more interventions—and this may have national significance for how the agency creates regulations.”'
              },
              {
                text: 'The study, led by a team of ten scientists from UVM and one from Dartmouth College, used a powerful set of computer models that link the behavior of social and ecological systems. Their results show that accelerating climate change could easily outpace the EPA’s land-use management policies aimed at reducing the inflow of pollution from agricultural runoff, parking lots, deforestation, cow manure, lawn fertilizer, pet waste, streambank erosion—and other sources of excess phosphorus that cause toxic algae and lake health problems.'
              },
              {
                text: 'By connecting sub-models—of human behavior and land use, watershed dynamics, global climate models “downscaled” to the local region, and the hydrology of the lake itself—the overall model links together “the behavior of the watershed, lake, people and climate,” said Judith Van Houten, Ph.D., UVM professor of biology, director of Vermont EPSCoR, and co-author on the study. This provides “a way forward to pull back the veil that often surrounds effects of climate change,” she says.'
              },
              {
                text: 'UVM hydrologist Arne Bomblies, Ph.D., a co-author on the study, noted that, “We show through this modeling work the importance of a more comprehensive consideration of climate change impact mechanisms to achieve water quality goals, and the need to adequately address climate change uncertainty.”'
              },
              {
                text: '“Lake Champlain’s future is sensitive to climate change,” Bomblies said, “and similar challenges are faced by other impaired waters throughout the United States.”'
              },
            ]
          }
        ]
      }
    }
  }
</script>