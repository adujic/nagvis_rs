<template>
  <div class="home">
    <Header/>
    <HeaderActionBar />
    <div class="row">
      <h1 class="col-md-12  main-h1 w3-hide-small w3-animate-opacity" >{{page_det.title}}</h1>
      <h1 class="col-md-12  main-h1 w3-hide-large w3-xlarge w3-animate-opacity" >{{page_det.title}}</h1>
      
      <div class="col-md-8" style=" margin-right:auto">
        <div class="spinner-border" v-if="!dataReady"></div>
        <div v-for="item in pgAct" :key="item.name" class="w3-padding">
          <Activity :act_dt="item" class=""></Activity>
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
import Partners from "@/components/Partners";
import NgvFooter from "@/components/NgvFooter";
import Activity from "@/components/ActivityComp";

import { db} from '../firebase.js'

import pages_sr_l from '../data/page_details_sr_l.js'

export default {
  name: 'actv',
  mounted() {

    const vm = this;
    this.currPg = vm.$store.getters.getPgA;

    //zvati dovlacenje vijesti samo jednom
    if (this.$store.getters.getActivity.length == 0 || this.$store.getters.getLastALoad+360000 < new Date().getTime() )
      {
      this.getData()
    }
    else{
      this.act = this.$store.getters.getActivity;
      this.pgAct = this.act.slice((this.currPg-1)*5, (this.currPg-1)*5+5)
      this.numPg = Math.ceil(this.act.length/5)
      //this.getData()

      this.dataReady = true;
    }

  },
  data () {
      return {
        page_det:pages_sr_l.activity,
        
        dataReady:false,

        act:null,

        currPg:1,
        numPg:null,
        pgAct:null
      }
    },
  methods:{
    
    getData(){
      const vm = this;
      var documents = [];

      db.ref('activity').orderByChild('id').once('value', snapshot => {
        snapshot.forEach(function(childSnapshot) {
          documents.push(childSnapshot.val());
          // do something with documents

          //console.log(childSnapshot.val().dtc + " - "+ childSnapshot.val().id)
        })
            
          this.act = this.sortDesc(documents);

          var x = {arr:this.act}
          vm.$store.dispatch('setActivityA', x)

          this.currPg = vm.$store.getters.getPgA;
          this.pgAct = this.act.slice((this.currPg-1)*5, (this.currPg-1)*5+5);
          this.numPg = Math.ceil(this.act.length/5)

          this.dataReady= true;

          
      })
    },


    changePage(dir){
      if(this.currPg + dir == 0){
        console.log('No less')
      }
      else if(this.currPg + dir > Math.ceil(this.act.length/5)){
        console.log('No more')
      }
      else{
        var vm = this;
        this.currPg += dir;
        this.pgAct = this.act.slice((this.currPg-1)*5, (this.currPg-1)*5+5)

        vm.$store.dispatch('setPgAA', this.currPg)

        window.scrollTo(0, 180)
      }

    },
    //util
    sortDesc(x){
     for(let i=0; i< x.length-1; i++){
       for(let j=i+1; j <x.length; j++){
         var dt_i = new Date(x[i].dtc.substr(6,4) + x[i].dtc.substr(2,4)+x[i].dtc.substr(0,2));
         var dt_j = new Date(x[j].dtc.substr(6,4) + x[j].dtc.substr(2,4)+x[j].dtc.substr(0,2));


         if(dt_i < dt_j){
           var tmp = x[j];
           x[j] = x[i];
           x[i] = tmp;
        }
       }
     }


      return x;
    }
  },
  components: {
    Header,
    HeaderActionBar,
    Partners,
    Activity,
    NgvFooter
  }
}
</script>
