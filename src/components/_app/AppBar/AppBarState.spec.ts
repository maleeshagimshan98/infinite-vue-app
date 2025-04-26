import AppBarState from './AppBarState';

describe('AppBarState', () => {
  let appBarState: AppBarState;

  beforeEach(() => {
    appBarState = new AppBarState();
  });

  describe('setTitle', () => {
    it('should set the title when a valid string is provided', () => {
      appBarState.setTitle('My AppBar');
      expect(appBarState.getTitle()).toBe('My AppBar');
    });

    it('should throw an error when a non-string value is provided', () => {
      expect(() => appBarState.setTitle(123 as unknown as string)).toThrow(
        'Error setting AppBarState title. String is required, but passed 123',
      );
    });

    it('should allow setting the title to an empty string', () => {
      appBarState.setTitle('');
      expect(appBarState.getTitle()).toBe('');
    });
  });

  describe('getTitle', () => {
    it('should return undefined if the title has not been set', () => {
      expect(appBarState.getTitle()).toBeUndefined();
    });

    it('should return the correct title after it has been set', () => {
      appBarState.setTitle('Test Title');
      expect(appBarState.getTitle()).toBe('Test Title');
    });
  });

  describe('setData', () => {
    it('should set a key-value pair in the data object', () => {
      appBarState.setData('key1', 'value1');
      expect(appBarState.getData('key1')).toBe('value1');
    });

    it('should overwrite the value if the same key is set again', () => {
      appBarState.setData('key1', 'value1');
      appBarState.setData('key1', 'newValue');
      expect(appBarState.getData('key1')).toBe('newValue');
    });

    it('should allow setting a value of any type', () => {
      appBarState.setData('key1', 123);
      appBarState.setData('key2', true);
      appBarState.setData('key3', { nested: 'object' });
      expect(appBarState.getData('key1')).toBe(123);
      expect(appBarState.getData('key2')).toBe(true);
      expect(appBarState.getData('key3')).toEqual({ nested: 'object' });
    });
  });

  describe('getData', () => {
    it('should return undefined for a key that does not exist', () => {
      expect(appBarState.getData('nonExistentKey')).toBeUndefined();
    });

    it('should return the correct value for an existing key', () => {
      appBarState.setData('key1', 'value1');
      expect(appBarState.getData('key1')).toBe('value1');
    });
  });
});
