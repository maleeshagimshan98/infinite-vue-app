<template>
    <div>
        <page :appBarTitle="'test-home app bar'" :analyticsData="analyticsData">
            Home
        </page>
    </div>
</template>

<script>
import Page from '../components/_app/Page.vue';

export default {
    data() {
        return {
            analyticsData : {}
        };
    },
    props: {},
    methods: {},
    mounted() {
        let page = {
            route : this.$route, //... check
            name : this.$route //... check
        }
        this.analyticsData.page = page
    },
    components: { Page }
}
</script>

<style lang="css"></style>