class DialogMessageState {
  private _isActive: boolean;
  private _message: string;

  constructor() {
    this._isActive = false;
    this._message = '';
  }

  /**
   * Opens the dialog with message.
   *
   * @param {string} message - The message to display on the modal. Defaults to an empty string.
   * @throws {Error}
   */
  public open(message: string): void {
    if (!message) {
      throw new Error(`Please provide a message to display on the dialog box`);
    }
    this._isActive = true;
    this._message = message;
  }

  /**
   * Closes the modal.
   */
  public close(): void {
    this._isActive = false;
    this._message = '';
  }

  /**
   * Checks if the modal is open or closed.
   *
   * @returns {boolean} The current value of the `isActive` property indicating if the modal is open.
   */
  public isOpen(): boolean {
    return this._isActive;
  }

  /**
   * Getter for the `message` property.
   *
   * @returns {string} The current value of the `message` property.
   */
  public get message(): string {
    return this._message;
  }

  /**
   * Setter for the `message` property.
   *
   * @param {string} value - The new value for the `message` property.
   */
  public set message(value: string) {
    this._message = value;
  }
}

export default DialogMessageState;
