<template>
  <div class="home">
    <Header/>
    <HeaderActionBar />
    <div class="row">
      <h1 class="col-md-12  main-h1 w3-hide-small w3-animate-opacity" >{{page_det.title}}</h1>
      <h1 class="col-md-12  main-h1 w3-hide-large w3-animate-opacity w3-xlarge" >{{page_det.title}}</h1>
      <h3 class="col-md-12  main-h1 w3-hide-small w3-animate-top" >{{center.name}}</h3>
      <h3 class="col-md-12  main-h1 w3-hide-large w3-animate-top w3-xlarge" >{{center.name}}</h3>

      <div class="col-md-8 w3-animate-top">
      <div class="w3-margin w3-animate-opacity" v-if="center.img">
        <img :src="'../img/logo/cntr/'+center.img" style="width:150px" v-if="center.id==1||center.id==3">
        <img :src="'../img/logo/cntr/'+center.img" style="width:270px" v-if="center.id!=1 && center.id!=3">
      </div>
      <div class="w3-margin row w3-hide">
        <div class="col-md-2"> Aktuelnosti</div>
        <div class="col-md-2  w3-border-top w3-border-right w3-border-left w3-large"> O centru</div>
      </div>
      <div class=" w3-margin row" >
        <p v-html="center.txt" style="text-align: justify;font-family: 'Comfortaa', cursive;"></p>
        <div class="col-md-3 w3-border w3-round w3-margin w3-padding" v-for="clan in center.team" :key="clan.name"> 
          <img :src="'../img/team/'+center.id+'/'+clan.img" style="width:90%; " v-if="clan.img">
          <span style="text-transform: capitalize;">{{clan.name}}</span>
          <p class="w3-small w3-text-grey w3-justify w3-border-top w3-fade-in">{{clan.dsc}}</p>
        </div>
      </div>
      <div v-if="center.team_img" class="w3-margin">
        <img :src="'../img/team/'+center.team_img" style="width:90%;">
      </div>
      </div>
      <div class="col-md-3 w3-margin">
        <Partners></Partners>
      </div>
    </div>

    <NgvFooter></NgvFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/NgvHeader'
import HeaderActionBar from '@/components/HeaderActionBar'
import NgvFooter from "@/components/NgvFooter"
import Partners from "@/components/Partners"

import pages_sr_l from '../data/page_details_sr_l.js'
  import contactData from '../data/contact.js'

