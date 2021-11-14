<template lang="html">

  <section class="news-comp-vue w3-border w3-padding w3-margin-bottom w3-round nagvis-green-border w3-animate-top" >
    <div class="row">
      <div class="col-md-9 nws-title" style="font-weight:bold">{{nws_dt.title}}</div>
      <div class="col-md-1 w3-text-grey">{{nws_dt.center}}</div>
      <div class="col-md-1 w3-text-grey nws-dt">{{nws_dt.dtc}}</div>
    </div>
    <div class="row">
        <div class="col-md-5">
          <img onerror='this.src="/img/logo_wide.3108ee84.png"' :src ="nws_dt.img" style="width:100%;max-height: 200px;"> 
        </div>
        <div class="col-md-7 nws-txt" v-html="nws_dt.txt"></div>
    </div>
    <div class="row w3-padding">
        <div class="col-md-10">
          &nbsp;
        </div>
        <router-link
            class="col-md-2 w3-right w3-button w3-blue w3-round nagvis-green-border w3-border"
            :to="'/news/'+nws_dt.id">
          Opširnije
        </router-link>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'news-comp-vue',
    props: ['nws_dt'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style>
  .news-comp-vue {
     font-family: 'Comfortaa', cursive;
  }

  .nws-title{
    text-align:left;
    margin-bottom:10px;
    font-size:20px;
  }

  .nws-dt{
    text-align:right;
    margin-bottom:10px;
  }

  .nws-txt{
    text-align: justify;
    max-height: 200px;
    overflow: hidden;
  }
</style>
