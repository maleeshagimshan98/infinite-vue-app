/**
 * Interface for the meta object structure
 */
interface Meta {
  isDataLoading: boolean;
}

/**
 * ComponentMeta class to manage component metadata, particularly data loading state
 */
class ComponentMeta {
  private _meta: Meta = {
    isDataLoading: false,
  };

  constructor() {}

  /**
   * Getter method for accessing the meta object
   *
   * @return {Meta}
   */
  get meta(): Meta {
    return this._meta;
  }

  /**
   * Setter method for accessing the meta object
   *
   * @throws {Error}
   */
  set meta(val: Meta) {
    throw new Error(`Error:ComponentMeta - cannot set the meta property`);
  }

  /**
   * Set the isDataLoading value
   *
   * @param {boolean} val - true/false
   * @throws {Error}
   */
  private _setDataLoading(val: boolean): void {
    if (typeof val !== 'boolean') {
      throw new Error(`Error:ComponentMeta - _meta.isDataLoading must be a Boolean. ${val} passed.`);
    }
    this._meta.isDataLoading = val;
  }

  /**
   * Returns true if _meta.isDataLoading is true
   *
   * @returns {boolean}
   */
  isDataLoading(): boolean {
    return this._meta.isDataLoading;
  }

  /**
   * Toggle data loading state
   *
   * @returns {void} void
   */
  toggleDataLoadingState(): void {
    if (this.isDataLoading()) {
      this._setDataLoading(false);
    } else {
      this._setDataLoading(true);
    }
  }

  /**
   * Call a callback function while setting the data loading state properly while the data is loading
   *
   * @param {() => Promise<T>} callback
   * @returns {Promise<T>}
   */
  async callApi<T>(callback: () => Promise<T>): Promise<T> {
    //... TODO - rename the method to improve the clarity
    if (typeof callback !== 'function') {
      throw new Error(`Error:ComponentMeta - callback passed to the switchDataLoading is not a function`);
    }
    try {
      this._setDataLoading(true);
      const res = await callback();
      this._setDataLoading(false);
      return res;
    } catch (error) {
      this._setDataLoading(false);
      throw error;
    }
  }
}

export default ComponentMeta;
