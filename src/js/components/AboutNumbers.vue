<template>
  <section class="about-numbers">
    <div class="container">
      <div class="desktop-v">
        <div class="row">
        <div class="col-sm-12 columns">
          <div class="masonry-css">
            <div class="masonry-css-item number-view" v-for="number in numbers">
              <img v-bind:src="'/assets/' + number.media " v-if="number.media" :style="number.style"  /> 
              <div class="number-desc" v-if="number.desc" v-html="number.desc">{{number.desc}} </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="mb-version">
        <div class="row">
        <div class="col-sm-12 columns">
          <ul class="mb-numbers number-view">
            <li v-for="mbnumber in mbnumbers">
              <img v-bind:src="'/assets/' + mbnumber.media " v-if="mbnumber.media" :style="mbnumber.style"  />
              <div class="number-desc" v-if="mbnumber.desc" v-html="mbnumber.desc">{{mbnumber.desc}} </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
      
    </div>
  </section>
  
</template>

<script>
  if(navigator.userAgent.indexOf('Mac') > 0) {
    document.getElementsByTagName('body')[0].className += " mac-os";
  }
  if(navigator.userAgent.indexOf('Chrome') > 0) {
    document.getElementsByTagName('body')[0].className += " chrome";
  }
  

  export default {
    data(){
      return {
        numbers: [
          {
            style: 'height: 205px; width: 100%',
            media: 'about-number-1.jpg',
            desc: '<p class="green undergraduate"><span class="font">10,267</span></span> <br> <span class="font">undergraduate</span></p>'
          },
          {
            desc: '<p class="gray graduate"><span>1,462</span><br><span>Graduates</span></p>'
          },
          {
            desc: '<p class="commercial"><span>Sources of Grants<br> &amp; Contracts:</span> <br><span>2%</span><br><span>commercial</span></p>'
          },
          {
            desc: '<p class="gray medical"><span>461</span><br> <span>Mediacl</span></p>'
          },
          {
            desc: '<p class="green program"><span>8</span><br><span>Interdisciplinary <br> Graduate Programs</span></p>'
          },
          {
            desc: '<p class="gray state"><span>Sources of Grants & Contracts </span><br><span>10.1% </span><br><SPAN>State</span></p>' 
          },
          {
            desc: '<p class="yellow funding"><span class="font">$123</span> <br><span class="font">million</span><br><span class="font">in external grant <br>funding</span></p>'
          },
          {
            class: 'uvm-img',
            style: 'height: 280px;}',
            media: 'about-number-2.jpg',
            desc: '<p class="green uvm"><span>40%</span><br><span>UVM Undergraduate Participation in <br> Research </span><br><span>(Based on 2017 National Survey of <br> Student Engagement)</span></p>'
          },
          {
            desc: '<p class="awards"><span>715</span><br><span>sponsored program <br> awards</span></p>'
          },
          {
            desc: '<p class="yellow extension"><span>Sponsored Awards by Purpose</span><br><span>Research: 72%<br>Instruction: 6%<br>Public Service: 13%<br>Extension: 9%</span></p>'
          },
          { 
            desc: '<p class="green faculty"><span>1600</span><br><span>Full and part time <br>faculty</span></p>'
          },
          {
            desc: '<p class="yellow2 foundation"><span>Sources of Grants<br> & Contracts: </span><br><span>1.7%</span><br><span>Foundation</span></p>'
          },
          {
            desc: '<p class="gray masters"><span>50 </span><br><span>Masters<br> Degree Programs</span></p>'
          },
          {
            desc: '<p class="yellow md"><span>1M.D. </span><br><span>Program</span></p>'
          },
          {
            style: 'height: 131px; width: 100%',
            media: 'about-number-3.jpg',
            desc: '<p class="gray doctoral"><span>22</span><br><span>Doctoral</span> <br> <span>Programs</span></p>'
          },
          {
            desc: '<p class="green federal"><span>Sources of Grants<br> & Contracts: </span><br><span>82.4%</span><br><span>Federal</span></p>'
          },
        ],
        mbnumbers: [
          {
            style: 'display: none',
            media: 'about-number-1.jpg',
            desc: '<p class="green undergraduate"><span class="font">10,267</span></span> <br> <span class="font">undergraduate</span></p>'
          },
          {
            desc: '<p class="gray graduate"><span>1,462</span><br><span>Graduates</span></p>'
          },
          {
            desc: '<p class="yellow funding"><span>$123 million</span><br><span>in external grant funding</span></p>'
          },
          {
            class: 'uvm-img',
            style: '',
            media: 'mb-about-number2.jpg',
            desc: '<p class="green uvm"><span>40%</span><br><span>UVM Undergraduate <br> Participation in Research </span><br><span>(Based on 2017 National Survey of Student <br> Engagement)</span></p>'
          },
          {
            desc: '<p class="commercial"><span>Sources of Grants<br> &amp; Contracts:</span> <br><span>2%</span><br><span>commercial</span></p>'
          },
          {
            desc: '<p class="gray medical"><span>461</span><br> <span>Mediacl</span></p>'
          },
          {
            desc: '<p class="green program"><span>8</span><br><span>Interdisciplinary <br> Graduate Programs</span></p>'
          },
          {
            desc: '<p class="awards"><span>715</span><br><span>sponsored <br> program awards</span></p>'
          },
          {
            style: 'height: 131px; width: 100%',
            media: 'about-number-3.jpg',
          },
          {
            desc: '<p class="yellow2 foundation"><span>Sources of Grants & Contracts: </span><br><span>1.7%</span> <span>Foundation</span></p>'
          },
          {
            desc: '<p class="gray doctoral"><span>22</span><br><span>Doctoral</span> <br> <span>Programs</span></p>'
          },
          { 
            desc: '<p class="green faculty"><span>1600</span><br><span>Full and part <br>time faculty</span></p>'
          },
          {
            desc: '<p class="yellow md"><span>1M.D. </span><br><span>Program</span></p>'
          },
          {
            desc: '<p class="gray masters"><span>50</span> <span>Masters<br> Degree Programs</span></p>'
          },
          {
            style: '',
            media: 'mb-about-number.jpg',
          },
          {
            desc: '<p class="gray state"><span>Sources of Grants & Contracts </span><br><span>10.1% </span><br><SPAN>State</span></p>' 
          },
          {
            desc: '<p class="green federal"><span>Sources of Grants & Contracts: </span><br><span>82.4%</span><br><span>Federal</span></p>'
          },
          {
            desc: '<p class="yellow extension"><span>Sponsored Awards by Purpose</span><br><span class="list"><span>Research: 72%</span><span>Instruction: 6%</span><span>Public Service: 13%</span><span>Extension: 9%</span></span></p>'
          },
          
        ]
      }
    }
  }
</script>


