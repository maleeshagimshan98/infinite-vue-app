import { createStore } from 'vuex'
import initStore from '../src/store/store.js'

describe('Vuex Store Actions', () => {  
  let store

  beforeEach(() => {
    store = createStore(initStore())
  })

  test('setAppBarTitle action', () => {
    const title = 'New Title'
    store.dispatch('setAppBarTitle', title)
    expect(store.state._meta.appBarTitle).toBe(title)
  })

  test('setPreviousPage action', () => {
    const previousPage = '/previous-page'
    store.dispatch('setPreviousPage', previousPage)
    expect(store.state._meta.previousPage).toBe(previousPage)
  })

  test('setOverlayStatus action', () => {
    const isOverlay = true
    store.dispatch('setOverlayStatus', isOverlay)
    expect(store.state._meta.isOverlayPresent).toBe(isOverlay)
  })

  test('setNavigationGuard action', () => {
    const value = true
    store.dispatch('setNavigationGuard', value)
    expect(store.state._meta.navigationGuard).toBe(value)
  })

  test('addErrorMessage action', () => {
    const error = 'An error occurred'
    store.dispatch('addErrorMessage', error)
    expect(store.state._meta.isError).toBe(true)
    expect(store.state._meta.errors).toContain(error)
  })

  test('removeErrorMessage action', () => {
    const error1 = 'Error 1'
    const error2 = 'Error 2'
    store.dispatch('addErrorMessage', error1)
    store.dispatch('addErrorMessage', error2)
    store.dispatch('removeErrorMessage')
    expect(store.state._meta.errors).toEqual([error1])
    store.dispatch('removeErrorMessage')
    expect(store.state._meta.errors).toEqual([])
    expect(store.state._meta.isError).toBe(false)
  })

  test('api action', () => {
    // Test the scenario when apiClient is defined
    const apiClient = {
      // Mock implementation of the apiClient methods
      analytics: jest.fn()
    }
    store.state.apiClient = apiClient

    store.dispatch('api', 'payload')
    expect(store.state.isDataLoading).toBe(true)
    // Add more assertions for the expected behavior when apiClient is defined

    // Test the scenario when apiClient is not defined
    store.state.apiClient = null

    expect(() => {
      store.dispatch('api', 'payload')
    }).toThrowError('Api client is not defined')
    expect(store.state.isDataLoading).toBe(false)
    // Add more assertions for the expected behavior when apiClient is not defined
  })

  test('sendPageAnalyticsData action', () => {
    // Mock the apiClient.analytics() method
    const apiClient = {
      analytics: jest.fn()
    }
    store.state.apiClient = apiClient

    store.dispatch('sendPageAnalyticsData', 'data')
    expect(apiClient.analytics).toHaveBeenCalled()
    // Add more assertions for the expected behavior
  })
})
