import { getWindowSize } from '@utils/size';

export default {
  name: 't-window',
  components: {},
  props: {
    slotData: {}
  },
  data () {
    return {
      sizeMode: 'custom',
      customWindow: {
        width: 800,
        height: 500,
        x: 0,
        y: 0
      },
      windowX: Math.floor(Math.random() * 500 + 1),
      windowY: Math.floor(Math.random() * 300 + 1),
      isSetMaxWindowSize: false,
      dragTimeout: null
    };
  },
  computed: {
    windowWidth () {
      return this.sizeMode === 'custom' ? this.customWindow.width : getWindowSize({ exceptTaskbar: true }).width;
    },
    windowHeight () {
      return this.sizeMode === 'custom' ? this.customWindow.height : getWindowSize({ exceptTaskbar: true }).height;
    },
    activeId () {
      return this.$store.state.tasks.activeId;
    }
  },
  mounted () {
  },
  methods: {
    onResizeStop (obj) {
      this.setCustomWindow({
        x: obj.left,
        y: obj.top,
        width: obj.width,
        height: obj.height,
        sizeMode: 'custom'
      });
    },
    onDragStop (obj) {
      const self = this;
      self.dragTimeout = setTimeout(function () {
        if (self.isSetMaxWindowSize === true) {
          clearTimeout(self.dragTimeout);
          return true;
        }
        self.setCustomWindow({
          x: obj.left,
          y: obj.top,
          sizeMode: 'custom'
        });
      }, 300);
    },
    setMaxWindowSize () {
      const self = this;
      this.isSetMaxWindowSize = true;
      this.sizeMode = this.sizeMode === 'custom' ? 'max' : 'custom';
      this.setWindowPosition();
      setTimeout(function () {
        self.isSetMaxWindowSize = false;
      }, 300);
    },
    setWindowPosition () {
      const dragSelector = this.$refs['drag-ref'].$el;
      // Cache current position
      this.setCustomWindow({
        x: dragSelector.offsetLeft,
        y: dragSelector.offsetTop,
        sizeMode: 'max'
      });

      // New position
      const windowX = (this.sizeMode === 'custom') ? this.customWindow.x : 0;
      const windowY = (this.sizeMode === 'custom') ? this.customWindow.y : 0;
      this.$set(this, 'windowX', windowX);
      this.$set(this, 'windowY', windowY);
      dragSelector.style.left = this.windowX;
      dragSelector.style.top = this.windowY;
    },
    setCustomWindow (obj) {
      if (this.sizeMode !== obj.sizeMode) {
        return false;
      }
      this.$set(this.customWindow, 'x', obj.x);
      this.$set(this.customWindow, 'y', obj.y);
      if (obj.width) {
        this.$set(this.customWindow, 'width', obj.width);
      }
      if (obj.height) {
        this.$set(this.customWindow, 'height', obj.height);
      }
    },
    closeWindow () {
      this.$store.commit('tasks/killProcess', this.slotData.id);
    },
    minWindow () {
      this.$store.commit('tasks/updateProcess', {
        id: this.slotData.id,
        data: { isMin: true }
      });
    },
    clickWindow () {
      this.$store.commit('tasks/activeProcess', this.slotData.id);
    },
    onSelectElement (event) {
      const tagName = (event.target.tagName || '').toUpperCase();
      if (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT' || tagName === 'BUTTON') {
        event.stopPropagation();
      }
    }
  }
};
