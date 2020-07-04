import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
// const { reactiveData } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  // mixins: [reactiveData],
  props: ['options'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  }
}