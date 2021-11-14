<template lang="html">

  <section class="article-list">
        <div class="w3-margin  w3-paddig   row w3-hide-small">
           <div class="w3-middle  col-md-2 w3-border-left" style="text-align:left">
            Datum
           </div>
          <div class="w3-middle  col-md-6 w3-border-left" style="text-align:left">
            Naslov
           </div>
           <div class="w3-middle  col-md-2 w3-border-left" style="text-align:left">
            Status
           </div>
        </div>
        <div class="spinner-border" v-if="!dataReady"></div>
        
        <div v-if="dataReady">
          <div v-for="item in articles" :key="item.id" class="row w3-padding w3-border w3-margin">
            
           <div class="w3-middle  col-md-2 w3-text-grey" style="text-align:left">
            <span class="w3-hide-large">Datum:</span>
            {{item.dtc}}
           </div>
           <div class="w3-middle col-md-6 " style="text-align:left">
             <span class="w3-hide-large w3-text-grey">Naslov:</span>
              {{item.title.length > 50 ? item.title.substr(0,47) + '...' : item.title}}
           </div>
           <div class="w3-middle  col-md-2  w3-bold">
             <span class="w3-hide-large w3-text-grey">Status:</span>
             <font-awesome-icon class="w3-text-blue w3-large" :icon="icn_check" v-if="item.status==1"/>
             <font-awesome-icon class="w3-text-red w3-large" :icon="icn_uncheck"  v-if="item.status==0"/>
             <div v-if="isAdmin && item.status==0" class="c-pointer w3-hover-grey w3-round w3-small w3-blue">AKTIVIRAJ</div>
             <div v-if="isAdmin && item.status==1" class="c-pointer w3-hover-grey w3-round w3-small w3-red">DEAKTIVIRAJ</div>
           </div>
           <div class="w3-round w3-button col-md-2 nagvis-orange" @click="editId = item.id" v-if="editId != item.id">
            Izmeni
           </div>
           <div class="w3-round w3-button col-md-2 w3-red" @click="editId = 0" v-if="editId == item.id">
            Zatvori
           </div>

           <div class="col-md-12 w3-light-grey w3-margin-top w3-border w3-round" v-if="editId == item.id">
              <NagvisInput v-bind:inputData='item' inputMode='E' v-bind:inputType='inputType'></NagvisInput>
           </div>
          </div>
        </div>
  </section>

</template>

<script lang="js">
  import NagvisInput from '../components/ArticleInput'
  import firebase from 'firebase'
  import { db} from '../firebase.js'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

  export default  {
    components:{
      FontAwesomeIcon,
      NagvisInput
    },
    name: 'article-list',
    props: ['inputType'],
    mounted () {
        console.log(this.inputType)

        var user = firebase.auth().currentUser;
        
        if(user.email == 'djujicar@gmail.com')
          this.isAdmin = true;

        this.getData()
    },
    data () {
      return {
        articles:[],
        
        dataReady:false,
        isAdmin:false,
        
        editId:0,

        icn_check:faCheckCircle,
        icn_uncheck:faTimesCircle
      }
    },
    methods: {
      getData(){
      var documents = [];
      var loc= this.inputType == 'A' ? 'activity' : 'news';
      
      db.ref(loc).orderByChild('id').once('value', snapshot => {
        snapshot.forEach(function(childSnapshot) {
          documents.push(childSnapshot.val());
        })

        
          // swap id-s
          this.articles = this.sortDesc(documents);

          this.dataReady= true;

          console.log(documents)
      })
    },

    //util
    sortDesc(x){
      var endPointer = x.length-1;

      for(var tmp, i = 0 ; i < Math.floor(x.length/2); i++, endPointer--){

        tmp = x[i];
        x[i] = x[endPointer];
        x[endPointer] = tmp;
        
      }


      return x;
    }
    },
    computed: {

    }
}


</script>

<style >
  .article-list {

  }
</style>
