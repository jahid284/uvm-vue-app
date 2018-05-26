<template>
  <section class="stories-search">
    <div class="container">
      <div class="row">
        <div class="column">
          
          <div class="stories-search__label">Archive stories</div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <form class="stories-search__input-wrapper" aria-label="Search Archive Stories">
            
            <input type="text" class="stories-search__input"  title="Search" aria-label="Search" aria-haspopup="false" v-model="archiveSearchTerm" placeholder="Enter Search" @keydown.enter.stop.prevent="submitSearch">
            <button   @click="submitSearch" class="stories-search__input-submit">➔</button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <isotope 
            :options="{
                itemSelector: '.archive-story',
                layoutMode: 'packery',
              }"
            :item-selector="'archive-story'"
            :list="currentFilteredArchive"
            class="archive-story__wrapper">
            

            <div class="archive-story" v-for="item in currentFilteredArchive" :key="item.id" aria-label="Archived Story">
              <div class="archive-story__pad">
                <div class="archive-story__inner">

                  
                  <div class="archive-story__content">
                    <div class="archive-story__title">{{item.title}}</div>
                    <p class="archive-story__main">
                      {{item.main}}
                    </p>
                  </div>

                </div>

                <a :href="item.url" class="archive-story__expand" aria-label="Read full article">
                  <span class="archive-story__expand-inner">
                    
                  </span>
                </a>
              </div>
            </div>

          </isotope>
        </div>
      </div>

      <div class="row">
        <div class="column archive-story__dots">
          
          
          <ul class="archive-story__dots-list" :aria-label="`Active story search page is ${archivePageSelectedMax + 1} out of ${paginatedFilteredArchive.length}`">
            <li v-for="(page, index) in paginatedFilteredArchive.length" class="archive-story__dots-item" :class="{'archive-story__dots-item--active': index === archivePageSelectedMax}" @click="archivePageSelected = index" :aria-label="`Go to search story page ${ index + 1}`"></li>
          </ul>

        </div>
      </div>
    </div>


  </section>
</template>

