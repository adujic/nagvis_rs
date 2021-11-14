<template lang="html">

  <section   >

    <div class="header-action-bar w3-border-bottom nagvis-orange-border" style="">


    <div class="row w3-hide-small nagvis-orange"  @click="homeClicked(); activityClicked()">
      <router-link to="/" class="col-md-2 ab-tab">
         <div class="row w3-small">
          <div class="col-md-11">
            <!--
            <font-awesome-icon :icon="home" size="1x" class="icn"  /> 
            -->
            {{page_det.home.tabName}}
          </div>
        </div>        
      </router-link>


      <router-link to="/about" class="col-md-1 ab-tab">        
         <div class="row w3-small">
          <div class="col-md-11">
             <!--
            <font-awesome-icon :icon="info" size="1x" class="icn" /> 
            -->
            {{page_det.about.tabName}}
          </div>
        </div>
      </router-link>   

      <router-link to="/aboutgv" class="col-md-2 ab-tab">        
         <div class="row w3-small">
          <div class="col-md-12">
            <!--
            <font-awesome-icon :icon="info" size="1x" class="icn" /> 
            -->
            {{page_det.aboutGv.tabName}}
          </div>
        </div>
      </router-link>
         

      <router-link to="/activity" class="col-md-1 ab-tab" @click="activityClicked()">        
         <div class="row w3-small">
          <div class="col-md-11">
             <!--
            <font-awesome-icon :icon="info" size="1x" class="icn" /> 
            -->
            {{page_det.activity.tabName}}
          </div>
        </div>
      </router-link>


      <router-link to="/projects" class="col-md-1 ab-tab ">
        <div class="row w3-small">
          <div class="col-md-11">
             <!--
            <font-awesome-icon :icon="project" size="1x" class="icn" />
            -->{{page_det.projects.tabName}}
          </div>
        </div>
      </router-link>

     
      
      <a class="col-md-1 ab-tab" @mouseover="showCenter=true;"  @mouseleave="showCenter=false;">
        <div class="row">
          <div class="col-md-8 w3-small">
            {{page_det.center.tabName}}
          </div>
          <font-awesome-icon :icon="chDn" size="1x" class="icn" v-if="!showCenter"/>
          <font-awesome-icon :icon="chUp" size="1x" class="icn" v-if="showCenter"/>
        </div>
        
        <div class="my-dropdown-menu" aria-labelledby="dropdownMenuButton" v-if="showCenter"  >
          <a href="/center/1" class="dropdown-item w3-hover-text-orange w3-border-bottom" >Beograd NGV</a>
          <a href="/center/2" class="dropdown-item w3-hover-text-orange w3-border-bottom">3K</a>
          <a href="/center/3" class="dropdown-item w3-hover-text-orange w3-border-bottom" >Vojvođanski naGVis</a>          
          <a href="/center/4" class="dropdown-item w3-hover-text-orange w3-border-bottom">FENIKS - GV</a>
          <a href="/center/5" class="dropdown-item w3-hover-text-orange ">ZA-LE-T</a>
        </div>
      </a>

      



      <router-link to="/resources" class="col-md-1 ab-tab">        
         <div class="row w3-small">
          <div class="col-md-8">
             <!--
            <font-awesome-icon :icon="info" size="1x" class="icn" />
            -->
             {{page_det.resources.tabName}}
          </div>
        </div>
      </router-link>    


      <!--
      <router-link to="/library" class="col-md-2 ab-tab">
        <div class="row">
          <div class="col-md-8">
            <font-awesome-icon :icon="book" size="1x" class="icn" />Biblioteka
          </div>
        </div>
      </router-link>
      -->


      <router-link to="/contact" class="col-md-1 ab-tab">
        <div class="row w3-small">
          <div class="col-md-11">
            {{page_det.contact.tabName}}
          </div>
        </div>
      </router-link>


       <div class="col-md-2 nagvis-green">
        &nbsp;
      </div>
    </div>

    </div>

    <div style="overflow:scroll" class="w3-hide-large"  @click="homeClicked(); activityClicked()">
      <div class="w3-hide-large nagvis-orange header-action-bar" style="width:1000px;" > 
      <!-- NASLOVNA -->
      <div class="small-menu-item nagvis-orange ">
        <router-link to="/" class="col-md-3" >
          {{page_det.home.tabName}}
        </router-link>
      </div>

      <!-- (about) -->
      <div class="small-menu-item nagvis-orange ">
        <router-link to="/about" class="col-md-3">
          {{page_det.about.tabName}}
        </router-link> 
      </div>
      
      <!-- Ovo je novo О -Грађанском васпитању-->
      <div class="small-menu-item nagvis-orange ">
        <router-link to="/aboutgv" class="col-md-2">
          {{page_det.aboutGv.tabName}}
        </router-link> 
      </div>

      <!-- Ovo je novo О -Активности-->
      <div class="small-menu-item nagvis-orange " >
        <router-link to="/activity" class="col-md-2">
          {{page_det.activity.tabName}}
        </router-link> 
      </div>

      
      <div class="small-menu-item nagvis-orange  ">
        <router-link to="/projects" class="col-md-2">
          {{page_det.projects.tabName}}
        </router-link>
      </div>

      

      <div class="small-menu-item nagvis-orange  ">
        <div  class="col-md-2"  v-on:click="showCenter=!showCenter;" >
          {{page_det.center.tabName}}
          <font-awesome-icon :icon="chDn" size="1x" class="icn" v-if="!showCenter"/>
          <font-awesome-icon :icon="chUp" size="1x" class="icn" v-if="showCenter"/>
        </div>
      </div>

      <!-- Ovo je novo О -Ресурси-->
      <div class="small-menu-item nagvis-orange  ">
        <router-link to="/resources" class="col-md-2">
          {{page_det.resources.tabName}}
        </router-link>
      </div>

      <!-- ovo su skinuli
      <div class="small-menu-item nagvis-orange ">
        <router-link to="/library" class="col-md-2 ">
          <font-awesome-icon :icon="book" size="1x" class="icn" />
        </router-link>
      </div>
      -->
      <div class="small-menu-item nagvis-orange ">
        <router-link to="/contact" class="col-md-2">
          {{page_det.contact.tabName}}
        </router-link>
      </div>
    </div>

    </div>

    <div style="overflow:scroll" class="w3-hide-large"  v-if="showCenter">
    <div class="w3-hide-large w3-margin" style="width:750px;">
          <a href="/center/1" class="w3-border  w3-margin w3-padding w3-round nagvis-green-border" >Beograd NGV</a>
          <a href="/center/2" class="w3-border w3-margin w3-padding w3-round nagvis-green-border">3K</a>
          <a href="/center/3" class="w3-border w3-margin w3-padding w3-round nagvis-green-border">Vojvođanski naGVis</a>          
          <a href="/center/4" class="w3-border w3-margin w3-padding w3-round nagvis-green-border">FENIKS - GV</a>
          <a href="/center/5" class="w3-border w3-margin w3-padding w3-round nagvis-green-border">ZA-LE-T</a>
    </div>
    </div>
  </section>

