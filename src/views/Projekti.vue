<template>
  <div class="home">
    <Header/>
    <HeaderActionBar />
    <div class="row">
      <h1 class="col-md-12  main-h1 w3-hide-small w3-animate-opacity" >{{page_det.title}}</h1>
      <h1 class="col-md-12  main-h1 w3-hide-large w3-xlarge w3-animate-opacity" >{{page_det.title}}</h1>
      <div class="col-md-8  w3-margin" >
        Stranica u izradi
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
  name: 'Projects',
  data () {
      return {
        page_det:pages_sr_l.projects
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
