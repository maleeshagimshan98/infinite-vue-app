<template>
    <default-layout>
        <page :appBarTitle="'test-home app bar'" :isDataLoading="false" :analyticsData="analyticsData">
            Home
        </page>
    </default-layout>
</template>

<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';
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
    components: { Page, DefaultLayout }
}
</script>

<style lang="css"></style>