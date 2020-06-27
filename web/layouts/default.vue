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
  },
  mounted () {
    const currentPath = this.$route.path.replace(/\//g, '');
    const programs = this.$store.getters['programs/getByName'](currentPath);
    if (programs) {
      this.$store.commit('tasks/addProcess', programs);
    }
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
