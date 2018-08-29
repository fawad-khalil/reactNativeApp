import { createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../splashScreen/view';
import AuthStack from './authStack';
import AppStack from './appStack';

export default createSwitchNavigator({
	SplashScreen: { screen: SplashScreen, navigationOptions: { title: 'Loading...' } },
	AuthStack: AuthStack,
	AppStack: AppStack
}, {
		initialRouteName: 'SplashScreen',
		// headerMode: 'screen'
		// navigationOptions: {
		//   header: { visible: false }
		// }
	});