<template lang="html">
    <div>
        <AppBar :position="'top'">
            <!-- add your top app bar ui here, pass the app bar title to appbar -->
        </AppBar>        
    </div>
</template>

<script>
import AppBar from './_app/AppBar.vue';
export default {
    data () {
        return {
            title : this.$store.state.meta.appBarTitle //... change this to store getter
        }
    },
    props : {
    },
    components : {
        AppBar,
    },
    methods : {
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
}
</script>

<style lang="css">
    
</style>