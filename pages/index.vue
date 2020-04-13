<template>
  <div id="app-window">
    <client-only>
      <!-- Desktop icon app -->
      <div v-for="(item, index) in shortcutList" :key="`shortcut-${index}`">
        <shortcut :data="item" @open-program="openProgram" />
      </div>
      <!-- Program opening -->
    </client-only>
    <div v-for="(item, index) in runList" :key="`run-${index}`">
      <component :is="item.component" :data="item" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  computed: {
    shortcutList () {
      return this.$store.state.desktop.shortcutList;
    },
    runList () {
      return this.$store.state.tasks.runList;
    }
  },
  methods: {
    mounted () {

    },
    onDragover (event) {
    },
    openProgram (programName) {
      const programs = this.$store.getters['programs/getByName'](programName);
      this.$store.commit('tasks/addProcess', programs);
    }
  }
};
</script>
<style type="text/css" lang="scss" src="./index.scss"></style>