</template>

<script lang="js">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faHome, faChevronUp, faChevronDown,faFile, faInfo, faAt, faBook} from '@fortawesome/free-solid-svg-icons'
  
  import pages_sr_l from '../data/page_details_sr_l.js'

  export default  {
    name: 'header-action-bar',
    props: ['pgDet'],
    mounted () {

    },
    data () {
      return {
        showCenter:false,
        home:faHome,
        project:faFile, 
        info:faInfo ,
        chUp:faChevronUp,
        chDn:faChevronDown,
        contact:faAt,
        book:faBook,

        page_det:pages_sr_l
      }
    },
    methods: {
      homeClicked(){
        var vm = this;
        vm.$store.dispatch('setPgNA', 1)
      },

      activityClicked(){
        var vm = this;
        vm.$store.dispatch('setPgAA', 1)
      }
    },
    computed: {

    },
    components:{FontAwesomeIcon}
}


</script>

<style>
.header-action-bar {
  background: green;
  font-family: "Comfortaa", cursive;
  /*overflow: scroll;

    overflow-y:hidden;

    overflow-x:unset
    */
}

.ab-tab {
  cursor: pointer;
  margin: auto;
  padding: 5px;
  border: 1px solid #c5e1a5;
  font-weight: 600;
  /*text-shadow:1px 1px black*/
}

a {
  color: black !important;
  text-decoration: none !important;
}

.header-action-bar a:hover {
  background-color: rgba(255, 255, 255, 0.25) !important;
}

.my-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  /* display: none; */
  float: left;
  min-width: 10rem;
  /* padding: .5rem 0; */
  /* margin: .125rem 0 0; */
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.icn {
  margin-right: 15px;
}

.small-menu-item {
  float: left;
  border-right: 1px solid #c5e1a5;
  text-align: center;
  padding: 2px !important;
}

.small-menu-item a {
  color: black !important;
}

.small-menu-item a:hover {
  color: white !important;
}
</style>
