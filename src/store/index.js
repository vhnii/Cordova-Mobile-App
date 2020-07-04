import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencyData: [],
  },
  getters: {
    showCryptoData: state => state.currencyData,
    showCurrencyHistory: state => state.currencyHistory
  },
  mutations: {
    getCryptoData(state, payload) {
      state.currencyData = payload;
    }
  },
  actions: {

    async getCryptoData({commit}) {
      await axios('API_URL').then((response) => {
        commit('getCryptoData', response.data.DISPLAY)
      })
    },
  }
})
