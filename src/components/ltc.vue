<template> 
    <div class="currency-item">
        <svg v-on:click="getCryptoCurrencyData(); chartData()" class="refresh" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
        <div class="item-icon">
            <img src="../assets/img/Litecoin.png" alt="Litecoin">
            <!-- <h1 class="item-name">Litecoin</h1> -->

            <h1 class="item-price">{{ stringFix(cryptoCurrencyData.LTC.EUR.PRICE) }}</h1>
        </div>
        <div class="item-chart">
           <line-chart :chart-data="datacollection" :options="options" />
        </div>

        <div class="item-info">
            <div class="row">
                <p>Open: {{ stringFix(cryptoCurrencyData.LTC.EUR.OPEN24HOUR) }} </p>
                <p>Change: {{ stringFix(cryptoCurrencyData.LTC.EUR.CHANGEDAY) }} </p>
            </div>
            <div class="row">
                <p>Low: {{ stringFix(cryptoCurrencyData.LTC.EUR.LOW24HOUR) }} </p>
                <p>High: {{ stringFix(cryptoCurrencyData.LTC.EUR.HIGH24HOUR) }} </p>
            </div>
        </div>

        <div class="btn-back">
            <router-link to="/">Back</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import LineChart from "./LineChart";

export default {
    name: 'currency',
     components: {
        LineChart
    },
    data() {
        return {
            datacollection: {},
            options: {
                responsive: true,
                tooltips: {
                mode: 'index',
                intersect: false,
                },
                hover: {
                mode: 'nearest',
                intersect: true
                },
                legend: {
                display: false
                }
            }
        }      
    },
   async created() {
        this.getCryptoCurrencyData()
        this.chartData()
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
        },
        timeFormat(givenTime) {
            let time = new Date(givenTime * 1000);
            return time.toLocaleString('en-US', { hour: 'numeric', hour12: true})
        },
        async chartData() {
            await axios('API_URL')
            .then((response) => {
                this.datacollection = {
                labels: response.data.Data.Data.map(i => this.timeFormat(i.time)),
                datasets: [{
                label: 'Price',
                borderColor: '#F1C40F',
                backgroundColor: 'transparent', 
                color: '#F1C40F',
                borderWidth: 3,
                pointRadius: 0,
                data: response.data.Data.Data.map( i => i.close)
                }]
                }
            })
        }
    },
    computed: {
        cryptoCurrencyData() {
            return this.$store.getters.showCryptoData
        }
    }
}
</script>


<style scoped lang="scss">

    .refresh {
        position: absolute;
        right: 2%;
        top: 1.2rem;
        fill: #2c3e50;
    }

    .currency-item {
        // display: flex;
        // flex-direction: column;
        padding: 2rem 0 0 0;


        .item-name {
            color: #F1C40F;
            padding-top: 1rem;
            padding-bottom: .5rem;
            font-size: 1.6rem;

        }


        .item-price {
            color: #F1C40F;
            font-size: 1.4rem;
            padding: 1rem 0;
            font-weight: normal;
        }

        .item-chart {
            color: #F1C40F;
            width: 100%;
            overflow: hidden;
            margin: 1rem 0;
        }

        .item-info {
            background: #57606F;
            color: #F1C40F;
            padding: 1rem 0;

            .row {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                padding: 5px 0;

                p {
                    font-size: 1.2rem;
                }

            }

            ul {
                list-style: none;

                li {
                    margin: 5px 0;
                }
            }
        }
    }

.btn-back {
        background: #F1C40F;
        padding: 1rem 0;
        text-align: center;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: #2c3e50;
            text-transform: uppercase;
            font-weight: 550;
        }
    }
</style>