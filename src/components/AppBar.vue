<template>
  <div>
    <AppBar :position="'top'">
      <!-- add your top app bar ui here, pass the app bar title to appbar -->
      {{ title }}
    </AppBar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppBar from './_app/AppBar/AppBar.vue';

export default defineComponent({
  data() {
    return {};
  },
  props: {},
  computed: {
    title() {
      return this.$store.getters.getAppBarTitle;
    },
  },
  components: {
    AppBar,
  },
  methods: {
    back() {
      /**
       *  if (appMetaData.isOverlayPresent)
       *  this.$store.dispatch('hideOverlay')
       *
       *  else {
       *    this.$router.back()
       *  }
       */
    },
  },
});
</script>

<style lang="css"></style>
