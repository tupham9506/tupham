import Vue from 'vue';
import VueDraggable from 'vue-draggable';
Vue.use(VueDraggable);
Vue.prototype.dragableOption = {
  dropzoneSelector: 'ul',
  draggableSelector: 'li',
  handlerSelector: null,
  reactivityEnabled: true,
  multipleDropzonesItemsDraggingEnabled: true,
  showDropzoneAreas: true,
  onDrop (event) {
    console.log("event", event);
    console.log("event.nativeEvent.srcElement", event.nativeEvent.srcElement);
    event.nativeEvent.srcElement.style.top = 500;
    Vue.$forceUpdate();
  }
};
