

function initStore ({apiClient, modules}={}) {
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
                    isError : false,
                    errors : [], //... store all error messages in this array, show one by one. each message is removed after user close the message
                }
            }
        },
        modules : modules,
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
            },
            setErrorMessageState (state,payload) {
                state._meta.isError = payload
            },
            addErrorMessage (state,payload) {
                state._meta.errors.push(payload)
            },
            removeErrorMessage (state, payload) {
                state._meta.errors.pop() //... check                
            },  
            setDataLoadingState (state,payload) {
                state.isDataLoading = payload                
            }          
        },
        actions : {        
            setAppBarTitle ({state, commit, dispatch, getters, }, title) {
                commit('setAppBarTitle',title)
            },
            setPreviousPage ({state,commit,dispatch,getters},previousPage) {
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
            addErrorMessage ({state, commit, dispatch, getters, },error) {
                commit('setErrorMessageState',true)
                commit('addErrorMessage',error)
            },
            removeErrorMessage ({state, commit, dispatch, getters, }) {
                commit('removeErrorMessage')
                if (state._meta.errors.length == 0) {
                    commit('setErrorMessageState',false)
                }                
            },                      
            api ({state, commit, dispatch, getters, },data) {
                commit('setDataLoadingState',true)   

                if (!state.apiClient) {
                    //... error - api client is not defined
                    console.error('Api client is not defined')
                    commit('setDataLoadingState',false)                    
                    //... return if api client is not defined ?
                }                
                
                try {

                }
                catch (error) {
                    commit('setDataLoadingState',false) 
                }
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