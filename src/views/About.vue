<template>
  <div class="about">
    <Header/>
    <HeaderActionBar />
    <div class="row">
      <h1 class="col-md-12  main-h1 w3-hide-small w3-animate-opacity" >{{page_det.title}}</h1>
      <h1 class="col-md-12  main-h1 w3-hide-large w3-xlarge w3-animate-opacity" >{{page_det.title}}</h1>
      <div class="col-md-8  w3-margin w3-animate-top" >
        <div class="row w3-animate-top">
             
            <div class="col-md-12 about-txt w3-padding "  v-html="page_det.txt1" >
            </div>
            <img :src="'../img/about.jpg'" style="width:70%; margin:auto">
            <div class="col-md-12 about-txt w3-padding"  v-html="page_det.txt3" >
            </div>
            <img :src="'../img/team/about2.jpg'" style="width:30%; margin:auto">
            <div class="col-md-12 about-txt w3-padding "  v-html="page_det.li1.title" >
            </div>
            
            <div class="col-md-12 about-txt w3-padding w3-margin-left">
               <ul>
                <li  v-for="lii in page_det.li1.itms" :key="lii.itms">{{lii}}</li>
               </ul>
            </div>

            <div class="col-md-12 about-txt w3-padding w3-border-bottom "  v-html="page_det.txt2" >
            </div>

            <div class="col-md-8 about-title w3-padding ">
             {{page_det.title2}}
            </div>
            
            <div class="col-md-12 about-txt w3-padding w3-margin-left" v-for="lii in page_det.li2" :key="lii" v-html="lii">
            </div>
            <div class="col-md-12 about-txt w3-padding ">
            </div>

            <div class="col-md-8 about-title w3-padding w3-hide ">
              Постаните члан
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

import pages_sr_l from '../data/page_details_sr_l.js'

export default {
  name: 'About',
  data () {
      return {
        page_det:pages_sr_l.about
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


<style scoped>
  .about{

  }

  .about-title{
    font-family: 'Comfortaa', cursive;
    text-align:left;
    font-size:20px;
    margin-left:10px;
  }

  .about-txt{
    font-family: 'Comfortaa', cursive;
    text-align: justify;
    
    margin-left:10px;
  }
</style>