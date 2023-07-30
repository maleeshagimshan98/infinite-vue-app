/**
 * Copyright - 2023 - Maleesha Gimshan (www.github.com/maleeshagimshan98)
 */

class AppBarState {

  constructor() {
    this._title
  }

  /**
   * Set the Appbar's title
   * 
   * @param {String} title 
   * @returns {void}
   * @throws {Error}
   */
  setTitle (title) {
    if (typeof title !== "string") {
      throw new Error(`Error setting  AppBarState title. String is required, but passed ${title}`)
    }
    this._title =  title
  }

  /**
   * get the AppBar title
   * 
   * @returns {String}
   */
  getTitle () {
    return this._title
  }

  /**
   * set values on app bar state
   * 
   * @param {String} name 
   * @param {*} value 
   * @returns {void}
   */
  setData (name, value)
  {
    this[name] = value
  }
}

export default AppBarState