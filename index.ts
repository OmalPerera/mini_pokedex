import {registerRootComponent} from 'expo'
import App from './src'
import {LogBox} from 'react-native'

LogBox.ignoreAllLogs(true)
registerRootComponent(App)
