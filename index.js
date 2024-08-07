/**
 * @format
 */
// Import thư viện
// import TrackPlayer from 'react-native-track-player';
// import { playbackService } from './servicePlay';
import TrackPlayer from 'react-native-track-player';
import { playbackService } from './trackPlayerServicer';
import {AppRegistry} from 'react-native';
import App from './App2';
import {name as appName} from './app.json';


// đăng ký hàm viết ở dưới dòng này: AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);

