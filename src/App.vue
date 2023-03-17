<template>
  <div class="">
    <!-- layout components-->
    <!-- reccomended to use components in _app folder as wrapper components for following components-->
    <app-bar></app-bar>
    <side-menu></side-menu>
    <!-- ---------------------->

    <router-view v-slot="{ Component }">
      <!-- App-wide default transitions -->
      <transition>
        <Component :is="Component"></Component>
      </transition>
    </router-view>

  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue"
import SideMenu from "./components/SideMenu.vue"

export default {
  data () {
    return {
      //... add vue meta data for setting title on the browser tab
    }
  },
  props : {},
  methods : {},
  components : {
    AppBar, SideMenu
  },
  async mounted () {},

}
</script>

<style>

</style>
