<template lang="">
    <div class="sidemenu" v-bind:class="[isOpen ? 'open' : 'closed']">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    props : {
        isOpen : {
            type : Boolean,
            default : false
        },
        closeDirection : {},
    },
    methods : {},
    mounted () {},    
}
</script>

<style lang="css">

    .sidemenu {
        position: fixed;
        top : 0;
        bottom: 0;
        z-index : 110;  /** this side menu sits above the app bar */
    }

    .sidemenu.closed {
        left: -20vw;
    }

    .sidemenu.open {
        left: 20vw;
    }



</style>