/**
 * Copyright - 2025 - Maleesha Gimshan (www.github.com/maleeshagimshan98)
 */

class AppBarState {
  private _title: string | undefined;
  private _data: Record<string, unknown> = {};

  constructor() {
    this._title = undefined;
  }

  /**
   * Set the Appbar's title
   *
   * @param {string} title
   * @returns {void}
   * @throws {Error}
   */
  setTitle(title: string): void {
    if (typeof title !== 'string') {
      throw new Error(`Error setting AppBarState title. String is required, but passed ${title}`);
    }
    this._title = title;
  }

  /**
   * Get the AppBar title
   *
   * @returns {string | undefined}
   */
  getTitle(): string | undefined {
    return this._title;
  }

  /**
   * Set values on app bar state
   *
   * @param {string} name
   * @param {unknown} value
   * @returns {void}
   */
  setData(name: string, value: unknown): void {
    this._data[name] = value;
  }

  /**
   * Get the app bar state data set by the user
   *
   * @param {string} name
   * @returns {unknown}
   */
  getData(name: string): unknown {
    return this._data[name];
  }
}

export default AppBarState;
