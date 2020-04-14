
export default {
  name: 'clock',
  components: {},
  props: [],
  data () {
    return {
      time: null
    };
  },
  computed: {

  },
  mounted () {
    const self = this;
    setInterval(function () {
      self.time = self.moment().format('HH:mm');
    }, 1000);
  },
  methods: {

  }
};
