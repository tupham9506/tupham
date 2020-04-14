export default {
  name: 'shortcut',
  components: {},
  props: ['data'],
  data () {
    return {
    };
  },
  computed: {
    windowWidth () {
      return this.data.width || 100;
    },
    windowHeight () {
      return this.data.height || 120;
    },
    windowX () {
      return this.data.x || 0;
    },
    windowY () {
      return this.data.y || 0;
    },
    title () {
      return 40;
    }
  },
  mounted () {

  },
  methods: {
    openProgram () {
      this.$emit('open-program', this.data.name);
    },
    onDragStop () {
    },
    onResizeStop () {

    }
  }
};
