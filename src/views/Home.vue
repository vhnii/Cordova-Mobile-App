<template>
  <div class="home">
    <cItem />
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from 'axios'
import cItem from '@/components/cItem.vue'

export default {
  name: 'home',
  components: {
    cItem
  }
}

</script>

<style scoped lang="scss">

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
