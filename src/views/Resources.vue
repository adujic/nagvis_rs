<template>
  <div class="home">
    <Header />
    <HeaderActionBar />
    <div class="row">
      <h1 class="col-md-12 main-h1 w3-hide-small w3-animate-opacity">
        {{ page_det.title }}
      </h1>
      <h1 class="col-md-12 main-h1 w3-hide-large w3-xlarge w3-animate-opacity">
        {{ page_det.title }}
      </h1>
      <div class="col-md-8 w3-margin main-h1">
        Kliknite na link kako bi otvorili željeni dokument.
      </div>
      <div class="col-md-8 w3-margin w3-animate-top">
        <div
          style="align-items: baseline"
          class="w3-margin w3-border-bottom row w3-hover-light-grey c-pointer"
          v-for="rsc in resData"
          :key="rsc"
          @click="openResource(rsc)"
        >
          <!--<a :href="rsc.link" class="row w3-padding">-->
          <font-awesome-icon :icon="faFile" size="2x" class="icn w3-margin" />
          <div class="w3-padding w3-large">{{ rsc }}</div>
          <!--</a>-->
        </div>
      </div>
      <div class="col-md-3 w3-margin">
        <Partners></Partners>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/NgvHeader";
import HeaderActionBar from "@/components/HeaderActionBar";
import Footer from "@/components/NgvFooter";
import Partners from "@/components/Partners";

import pages_sr_l from "../data/page_details_sr_l.js";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase";

const files = [
  "kompetencije-za-demokratsku-kulturu.pdf",
  "NAGVIS prva godina delovanja   - 20. maj 21. finalna verzija BM.pdf",
  "052-Promišljanje-o-demokratiji.pdf",
  "gradjansko-srednja-skola.pdf",
  "Gradjansko-vaspitanje-prirucnik-22-10.pdf",
  "Istrazivanje o uticaju pandemije Covid-19 na porodice sa decom u Srbiji_drugi talas.pdf",
  "Prirucnik-drugi-ciklus-approved.pdf",
  "Prirucnik-prvi-ciklus-approved.pdf"
];

export default {
  name: "Projects",
  mounted() {},
  methods: {
    openResource(rname) {
      firebase
        .storage()
        .ref("resources")
        .child(rname)
        .getDownloadURL()
        .then((url) => {
          // `url` is the download URL for 'images/stars.jpg'
          window.open(url, rname);
          console.log(url);
        })
        .catch((error) => {
          // Handle any errors
          console.log("greska" + error.code);
        });
    },
  },
  data() {
    return {
      page_det: pages_sr_l.resources,

      faFile: faFileAlt,
      resData: files,
    };
  },
  components: {
    Header,
    HeaderActionBar,
    Partners,
    Footer,
    FontAwesomeIcon,
  },
};
</script>
