<template>
  <!-- recommended to use components in the _app folder as wrapper components -->
  <div class="">
    <slot :currentPage="currentPage" :next="next" :prev="prev" :jump="jump"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';
export default defineComponent({
  data() {
    return {
      currentPage: 1,
    };
  },
  props: {
    pages: {
      type: [Number],
      required: true
    },
    startAt: {
      type: [Number],
      default: 1,
    },
  },
  methods: {
    next() {
      if (this.currentPage == this.pages) {
        throw new Error(`Error in MultiPage.vue component, trying to access an undefined page number`);
      }
      this.currentPage++;
      console.log(this.currentPage); //... testing
      return this.currentPage;
    },
    prev() {
      if (this.currentPage == 1) {
        throw new Error(`Error in MultiPage.vue component, but tried to access page number before page 01`);
      }
      this.currentPage--;
      console.log(this.currentPage); //... testing
      return this.currentPage;
    },
    jump(pageNo = null) {
      console.log(this.pages);
      if (pageNo == null || pageNo === this.currentPage) {
        return;
      }
      if (pageNo > 0 && pageNo <= this.pages) {
        this.currentPage = pageNo;
        return this.currentPage;
      } else {
        throw new Error(
          `Error in MultiPage.vue component, trying to access an invalid page number - ${pageNo}. Currently available ${this.pages} pages`,
        );
      }
    },
  },
  async mounted() { },
  beforeMount() { },
});
</script>

<style></style>
