<template>
    <!-- recommended to use components in the _app folder as wrapper components -->
    <div v-bind:class="[scrollable? 'page' : '']">
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
        isDataLoading: {
            type: Boolean,
            default: false,
            required: true
        },
        isOverlay: {
            type: Boolean,
            default: false,
        },
        scrollable: {
            type: Boolean,
            default: false
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
        if (this.appBarTitle) {
            this.$store.dispatch("setAppBarTitle", this.appBarTitle)
        }

        //... send analytics data
        if (this.analyticsData) {
            this.$store.dispatch("sendPageViewAnalytics", this.analyticsData)
        }

        //... set isOverlayStatus
        if (this.isOverlay) {
            this.$store.dispatch("setOverlayStatus", true)
        }

        //... set naviagationGurad
        if (this.guardNavigation) {
            this.$store.dispatch("setPreventBackNav", true)
        }
    },
    async unmounted() {
        //... set guardNavigation back to defaults
        if (this.guardNavigation) {
            this.$store.dispatch("setPreventBackNav", false)
        }
        //... set isOverlayStatus to false
        if (this.isOverlay) {
            this.$store.dispatch("setOverlayStatus", false)
        }
    },
}
</script>

<style>
.page {
  margin-right: -50px; /* maximum width of scrollbar */
  padding-right: 50px; /* maximum width of scrollbar */
  overflow-y: scroll;
}
</style>