<script>

  import isotope from 'vueisotope'
  require('isotope-packery');

  const chunk = (arr, n) => {
      return arr.length > 0 ? arr.slice(0,(arr.length+n-1)/n|0).
             map(function(c,i) { return arr.slice(n*i,n*i+n); }) : [];
  }
  export default {
    components: {
      isotope,
    },
    computed: {
      filteredArchive() {
        return this.archiveStoriesPrepared.length > 0 ? this.archiveStoriesPrepared.filter(el => el.titleLowerCase.includes(this.archiveSearchTerm) || el.mainLowerCase.includes(this.archiveSearchTerm)) : [];
      },
      currentFilteredArchive() {
        return this.paginatedFilteredArchive[this.archivePageSelectedMax] || []
      },
      paginatedFilteredArchive() {
        return chunk(this.filteredArchive, 6)
      },
      archivePageSelectedMax() {
        return Math.min(this.paginatedFilteredArchive.length, this.archivePageSelected)
      },
      archiveStoriesPrepared() {
        return this.archiveStories.map(el => { return {...el, main: `${el.main.substring(0, 80)}...`, titleLowerCase: el.title.toLowerCase(), mainLowerCase: `${el.main.substring(0, 80)}...`.toLowerCase() }})
      }
    },
    methods: {
      submitSearch() {
        this.archiveSearchTermSubmitted = this.archiveSearchTerm.toLowerCase()
        return true
      }
    },
    data() {
      return {
        archivePageSelected: 0,
        archiveSearchTerm: '',
        archiveSearchTermSubmitted: '',

        archiveStories: [
          {
            "id": "5a244e8da2dfe51a9f688a89",
            "author": "Hudson Powers",
            "url": "story-template-1.html",
            "tags": [
              "est",
              "ea",
              "culpa",
              "enim",
              "eu"
            ],
            "title": "Proident minim reprehenderit reprehenderit.",
            "main": "Officia culpa in proident ullamco ullamco eu. Nostrud amet reprehenderit irure proident ipsum culpa quis cillum excepteur aliqua quis in. Officia ex mollit do dolore. Sunt proident id eiusmod esse elit veniam incididunt culpa dolore eu nulla laborum dolor adipisicing. Aliquip ipsum fugiat elit tempor ea eiusmod. Dolor excepteur sint pariatur non amet aute commodo dolor cillum."
          },
          {
            "id": "5a244e8d7b4e30473fa47498",
            "author": "Judy Stein",
            "url": "story-template-1.html",
            "tags": [
              "deserunt",
              "consectetur",
              "incididunt",
              "labore",
              "deserunt"
            ],
            "title": "In incididunt labore sint ut anim nostrud aute pariatur ipsum ad et.",
            "main": "Irure commodo est sint tempor culpa tempor in anim ullamco. Sunt reprehenderit sit velit reprehenderit ea reprehenderit officia pariatur esse culpa laboris cillum ad. Eiusmod qui et officia sunt. Nisi nisi pariatur incididunt duis non est cillum laborum enim ut veniam. Eu reprehenderit elit elit velit deserunt et aute ad ipsum. Ad adipisicing ipsum nulla consectetur cupidatat eu nulla et cillum ad nostrud labore."
          },
          {
            "id": "5a244e8db2f42e123da2acd9",
            "author": "Kimberly Allen",
            "url": "story-template-1.html",
            "tags": [
              "exercitation",
              "consectetur",
              "ea",
              "in",
              "voluptate"
            ],
            "title": "Sint anim reprehenderit ullamco fugiat.",
            "main": "Ut sint proident non veniam. Sint enim nostrud laboris ipsum dolore. Ipsum aliquip irure consectetur fugiat aute."
          },
          {
            "id": "5a244e8d23882b246c59b300",
            "author": "Lessie Watts",
            "url": "story-template-1.html",
            "tags": [
              "pariatur",
              "id",
              "minim",
              "sunt",
              "dolore"
            ],
            "title": "Consequat reprehenderit ea Lorem irure tempor nulla qui sunt ullamco.",
            "main": "In esse reprehenderit enim mollit adipisicing sint magna dolor qui. Ut sint exercitation eiusmod culpa. Veniam et veniam pariatur elit eiusmod duis consequat quis laborum proident consectetur reprehenderit laborum duis. Ex Lorem aute anim nisi duis nisi reprehenderit aute sunt deserunt deserunt id dolor."
          },
          {
            "id": "5a244e8d20daf52554589466",
            "author": "Eileen Meyer",
            "url": "story-template-1.html",
            "tags": [
              "qui",
              "Lorem",
              "nostrud",
              "elit",
              "exercitation"
            ],
            "title": "Laboris consequat non pariatur fugiat ut qui ipsum.",
            "main": "Eu Lorem non sit sit ex cillum in id dolore. Sit fugiat exercitation qui duis consequat excepteur excepteur tempor. Irure qui eu irure occaecat nulla anim. Labore voluptate amet proident officia nulla commodo. Laborum ut Lorem exercitation aliquip et labore sunt ex ut. Pariatur sit dolore ex sint eiusmod quis consequat aliqua id et non dolore veniam veniam."
          },
          {
            "id": "5a244e8d2f0efe5ed85a9e8b",
            "author": "Chan Strickland",
            "url": "story-template-1.html",
            "tags": [
              "est",
              "labore",
              "irure",
              "eu",
              "eiusmod"
            ],
            "title": "Culpa sunt dolore incididunt consectetur commodo laboris consectetur.",
            "main": "Incididunt non consectetur laboris qui elit sunt ipsum. Incididunt nulla fugiat proident dolore consectetur ex ad. Velit velit adipisicing laboris do tempor aute incididunt non. Irure nulla labore sint in excepteur. Veniam anim officia nostrud excepteur sit amet laborum id laboris amet. Do ex dolore qui laborum irure consequat non ex ad ad voluptate velit labore cupidatat."
          },
          {
            "id": "5a244e8d85a3a18dea2bcfab",
            "author": "Velasquez Willis",
            "url": "story-template-1.html",
            "tags": [
              "excepteur",
              "nulla",
              "irure",
              "elit",
              "quis"
            ],
            "title": "Elit ullamco sit adipisicing labore elit deserunt reprehenderit mollit nulla do duis velit mollit.",
            "main": "Exercitation laborum laborum ullamco eiusmod. Est dolor voluptate officia irure labore. Nisi exercitation labore veniam sit."
          },
          {
            "id": "5a244e8d282b83c7ba3d9df3",
            "author": "Tammy Delaney",
            "url": "story-template-1.html",
            "tags": [
              "duis",
              "eiusmod",
              "nulla",
              "laborum",
              "velit"
            ],
            "title": "Laborum cupidatat occaecat non incididunt.",
            "main": "Enim deserunt occaecat laborum dolor ullamco velit. Velit incididunt commodo deserunt occaecat ipsum non. In velit sint ad cupidatat pariatur incididunt sit officia irure ad dolor consequat adipisicing quis. Anim ipsum id labore est aliqua anim aute nulla magna. In ut consequat et cupidatat dolore sit consectetur sunt ex eu labore ex sint do."
          },
          {
            "id": "5a244e8d23c573a3632be91e",
            "author": "Barbara Phillips",
            "url": "story-template-1.html",
            "tags": [
              "nulla",
              "ut",
              "dolor",
              "adipisicing",
              "ullamco"
            ],
            "title": "Excepteur nulla sunt officia quis dolor cillum.",
            "main": "Ut id ea reprehenderit in. Ut labore voluptate anim reprehenderit. Consequat ea et commodo nisi dolor velit laborum. Cillum elit anim elit mollit do consectetur aliqua enim quis est occaecat sunt. Culpa incididunt amet id et ut ullamco est irure. Eiusmod eiusmod ad ad anim cupidatat minim voluptate deserunt ipsum Lorem quis esse. Qui do ea anim adipisicing tempor culpa aute excepteur pariatur."
          },
          {
            "id": "5a244e8da0d09e31b0ab428a",
            "author": "Lelia Snyder",
            "url": "story-template-1.html",
            "tags": [
              "ex",
              "consectetur",
              "nulla",
              "velit",
              "dolor"
            ],
            "title": "Aliquip ad excepteur ut aliqua pariatur deserunt ex.",
            "main": "Aliqua sit labore magna proident dolore ullamco ex labore pariatur veniam quis. Exercitation commodo id elit elit. Dolore anim dolore id voluptate proident eu aliqua sunt consequat elit aliquip aliqua excepteur. Consectetur ullamco consectetur occaecat nostrud Lorem velit Lorem ea non nostrud anim laborum. Aliqua mollit proident reprehenderit eiusmod ad sunt nulla fugiat do. Do nostrud non non amet tempor anim adipisicing exercitation amet duis Lorem ut dolore. Nulla magna exercitation proident ut veniam eiusmod enim."
          },
          {
            "id": "5a244e8d3e87e42a57e669b3",
            "author": "Annabelle Alexander",
            "url": "story-template-1.html",
            "tags": [
              "exercitation",
              "laborum",
              "occaecat",
              "cupidatat",
              "tempor"
            ],
            "title": "Velit sit id enim aliquip ad pariatur consectetur ad anim culpa incididunt elit sunt laboris.",
            "main": "Reprehenderit laborum nisi non excepteur velit cupidatat commodo occaecat reprehenderit dolore sint. Mollit ut aute dolore velit consectetur magna aliquip laborum sit consequat. Veniam ea cupidatat eu irure elit eiusmod. Magna sit sint ex amet sit ad officia dolore sunt incididunt pariatur. Quis qui ea officia sit deserunt tempor elit pariatur qui sunt fugiat."
          },
          {
            "id": "5a244e8d86c29f9be1d95a78",
            "author": "Lina Harrell",
            "url": "story-template-1.html",
            "tags": [
              "cupidatat",
              "velit",
              "ex",
              "mollit",
              "ullamco"
            ],
            "title": "Ad sunt in cillum enim culpa officia tempor.",
            "main": "Consequat est fugiat quis proident aliqua proident enim id laborum sit sint. Reprehenderit ullamco adipisicing est excepteur eu sunt duis irure aute minim non eiusmod dolore. Reprehenderit nostrud Lorem eu incididunt esse reprehenderit eiusmod."
          },
          {
            "id": "5a244e8d9c04b7443807b374",
            "author": "Valenzuela Spencer",
            "url": "story-template-1.html",
            "tags": [
              "cillum",
              "eu",
              "nisi",
              "ad",
              "tempor"
            ],
            "title": "Laborum sunt dolore commodo amet laboris ullamco ex nostrud officia.",
            "main": "Anim culpa commodo non duis cillum nisi. In commodo velit laboris officia. Mollit dolore cillum aute et. Magna proident nostrud quis aliquip sint velit exercitation Lorem fugiat laborum."
          },
          {
            "id": "5a244e8da26399449177780b",
            "author": "Randolph Glass",
            "url": "story-template-1.html",
            "tags": [
              "laborum",
              "sunt",
              "cupidatat",
              "commodo",
              "dolore"
            ],
            "title": "Fugiat sint commodo in Lorem anim.",
            "main": "Pariatur commodo sint proident ex exercitation reprehenderit et. Minim ipsum et magna non culpa laboris do esse commodo ea enim aliquip ut ut. Adipisicing ad consectetur cillum voluptate. Exercitation consequat ullamco dolore eu occaecat. Pariatur culpa irure eu nulla irure aute sit esse occaecat consequat deserunt laboris consectetur. Id commodo dolor aute aliquip laboris officia ea."
          },
          {
            "id": "5a244e8de9ee97b0675d4be0",
            "author": "Townsend Malone",
            "url": "story-template-1.html",
            "tags": [
              "anim",
              "labore",
              "officia",
              "ut",
              "ipsum"
            ],
            "title": "Incididunt ut non laborum laborum ea ea aute pariatur reprehenderit est magna do.",
            "main": "Voluptate consectetur irure amet ut irure. Id officia in veniam sunt amet cillum. Enim incididunt voluptate aute laborum ex incididunt id aute. Do veniam consequat quis consectetur do do et proident aute laborum dolore nostrud exercitation aliqua. Amet est amet do labore enim sunt magna nulla sit sint consequat nisi ullamco ex."
          },
          {
            "id": "5a244e8dddffcf4d0907ea1c",
            "author": "Willa Webb",
            "url": "story-template-1.html",
            "tags": [
              "aliqua",
              "quis",
              "Lorem",
              "labore",
              "voluptate"
            ],
            "title": "Aliqua tempor nostrud culpa qui ex aliqua occaecat consectetur duis aliqua qui reprehenderit aute sint.",
            "main": "Do labore nulla consectetur dolore pariatur mollit dolor et nulla. Fugiat enim minim sit nulla sit officia duis. Deserunt ad et aliqua pariatur Lorem mollit. Non magna incididunt duis cillum sint commodo ipsum elit proident ex. Elit anim velit eiusmod ad proident occaecat enim. Dolor nisi occaecat Lorem culpa officia non quis ullamco adipisicing. Voluptate consequat anim incididunt exercitation id eiusmod nulla labore dolore occaecat in nostrud."
          },
          {
            "id": "5a244e8d0cd95452241b1ad6",
            "author": "Maxwell Galloway",
            "url": "story-template-1.html",
            "tags": [
              "aliquip",
              "nisi",
              "ipsum",
              "excepteur",
              "ipsum"
            ],
            "title": "Quis eiusmod nulla esse ullamco nisi commodo esse proident aliqua anim est eu.",
            "main": "Nisi ad duis sit est ex anim proident dolor in. Consectetur veniam exercitation est laboris consequat. Labore ipsum id ex reprehenderit do incididunt exercitation proident ea consequat."
          },
          {
            "id": "5a244e8df0490708ff387070",
            "author": "Whitley Owen",
            "url": "story-template-1.html",
            "tags": [
              "aute",
              "mollit",
              "enim",
              "aliqua",
              "commodo"
            ],
            "title": "Consectetur irure mollit irure esse sint nisi ea cillum.",
            "main": "Sint ipsum id voluptate dolor anim tempor reprehenderit aliqua. Ea quis fugiat officia laboris culpa proident incididunt cupidatat eiusmod sit et dolor proident. Pariatur laborum excepteur excepteur est laborum exercitation Lorem sit commodo sint voluptate excepteur. Ullamco ullamco eiusmod qui est enim amet qui quis sint proident nisi. Dolor proident fugiat ut deserunt."
          },
          {
            "id": "5a244e8d9cb80ede95792c4a",
            "author": "Myers Jones",
            "url": "story-template-1.html",
            "tags": [
              "nostrud",
              "irure",
              "aliquip",
              "reprehenderit",
              "amet"
            ],
            "title": "Velit reprehenderit proident commodo proident cillum eu tempor reprehenderit aute.",
            "main": "Ullamco duis nisi amet ullamco proident nulla incididunt aliquip mollit incididunt eiusmod. Sint ad in labore nostrud in magna cupidatat dolore officia officia. Elit deserunt est eu reprehenderit culpa minim irure."
          },
          {
            "id": "5a244e8d9afd1934e3d8ebb0",
            "author": "Riley Solomon",
            "url": "story-template-1.html",
            "tags": [
              "elit",
              "irure",
              "proident",
              "elit",
              "sint"
            ],
            "title": "Excepteur ipsum occaecat laborum excepteur eiusmod enim.",
            "main": "Nulla officia quis mollit consectetur nulla id. Dolore non nisi amet aliqua. Mollit deserunt minim nulla exercitation commodo commodo excepteur."
          },
          {
            "id": "5a244e8d1edf1e19406da3dd",
            "author": "Eaton Madden",
            "url": "story-template-1.html",
            "tags": [
              "eiusmod",
              "ex",
              "ex",
              "sit",
              "sit"
            ],
            "title": "Non dolore cillum nisi est mollit ullamco non ut occaecat commodo laborum cillum ex sunt.",
            "main": "Anim laborum sit cillum incididunt voluptate esse nulla tempor culpa. Ipsum tempor nostrud aliqua fugiat. Fugiat quis veniam aliquip pariatur commodo. Magna sunt est ut tempor sint aliquip enim velit. Magna labore velit eu duis cillum ullamco Lorem velit sit irure ut mollit. Esse enim deserunt deserunt id commodo cillum ex quis nostrud ipsum est."
          },
          {
            "id": "5a244e8d36ecd0f6fb9612e4",
            "author": "Lowe Cobb",
            "url": "story-template-1.html",
            "tags": [
              "dolor",
              "ad",
              "deserunt",
              "dolor",
              "ex"
            ],
            "title": "Et deserunt ex est est laboris cillum nisi do nulla labore nulla.",
            "main": "Lorem ullamco elit ea reprehenderit. Id officia est ullamco fugiat nostrud deserunt eiusmod ullamco veniam in. Aute consequat commodo est fugiat pariatur sint."
          },
          {
            "id": "5a244e8d35a45e3656c34029",
            "author": "Chavez Whitfield",
            "url": "story-template-1.html",
            "tags": [
              "ipsum",
              "labore",
              "non",
              "Lorem",
              "velit"
            ],
            "title": "Exercitation et ipsum eu eu occaecat.",
            "main": "Sint voluptate ad esse occaecat deserunt nulla elit cillum ut dolore incididunt esse. Nulla nulla sunt sunt occaecat do aliqua. Anim reprehenderit magna velit duis dolore veniam sint amet eiusmod. Veniam dolore sunt non qui voluptate pariatur dolore officia cillum tempor sit excepteur."
          },
          {
            "id": "5a244e8dc1d828e8b0a08f82",
            "author": "Noreen Rodriquez",
            "url": "story-template-1.html",
            "tags": [
              "ex",
              "duis",
              "adipisicing",
              "aliquip",
              "velit"
            ],
            "title": "Nisi quis ullamco fugiat cupidatat occaecat non ut.",
            "main": "Consectetur ad aute ipsum qui eiusmod laboris duis anim exercitation. Qui occaecat dolor qui ullamco magna in sunt ullamco laborum Lorem laboris incididunt. Lorem esse non aliqua ut. Excepteur in cupidatat veniam cupidatat sit dolore eiusmod ex ipsum ipsum deserunt irure ad. Deserunt non eiusmod excepteur eu minim culpa reprehenderit labore est pariatur nulla do. Proident exercitation ipsum tempor et aute minim sint deserunt nisi minim elit."
          },
          {
            "id": "5a244e8d8c2869ba25be9110",
            "author": "Spence Barrett",
            "url": "story-template-1.html",
            "tags": [
              "reprehenderit",
              "duis",
              "non",
              "mollit",
              "non"
            ],
            "title": "Anim non ullamco enim mollit eu esse laborum.",
            "main": "Excepteur est reprehenderit sunt excepteur ea. Velit mollit ut esse sunt nostrud quis qui excepteur consequat. Ipsum excepteur aliquip quis esse ullamco sit ex magna eiusmod et ut dolore. Cillum exercitation nulla ad fugiat anim excepteur nostrud duis nostrud veniam cillum duis duis deserunt. Ut aliqua velit id ex cillum fugiat dolore labore officia."
          },
          {
            "id": "5a244e8dec93b53c33963ab2",
            "author": "Candice Washington",
            "url": "story-template-1.html",
            "tags": [
              "ad",
              "laboris",
              "ipsum",
              "adipisicing",
              "tempor"
            ],
            "title": "Ut velit labore cillum cillum.",
            "main": "Tempor pariatur reprehenderit officia non ut est non sunt voluptate. Nostrud laborum ipsum mollit veniam laboris commodo sit ullamco non fugiat Lorem. Nulla adipisicing eiusmod dolor duis tempor dolore aliquip consequat dolor irure quis velit nostrud. Cillum est occaecat Lorem aliqua ad pariatur labore non in consequat tempor non sunt. Aliquip nostrud Lorem ipsum tempor aute labore adipisicing cupidatat culpa sunt tempor esse. Minim veniam voluptate esse sint sunt proident ex est minim sit dolor commodo sunt esse."
          },
          {
            "id": "5a244e8daaf6de3e11011b75",
            "author": "Lara Acevedo",
            "url": "story-template-1.html",
            "tags": [
              "occaecat",
              "irure",
              "occaecat",
              "proident",
              "tempor"
            ],
            "title": "Voluptate enim proident laboris excepteur et magna culpa eiusmod irure amet exercitation eu ipsum ea.",
            "main": "Excepteur aute nulla fugiat eiusmod anim deserunt exercitation sit ad exercitation ad nulla laboris laborum. Cillum eiusmod excepteur exercitation consequat do enim sunt irure qui qui et anim dolor tempor. Reprehenderit incididunt occaecat deserunt velit pariatur veniam consectetur. Nostrud duis duis fugiat officia incididunt qui excepteur ex aute tempor aliquip nisi."
          },
          {
            "id": "5a244e8db6b787469e710860",
            "author": "Zamora Dale",
            "url": "story-template-1.html",
            "tags": [
              "enim",
              "aute",
              "ipsum",
              "sunt",
              "eiusmod"
            ],
            "title": "Nostrud cupidatat veniam exercitation consequat nostrud ut officia ea.",
            "main": "Cillum quis fugiat eu qui nulla reprehenderit dolor. Consequat est et velit duis quis eiusmod velit ea et proident aliqua proident. Enim aliqua reprehenderit eiusmod esse qui aliqua ullamco Lorem cupidatat reprehenderit. Consequat laborum mollit pariatur voluptate duis cupidatat nisi officia nisi exercitation non. Culpa quis sint amet deserunt exercitation esse consequat laboris occaecat velit esse. Reprehenderit consequat elit nulla Lorem nostrud proident tempor enim. Lorem commodo consequat deserunt minim mollit elit."
          },
          {
            "id": "5a244e8d70c34b5093a25e5b",
            "author": "Ronda Carrillo",
            "url": "story-template-1.html",
            "tags": [
              "occaecat",
              "qui",
              "aliqua",
              "nisi",
              "aliqua"
            ],
            "title": "Cupidatat ex aute nisi ea reprehenderit aliquip aliqua magna ex.",
            "main": "Cillum do deserunt culpa laborum aute pariatur minim aliquip. Est tempor dolor do do sit occaecat consequat irure. Ullamco minim officia excepteur cupidatat voluptate eiusmod ex esse. Ad labore eu labore consectetur id in sit commodo officia nisi amet ullamco ex. Officia elit occaecat eu cillum eiusmod amet elit. Tempor excepteur consectetur excepteur labore incididunt culpa eu aute duis ut. Ea quis consectetur consectetur tempor sunt ea elit consectetur laborum in cillum dolor magna."
          },
          {
            "id": "5a244e8d888d17377cdaa343",
            "author": "Meyer Whitaker",
            "url": "story-template-1.html",
            "tags": [
              "aliqua",
              "aute",
              "minim",
              "do",
              "elit"
            ],
            "title": "Do velit ut eiusmod ullamco do aliquip nulla ut labore incididunt adipisicing.",
            "main": "Eu dolore nisi consectetur aliquip adipisicing id cillum irure velit adipisicing. Commodo ad deserunt deserunt anim deserunt laborum aliquip. Eu ea labore pariatur nisi incididunt dolor."
          }
        ]
      }
    }
  }
</script>
