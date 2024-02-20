/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './src/screens/splash';
import MainApp from './src/MainApp';

AppRegistry.registerComponent(appName, () => MainApp);
