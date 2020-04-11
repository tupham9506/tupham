<template>
  <div id="app-window">
    <client-only>
      <vue-drag-resize>
        <div class="text-center t-window">
          Bắt đầu ở đâu, kết thúc ở đó. <br>
          Thất bại ở đâu, thất bại tiếp ở đó. <br>
          <b>In Progress</b><br>
          <div>
            <img src="~/assets/images/common/in-progress.gif">
          </div>
        </div>
      </vue-drag-resize>
      <computer />
    </client-only>
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
    }
  }
};
</script>
<style type="text/css" lang="scss" src="./index.scss"></style>
