<template lang="html" >

  <!-- v-if="false" dodati provjeru dase prikazuje samo ukoliko je loginovan clan-->
  <section class="backoffice w3-center w3-container " v-if="this.$store.getters.isLogedIn" >
     <div class="w3-hide-large  nagvis-green row w3-bottombar">
       <div class="w3-large w3-bold w3-padding" style="width:80%; text-align:left">nagvis backoffice </div>
       <div class="w3-padding w3-right" style="alig-items:right" @click="togleMenu">
        <font-awesome-icon :icon="icn_menu" size="2x" />
       </div>
     </div>
     <div class="row nagvis-orange w3-bottombar nagvis-orange-border w3-hide-small " id='menu-tabs'>
       <div @click="tab='P'" class="col-md-2 nagvis-green w3-padding w3-hover-light-grey c-pointer w3-border-right nagvis-orange-border">
         Profil
       </div>
       <div class="col-md-2 nagvis-green w3-padding w3-hover-light-grey c-pointer w3-border-right nagvis-orange-border" @click="tab='V';modeTab=0">
         Vesti
       </div>
       <div class="col-md-2 nagvis-green w3-padding w3-hover-light-grey c-pointer" @click="tab='A';modeTab=0">
         Aktivnosti
       </div>
       <div class="col-md-5 ">
         &nbsp;
       </div>
       <div class="col-md-1 w3-red w3-padding w3-hover-pale-red c-pointer "  @click="logOut">
         Log Out 
       </div>
     </div>
     <div v-if="tab =='P'" class="row">
       <h1 class="head-title col-md-12" style="text-align:left">
        Profil
       </h1>
       <div class="col-md-10 row w3-margin">
         <NagvisProfile></NagvisProfile>
       </div>
     </div>
     <div v-if="tab =='V' || tab =='A'"  class="row ">
       <div class="col-md-12 ">
        <h1 class="head-title " v-if="tab =='V'">
          Vesti
        </h1>
        <h1 class="head-title " v-if="tab =='A'">
          Aktivnosti
        </h1>
       </div>
       <div class="col-md-10">
         <div class="row w3-border-bottom ">
           <div class = 'col-md-3 w3-hover-grey nagvis-green w3-padding w3-border-right w3-border-grey c-pointer' @click="modeTab = 0">
             <font-awesome-icon :icon="icn_right" size="1x" v-if="modeTab==0"/>
             Dodaj {{tab == 'V' ? 'vest':'aktivnost'}}
           </div>
           <div class = 'col-md-3  w3-hover-grey nagvis-green w3-padding c-pointer' @click="modeTab = 1">
             <font-awesome-icon :icon="icn_right" size="1x" v-if="modeTab==1"/>
             Izmeni {{tab == 'V' ? 'vest':'aktivnost'}}
             </div>
         </div>
          <NagvisInput v-bind:inputType='tab' inputMode='I' v-if="modeTab == 0"></NagvisInput>
          <NagvisEdit v-bind:inputType='tab'  v-if="modeTab ==1 "></NagvisEdit>         
       </div>
     </div>
  </section>
  

</template>

<script lang="js">
  import NagvisInput from '../components/ArticleInput'
  import NagvisEdit from '../components/ArticleList'
  import NagvisProfile from '../components/NagvisProfile'

  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faPowerOff, faBars, faCaretRight} from '@fortawesome/free-solid-svg-icons'
  import firebase from 'firebase'

  export default  {
    name: 'backoffice',
    props: [],
    mounted () {
      const vm = this;

      if(!vm.$store.getters.isLogedIn)
        vm.$router.push('login');
      else{
        this.tab = "V";
        this.modeTab = 0;
      }
    },
    data () {
      return {
        tab:"P",
        //status msg
        status_msg:"",

        modeTab:0, //1 edit 0 insert

        //icons
        icn_menu:faBars,
        icn_lo:faPowerOff,
        icn_right: faCaretRight

      }
    },
    methods: {
      togleMenu(){
        document.getElementById('menu-tabs').classList.toggle("w3-hide-small");
      },
      logOut(){
        const vm = this;
        vm.$store.dispatch('logOutA');
        
        firebase.auth().signOut().then(() => {
          // Sign-out successful.
          console.log("loged out")
        }).catch((error) => {
          //
          console.log(error.code)
        });
        vm.$router.push('LogIn')
      }
    },
    computed: {
    },
    components:{
      FontAwesomeIcon,
      NagvisInput,
      NagvisEdit,
      NagvisProfile
    }
}


</script>

<style >
.backoffice {
  font-family: "Comfortaa", cursive;
}

.head-title {
  float: left;
  font-size: 35px;
  /*text-shadow:2.5px 2px rgba(1, 2, 2, 0.7  );*/
  font-family: "Comfortaa", cursive;
}

.head-title p {
  float: left;
}

.head-side {
  margin: auto;
}

.width25 {
  width: 280px;
  float: left;
}
</style>
