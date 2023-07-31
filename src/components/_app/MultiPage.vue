<template>
    <!-- recommended to use components in the _app folder as wrapper components -->
    <div class="">
        <slot :currentPage="currentPage" :next="next" :prev="prev" :jump="jump"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 1,
        }
    },
    props: {
        pages: {
            type: [Number],
        },
        startAt: {
            type: [Number],
            default: 1,
        },
    },
    methods: {
        next() {
            if (this.currentPage == this.pages) {
                throw new Error(
                    `Error in MultiPage.vue component, trying to access an undefined page number`
                )
            }
            this.currentPage++
            console.log(this.currentPage) //... testing
        },
        prev() {
            if (this.currentPage == 1) {
                throw new Error(
                    `Error in MultiPage.vue component, no previous page on page 01 but tried to access page number`
                )
            }
            this.currentPage--
            console.log(this.currentPage) //... testing
        },
        jump(pageNo = null) {
            if (pageNo === this.currentPage) {
                return
            }
            if (pageNo > 0 && pageNo < this.pages) {
                this.currentPage = pageNo
            }
            else {
                throw new Error(
                    `Error in MultiPage.vue component, trying to access an invalid page number - ${pageNo}`
                )
            }
        },
    },
    async mounted() { },
    beforeMount() { },
}
</script>

<style></style>
