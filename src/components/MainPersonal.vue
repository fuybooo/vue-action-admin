<template>
  <div>
    <div>个人中心</div>
    <h1>在个人中心中访问count：{{count}}</h1>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {mapState} from "vuex";

  @Component({
    components: {},
    computed: mapState([
      'count'
    ]),
  })
  export default class MainPersonal extends Vue {
  }
</script>
<style lang="less">
</style>
