<template>
  <div class="home">
    <Header :pgDet="pages_det" />
    <HeaderActionBar :pgDet="pages_det" />
    <div class="row">
      <div class="col-md-12 w3-margin w3-padding w3-border w3-round row w3-animate-left welcome-gradient" >
        <img src="../assets/logo_wide.png" style="width:30%" class="col-md-4 w3-hide-small"/>
        <div class=" w3-bold col-md-8  welcome-text w3-text-orange row" > 
          <div class="col-md-12 w3-xxlarge font-weight-bolder w3-animate-fading" >Dobrodošli na sajt NAGVIS-a</div>
          <div class="col-md-6" > &nbsp; </div>
          <div class="col-md-6 w3-text-black w3-animate-fading"> Mi smo <b>Nacionalna asocijacija nastavnika/ca građanskog vaspitanja i saradnika/ca.</b> <br>Dobrodošli na našu online prezentaciju.</div>
        </div>
      </div>
      <h1 class="col-md-12  main-h1 w3-hide-small w3-animate-opacity" >{{page_det.title}}</h1>
      <h1 class="col-md-12  main-h1 w3-hide-large w3-xlarge w3-animate-opacity" >{{page_det.title}}</h1>
      
      <div class="col-md-8 w3-margin" style=" margin-right:auto">
        <div class="spinner-border" v-if="!dataReady"></div>
        <div v-for="item in pgNws" :key="item.name" >
          <News :nws_dt="item"></News>
          <!--
          <News :nws_dt="item" class="w3-hide-small"></News>
          <News :nws_dt="item" class="w3-hide-large" style="width:calc(100%);"></News>
          --> 
        </div>
          <div class="grid-container w3-margin" v-if="dataReady"> 
            <div class="">
              <i class="material-icons w3-button w3-border w3-xlarge w3-blue nagvis-green-border w3-round" @click="changePage(-1)">chevron_left</i>
            </div>
            <div class=" w3-padding w3-large" style=" font-family: 'Comfortaa', cursive;">
              Strana {{currPg}} / {{numPg}}
            </div>
            <div class="">
              <i  @click="changePage(1)" class="material-icons w3-button w3-border w3_xlarge w3-blue nagvis-green-border w3-round">chevron_right</i>
            </div>
          </div>
      </div>
      <div class="col-md-3 w3-margin w3-padding">
        <Partners></Partners>
      </div>
    </div>

    <NgvFooter></NgvFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/NgvHeader";
import NgvFooter from "@/components/NgvFooter";
import HeaderActionBar from "@/components/HeaderActionBar";
import Partners from "@/components/Partners";
import News from "@/components/NewsComp";

//import news_data from '../data/news.js'
//import pages_sr_c from '../data/page_details_sr_c.js'
import pages_sr_l from '../data/page_details_sr_l.js'

import { db} from '../firebase.js'

export default {
  name: "Home",
  mounted() {
    
    const vm = this;
    console.log(vm.$store.getters.getPgN);
    this.currPg = vm.$store.getters.getPgN;

    //zvati dovlacenje vijesti samo jednom
    if (this.$store.getters.getNews.length == 0 ||  this.$store.getters.getLastNLoad+360000 < new Date().getTime() )
      this.getData()
    else{
      this.nws = this.$store.getters.getNews;
      this.pgNws = this.nws.slice((this.currPg-1)*5, (this.currPg-1)*5+5)
      this.numPg = Math.ceil(this.nws.length/5)

      this.dataReady= true;
    }
      
  },
  data() {
    return {
      nws:null,

      pages_det:pages_sr_l,
      page_det:pages_sr_l.home,

      dataReady:false,

        currPg:1,
        numPg:null,
        pgNws:null
    };
  },
  methods:{
    getData(){
      const vm = this;
      var documents = [];

      db.ref('news').orderByChild('id').once('value', snapshot => {
        snapshot.forEach(function(childSnapshot) {
          documents.push(childSnapshot.val());
          // do something with documents

          //console.log(childSnapshot.val().dtc + " - "+ childSnapshot.val().id)
        })

        
          // swap id-s



          this.nws = this.sortDesc(documents);

          
          var x = {arr:this.nws}
          vm.$store.dispatch('setNewsA', x)

          this.pgNws = this.nws.slice(this.currPg-1, 5)
          this.numPg = Math.ceil(this.nws.length/5)

          this.dataReady= true;
      })
    },
    changePage(dir){
      if(this.currPg + dir == 0){
        console.log('No less')
      }
      else if(this.currPg + dir > Math.ceil(this.nws.length/5)){
        console.log('No more')
      }
      else{
        var vm = this;

        this.currPg += dir;
        this.pgNws = this.nws.slice((this.currPg-1)*5, (this.currPg-1)*5+5)

        vm.$store.dispatch('setPgNA', this.currPg)

        window.scrollTo(0, 420)
      }

    },
    //util
    sortDesc(x){
      console.log("sort")
      var endPointer = x.length-1;

      for(var tmp, i = 0 ; i < Math.floor(x.length/2); i++, endPointer--){

        tmp = x[i];
        x[i] = x[endPointer];
        x[endPointer] = tmp;
        
      }


      return x;
    }
  },
  components: {
    Header,
    HeaderActionBar,
    Partners,
    News,
    NgvFooter
  },
};
</script>


<style>
  .welcome-gradient{
    background-image:linear-gradient(to right, rgba(197, 225, 165,0), rgba(197, 225, 165,1))
  }

  .welcome-text{
    padding-right:25px !important;
    text-align: end;
    font-family: 'Comfortaa', cursive;
    text-shadow:0 0 black;
  }

  .grid-container {
    display: grid;
     grid-template-columns: auto auto auto;
  }
</style>