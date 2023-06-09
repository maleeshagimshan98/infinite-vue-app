/**
 * Copyright - 2023 - Maleesha Gimshan (https://github.com/maleeshagimshan98)
 */

function initStore ({apiClient, modules, pageViewAnalyticsClosure, errorLoggingClosure}={}) {
    return {
        state () {
            if (apiClient && ((typeof apiClient !== 'function') || (typeof apiClient !== 'object'))) {
                throw new Error(`apiClient must be a function or an object, received ${apiClient}`)
            }
            if (pageViewAnalyticsClosure && (typeof pageViewAnalyticsClosure !== 'function')) { 
                throw new Error(`pageViewAnalyticsClosure must be a function, received ${pageViewAnalyticsClosure}`)
            }
            if (errorLoggingClosure && (typeof errorLoggingClosure !== 'function')) { 
                throw new Error(`errorLoggingClosure must be a function, received ${errorLoggingClosure}`)
            }
            return {                
                apiClient : apiClient,
                pageViewAnalyticsClosure : pageViewAnalyticsClosure,
                errorLoggingClosure : errorLoggingClosure,
                _meta : {
                    appBarTitle : '',
                    isCookiesAllowed : true,
                    sideBarOpen : false,
                    preventBackNav : false,
                    isOverlayPresent : false,
                    previousPage : '', //... previous route - store this, so we can track if user is navigating back, then guard navigation if preventBackNav is true
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
            setCookiesAllowedState (state,payload) {
                state._meta.isCookiesAllowed = payload
            },            
            setPreviousPage (state,payload) {
                state._meta.previousPage = payload
            },
            setOverlayStatus (state,payload) {
                state._meta.isOverlayPresent = payload                
            },
            setPreventBackNav (state,payload) {
                state._meta.preventBackNav = payload
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
            setCookiesAllowedState ({state, commit, dispatch, getters, }, isCookiesAllowed) {
                commit('setCookiesAllowedState',isCookiesAllowed)
            },
            setPreviousPage ({state,commit,dispatch,getters},previousPage) {
                commit('setPreviousPage',previousPage)
            },
            setOverlayStatus ({state,commit,dispatch,getters},isOverlay) {
                commit('setOverlayStatus',isOverlay)
            },
            setPreventBackNav ({state, commit, dispatch, getters, }, value) {
                if (typeof value !== "boolean") {
                    //... do something, value is not boolean
                    throw new Error(`Error in vuex action - setNavigationGuard. Boolean is required, but passed ${value}`)
                }
                commit('setPreventBackNav',value)
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
            async api ({state, commit, dispatch, getters, },payload) {
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
                    //... send error log to the server or analytics? 
                }
            },
            async sendPageViewAnalytics ({state, commit, dispatch, getters, },data) {
                if(state.pageViewAnalyticsClosure) {
                    //... directly calling the closure
                    state.pageViewAnalyticsClosure(data)
                }                                
            },
            async sendErrorLogs ({state, commit, dispatch, getters, },data) {
                if (state.errorLoggingClosure) {
                    //... directly calling the closure
                    state.errorLoggingClosure(data)
                }
            },
            async sendAnalyticsData ({state, commit, dispatch, getters, },data) {
                if (!state.apiClient) {

                }
                //... call apiclient and send page's analytics data
                //state.analytics() //... example
            },        
        },
        getters : {
            hasNavigationGuard (state,getters) {
                return state._meta.preventBackNav
            },
            previousPage (state,getters) {
                return state._meta.previousPage
            }
        }
    }
}

export default initStore