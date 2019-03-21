<template>
  <div>
    <div>Main-home</div>
    <h1>在home中访问count：{{count}}</h1>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {mapState} from "vuex";

  @Component({
    components: {},
    computed: mapState([
      'count'
    ])
  })
  export default class MainHome extends Vue {
  }
</script>
<style lang="less">
</style>
