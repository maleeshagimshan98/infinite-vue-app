<template>
  <div class="">
    <slot v-on:click="(event) => close(event)"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    closeOnClick: {
      type: Boolean,
      default: true,
    },
  },
  components: {},
  computed: {},
  methods: {
    close(event) {
      if (this.closeOnClick) {
        //... close
      }
    },
  },
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
};
</script>

<style></style>
