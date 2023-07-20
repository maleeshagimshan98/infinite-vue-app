<template>
    <!-- recommended to use components in the _app folder as wrapper components -->
    <div class="modal" v-if="isOpen" v-click-away="event => close(event)">
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
        isOpen : {
            type : Boolean,
            default : false
        },
        clickaway : {
            type : Boolean,
            default : false
        }
    },
    methods: {
        open() {
        },
        async close() {
            /**
             * don't pass and update the passed prop value 
             * It's the responsibility of component consuming this component
             */
            this.$emit('modal:close')
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
    z-index: 150;
}
</style>
