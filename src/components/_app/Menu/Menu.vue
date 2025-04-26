<template>
  <!-- position relative-->
  <div class="" v-click-away="(event) => (clickaway ? close(event) : null)">
    <slot name="activator" :state="state"></slot>
    <!-- position absolute z-index-110 ? -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    clickaway: {
      type: Boolean,
      default: true,
    },
  },
  components: {},
  computed: {},
  methods: {
    close(event) {},
  },
  watch: {},
  created() {},
  mounted() {
    this.$store.dispatch('setOverlayStatus', true);
    this.$store.dispatch('setPreventBackNav', true); //... check
  },
  destroyed() {
    this.$store.dispatch('setOverlayStatus', false);
    this.$store.dispatch('setPreventBackNav', false); //... check
  },
};
</script>

<style></style>
