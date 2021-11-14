<template lang="html">

  <section class="news-comp-vue w3-border w3-padding w3-margin-bottom w3-round nagvis-green-border w3-animate-top" >
    <div class="row">
      <div class="col-md-9 nws-title" style="font-weight:bold">{{act_dt.title}}</div>
      <div class="col-md-1 w3-text-grey">{{act_dt.center}}</div>
      <div class="col-md-1 w3-text-grey nws-dt">{{act_dt.dtc}}</div>
    </div>
    <div class="row">
        <div class="col-md-5">
          <img :src ="act_dt.img" style="width:100%;max-height: 200px;" onerror='this.src="/img/logo_wide.3108ee84.png"'> 
        </div>
        <div class="col-md-7 nws-txt" v-html="act_dt.txt"></div>
    </div>
    <div class="row w3-padding">
        <div class="col-md-10">
          &nbsp;
        </div>
        <router-link
            class="col-md-2 w3-right w3-button w3-blue w3-round nagvis-green-border w3-border"
            :to="'/activity/'+act_dt.id">
          Opširnije
        </router-link>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'news-comp-vue',
    props: ['act_dt'],
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
    font-size:17px !important;
    overflow: hidden;
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
