<template lang="html">

  <section class="about-imgs">
    <div class="col-md-3 w3-border w3-round w3-margin w3-padding" v-for="clan in usrData.team" :key="clan.name"> 
          <img :src="'../img/team/'+center.id+'/'+usrData.img" style="width:90%; " v-if="clan.img">
          <span style="text-transform: capitalize;">{{clan.name}}</span>
          <p class="w3-small w3-text-grey w3-justify w3-border-top w3-fade-in">{{clan.dsc}}</p>
        </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'about-imgs',
    props: ['usrData'],
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
  .about-imgs {

  }
</style>
