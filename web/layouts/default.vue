<template>
  <v-app dark>
    <welcome v-if="process == 'load'" />
    <div v-if="process == 'login'">
      <nuxt />
      <task-bar />
    </div>
  </v-app>
</template>

<script>
import TaskBar from '@components/task-bar';
import Welcome from '@components/welcome';
export default {
  components: {
    TaskBar,
    Welcome
  },
  data () {
    return {
      process: 'load'
    };
  },
  async mounted () {
    const result = await this.$store.dispatch('load');
    if (!result) {
      return false;
    }
    this.process = 'login';
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
