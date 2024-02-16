<template lang="">
  <DialogMessageModal
    :state="errorMessageState"
    :clickaway="true"
    @modal:close="errorMessageState.close()">
    <div class="flex flex-row justify-center mt-6 items-center">
      <ExclamationTriangleIcon class="w-12 sm:w-16 mr-6 sm:mr-4" />
      <p class="text-start text-md font-medium grow-0">
        {{ errorMessageState.message }}
      </p>
    </div>
    <template #actions>
      <button
        class="w-[75%] sm:w-[40%] mt-4 mb-3 sm:mt-8 btn bg-red-500 text-white"
        type="button"
        @click="errorMessageState.close()">
        OK
      </button>
    </template>
  </DialogMessageModal>
</template>

<script>
import {DialogMessageModal, DialogMessageState} from "../DialogMessageModal/index.js"

export default {
  name: "GlobalErrorMessageModal",
  data() {
    return {
      // Your data properties go here
    }
  },
  components: {
    DialogMessageModal,
  },
  props: {
    errorMessageState: {
      type: DialogMessageState,
      required: true,
    },
  },
  methods: {
    goBack() {
      this.$emit("breadcrumb:back")
    },
  },
  computed: {
    // Your computed properties go here
  },
  beforeCreate() {
    // Lifecycle hook: before instance is created
  },
  created() {
    // Lifecycle hook: after instance is created
  },
  beforeMount() {
    // Lifecycle hook: before component is mounted
  },
  mounted() {
    // Lifecycle hook: after component is mounted
  },
  beforeUpdate() {
    // Lifecycle hook: before component is updated
  },
  updated() {
    // Lifecycle hook: after component is updated
  },
  beforeUnmount() {
    // Lifecycle hook: before component is unmounted
  },
  unmounted() {
    // Lifecycle hook: after component is unmounted
  },
}
</script>

<style></style>
