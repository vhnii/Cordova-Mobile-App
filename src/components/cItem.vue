<template>
  <div>
  
     <svg v-on:click="getCryptoCurrencyData()" class="refresh" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>

    <router-link to="/btc">
      <div class="item">
        <div class="item-icon">
          <img src="../assets/img/Bitcoin.png" alt="Bitcoin">
        </div>

        
        <div class="item-info">
          <ul>
            <li>Price: {{ stringFix(cryptoCurrencyData.BTC.EUR.PRICE) }}</li>
            <li>Open: {{ stringFix(cryptoCurrencyData.BTC.EUR.OPEN24HOUR) }}</li>
            <li>Low: {{ stringFix(cryptoCurrencyData.BTC.EUR.LOW24HOUR) }}</li>
            <li>High: {{ stringFix(cryptoCurrencyData.BTC.EUR.HIGH24HOUR) }}</li>
          </ul>
        </div>
      </div>
    </router-link>

    <router-link to="/eth">
      <div class="item">
        <div class="item-icon">
          <img src="../assets/img/Ethereum.png" alt="Ethereum">
        </div>

        <div class="item-info">
          <ul>
            <li>Price: {{ stringFix(cryptoCurrencyData.ETH.EUR.PRICE) }}</li>
            <li>Open: {{ stringFix(cryptoCurrencyData.ETH.EUR.OPEN24HOUR) }}</li>
            <li>Low: {{ stringFix(cryptoCurrencyData.ETH.EUR.LOW24HOUR) }}</li>
            <li>High: {{ stringFix(cryptoCurrencyData.ETH.EUR.HIGH24HOUR) }}</li>
          </ul>
        </div>
      </div>
    </router-link>

    <router-link to="/ltc">
      <div class="item">
        <div class="item-icon">
          <img src="../assets/img/Litecoin.png" alt="Litecoin">
        </div>

        <div class="item-info">
          <ul>
            <li>Price: {{ stringFix(cryptoCurrencyData.LTC.EUR.PRICE) }}</li>
            <li>Open: {{ stringFix(cryptoCurrencyData.LTC.EUR.OPEN24HOUR) }}</li>
            <li>Low: {{ stringFix(cryptoCurrencyData.LTC.EUR.LOW24HOUR) }}</li>
            <li>High: {{ stringFix(cryptoCurrencyData.LTC.EUR.HIGH24HOUR) }}</li>
          </ul>
        </div>
      </div>
    </router-link>


    <router-link to="/xrp">
      <div class="item">
        <div class="item-icon">
          <img src="../assets/img/xrp.png" alt="Ripple">
        </div>

        <div class="item-info">
          <ul>
            <li>Price: {{ stringFix(cryptoCurrencyData.XRP.EUR.PRICE) }}</li>
            <li>Open: {{ stringFix(cryptoCurrencyData.XRP.EUR.OPEN24HOUR) }}</li>
            <li>Low: {{ stringFix(cryptoCurrencyData.XRP.EUR.LOW24HOUR) }}</li>
            <li>High: {{ stringFix(cryptoCurrencyData.XRP.EUR.HIGH24HOUR) }}</li>
          </ul>
        </div>
      </div>
    </router-link>


    <router-link to="/xlm">
      <div class="item">
        <div class="item-icon">
          <img src="../assets/img/xlm.png" alt="Stellar">
        </div>

        <div class="item-info">
          <ul>
            <li>Price: {{ stringFix(cryptoCurrencyData.XLM.EUR.PRICE) }}</li>
            <li>Open: {{ stringFix(cryptoCurrencyData.XLM.EUR.OPEN24HOUR) }}</li>
            <li>Low: {{ stringFix(cryptoCurrencyData.XLM.EUR.LOW24HOUR) }}</li>
            <li>High: {{ stringFix(cryptoCurrencyData.XLM.EUR.HIGH24HOUR) }}</li>
          </ul>
        </div>
      </div>
    </router-link>

    

  </div>
</template>

<script>
export default {
  name: 'cItem',
  created() {
    this.getCryptoCurrencyData()
  },
  methods: {
    getCryptoCurrencyData() {
      this.$store.dispatch('getCryptoData')
    },
    stringFix(string) {
      let modifiedString;
      
        modifiedString = string.substring(2, string.length-3) + ' €';
        
        if (modifiedString.length >= 7) {
          modifiedString = modifiedString.substring(0,1) + modifiedString.substring(2, modifiedString.length);
        }

      return modifiedString
    }
  },
  computed: {
    cryptoCurrencyData() {
      return this.$store.getters.showCryptoData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .refresh {
    position: absolute;
    right: 2%;
    top: 1.2rem;
    fill: #2c3e50;
  }

  a {
    text-decoration: none;
  }

  .item {

    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2rem .35rem;
    // padding: 1rem .35rem;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.6);


    .item-icon{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 8rem;
      width: 50%;
      // background: transparent;
      background: #2f3640;
      border: 1px solid #F1C40F;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;

    }

    .item-info {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 8rem;
      width: 50%;
      background: #57606F;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;


      ul {
        list-style: none;
        text-decoration: none;


        li {
          font-size: 1rem;
          margin: 5px 0;
        }
      }

    }
  }

ul {
  color: #F1C40F;
}


  .content {
    margin: auto;
    width: 100%;
    padding: 2rem;
    
   
}

.container {
    display: flex;
    align-items: center;
    background-color: #57606F;
    margin-top: 3rem;
    border-radius: 5px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.6);
    text-decoration: none !important;
    
}

.icon {
    background-color: #2F3640;
    padding: 1rem 2rem;
    border: 2px solid #F1C40F;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
}

.icon img {
    text-align: center;
    width: 98px;
}

.current {
    text-align: center;
    margin: auto;
}

.current p {
    text-align: center;
    font-size: 1.4rem;
    text-shadow: none;
    color:#F1C40F;
    
}

.logo {
    text-align: center;
    color:#fff;
    text-shadow: none;
}

.chart {
    margin-top: 3.5rem;
}

.detail {
    display: flex;
    width: 100%;
    margin: auto;
    margin-top: 5rem;
    background-color: #57606F;
    padding: 2rem 1rem;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.6);
    border-radius: 5px;
}

.margin-right {
    margin-right: auto;
}

.items {
    width: 40rem;
    text-align: center;
    text-shadow: none;
    color:#F1C40F;
    font-size: 1.6rem;
}

.back {
    width: 100% !important;
    background-color: #F1C40F !important;
    text-align: center;
    margin-top: 1rem;
    
}

.back a {
    text-decoration: none;
    font-size: 1.6rem;
    color: #333 !important;
    border: none !important;
    background-color: #F1C40F !important;
    text-shadow: none  !important;
    cursor: pointer;
}
    

</style>
