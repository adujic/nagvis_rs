<template lang="html" >

  <section class="backofficeli row w3-container w3-center">
      <!--
     <h4 class="backofficeli nagvis-orange-txt col-md-3" >Nagvis backoffice log in</h4>
    <div class="col-md-12 ">
        <input type="text" class="w3-round nagvis-orange-border w3-input width25" placeholder="E-mail"/>
    </div>
    <div class="col-md-12 w3-margin-top   w3-margin-bottom w3-center w3-container ">
        <input  type="password " class="w3-round nagvis-orange-border w3-input width25 "  placeholder="Lozinka"/>
    </div>
    <div class="col-md-12 ">
        <input type="button" class=" w3-round nagvis-orange nagvis-green-border w3-button width25" value="Log In"/>
    </div>
    --> 
    <div v-if="!showSpinner" style="margin:auto; margin-top:10%" class="w3-border w3-padding w3-round nagvis-green-border">
        <h4 class="backofficeli nagvis-orange-txt w3-border-bottom nagvis-green-border" >Nagvis backoffice</h4>
        <input type="text" class="w3-round nagvis-orange-border w3-input nagvis-orange-txt" placeholder="E-mail" v-model="email" @focus="errMsg=''"/>
        <input type="password" class="w3-round nagvis-orange-border w3-input  w3-margin-top   w3-margin-bottom nagvis-orange-txt" placeholder="Lozinka" v-model="pass" @focus="errMsg=''"/>
        <input type="button" class=" w3-round nagvis-orange w3-button width25 w3-margin-bottom" value="Log In" @click="logIn"/>
        <br>
        <span class="w3-text-red">{{errMsg}}</span>
    </div>
    
    <div v-if="showSpinner" class="spinner-border text-primary" style="margin:auto; margin-top:20%;"></div>
  </section>

</template>

<script lang="js">
  //const cred = {usr:"nagvisuser", pass:"uxZ6SJKp"}
  import firebase from 'firebase'
  export default  {
    name: 'backofficeli',
    props: [],
    mounted () {
      const vm = this;
      //this.register();
      if(vm.$store.getters.isLogedIn)
        vm.$router.push('BackOffice');
      //ovdje bi trebala provjera da li je logovan vec
      console.log("Mounted login")
    },
    data () {
      return {
          email:"",
          pass:"",

          errMsg:"",

          showSpinner:false
      }
    },
    methods: {
        logIn1(){
            
            if(this.email.length ==0 || this.pass.length == 0){
                this.errMsg = "E-mail ili lozinka nisu popunjeni!"
            }
            /*else if(this.email != cred.usr || this.pass != cred.pass){
              this.errMsg = "Pogresni kredencijali!";

              this.email = '';
              this.pass = '';
            }*/
            else{

              this.logInFb(this.email, this.pass)
            }

        },

        logIn(){
          const vm = this;
          if(this.email.length ==0 || this.pass.length == 0){
                this.errMsg = "E-mail ili lozinka nisu popunjeni!"
          }
          else{
            
            this.showSpinner = true;
            
            firebase.auth().signInWithEmailAndPassword(this.email, this.pass)
              .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user);
                console.log(user.email);
                console.log()

                vm.$store.dispatch('logInA');
                this.showSpinner = false;
                vm.$router.push('BackOffice')
                // ...
              })
              .catch((error) => {
                //var errorCode = error.code;
                //var errorMessage = error.message;
                console.log(error.code);
                this.errMsg = "Pogresni kredencijali!";

                this.email = '';
                this.pass = '';

                this.showSpinner = false;
              });
          }
        },

        /*
        register(){
          firebase.auth().createUserWithEmailAndPassword('asocijacijagv@gmail.com', 'n4gv15u53r')
          .then((userCredential) => {
            // Signed in 
            //var user = userCredential.user;
            console.log(userCredential.user)
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode + " "+ errorMessage)
            // ..
          });
        }
        */
    },
    computed: {

    },
    components:{}
}


</script>

<style >
.backofficeli {
  font-family: "Comfortaa", cursive;
  padding: 15px;
}

.head-title h1 {
  float: left;
  font-weight: bolder;
  font-size: 50px;
  text-shadow: 2.5px 2px rgba(1, 2, 2, 0.7);
  font-family: "Comfortaa", cursive;
}

.head-title p {
  float: left;
}

.head-side {
  margin: auto;
}

.width25 {
  width: 280px;
}
</style>
