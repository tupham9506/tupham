import Vue from 'vue';
const _ = require('lodash');
export const state = () => ({
  runList: [],
  processId: 0
});

export const mutations = {
  addProcess (state, data) {
    const runList = _.cloneDeep(state.runList, true);
    runList.push(data);
    Vue.set(state, 'runList', runList);
  }
};
