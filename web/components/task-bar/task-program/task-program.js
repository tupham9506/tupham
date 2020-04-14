
export default {
  name: 'task-program',
  components: {},
  props: ['data'],
  data () {
    return {

    };
  },
  computed: {
    activeId () {
      return this.$store.state.tasks.activeId;
    }
  },
  mounted () {

  },
  methods: {
    activeProgram () {
      this.$store.commit('tasks/activeProcess', this.data.id);
    }
  }
};
