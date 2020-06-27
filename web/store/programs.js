export const state = () => ({
  list: [{
    icon_link: 'images/programs/author.png',
    name: 'author',
    title: 'Tác giả',
    component: 'author'
  }, {
    icon_link: 'images/programs/feedback.png',
    name: 'feedback',
    title: 'Phản hồi',
    component: 'feedback'
  }, {
    icon_link: 'images/programs/convert.png',
    name: 'convert-to-http-param',
    title: 'Chuyển JSON sang HTTP params',
    component: 'convert-to-http-param'
  }]
});

export const getters = {
  getByName (state, name) {
    return (name) => {
      const program = state.list.filter((program) => {
        return program.name === name;
      });
      return program ? program[0] : null;
    };
  }
};
