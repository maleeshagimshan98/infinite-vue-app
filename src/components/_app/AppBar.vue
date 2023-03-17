<template>
    <div class="app-bar" v-bind:class="[position == 'top' ? 'top' : 'bottom']">
        <slot>
        </slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
            back () {
                /**
                 *  if (appMetaData.isOverlayPresent)
                 *  this.$store.dispatch('hideOverlay')
                 * 
                 *  else {
                 *    this.$router.back()
                 *  }
                 */
            },
        }
    },
    props : {
        title : [String],
        position : {
            type : String,
            default : "top"
        },
    },
    methods : {},
    mounted() {
        
    },

    beforeUnmount() {
        
    },

}
</script>

<style>

.app-bar {
    margin: 0;
    position: fixed;
    left : 0;
    right: 0; 
    z-index : 100;
}

.top {
    top : 0;    
}

.bottom {
    bottom : 0
}

</style>
