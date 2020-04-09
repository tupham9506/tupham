<template>
  <v-app dark>
    <nuxt />
    <task-bar />
  </v-app>
</template>

<script>
import TaskBar from '@components/task-bar';
export default {
  components: {
    TaskBar
  }
};

</script>
<style type="text/css">
  .v-application--wrap {
    background: url('~assets/images/mains/default-desktop.jpg');
  }
  body {
    font-size: 13px;
  }
</style>
