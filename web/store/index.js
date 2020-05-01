import common from '@plugins/common';
import CONFIG from '@plugins/config';

export const state = () => ({

});

export const getters = {

};

export const actions = {
  async load (context) {
    const res = await common.request({
      url: common.apiUrl(CONFIG.ROUTES.WINDOW)
    });

    if (!res || !res.reqSuccess) {
      return false;
    }

    context.commit('programs/setList');

    return res;
  }
};
