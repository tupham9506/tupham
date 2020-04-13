
export default {
  name: 'author',
  components: {},
  props: ['data'],
  data () {
    return {

    };
  },
  computed: {
    author () {
      return this.$store.state.author.data;
    }
  },
  mounted () {

  },
  methods: {

  }
};
