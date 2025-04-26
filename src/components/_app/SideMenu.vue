<template>
  <!-- recommended to use components in the _app folder as wrapper components -->
  <div class="inf-sidemenu" v-bind:class="[isOpen ? 'open' : 'closed']">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {};
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    closeDirection: {},
  },
  methods: {},
  mounted() {},
});
</script>

<style lang="css">
.inf-sidemenu {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 110; /** this side menu sits above the app bar */
}

.inf-sidemenu.closed {
  left: -20vw;
}

.inf-sidemenu.closed-right {
  right: -20vw;
}

.inf-sidemenu.open {
  left: 20vw;
}
</style>
