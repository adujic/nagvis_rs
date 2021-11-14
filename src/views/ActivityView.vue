<template>
  <div class="home">
    <Header/>
    <HeaderActionBar />
    <div class="row" style="">
      
      <div class="col-md-8" >
        <h1 class="col-md-12  main-h1 w3-hide-small w3-animate-opacity" >{{act_data.title}}</h1>
        <h1 class="col-md-12  main-h1 w3-hide-large w3-xlarge " >{{act_data.title}}</h1>
        <hr>
        <div class="w3-text-grey col-md-12 nws-txt-det">{{act_data.dtc}}</div>
        <hr>
        <div class="col-md-9">
          <img :src ="act_data.img" style="width:100%;" onerror='this.src="/img/logo_wide.3108ee84.png"'> 
        </div>
        <hr>
        <div class="col-md-12 nws-txt-det" v-html="act_data.txt">
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
import Partners from "@/components/Partners";
import NgvFooter from "@/components/NgvFooter";

//import news_data_1 from '../data/news.js'
import { db} from '../firebase.js'

export default {
  name: 'Activity',
  mounted(){
    var id = Number(this.$route.params.id);

    
    var ref = db.ref("activity");
    var activityData = null;

    ref.orderByChild("id").equalTo(id).once('value', snapshot => {
      snapshot.forEach(function(childSnapshot) {
        activityData = childSnapshot.val();
      })
      this.act_data = activityData;
    });

      //console.log(activityData)

      //this.act_data = activityData;
      window.scrollTo(0, 0)
  },
  data () {
      return {
        act_data:{title:'', txt:'', img:''}
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

<style scoped>
  .nws-txt-det{
    text-align: justify;
    font-family: 'Comfortaa', cursive;
  }
</style>