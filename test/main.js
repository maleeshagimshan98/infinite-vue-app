// /**
//  * Copyright - 2022 - Maleesha Gimshan (https://github.com/maleeshagimshan98)
//  */

// import { createApp } from "vue/dist/vue.esm-bundler'"
// import { createRouter, createWebHashHistory } from "vue-router"
// import { createStore } from "vuex"
// import VueMeta from "vue-meta"
// import initStore from "../src/store/store"
// import routes from "../src/routes/routes"
// import app from "../src/routes/routes"

// const store = createStore(initStore())


// const router = createRouter({
//     history : createWebHashHistory(),    
//     routes : routes
// })

// /**
//  * global navigation guard
//  * 
//  * prevents navigating to previous page,
//  * if the component is an overlay or the component needs to prevent the user
//  * from going back without taking an action on the current page
//  * 
//  * Comment this function if you don't want to add global navigation guards
//  */
// router.beforeEach(async (to,from) => {
//     if (store.getters.hasNavigationGuard && to.fullPath === store.getters.previousPage) {
//         //... return false only if going back
//         return false
//     }   
    
// })

// /**
//  * set the previous page path in store, therefore we can recognize back navigation
//  */
// router.afterEach(async (to,from) => {
//     await store.dispatch('setPreviousPage',from.fullPath)
// })


// const main = createApp(app)
// main.use(store)
// main.use(router)
// //main.use(VueMeta,{refreshOnceOnNavigation: false})
// main.mount('#app')


import main from "../src/main"