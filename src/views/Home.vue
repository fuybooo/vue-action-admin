<template>
  <div class="home">
    <button @click="login">登录</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {
  login() {
    this.$router.push('/main');
  }
}
</script>
