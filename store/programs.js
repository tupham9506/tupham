export const state = () => ({
  list: [{
    icon_link: 'images/programs/author.png',
    name: 'author',
    title: 'Tác giả',
    component: 'author'
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
