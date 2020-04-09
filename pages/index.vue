<template>
  <div class="drag-container" v-drag-and-drop:options="{
    dropzoneSelector: '.drag-container',
    draggableSelector: '.drag-item',
    reactivityEnabled: true,
    onDrop: onDragover
  }">
    <div class="text-center drag-item">
      Bắt đầu ở đâu, kết thúc ở đó. <br>
      Thất bại ở đâu, thất bại tiếp ở đó. <br>
      <b>In Progress</b><br>
      <div>
        <img src="~/assets/images/common/in-progress.gif">
      </div>
    </div>
    <computer class="drag-item computer"/>
  </div>
</template>

<script>
import Computer from '@components/computer';
export default {
  components: {
    Computer
  },
  methods: {
    mounted () {

    },
    onDragover (event) {
      event.items[0].style.left = event.nativeEvent.x + 'px';
      event.items[0].style.top = event.nativeEvent.y + 'px';
      this.$forceUpdate();
    }
  }
};
</script>
<style type="text/css" lang="scss" src="./index.scss"></style>
