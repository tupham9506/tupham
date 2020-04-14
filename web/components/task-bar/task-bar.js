import Clock from './clock';
import TaskProgram from './task-program';
export default {
  name: 'task-bar',
  components: {
    Clock,
    TaskProgram
  },
  props: [],
  data () {
    return {

    };
  },
  computed: {
    runList () {
      return this.$store.state.tasks.runList;
    }
  },
  mounted () {

  },
  methods: {

  }
};
