export const state = () => ({
});

export const getters = {
  getByName (state, name) {
    return (name) => {
      const program = state.filter((program) => {
        return program.name === name;
      });
      return program ? program[0] : null;
    };
  }
};

export const mutations = {
  setList (state, data) {
    state = data;
  }
};
