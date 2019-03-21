import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 测试第一个store
    count: 0,
    testList: [
      {
        id: '1',
        name: 'fuyb',
        score: 80,
      },
      {
        id: '2',
        name: 'weiyb',
        score: 90,
      },
      {
        id: '3',
        name: 'liangjk',
        score: 92,
      },
      {
        id: '4',
        name: 'zhangcx',
        score: 87,
      },
    ],
    testGlobalObj: null
  },
  mutations: {
    increment(state) {
      state.count ++;
    },
    sub(state) {
      state.count --;
    },
    addScore(state) {
      state.testList = [...state.testList, {
        id: Math.max.apply(null, state.testList.map(item => +item.id)) + 1 + '',
        name: Array(Math.floor(Math.random() * 3) + 5).fill('').map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 'a'.charCodeAt(0))).join(''),
        score: Math.floor(Math.random() * 9) + 90,
      }]
    },
    delScore(state, id) {
      state.testList = state.testList.filter(item => item.id !== id);
    },
    extendTestGlobalObj(state, payload) {
      state.testGlobalObj = {
        ...(state.testGlobalObj || {}),
        ...payload
      }
    },
    changeExtendProperty(state, payload) {
    }
  },
  getters: {
    passedList: state => state.testList.filter(item => item.score >= 90),
    unpassedList: state => state.testList.filter(item => item.score < 90),
    passedListLength: (state, getters) => getters.passedList.length,
    getSpecificList: state => (id: string) => state.testList.find(item => item.id === id),
  },
  actions: {

  },
});
