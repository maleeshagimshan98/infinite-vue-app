<template>
    <div id="default-layout">
        <!-- layout components-->
        <app-bar />
        <side-menu />
        <slot>
            <!-- main content -->
        </slot>
        <slot name="footer">
            <!-- footer content -->
        </slot>
    </div>
</template>

<script>
import AppBar from '../components/AppBar.vue';
import SideMenu from '../components/SideMenu.vue';

export default {
    data() {
        return {
        }
    },
    methods: {
    },
    props: {},
    components: {
        AppBar, SideMenu
    },
    async mounted() {

    }
}
</script>