import { getWindowSize } from '@utils/size';

export default {
  name: 't-window',
  components: {},
  props: {},
  data () {
    return {
      isOpen: true,
      sizeMode: 'custom',
      isMin: false,
      customWindow: {
        width: 800,
        height: 500,
        x: 300,
        y: 100
      },
      windowX: 300,
      windowY: 100,
      isSetMaxWindowSize: false,
      dragTimeout: null
    };
  },
  computed: {
    windowWidth () {
      return this.sizeMode === 'custom' ? this.customWindow.width : getWindowSize().width;
    },
    windowHeight () {
      return this.sizeMode === 'custom' ? this.customWindow.height : getWindowSize().height;
    }
  },
  mounted () {
  },
  methods: {
    onResizeStop (obj) {
      this.setCustomWindow({
        x: obj.left,
        y: obj.top,
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
    },
    closeWindow () {
      this.isOpen = false;
    },
    minWindow () {
      this.isMin = true;
    }
  }
};
