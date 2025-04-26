module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'vue'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest', // Transform Vue files
    '^.+\\.[tj]sx?$': 'babel-jest', // Transform JS/TS files
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Map '@' alias to 'src'
    '^~bootstrap$': '<rootDir>/node_modules/bootstrap', // Map bootstrap alias
  },
  testMatch: ['<rootDir>/**/*.spec.[jt]s'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
};
