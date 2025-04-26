import ModalState from './ModalState';

describe('ModalState', () => {
  let modalState: ModalState;

  beforeEach(() => {
    modalState = new ModalState();
  });

  describe('open', () => {
    it('should open the modal and set the message', () => {
      modalState.open('Test message');
      expect(modalState.isOpen()).toBe(true);
      expect(modalState.message).toBe('Test message');
    });

    it('should open the modal with an empty message if no message is provided', () => {
      modalState.open();
      expect(modalState.isOpen()).toBe(true);
      expect(modalState.message).toBe('');
    });
  });

  describe('close', () => {
    it('should close the modal and reset the message', () => {
      modalState.open('Test message');
      modalState.close();
      expect(modalState.isOpen()).toBe(false);
      expect(modalState.message).toBe('');
    });

    it('should not throw an error if close is called when the modal is already closed', () => {
      expect(() => modalState.close()).not.toThrow();
      expect(modalState.isOpen()).toBe(false);
      expect(modalState.message).toBe('');
    });
  });

  describe('isOpen', () => {
    it('should return true if the modal is open', () => {
      modalState.open();
      expect(modalState.isOpen()).toBe(true);
    });

    it('should return false if the modal is closed', () => {
      modalState.close();
      expect(modalState.isOpen()).toBe(false);
    });
  });

  describe('message getter and setter', () => {
    it('should return the current message', () => {
      modalState.open('Test message');
      expect(modalState.message).toBe('Test message');
    });

    it('should update the message when the setter is called', () => {
      modalState.message = 'New message';
      expect(modalState.message).toBe('New message');
    });

    it('should allow setting an empty string as the message', () => {
      modalState.message = '';
      expect(modalState.message).toBe('');
    });
  });

  describe('edge cases', () => {
    it('should handle opening the modal multiple times with different messages', () => {
      modalState.open('First message');
      modalState.open('Second message');
      expect(modalState.isOpen()).toBe(true);
      expect(modalState.message).toBe('Second message');
    });

    it('should handle setting a message when the modal is closed', () => {
      modalState.message = 'Message while closed';
      expect(modalState.message).toBe('Message while closed');
      expect(modalState.isOpen()).toBe(false);
    });
  });
});
