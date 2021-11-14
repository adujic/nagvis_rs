<template>
  <div class="home">
    <Header/>
    <HeaderActionBar />
    <div class="row">
      <h1 class="col-md-12  main-h1" >Biblioteka </h1>
      <div class="col-md-8  w3-margin" >
        Stranica u izradi
      </div>
      <div class="col-md-3 w3-margin">
        <Partners></Partners>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/NgvHeader'
import HeaderActionBar from '@/components/HeaderActionBar'

import Partners from "@/components/Partners";

export default {
  name: 'Lib',
  components: {
    Header,
    HeaderActionBar,
    Partners
  }
}
</script>
