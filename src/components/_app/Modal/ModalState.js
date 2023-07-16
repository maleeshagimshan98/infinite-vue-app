

class ModalState {
    constructor() {
      this._isActive = false;
      this._message = '';
    }
  
    /**
     * Opens the modal with an optional message.
     *
     * @param {string} message - The message to display on the modal. Defaults to an empty string.
     */
    open(message = "") {
      this._isActive = true;
      this._message = message;
    }
  
    /**
     * Closes the modal.
     */
    close() {
      this._isActive = false;
    }
  
    /**
     * Checks if the modal is open or closed.
     *
     * @returns {boolean} The current value of the `isActive` property indicating if the modal is open.
     */
    isOpen() {
      return this._isActive;
    }
  
    /**
     * Getter for the `message` property.
     *
     * @returns {string} The current value of the `message` property.
     */
    get message() {
      return this._message;
    }
  
    /**
     * Setter for the `message` property.
     *
     * @param {string} value - The new value for the `message` property.
     */
    set message(value) {
      this._message = value;
    }
  }
  
  export default ModalState;
  