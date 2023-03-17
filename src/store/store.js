

function initStore (apiClient) {
    return {
        state () {
            return {
                apiClient : apiClient,
                _meta : {
                    appBarTitle : '',
                    sideBarOpen : false,
                    navigationGuard : false,
                    isOverlayPresent : false,
                    previousPage : '', //... previous route - store this, so we can track if user is navigating back, then guard navigation if navigationGuard is true
                    isDataLoading : false,
                    errors : [],
                }
            }
        },
        modules : {

        },
        mutations : {
            setAppBarTitle (state,payload) {
                state._meta.appBarTitle = payload
            },            
            setPreviousPage (state,payload) {
                state._meta.previousPage = payload
            },
            setOverlayPresent (state,payload) {
                state._meta.isOverlayPresent = payload                
            },
            setNavigationGuard (state,payload) {
                state._meta.navigationGuard = payload
            },
            openSideBar (state,payload) {
                state._meta.sideBarOpen = true
            },
            closeSideBar (state,payload) {
                state._meta.sideBarOpen = false
            }

        },
        actions : {        
            setAppBarTitle ({state, commit, dispatch, getters, }, title) {
                commit('setAppBarTitle',title)
            },
            setPrevoiusPage ({state,commit,dispatch,getters},previousPage) {
                commit('setPreviousPage',previousPage)
            },
            setOverlayPresent ({state,commit,dispatch,getters},isOverlay) {
                commit('setOverlayPresent',isOverlay)
            },
            setNavigationGuard ({state, commit, dispatch, getters, }, value) {
                if (typeof value !== "boolean") {
                    //... do something, value is not boolean
                    console.log('setNavigationGuard - value is not a boolean')

                    //... throw error ?
                }
                commit('setNavigationGuard',value)
            },
            api ({state, commit, dispatch, getters, },data) {
                
                state._meta.isDataLoading = true

                try {

                }
                catch (error) {
                    state._meta.isDataLoading = false
                }

                /**
                if (!state.apiClient) {
                    //... error - api client is not defined
                    console.log('Api client is not defined')

                    //... return if api client is not defined ?
                }
                */
            },
            sendAnalyticsData ({state, commit, dispatch, getters, },data) {
                //... call api and send analytics data
                dispatch('api',)
            },        
        },

        getters : {
            hasNavigationGuard (state,getters) {
                return state._meta.navigationGuard
            },
            previousPage (state,getters) {
                return state._meta.previousPage
            }
        }
    }
}

export default initStore