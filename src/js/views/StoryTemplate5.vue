<template>
  <main class="story-template">
    <div class="story-template-top">
      
      <story-template-hero
        bg="assets/uvm-story-5-hero.jpg"
        scroll="true"
        :textData="heroText"> <!-- fed by object in data currently-->
      </story-template-hero> 
      <first-letter-intro :text="introText.text" v-if="introText.style === 'firstletter'"></first-letter-intro>
  
      

      <div class="story-section__wrapper">
        <story-template-section
          v-for="(articleSection, index) in article"
          :key="articleSection.id"
          :articleSection="articleSection"
          :class="`${ index === article.length - 1 ? 'story-section--last' : ''}`"
          :id="`story-section--${index}`">
        </story-template-section>
        <div class="container story-section__end">
          <div class="row">
            <div class="column large-7 large-offset-3">
              <div class="divider"></div>
              <a href="#" class="button-green">
                support UVM
              </a>
            </div>
          </div>
        </div>
      </div>
      <related-stories></related-stories>
    </div>

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
    data () {
      return {
        heroText: { 
          header: 'The Young Brain',
          subheader: 'UVM researchers probe the formative years of the human mind.', // optional
          author: 'Jennifer Nachbur and Carolyn Shapiro' // optional
        },
        introText: {
          style: 'firstletter',
          text: 'Adolescence is a time of extraordinary physical, emotional, and intellectual growth as well as a changing social environment full of new challenges and opportunities that help shape a young person’s adult identity, health and well-being. There is much to learn about how varied adolescent experiences -- participation in extracurricular activities, playing video games, sleep habits, head injuries from sports, experimentation with alcohol, tobacco, marijuana or other substances -- affect development. This is particularly true in a rapidly changing world dominated by social media and other forms of communication in which adolescents readily engage.'
        },
        article: [

          {
            id: 0,
            style: 'center-image',
            images: [

              {
                title: 'Image Title Other',
                url: 'assets/story-5-1.jpg'
              }
            ],
            paragraphs: [
              {
                text: '“We know the brain is still developing well into the mid-20s, making it vulnerable to a host of influences,” says National Institutes of Health Director Francis S. Collins, M.D., Ph.D.'
              },
              {
                text: 'Faculty members across UVM are paying close attention to the young brain in their research. James Hudziak, M.D., professor of psychiatry and director of the Vermont Center for Children, Youth and Families, and his colleague Matthew Albaugh, Ph.D., turned their attention in recent years to children 6 to 18 years old. They found that children who play the violin or study piano could be learning more than just Mozart: musical training might also help kids focus their attention, control their emotions and diminish their anxiety. Their research was published in the Journal of the American Academy of Child & Adolescent Psychiatry. The authors noted that their study was “the largest investigation of the association between playing a musical instrument and brain development.” They found that music playing altered the motor areas of the brain, because the activity requires control and coordination of movement. Even more important to Hudziak were changes in the behavior-regulating areas of the brain. For example, music practice influenced thickness in the part of the cortex that relates to “executive functioning, including working memory, attentional control, as well as organization and planning for the future.”'
              },
              {
                text: 'In a different study, Hudziak has looked into the potential dangers of ice hockey for young athletes. He and Albaugh and UVM colleagues Catherine Orr, Ph.D., and Richard Watts, Ph.D., have published a groundbreaking study in 2015 in the Journal of Pediatrics that showed a relationship between concussions sustained by young ice hockey players and subtle changes in the cortex.The UVM team used advanced imaging technology and cognitive testing to assess 29 Vermont ice hockey players between ages 14 and 23, some diagnosed with a sports-related concussion. As the severity of the athletes’ concussion symptoms increased, the researchers found, the cortex got thinner in areas where it should be dense at those players’ ages – areas that relate to attention control, memory, and emotion regulation.'
              },

              {
                style: 'inline-quote-huge',
                quote: 'This research will generate a vastly large and detailed dataset that will yield insights for decades to come into the transition from childhood to adolescence through to adulthood.'
              },
              {
                text: 'During the course of the next decade, the ABCD study scientists will use advanced vbrain imaging, interviews, and behavioral testing to determine how childhood experiences interact with each other and with a child’s changing biology to affect brain development and – ultimately – social, behavioral, academic, health and other outcomes.'
              },
              {
                text: 'Understanding these relationships may help reveal the biological and environmental building blocks that best contribute to successful and resilient young adults. This enhanced knowledge also may lead to ways to predict potential developmental problems so that they can be prevented or reversed. Families that volunteer will be part of groundbreaking research that promises to inform future educational strategies, child development innovations, research priorities, more effective public health interventions, and science-based policy decisions.'
              },
              {
                text: 'The ABCD Coordinating Center is housed at the University of California at San Diego and recruitment will be conducted through schools at 19 study sites across the country. Other UVM faculty participating on the ABCD study research team include Albaugh and Hudziak, Julie Dumas, Ph.D., associate professor of psychiatry; and Richard Watts, Ph.D., associate professor of radiology. Another effort focuses on a common but little understood condition. Despite diagnoses for attention-deficit/hyperactivity disorder (ADHD) occurring in a reported 11 percent of U.S. school-aged kids, clinicians still don’t fully understand the disorder’s underlying causes. Now a brain marker may be on the horizon, thanks to a new approach by UVM faculty that provides evidence of a relationship between brain structure and dimensional measures of ADHD symptoms. The study’s results were reported in March in the journal Biological Psychiatry.'
              },
              {
                text: 'Using data from the European IMAGEN study, researchers, including Matthew Albaugh took a multi-informant approach to investigate whether or not dimensional measures of ADHD symptoms and brain imaging data could shed new light on the root source of ADHD’s symptoms, including inattention, hyperactivity and impulsivity. Their work represents the largest structural imaging study to date on ADHD symptoms in adolescents.'
              }
            ]
          },
          {
            id: 2,
            style: 'two-images-alt',
            modifier: 'alt-color',
            pad: true,
            images: [

              {
                title: 'Image Title Other',
                url: 'assets/story-5-2a.jpg'
              },

              {
                title: 'Image Title Second',
                url: 'assets/story-5-2b.jpg'
              }
            ],
            paragraphs: [
              {
                style: 'inline-quote',
                quote: '“Few studies have examined the relationship between ADHD symptomatology and brain structure in population-based samples,”'
              },
              {
                text: 'say Albaugh and the study’s authors, who rather than taking what is called a “categorical” approach – a comparison of ADHD patients and controls – took a quantitative, dimensional, multi-informant approach. This method dovetails with work done by UVM’s Thomas Achenbach, Ph.D., and colleagues, revealing aspects of dimensionality with regard to many psychiatric conditions, including ADHD.'
              },
              {
                text: '“It’s not whether or not one has attention problems, it is the degree to which one is inattentive,” says Albaugh.   For the study, Albaugh and his colleagues, including Garavan, Potter, Robert Althoff, M.D., and Scott Mackey, Ph.D., examined psychopathology and imaging data from 1538 adolescents. The data included parent ratings of ADHD symptoms collected through the Strengths and Difficulties Questionnaire (SDQ), and self-reports from the adolescents in the study through the youth version of the SDQ. The team also derived ADHD symptom counts from parent interviews – and then related ADHD symptom counts to brain structure.'
              },
              {
                style: 'side-quote',
                quote: '“It’s not whether or not one has attention problems, it is the degree to which one&nbsp;is inattentive,”',
                author: 'Albaugh.'
              },
              {
                text: 'When they overlaid the imaging results from all of their analyses – using behavioral questionnaire data and symptom counts – they found an anatomical region of convergence; ADHD symptoms reported by parents and adolescents were related to reduced gray matter volume in an area of the prefrontal cortex, the ventromedial prefrontal cortex (vmPFC). This relationship was particularly true for symptoms of inattention.The team also found that this area of anatomical convergence was related to an objective behavioral measure of attention that has been previously associated with ADHD -- reaction time variability. Past research by others has shown that ADHD youths exhibit more variability in their response times, and this is believed to reflect inattention and distractibility. Albaugh and colleagues found that greater variability in reaction time was associated with reduced volume in the vmPFC.'
              },
              {
                text: 'The connection of reduced vmPFC volume to inattention sets the stage for follow-up research, says Albaugh, who believes these findings could affect future ADHD interventions to strengthen this region of the brain. The work may also help to identify which youth go on to experience elevated symptom levels later in adulthood.'
              },
              {
                text: '“We are finding that volume in this brain area predicts symptom change from adolescence to adulthood,” says Albaugh. “It’s exciting to think that, down the road, there might be real clinical utility to these results.”'
              },
            ]
          }

        ]
      } 
    }
    
  }
</script>