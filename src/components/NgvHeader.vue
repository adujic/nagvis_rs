<template lang="html">

  <section class="ngvheader nagvis-green w3-border-top nagvis-orange-border ">
    <div class="row">
      <div class="col-md-3 head-side w3-hide-small">
        <img src="../assets/logo_wide.png" style="width:90%"/>
      </div>
      <div class="col-md-3 head-side w3-hide-large">
        <img src="../assets/logo_wide.png" style="width:50%"/>
      </div>
      <div class="col-md-7 head-title nagvis-orange-txt w3-hide-small">
        &nbsp;
      </div>
      <div class="col-md-2 head-side w3-hide-small">
        <a href="https://instagram.com/nagvis.rs">
          <img src="../assets/ig_logo.png" style="width:36px; margin:10px"/>
        </a>
        <a href="https://facebook.com/nagvis.rs">
          <img src="../assets/fb_logo.png" style="width:36px; margin:10px"/>
        </a>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  import { faJs } from '@fortawesome/free-brands-svg-icons';

  export default  {
    name: 'ngvheader',
    props: [],
    mounted () {
      
    },
    data () {
      return {
        ig_i:faJs,
        fb_i:2,
        tw_i:3
      }
    },
    methods: {

    },
    computed: {

    },
    components:{}
}


</script>

<style >
  .ngvheader {
        font-family: 'Comfortaa', cursive;
        padding: 15px;
  }

  .head-title h1{
    float:left;
    font-weight: bolder;
    font-size: 50px;
    text-shadow:2.5px 2px rgba(1, 2, 2, 0.7  );
    font-family: 'Comfortaa', cursive;
  }

  .head-title p{
    float:left
  }

  .head-side{
    margin:auto
  }
</style>
