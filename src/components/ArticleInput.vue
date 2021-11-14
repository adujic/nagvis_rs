<template lang="html">

  <section class="article-input">
        <div class="col-md-12  w3-margin">
          <label style="float:left"> Naslov </label>
          <input type="text" class="w3-round nagvis-orange-border w3-input w3-border" placeholder="Unesite naslov" v-model="news_title" @focus="status_msg =''"/>
        </div>
        <div class="col-md-2 w3-margin" v-if=" inputMode == 'E' " >
          <label style="float:left"> Datum </label>
          <input type="text" class="w3-round nagvis-orange-border w3-input w3-border" placeholder="Unesite datum" v-model="news_dtc" @focus="status_msg =''"  />
        </div>
        <div class="col-md-12  w3-margin">
          <label style="float:left"> Naslov </label>
          <input type="text" class="w3-round nagvis-orange-border w3-input w3-border" placeholder="Unesite naslov" v-model="news_title" @focus="status_msg =''"/>
        </div>
        <div class="w3-margin col-md-12" >
          <label style="float:left"> Tekst </label>
          <textarea type="textarea" class="w3-round nagvis-orange-border w3-input w3-border" placeholder="Unesite tekst"  v-model="news_txt" style="height:150px"/>
        </div>
        <div class="col-md-12 w3-margin">
          <label style="float:left"> Slika </label>
          <input type="text" class="w3-round nagvis-orange-border w3-input w3-border" placeholder="Link do slike"  v-model="news_img"/>
        </div>
        <div class="col-md-12 w3-margin" v-if="status_msg.length >0">
          <div class="w3-border w3-margin w3-padding w3-border-green w3-text-green w3-round w3-bold">
          {{status_msg}}
          </div>
        </div>
        <div class="col-md-12 w3-margin row">
          <input  v-if="inputType == 'V' && inputMode == 'I' " type="button" class=" w3-round nagvis-orange nagvis-green-border w3-button width25" value="Postavi vest" @click="addNews" :disabled='news_title.length == 0'/>
          <input  v-if="inputType =='A' && inputMode == 'I' " type="button" class=" w3-round nagvis-orange nagvis-green-border w3-button width25" value="Postavi aktivnost" @click="addAct" :disabled='news_title.length == 0'/>
        
          <input  v-if="inputType == 'V' && inputMode == 'E' " type="button" class=" w3-round nagvis-orange nagvis-green-border w3-button width25" value="Azuriraj vest" @click="upd('news')" :disabled='news_title.length == 0'/>
          <input  v-if="inputType =='A' && inputMode == 'E' " type="button" class=" w3-round nagvis-orange nagvis-green-border w3-button width25" value="Azuriraj aktivnost" @click="upd('activity')" :disabled='news_title.length == 0'/>
        </div>
  </section>

</template>

<script lang="js">
  
  import { db} from '../firebase.js'

  export default  {
    name: 'article-input',
    props: ['inputType', 'inputData', 'inputMode'],
    mounted () {
        const vm = this;
        if(vm.inputData != undefined){
          this.news_title = vm.inputData.title;
          this.news_dtc = vm.inputData.dtc;
          this.news_txt =  vm.inputData.txt.replaceAll('<br>', '\n');
          this.news_img = vm.inputData.img;
          this.id = vm.inputData.id;
        }
    },
    data () {
      return {
        news_title:"",
        news_txt:"",
        news_img:"",
        id:"",
        news_dtc:"",

        //status msg
        status_msg:"",
      }
    },
    methods: {
      upd(loc){
        var itemKey;
        var data = this.inputData;
        const vm = this;
        //get key        
        db.ref(loc).orderByChild('id').equalTo(this.id).once('value', snapshot => {        
          snapshot.forEach(function(childSnapshot) {
            itemKey = childSnapshot.key;

            //prepare data
            data.title = vm.news_title;
            data.txt = vm.news_txt.replaceAll('\n', '<br>');
            data.img = vm.news_img;
            data.dtc = vm.news_dtc;
            data.dtm = vm.dtFormat();

            db.ref(loc +'/' + itemKey).set(data, (error) => {
              if (error) {
                // The write failed...
                console.log(error.code)
              } else {
                // Data saved successfully!
                vm.status_msg ="Uspesna izmena"
              }
            });
          })
        });

      },
      addNews(){

        if(this.news_title.length >0 && this.news_txt.length >0 ){
          db.ref('news/').push({
            id: this.idFormat(),
            title: this.news_title,
            txt: this.news_txt.replaceAll('\n', '<br>'),
            img: this.news_img,
            dtc:this.dtFormat(),
            dtm:this.dtFormat(),
            status:0
          })

            this.news_title = ""
            this.news_txt=""
            this.news_img=""

            this.status_msg ="Uspesan unos"
        }
        else{
          this.status_msg =""
        }

        

        
      },

      addAct(){

        if(this.news_title.length >0 && this.news_txt.length >0 ){
          db.ref('activity/').push({
            id: this.idFormat(),
            title: this.news_title,
            txt: this.news_txt.replaceAll('\n', '<br>'),
            img: this.news_img,
            dtc:this.dtFormat(),
            dtm:this.dtFormat(),
            status:0
          })

            this.news_title = ""
            this.news_txt=""
            this.news_img=""

            this.status_msg ="Uspesan unos"
        }
        else{
          this.status_msg =""
        }

        

        
      },

      dtFormat(){
        var d = new Date();
        return (d.getDate()<10? "0"+d.getDate():d.getDate())+"."+((d.getMonth()+1)<10? "0"+(d.getMonth()+1):d.getMonth())+"."+d.getFullYear();

      },
      idFormat(){
        var d = new Date();
        return (d.getTime());
      },

    },
    computed: {

    }
}


</script>

<style >
  .article-input {

  }
</style>
