<template>
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
        }
    },
    props : {
    },
    computed : {
        title () {
            return this.$store.state._meta.appBarTitle
        }
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