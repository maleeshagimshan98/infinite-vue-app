<template>
  <div v-if="state.isOpen()"
    class="fixed top-0 bottom-0 left-0 right-0 z-[150] flex flex-col justify-start items-center p-12 sm:p-36 md:p-40 bg-black opacity-[95%] backdrop-blur-md">
    <div class="flex flex-col justify-center items-center mx-6 pt-6 pb-1 px-6 sm:mx-36 sm:py-6 sm:px-8 w-full my-auto bg-white opacity-100 shadow-xl">
      <slot>
        <p class="text-center text-md font-medium">
          {{ state.message }}
        </p>
      </slot>
      <slot name="actions" :state="state">
        <button class="w-full btn btn-success mt-4 mb-3 sm:mt-12" type="button" @click="">
          {{ buttonAction ?? 'OK' }} 
        </button>
      </slot>
    </div>
  </div>
</template>

<script>
import DialogMessageState from "./DialogMessageState"

export default {
  name: "DialogMessageModal",
  data() {
    return {
      // Your data properties go here
    }
  },
  components: {
  },
  props: {
    state: {
      type: DialogMessageState,
      required: true,
    },
  },
  methods: {},
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
