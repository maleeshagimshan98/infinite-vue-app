<template>   
    <router-view v-slot="{ Component }">
      <!-- App-wide default transitions -->
      <transition>
        <Component :is="Component" />
      </transition>
    </router-view>

    <!-- modal>
          show app wide errors - like errors in store.dispatch('api')
          write your own modal in this component's slot.
    </modal -->
</template>

<script>
import AppBar from "./components/AppBar.vue"
import SideMenu from "./components/SideMenu.vue"
import Modal from "./components/_app/Modal.vue"

export default {
  data() {
    return {
      //... add vue meta data for setting title on the browser tab
    }
  },
  props: {},
  methods: {},
  components: {
    AppBar,
    SideMenu,
    Modal
  },
  async mounted() { },
  beforeMount() { },
}
</script>

<style></style>
