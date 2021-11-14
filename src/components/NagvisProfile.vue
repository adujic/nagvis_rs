<template lang="html">

  <section class="nagvis-profile row">
    <div class="col-md-6  w3-padding nagvis-green w3-text-black">Korisnik</div>         
         <div class="col-md-6 w3-border w3-padding nagvis-green-border">{{userName}}</div>
         <div class="col-md-12 w3-border-bottom w3-border-left w3-border-right w3-padding nagvis-green-border">
           <div v-if="changePass" class="w3-animate-opacity">
             <form>
              <label>Nova lozinka</label>
              <input type="password" class="w3-input w3-border" v-model="pass" @focus="passErr=''"/>
              <label>Nova lozinka ponovo</label>
              <input type="password" class="w3-input w3-border" v-model="pass2"/>
              <div class="w3-text-red">{{passErr}}</div>
              <div class="w3-text-green">{{passInfo}}</div>
              <div class="w3-button w3-round nagvis-orange w3-margin" @click="updatePass">Promeni lozinku</div>
             </form>
           </div>
           <div @click="changePass = true" v-if="!changePass" class="nagvis-orange w3-round w3-hover-grey c-pointer w3-padding w3-margin-top">Izmena lozinke</div>
           <div @click="changePass = false"  v-if="changePass" class="w3-red w3-round w3-hover-grey c-pointer w3-padding w3-margin-top">Zatvori</div>
         </div>
  </section>

</template>

<script lang="js">
  import firebase from 'firebase'
  export default  {
    name: 'nagvis-profile',
    props: [],
    mounted () {
        var user = firebase.auth().currentUser;
        if(user != null)
          this.userName = user.email;
    },
    data () {
      return {
        userName:'',
        changePass:false,

        pass:"",
        pass2:"",

        passErr:'',
        passInfo:''
      }
    },
    methods: {
      updatePass(){
        if(this.pass.length < 8 || this.pass2.length < 8){
          console.log(this.pass.length)
          this.passErr = "Lozinka mora da bude najmanje 8 karaktera"

          this.pass="";
          this.pass2="";
        }
        else if(this.pass != this.pass2){
          this.passErr = "Lozinke se ne poklapaju"

          this.pass="";
          this.pass2="";
        }
        else{
          //promijeni pass
          const vm = this;
          var user = firebase.auth().currentUser;
          user.updatePassword(this.pass).then(function() {
            // Update successful.
            vm.passInfo = "Lozinka uspesno promenjena"
          }).catch(function(error) {
            // An error happened.
            vm.passErr = "Doslo je do serverske greske - "+ error.code;
          });
        }
      }
    },
    computed: {
      
    }
}


</script>

<style>
  .nagvis-profile {

  }
</style>
