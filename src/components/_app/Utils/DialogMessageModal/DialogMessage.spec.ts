import DialogMessageState from './DialogMessageState';

describe('DialogMessageState', () => {
  let dialogMessageState: DialogMessageState;

  beforeEach(() => {
    dialogMessageState = new DialogMessageState();
  });

  describe('open', () => {
    it('should set the message and visibility to true', () => {
      dialogMessageState.open('Test message');
      expect(dialogMessageState.message).toBe('Test message');
      expect(dialogMessageState.isOpen()).toBe(true);
    });

    it('should overwrite the existing message if called again', () => {
      dialogMessageState.open('First message');
      dialogMessageState.open('Second message');
      expect(dialogMessageState.message).toBe('Second message');
    });

    it('should throw error when opened with empty message', () => {
      expect(() => dialogMessageState.open('')).toThrow('Please provide a message to display on the dialog box');
    });
  });

  describe('close', () => {
    it('should set visibility to false', () => {
      dialogMessageState.open('Test message');
      dialogMessageState.close();
      expect(dialogMessageState.isOpen()).toBe(false);
    });

    it('should not clear the message when hiding', () => {
      dialogMessageState.open('Test message');
      dialogMessageState.close();
      expect(dialogMessageState.message).toBe('');
    });

    it('should handle being called when already hidden', () => {
      dialogMessageState.close();
      expect(dialogMessageState.isOpen()).toBe(false);
    });
  });

  describe('clearMessage', () => {
    it('should handle being called when no message is set', () => {
      dialogMessageState.close();
      expect(dialogMessageState.message).toBe('');
      expect(dialogMessageState.isOpen()).toBe(false);
    });
  });
});
