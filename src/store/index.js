import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logedIn:false,
    lastNwsLoad:null,
    lastActLoad:null,
    news:[],
    activity:[],
    pgA:1,
    pgN:1
  },
  getters:{
    isLogedIn: state=>{
      return state.logedIn;
    },

    getNews : state=>{
      return state.news;
    },
    getLastNLoad : state=>{
      return state.lastNwsLoad;
    },
    getLastALoad : state=>{
      return state.lastActLoad;
    },
    getActivity : state=>{
      return state.activity;
    },

    getPgA : state=>{
      return state.pgA;
    },

    getPgN : state=>{
      return state.pgN;
    }
  },
  mutations: {
    logIn(state){
      state.logedIn = true; 
    },

    logOut(state){
      state.logedIn = false; 
    },

    setNews(state, inData){
      state.news = inData.arr;
      //setovati poslenji load
      state.lastNwsLoad = new Date().getTime();
    },

    setActivity(state, inData){
      state.activity = inData.arr;
      //setovati poslednji load
      state.lastActLoad = new Date().getTime();
    },

    setPgA(state, newPg){
      state.pgA = newPg
    },

    setPgN(state, newPg){
      state.pgN = newPg
    }
  },
  actions: {
    logInA(context){
      context.commit("logIn")
    },

    logOutA(context){
      context.commit("logOut")
    },

    setNewsA(context, inData){
      context.commit("setNews", inData)
    },

    setActivityA(context, inData){
      context.commit("setActivity", inData)
    },

    setPgAA(context, newPg){
      context.commit("setPgA", newPg)
    },

    setPgNA(context, newPg){
      context.commit("setPgN", newPg)
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
