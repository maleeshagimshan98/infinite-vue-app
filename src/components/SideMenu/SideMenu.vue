<template>
    <!-- recommended to use components in the _app folder as wrapper components -->
    <div class="w-full h-screen py-8 bg-slate-100">
        <div class="mb-12 px-3">
            <p class="text-center font-medium text-4xl">
                Bizguard
            </p>
            <p class="mt-4 text-center text-lg">
                Your verified business channel
            </p>

            <!-- TODO - ADD USE PORFILE COMPONENT -->
        </div>
        <Menu style="position : relative" class="" :activated="true" :clickaway="false" :state="menuState"></Menu>
    </div>
</template>

<script>
import { Menu, MenuItem, MenuState, MenuItemState, MenuStyles } from "infinite-vue-menu"

export default {
    data() {
        return {
            menuState: null,
        }
    },
    components: {
        Menu,
    },
    props: {
        isOpen: {
            type: Boolean,
            default: false
        },
        closeDirection: {},
    },
    methods: {},
    beforeMount() {
        let menuState = this.$store.getters['getSideMenuState']
        console.log(menuState)
        this.menuState = menuState
    },
}
</script>

<style lang="css">
.sidemenu {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 110;
    /** this side menu sits above the app bar */
}

.sidemenu.closed {
    left: -20vw;
}

.sidemenu.closed-right {
    right: -20vw;
}

.sidemenu.open {
    left: 20vw;
}

.inf-vue-menu .inf-vue-menu-content {
    position: relative;
}
</style>