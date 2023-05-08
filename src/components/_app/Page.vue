<template>
    <div class="">
        <slot>

        </slot>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        appBarTitle: [String],
        isOverlay: {
            type: Boolean,
            default: false,
        },
        guardNavigation: {
            type: Boolean,
            default: false
        },
        analyticsData: {
            type: Object
        },
    },
    methods: {},
    async mounted() {
        //... set appBarTitle in vuex
        if (!this.appBarTitle) {
            //... app bar title is not defined
        }

        if (!analyticsData) {
            //... analyticsData is not defined
        }

        //... set isOverlayPresent
        this.$store.dispatch('')

        //... set naviagationGurad

        //... send analytics data
    },
    async beforeUnmount() {
        //... set guardNavigation back to defaults
        //... set isOverlayPresent to false
    },
}
</script>

<style></style>
