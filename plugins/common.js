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
      response.req_success = true;
    } catch (e) {
      response = e.response;
      response.req_success = false;
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
  }
};

Vue.mixin({
  data () {
    return config;
  },
  methods: common
});

export default common;
