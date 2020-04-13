import Vue from 'vue';
import { maxObject } from '@utils/obj';
const _ = require('lodash');

export const state = () => ({
  runList: {},
  processId: 0,
  activeId: 0,
  zIndex: 0
});

export const mutations = {
  addProcess (state, data) {
    const runList = _.cloneDeep(state.runList, true);
    const cloneData = _.cloneDeep(data, true);
    cloneData.id = state.processId + 1;
    cloneData.zIndex = state.zIndex + 1;
    runList[cloneData.id] = cloneData;
    Vue.set(state, 'runList', runList);
    Vue.set(state, 'processId', cloneData.id);
    Vue.set(state, 'activeId', cloneData.id);
    Vue.set(state, 'zIndex', cloneData.zIndex);
  },
  activeProcess (state, id) {
    if (id === state.activeId) {
      return false;
    }
    const newZIndex = state.zIndex + 1;
    const runList = _.cloneDeep(state.runList, true);
    runList[id].zIndex = newZIndex;
    runList[id].isMin = false;
    if (!runList[id]) {
      return false;
    }
    Vue.set(state, 'runList', runList);
    Vue.set(state, 'zIndex', newZIndex);
    Vue.set(state, 'activeId', id);
  },
  killProcess (state, id) {
    const runList = _.cloneDeep(state.runList, true);
    delete runList[id];
    const previosProgram = maxObject(runList, 'zIndex');
    const zIndex = previosProgram ? previosProgram.zIndex : 0;
    const activeId = previosProgram ? previosProgram.activeId : 0;
    Vue.set(state, 'zIndex', zIndex);
    Vue.set(state, 'activeId', activeId);
    Vue.set(state, 'runList', runList);
  },
  updateProcess (state, data) {
    const runList = _.cloneDeep(state.runList, true);
    let i;
    for (i in data.data) {
      runList[data.id][i] = data.data[i];
    }
    const tempRunData = _.cloneDeep(runList[data.id], true);
    delete runList[data.id];

    // Get max zIndex, is not recent deactive
    const previosProgram = maxObject(runList, 'zIndex');
    const zIndex = previosProgram ? previosProgram.zIndex : 0;
    const activeId = previosProgram ? previosProgram.activeId : 0;
    Vue.set(state, 'zIndex', zIndex);
    Vue.set(state, 'activeId', activeId);

    runList[data.id] = tempRunData;
    Vue.set(state, 'runList', runList);
  }
};
