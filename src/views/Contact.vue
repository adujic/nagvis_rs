<template>
  <div class="home">
    <Header/>
    <HeaderActionBar />
    <div class="row" style="padding-right: 30px;">
      <h1 class="col-md-12  main-h1 w3-hide-small w3-animate-opacity" >{{page_det.title}}</h1>
      <h1 class="col-md-12  main-h1 w3-hide-large w3-xlarge w3-animate-opacity" >{{page_det.title}}</h1>
      <div class="col-md-8 w3-animate-top" style="margin-right:10px !important " >
        <div v-for="item in contacts" :key="item.id" class="col-md-9 w3-round w3-light-grey w3-margin w3-padding nagvis-green-border w3-border" >
          <ContactCard :contact_data="item"></ContactCard>
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
import NgvFooter from "@/components/NgvFooter";

import Partners from "@/components/Partners";
import ContactCard from "@/components/ContactCardComp";

import contact_data from '../data/contact.js'
import pages_sr_l from '../data/page_details_sr_l.js'

export default {
  name: 'Contact',
   mounted() {

  },
  data() {
    return {
      contacts:contact_data,
      page_det:pages_sr_l.contact
    };
  },
  components: {
    Header,
    HeaderActionBar,
    Partners,
    ContactCard,
    NgvFooter
  }
}
</script>
