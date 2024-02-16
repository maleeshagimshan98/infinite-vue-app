<template>
    <!-- recommended to use components in the _app folder as wrapper components -->
    <div class="app-bar" v-bind:class="[position == 'top' ? 'top' : 'bottom']">
        <slot :appBarState="appBarState" :back="back">
        </slot>
    </div>
</template>

<script>

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
        if (!this.$store.getters.getAppBarState) {
            console.warn('Warning - No appBarState is found on the vuex store')
        }    
    },
    mounted() {                        
    },
    beforeUnmount() {
    },
    unmounted () {
    }

}
</script>

<style>
.app-bar {
    margin: 0;
    position: relative;
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
