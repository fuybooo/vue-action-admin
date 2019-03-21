<template>
  <div>
    <router-link to="/main">首页</router-link>
    <router-link to="/main/personal">个人中心</router-link>
    <button @click="logout">退回登录</button>
    <h1>在main中展示count的值{{$store.state.count}}</h1>
    <h2>展示computed中的count：{{count}}</h2>
    <h3>展示本地计算属性：{{localComputedVar}}</h3>
    <hr>
    <h1>使用getter</h1>
    <div v-for="(item, index) in passedList" :key="item.id">
      <span>{{item.name}}</span>:<span>{{item.score}}</span>
      <button v-if="index === passedListLength - 1" @click="addScore">增加</button>
      <button @click="delScore(item.id)">删除</button>
    </div>
    <button @click="changeCount()">增加count</button>
    <button @click="changeCount('-')">减少count</button>

    <div class="common-border">
      <input type="text" v-model="testId" @input="result = getSpecificList(testId)">
      <div>结果：<template v-if="result">name: {{result.name}}; score: {{result.score}}</template></div>
    </div>
    <button @click="extendTestGlobalObj">点击测试</button>
    {{$store.state.testGlobalObj.testProperty1}}
    <button @click="changeExtendProperty">改变新增的属性</button>
    <div>
      <h1>在main中的元素</h1>
    </div>
    <h1>以下是页面中的效果</h1>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import MainHome from '@/components/MainHome.vue';
  import {TYPE_ADD_SCORE, TYPE_DEL_SCORE, TYPE_EXTEND_TEST_GLOBAL_OBJ, TYPE_INCREMENT, TYPE_SUB} from "../types";
  import {mapGetters, mapState} from "vuex";

  @Component({
    components: {MainHome},
    computed: {
      ...mapState([
        'count'
      ]),
      ...mapGetters([
        'passedList',
        'passedListLength',
        'getSpecificList',
      ]),
      localComputedVar() {
        return this.count * this.count;
      }
    }
  })
  export default class Main extends Vue {
    testId = '';
    result = null;
    logout() {
      console.log('点击了logout');
      this.$router.push('/');
    }
    beforeCreate() {
      console.log('beforeCreate in class', this);
      // 打印状态
      console.log(this.$store.state.count);
    }
    created() {
      console.log('created in class', this);
      // 测试触发state的修改
      this.increment();
    }
    increment() {
      this.$store.commit(TYPE_INCREMENT);
    }
    sub() {
      this.$store.commit(TYPE_SUB);
    }
    changeCount(type = '+') {
      if (type === '+') {
        this.increment();
      } else {
        this.sub();
      }
    }
    addScore() {
      this.$store.commit(TYPE_ADD_SCORE);
    }
    delScore(id) {
      this.$store.commit(TYPE_DEL_SCORE, id);
    }
    extendTestGlobalObj() {
      this.$store.commit(TYPE_EXTEND_TEST_GLOBAL_OBJ, {
        testProperty1: 1
      });
      console.log(this.$store.state.testGlobalObj);
    }
    changeExtendProperty() {
      this.$store.commit(TYPE_CHANGE_EXTEND_PROPERTY, {
        testProperty1: 1
      });
    }
  }
</script>