/*
const centri =[
  { id:1, 
    title:"Beograd NGV", 
    txt:'Beograd NAGVIS su osnovale Ljiljana Petrović (Gimnazija Patrijarh Pavle, Rakovica), Milica Rajević (Sportska gimanzija, Stari grad), Ljiljana Panjković (Srednja škola za ekonomiju, pravo i administraciju, Stari grad), Ivana Jevđenović (O.Š. 14.oktobar, Barič), Jelena Krstić (O.Š. Sveti Sava, Vračar), Slavica Mladenović Ivanović i Snežana Rakić ( O.Š.Nikola Tesla, Grocka).<br><br>Cilj nam je da promovišemo kvalitetno izvođenje GV kao novog programa nastave i učenja, povezujemo i širimo mrežu nastavnika GV na teritoriji Beograda, jačamo i razvijamo naš potencijal i kompetencije kroz obuke, treninge i stručna usavršavanja razmenjujemo korisne informacije, iskustva, ideje i materijale. Želimo da sarađujemo sa lokalnim institucijama  i relevantnim organizacijama, poboljšamo i svojim aktivnostima doprinesemo demokratizaciji naše škole, opštine,  Beograda i čitavog društva.<br><br><b>Strateški cilj naše prve kampanje je da se na građansko vaspitanje upiše za 10% učenika više nego prethodne godine u školama u kojima članovi Beograd NGV sprovode kampanju. Imamo spremnu strategiju, taktike, korake, ideje…</b>',
    img:'bgd.png'
  },
  {id:2, 
    img:'3k.png', title:"3K", 
    txt:'Tim 3K čine nastavnici  GV, koji zajedno sa učenicima u svojim školama, lokalnoj sredini,regionu i šire, stvaraju prostor za sticanje praktičnih veština koje će nas učiniti da budemo aktivni u društvu i postanemo svesni građani,  kritički orjentisani  i odgovorni. <br><br>Iz gradova Centralne Srbije dolaze nam nastavnici koji čine mrežu spremnih da iskorakom iz škole, u svojoj lokalnoj  sredini budu ključni stub i faktor saradnje sa svim organizacijama, institucijama i ustanovama koje se bave  pitanjima relevantnim za učenike.Oni su ti koji će zajedno sa učenicima u javnost izaći akcijom , ukazati na dragocenu solidarnost,  prava i dužnosti  građana, sajber - bezbednost i digitalnu pismenost ali i demonstrirati zaštitnički odnos prema prirodi,  kulturnom nasleđu i svima objasniti šemu održivog razvoja.Otvoreni smo da se mreža širi među eksperte, medije , roditelje i donosioce odluka  koji će svoja ekonomska, pravna, socijalna, građanska i ekološka iskustva, podeliti sa nama i učenicima.<br><br>Samo  zajedno, učenicima i roditeljima pružamo korisne informacije i dajemo mogućnost da se razmatraju  teme koje su od opšteg interesa za: pojedinca,  školu, lokalnu zajednicu i društvo u celini.<br><br>Samo saradnjom ,  primenom  i vidljivošću  usvojenih  informacija i stečenih  veština, stvaramo tle za “Ono što dete može da uradi danas u saradnji sa drugima – sutra će moći da uradi samo “-Lav Vigotski'},
  { id:3, 
    img:'vojvodina.png',
    title:"Vojvođanski naGVis", 
    txt:"Okupili smo se oko ideje da kroz umrežavanje nastavnika građanskog vaspitanja sa teritorije Vojvodine razmenjujemo dobru praksu i na taj način podignemo kvalitet nastave građanskog vaspitanja, učinimo vidljivijim značaj građanskog vaspitanja u zajednici I podignemo kulturu građanskog društva.<br><br>Naš tim čine nastavnici iz Novog Sada, Sremske Mitrovice, Kikinde, ali polako širimo mrežu i na druga mesta jer u našem timu ima mesta za svakog.",
    team:[
      {name:'Filip Nikolić', dsc:'nastavnik građanskog vaspitanja i filozofije, Mitrovačka gimnazija Sremska Mitrovica'},
      {name:'Marina Tintor Popović', dsc:'nastavnik građanskog vaspitanja i italijanskog jezika OŠ “Triva Vitasović Lebarnik” Laćarak,  nastavnik izbornog predmeta Jezik, mediji i kultura Mitrovačka gimnazija Sremska Mitrovica'},
      {name:'Miljana Kitanović', dsc:'stručni saradnik,psiholog, Gimnazija „Dušan Vasiljev“ Kikinda' },
      {name:'Korana Milekić', dsc:'nastavnik građanskog vaspitanja i stručni saradnik, pedagog Tehnička škola „Mileva Marić Ajnštajn“ Novi  Sad' },
      {name:'Ljiljana Nikolić', dsc:'nastavnik građanskog vaspitanja i geografije Gimnazija „Isidora Sekulić“ Novi Sad2'},
      {name:'Svetlana Gurjanov Tašin', dsc:'nastavnik građanskog vaspitanja i stručni saradnik, psiholog Medicinska škola „7.april“ Novi Sad  (koordinator)'}
    ]
  },
  {id:4, img:'feniks.png',title:"FENIKS - GV", 
  txt:'Svrha tima FENIKS je okupljanje i umrežavanje zainteresovanih nastavnika/ca da se uključe u rad opštinskih timova – čija je interesna sfera obrazovanje za demokratiju i građansko društvo. Naša ciljna grupa su: nastavnici/ce GV-a, koordinatori/ke učeničkog parlamenta, stručni saradnici/ce, profesori/ce filozofije, sociologije...<br><br>FENIKS, za sada, ima 24 aktivista/kinje na teritoriji opština: Nove Varoši, Prijepolja, Priboja i Bajine Bašte – iz 13 škola (7 osnovnih i 6 srednjih).  Našu kampanju  KABINET ZA AKTIVIZAM „Po – kreni!“ ćemo realizovati uz učešće dece/mladih. Za početak ćemo animirati iz svake od 13 škola po jednog predstavnika/cu iz učeničkog parlamenta i iz GV-a. Tako „rastemo“ za još 26 članova/ca, a to je ukupno 50 altivista/kinja FENIKS-a.<br><br>Očekujemo da će KABINET ZA AKTIVIZAM doprineti kvalitetnijoj realizaciji Građanskog vaspitanja i sadržajnijem radu Učeničkog parlamenta. Ovaj prostor će, takođe motivisati decu/mlade da uzmu učešće u svojoj zajednici, tako što pokreću različite akcije. Kampanjom FENIKS-a želimo i da doprinesemo umrežavanju nastavnika/ca i povezivanju dece/mladih iz ova četiri grada zapadne Srbije, u cilju širenja demokratske klime u našim školama.'
  },
  {id:5, img:'zalet.png',title:"ZA-LE-T"},
];
*/
export default {
  name: 'Projects',
  mounted () {
      var id = Number(this.$route.params.id);

      for(var i=0; i<contactData.length; i++)
        if(contactData[i].id == id)this.center = contactData[i];
  },
  created(){
    var id = Number(this.$route.params.id);

      for(var i=0; i<contactData.length; i++)
        if(contactData[i].id == id)this.center = contactData[i];
  },
  data () {
      return {
        page_det:pages_sr_l.center,

        center:null,

        cd:contactData
      }
    },
  components: {
    Header,
    HeaderActionBar,
    Partners,
    NgvFooter
  }
}
</script>
