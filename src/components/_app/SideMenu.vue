<template lang="">
    <div class="sidemenu" v-bind:class="[isOpen ? 'open' : 'closed']"></v-bind:class>>
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
        }
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
        transition: all 0.25s ease-in-out ;
        z-index : 110;  /** this side menu sits above the app bar */
    }

    .sidemenu.closed {
        left: -20vw;
    }

    .sidemenu.open {
        left: 20vw;
    }



</style>