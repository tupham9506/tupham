import Vue from 'vue';
import axios from 'axios';
import _ from 'lodash';
import config from './config';

const common = {
  async request (input) {
    const options = _.cloneDeep(input, true);
    // Handle url
    const url = options.url;
    let response = {};
    try {
      response = await axios({
        url,
        data: options.data,
        params: options.data,
        method: options.method || 'get'
      });
      response.reqSuccess = true;
    } catch (e) {
      response = e.response || {};
      response.reqSuccess = false;
    }
    return response;
  },
  mergeObject (oldObj, newObj) {
    let i;
    for (i in newObj) {
      oldObj[i] = newObj[i];
    }
    return oldObj;
  },
  generateText (item) {
    let text = item.value;
    switch (item.type) {
      case 'link':
        text = `<a href="${item.link}" target="_blank">${item.value}</a>`;
        break;
      default:
        // Do nothing
    }
    return text;
  },
  apiUrl (url) {
    console.log("process.env.API_URL", process.env);
    return `${process.env.API_URL || ''}/${url}`;
  }
};

Vue.mixin({
  data () {
    return config;
  },
  methods: common
});

export default common;
