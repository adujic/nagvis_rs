<template lang="html">

  <section class="contact-card-comp "  style="overflow:hidden" >
    <div class="row w3-padding w3-border-bottom">
      <div class="col-md-8" style="text-align:start; v-align:middle; font-size:18px">
        {{contact_data.name}}
      </div>
      <div class="col-md-2 ta-center w3-hover-opacity ig-color" v-if="contact_data.ig.length >0">
        <a :href="contact_data.ig">
          <font-awesome-icon :icon="ig_ico" size="2x" class="icn" />
        </a>
      </div>
      <div class="col-md-2 ta-center  w3-hover-opacity fb-color" v-if="contact_data.fb.length >0">
        <a :href="contact_data.fb">
          <font-awesome-icon :icon="fb_ico" size="2x" class="icn" />
        </a>
      </div>
    </div>

    <div class="row w3-margin" v-for="m in contact_data.email" v-bind:key="m" >
      <div class="col-md-3 ta-left"> <font-awesome-icon :icon="email_ico" size="1x" class="icn" /> E-mail:</div>
      <div class="col-md-9 ta-left w3-hide-small"> <a :href="'mailto:' + m">{{m}}</a></div>
      <div class="col-md-9 ta-left w3-small w3-hide-large" > <a :href="'mailto:' + m">{{m}}</a></div>
    </div>

    <div class="row w3-margin">
      <div class="col-md-3 ta-left"> <font-awesome-icon :icon="tel_ico" size="1x" class="icn" /> Telefon:</div>
      <div class="col-md-9 ta-left"> <a :href="'tel:' + contact_data.phone">{{contact_data.phone}}</a></div>
    </div>

    <div class="row w3-margin">
      <div class="col-md-3 ta-left"> <font-awesome-icon :icon="usr_ico" size="1x" class="icn" /> Kontakt:</div>
      <div class="col-md-9 ta-left"> {{contact_data.person}}</div>
    </div>

    <div class="row w3-border-top w3-hide">
      <div class="col-md-4 ta-center w3-padding w3-hover-opacity ig-color" v-if="contact_data.ig.length >0">
        <font-awesome-icon :icon="ig_ico" size="2x" class="icn" />
      </div>
      <div class="col-md-4 ta-center w3-padding w3-hover-opacity fb-color" v-if="contact_data.fb.length >0">
        <font-awesome-icon :icon="fb_ico" size="2x" class="icn" />
      </div>
      <div class="col-md-4 ta-center w3-padding w3-hover-opacity tw-color w3-hide" >
        <font-awesome-icon :icon="tw_ico" size="2x" class="icn" />
      </div>
    </div>
  </section>

</template>

<script lang="js">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faPhone, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'
  import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

  export default  {
    name: 'contact-card-comp',
    props: ['contact_data'],
    mounted () {

    },
    data () {
      return {
        tel_ico:faPhone,
        email_ico:faEnvelope,
        usr_ico:faUser,

        ig_ico:faInstagram,
        fb_ico:faFacebook,
        tw_ico:faTwitter,
        

      }
    },
    methods: {

    },
    computed: {

    },
    components:{
      FontAwesomeIcon
    }
}


</script>

<style>
  .contact-card-comp {
    
        font-family: 'Comfortaa', cursive;
  }

  .fb-color{
    color:#3b5998;
    cursor:pointer
  }

  .ig-color{
    color:#ffb900;
    cursor:pointer
  }

  .tw-color{
    color:#1da1f2;
    cursor:pointer
  }

</style>
