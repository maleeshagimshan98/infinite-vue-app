<template>
    <!-- recommended to use components in the _app folder as wrapper components -->
    <div class="infinite-vue-modal" v-if="isOpen" v-click-away="event => clickaway ? close(event) : null">
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
            default : true
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
        this.$store.dispatch("setOverlayStatus", true)
        this.$store.dispatch('setPreventBackNav',true) //... check
    },
    async unmounted() {
        this.$store.dispatch("removeErrorMessage") //... check
        this.$store.dispatch("setOverlayStatus", false)
        this.$store.dispatch('setPreventBackNav',false) //... check
    }
}
</script>

<style>
.infinite-vue-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 150;
}
</style>
