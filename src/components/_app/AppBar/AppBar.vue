<template>
    <!-- recommended to use components in the _app folder as wrapper components -->
    <div class="app-bar" v-bind:class="[position == 'top' ? 'top' : 'bottom']">
        <slot :appBarState="appBarState" :back="back">
        </slot>
    </div>
</template>

<script>
import AppBarState from './AppBarState'

export default {
    data() {
        return {
        }
    },
    computed : {
        appBarState () {
            return this.$store.getters.getAppBarState
        }
    },
    props: {
        position: {
            type: String,
            default: "top"
        },
    },
    methods: {
        async back() {
            /**
                 *  if (appMetaData.isOverlayPresent)
                 *  this.$store.dispatch('hideOverlay')
                 * 
                 *  else {
                 *    this.$router.back()
                 *  }
                 */
        }
    },
    beforeMount () {
        this.$store.dispatch('setAppBarState', new AppBarState())
    },
    mounted() {                        
    },
    beforeUnmount() {
    },
    unmounted () {
        this.$store.dispatch('setAppBarState',null)
    }

}
</script>

<style>
.app-bar {
    margin: 0;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 100;
}

.top {
    top: 0;
}

.bottom {
    bottom: 0
}
</style>
