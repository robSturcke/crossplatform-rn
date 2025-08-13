import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// register the app
AppRegistry.registerComponent(appName, () => App);

AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
