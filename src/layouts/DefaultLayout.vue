<template>
  <div id="default-layout">
    <!-- layout components-->
    <side-menu />
    <slot>
      <!-- main content -->
    </slot>
    <slot name="footer">
      <!-- footer content -->
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideMenu from '../components/SideMenu/SideMenu.vue';

export default defineComponent({
  data() {
    return {};
  },
  methods: {},
  props: {},
  components: {
    SideMenu,
  },
  async mounted() {},
});
</script>
