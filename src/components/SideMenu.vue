<template lang="">
    <div>
        <side-menu :isOpen="isOpen">
            <!-- 
                Your actual side menu goes here,
                Add your own styles, transitions here.

                Important!
                Styles for Open and Close states are implemented
                implement the close() function yourself 
            -->
        </side-menu>>
    </div>
</template>

<script>
import sideMenu from "./_app/SideMenu.vue"

export default {
    data() {
        return {
            isOpen : false
        }
    },
    props: {},
    components: {
        sideMenu: sideMenu
    },
    methods: {},
    async mounted() { },
    beforeMount() { }
}
</script>

<style lang="">
    
</style>