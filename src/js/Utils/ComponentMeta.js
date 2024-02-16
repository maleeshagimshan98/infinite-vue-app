/**
 * 
 */

class ComponentMeta {
    _meta = {
        isDataLoading : false,
    }

    constructor () {
    }   

    /**
     * Getter method for accessing the meta object
     * 
     * @return {Object}
     */
    get meta () {
        return this._meta
    }

    /**
     * Setter method for accessing the meta object
     * 
     * @throws {Error}
     */
    set meta (val) {
        throw new Error(`Error:ComponentMeta - cannot set the meta property`)
    }

    /**
     * Set the isDataLoading value
     * 
     * @param {Boolean} val - true/false
     * @throws {Error}
     */
    _setDataLoading (val) {
        if (typeof val !== 'boolean') {
            throw new Error(`Error:ComponentMeta - _meta.isDataLoading must be a Boolean. ${val} passed.`)
        }
        this._meta.isDataLoading = val
    }

    /**
     * Returns true if _meta.isDataLoading is true
     * 
     * @returns {Boolean}
     */
    isDataLoading () {
        return this._meta.isDataLoading
    }

    /**
     * Switch data loading state while an async function runs
     * 
     * @param {Function} callback 
     * @returns {any} - return value of the callback function
     * @throws {Error}
     */
    async switchDataLoading (callback) {
        if (typeof callback !== 'function') {
            throw new Error(`Error:ComponentMeta - callback passed to the switchDataLoading is not a function`)
        }
        try {
            this._setDataLoading(true)
            let res = await callback()
            this._setDataLoading(false)
            return res
        }
        catch (error) {
            this._setDataLoading(false)
            throw error
        }
    }





}

export default ComponentMeta