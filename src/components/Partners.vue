<template lang="html">

  <section class="partners-vue ">
        <h4> Naši prijatelji </h4>
        <hr class="nagvis-orange"/>
        <div class="row w3-hover-opacity w3-border-bottom w3-hide-small"  v-for="friend in friends" :key="friend.name" >
          <div class="col-md-7" >            
            <a :href="friend.link" target="_blank">
              <img :src="'../img/logo/'+friend.img" class="w3-hover-opacity  w3-padding">
            </a>
          </div>
          <div class="col-md-12" style="margin: auto;text-align: start;">
            {{friend.name}}
          </div>
          <div class="col-md-12  w3-small" style="margin: auto;text-align: start;" v-if="friend.dsc != null">
            {{friend.dsc}}
          </div>
        </div>

        <div class="grid-container w3-hide-large">
          <div v-for="friend in friends" :key="friend.name+'_sm'" class=" w3-border nagvis-orange-border w3-round" style="margin:5px">
            <a :href="friend.link" target="_blank">
              <img :src="'../img/logo/'+friend.img" class="w3-hover-opacity" style="padding:5px">
            </a>
          </div>
        </div>

  </section>

</template>

<script lang="js">
  import friends_data from '../data/friends.js'

  export default  {
    name: 'partners-vue',
    props: [],
    mounted () {

    },
    data () {
      return {
        friends:friends_data
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped >
  .partners-vue {
     font-family: 'Comfortaa', cursive;

     border-radius: 12px;
  }

  .partners-vue h1,h1,h3,h4{
   padding-top:20px;
   font-family: 'Comfortaa', cursive;
  }

  .partners-vue img{
    width:100%;
    cursor: pointer;
  }

  .grid-container {
    display: grid;
     grid-template-columns: auto auto auto;
  }
</style>
