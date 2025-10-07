import '@testing-library/jest-native/extend-expect'

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
)

if (typeof global.__ExpoImportMetaRegistry === 'undefined') {
  global.__ExpoImportMetaRegistry = {}
}

if (typeof global.structuredClone === 'undefined') {
  global.structuredClone = val => JSON.parse(JSON.stringify(val))
}

jest.useFakeTimers('modern')

jest.spyOn(global.console, 'warn').mockImplementation(() => {})
jest.spyOn(global.console, 'error').mockImplementation(() => {})
