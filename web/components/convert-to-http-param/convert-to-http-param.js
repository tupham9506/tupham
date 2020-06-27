
export default {
  name: 'convert-to-http-param',
  components: {},
  props: ['data'],
  data () {
    return {
      json: '',
      httpParams: '',
      masterKey: ''
    };
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    convert () {
      let data;
      try {
        data = JSON.parse(this.json);
      } catch (e) {
        alert('Cấu trúc JSON không đúng');
        return false;
      }
      this.httpParams = this.convertObject(data);
    },
    convertObject (o) {
      function iter (o, path) {
        if (Array.isArray(o)) {
          o.forEach(function (a, index) {
            iter(a, path + `[${index}]`);
          });
          return;
        }
        if (o !== null && typeof o === 'object') {
          Object.keys(o).forEach(function (k) {
            iter(o[k], path + `[${k}]`);
          });
          return;
        }
        data.push(path + ': ' + o);
      }

      const data = [];
      Object.keys(o).forEach(function (k) {
        iter(o[k], k);
      });
      return data.join('\n');
    }
  }
};
