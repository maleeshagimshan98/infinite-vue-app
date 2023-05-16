<template>
    <!-- recommended to use components in the _app folder as wrapper components -->
    <div class="modal">
        <slot>
        </slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
    },
    methods: {
        show() {
        },
        async hide() {
        }
    },
    mounted() {
        this.$store.dispatch("setOverlayPresent", true)
        this.$store.dispatch('setPreventBackNav',true) //... check
    },
    async unmounted() {
        this.$store.dispatch("removeErrorMessage") //... check
        this.$store.dispatch("setOverlayPresent", false)
        this.$store.dispatch('setPreventBackNav',false) //... check
    }
}
</script>

<style>
.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 120;
}
</style>
