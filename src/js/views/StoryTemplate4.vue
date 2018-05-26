<template>
  <main class="story-template">
    <div class="story-template-top">
      
      <story-template-hero
        bg="assets/uvm-story-4-hero.jpg"
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
          header: 'Our Best Shot',
          subheader: 'UVM’s Vaccine Testing Center Researchers Combat Disease Worldwide', // optional
          
        },
        introText: {
          style: 'firstletter',
          text: 'Faculty researchers at the Vaccine Testing Center (VTC) of the University of Vermont\'s Robert Larner, M.D. College of Medicine, study human vaccines with the goal of understanding and preventing infectious diseases around the globe. The VTC team is particularly interested in new vaccines with the potential to prevent or control infectious diseases in developing countries. Besides its diverse team of clinicians, study coordinators, scientists, and laboratory personnel, the center depends upon members of the public in order to accomplish its research mission. “Volunteers are critical to our work,” says Professor of Medicine Beth Kirkpatrick, M.D., who has directed the VTC for 12 years, “And our human research studies are designed and performed with rigorous oversight and safety.”'
        },
        article: [
          {
            id: 0,
            style: 'center-image',
            images: [

              {
                title: 'Image Title Other',
                url: 'assets/story-4-1.jpg'
              }
            ],
            paragraphs: [
              {
                text: 'Most recently, this May, the VTC hosted fifteen of the world’s leading Rotavirus researchers at their Symposium on Rotavirus Human Immutnology: Advancing Science, Decreasing Disease. These scientists joined investigators from the VTC to tackle major outstanding scientific issues needed for the control of disease burden from Rotavirus diarrhea, the leading cause of child death due to severe diarrhea.'
              },
              {
                text: 'Before the advent of rotavirus vaccination approximately ten years ago, almost 600,000 child deaths occurred annually due to rotavirus throughout the world; most in infants under the age of one year. Despite the use and success of oral rotavirus vaccines which are greater than 95% efficacious in high income countries, these vaccines are markedly less effective (about 50% effective) in low income countries. In addition, an improved immune marker which can correlate with vaccine- induced protection or identify children at risk of disease, is needed.'
              },
              {
                text: 'Symposium participants met to share their research and experiences toward understanding and improving vaccine performance and the development of new immunology assays to be used as a correlate of protection or risk. Scientists representing The Bill & Melinda Gates Foundation, the non-governmental organization PATH, and the U.S. Centers for Disease Control and Prevention were in attendance. In addition, eleven U.S. and international academic institutions were represented, including those from Columbia, India, and Bangladesh.'
              },
              {
                text: 'One of the VTC’s most important areas of recent work involves a pathogen that affects the developing world, but rarely is seen in the U.S. – cholera. Cholera outbreaks continue to plague areas like South Sudan, Eastern Uganda, and Kerala, India, but there is hope for addressing this infectious disease: In June of 2016, the Food and Drug Administration approved the only vaccine for use in the U.S. to protect against cholera infection. The VTC was one of three national sites to test the vaccine – called Vaxchora – for effectiveness.'
              }
            ]
          },
          {
            id: 2,
            style: 'two-images-alt',
            pad: true,
            images: [

              {
                title: 'Image Title Other',
                url: 'assets/story-4-2a.jpg'
              },

              {
                title: 'Image Title Second',
                url: 'assets/story-4-2b.jpg'
              }
            ],
            paragraphs: [
              {
                text: 'Cholera is an infectious diarrheal disease caused by the bacteria Vibrio cholerae. The infection often occurs in areas with poor sanitation and limited access to safe drinking water. These locations also lack adequate health care, so the risk of severe dehydration and even death is much higher. According to the World Health Organization (WHO), there are an estimated three to five million cases of cholera infection and 100,000 to 120,000 deaths due to the disease annually.'
              },
              {
                text: 'While cholera has been mostly absent for more than 100 years in the U.S., the vaccine will now be available for travelers, emergency aid workers, and military personnel who travel to areas where cholera is common or where there is an ongoing outbreak. Though Vaxchora will initially be available only in the U.S., it is expected to eventually be used around the globe.UVM researchers Caroline Lyon, M.D., MPH, associate professor of medicine, and VTC director Kirkpatrick note that the need for such a vaccine has been critical to addressing the increased number of cholera outbreaks since 2005.'
              },
              {
                style: 'side-quote',
                quote: '“We are proud that our work has led to approval of a vaccine that will impact so many people worldwide.”',
              },
              {
                text: '“Outbreaks occurring after recent natural disasters in Haiti and South Asia demonstrate why the development of a single-dose oral cholera vaccine has been so important.” says Lyon.'
              },
              {
                text: 'The human challenge trials conducted by the Vaccine Testing Center and local volunteers helped gain FDA approval for this groundbreaking vaccine. Despite Vermont’s seemingly odd location for cholera vaccine research, UVM’s involvement is not a fluke.\n“UVM’s Vaccine Testing Center is one of only four or five U.S. sites capable of doing this type of vaccine challenge study, which is why we were approached to participate,” says Kirkpatrick.'
              },
              {
                text: 'In efforts related to cholera research, the VTC has collaborated with the International Center for Diarrheal Disease and Research in Dhaka, Bangladesh, since 2002.  This partnership has yielded valuable information and deep relationships between the two centers. VTC members were featured in a February 2017 New York Times article entitled “Turning the Tide Against Cholera,” which highlighted the low-tech, highly effective treatment for diarrhea that was developed by ICDDR and which the World Health Organization estimates has saved 50 million lives worldwide in the past four decades.'
              },
              {
                text: 'Acute respiratory disease (ARD) due to infection with adenovirus is a major cause of morbidity at military training centers. In addition to ARD, adenovirus infection can cause sore throat, pneumonia, conjunctivitis, and urinary infections. Military recruits are particularly susceptible to illness due to their close living quarters, physical stress, and lack of sleep. When the infection is severe, it disrupts training schedules, can lead to hospitalization, and increases medical costs. This spring, the VTC began testing a modernized vaccine to protect troops against adenovirus.'
              },
              {
                style: 'pre-pad-quote',
                quote: '“We are proud that our work has led to approval of a vaccine that will impact so many people worldwide.”'
              },
              {
                style: 'inline-image',
                image: {
                  title: 'Inline Image Title',
                  url: 'assets/story-4-3.jpg'
                }
              },
              {
                text: 'In the 1960s, the Department of the Army developed a vaccine against adenovirus serotypes 4 and 7, the most common causes of illness due to adenovirus. This vaccine was licensed by Wyeth for use in 1980 and as a result, the incidence of ARD in military recruits decreased significantly. When vaccine production ceased in 1996, the incidence of ARD rose. In 2011, Teva Pharmaceuticals obtained licensure and vaccine was again used to prevent adenovirus infection in military recruits. In 2014, the Department of Defense issued a call to modernize the production of this important vaccine.'
              },
              {
                text: 'The new formulation is being developed by PaxVax, a biotechnology company based in California. The UVM clinical research team, led by Caroline Lyon is evaluating the safety and immunogenicity of this new vaccine.During this study, subjects who meet specific inclusion criteria receive either the currently used adenovirus vaccine or the new vaccine. Subjects are monitored as inpatients at the UVM Clinical Research Center for one week. “Our group has significant experience with both vaccine testing and inpatient studies, and we have successfully worked with PaxVax before, which makes us an ideal candidate to carry out this study,” says Lyon.'
              },
              {
                text: 'Limited treatment options and no vaccines exist to treat or prevent a leading cause of severe diarrhea in infants and young children in the developing world: Cryptosporidium, a single-celled intestinal parasite found in soil, food and water that also causes significant illness and death in immunocompromised individuals. The infection it causes – called cryptosporidiosis or “Crypto” for short – has gained significant attention in the global public health realm and attracted funding to develop new antimicrobial agents to treat the parasitic infection, as well as assess vaccine feasibility.'
              }
            ]
          },
          {
            id: 3,
            style: 'single-image',
            pad: true,
            images: [

              {
                title: 'Image Title Other',
                url: 'assets/story-4-4.jpg'
              }
            ],
            paragraphs: [
              {
                text: 'Researchers from the UVM VTC are testing new therapeutic agents against Cryptosporidium. The team, including Lyon, Kirkpatrick, and Christopher Huston, M.D., and Jon Boyson, Ph.D., are designing a research platform upon which new treatments for Crypto can be tested in humans under a $3.3 million grant from the Bill & Melinda Gates Foundation to UVM. The work is scheduled to be performed over three and a half years.\n“Diarrheal illness caused by Cryptosporidium, and the long-term consequences of this illness has been underappreciated in children in the developing world,” notes Huston. “Fortunately, recent large scale international studies have brought this problem to the attention of the public health community.”'
              },
              {
                text: 'UVM has extensive expertise studying Cryptosporidium. Huston and Kirkpatrick, along with John Barlow, D.V.M., Ph.D., UVM professor of animal sciences, have studied the pathogenic potential and immunology of Cryptosporidium for more than 15 years.“Dr. Huston’s novel high-throughput drug-testing methods have been a major advance in the development of new drugs against Cryptosporidium,” says Kirkpatrick. “This award brings us closer to testing the effectiveness of these drugs in humans.” Lyon provides the clinical expertise in carrying out the clinical trials of Cryptosporidium and the new therapeutics.'
              },
              {
                text: '“The opportunity to combine our laboratory innovation and clinical expertise to address such a globally important need is truly exciting for us and the university,” Lyon says.Sean Diehl, Ph.D., UVM assistant professor of medicine, provides immunology expertise on the project. In addition, at a second research site at the University of Maryland’s (UMD) Center for Vaccine Development, co-investigators Wilbur Chen, M.D., and Myron Levine, M.D., concurrently perform similar work focused on determining the feasibility of vaccine development. Saul Tzipori, D.V.M., Ph.D., of the Cummings School of Veterinary Medicine at Tufts University, works with both teams. His extensive expertise in Cryptosporidium, including unique methods for organism propagation, will be used by the researchers at both UVM and UMD.'
              }
            ]
          }
        ]
      } 
    }
    
  }
</script>