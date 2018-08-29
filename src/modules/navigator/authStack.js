import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../login/view';
import LogonScreen from '../logon/view';
import ForgotPasswordScreen from '../forgotPassword/view';
import RegisteredScreen from '../reigstered/view';

export default createStackNavigator({
	LoginScreen: { screen: LoginScreen, navigationOptions: { header: null }},
	LogonScreen: { screen: LogonScreen, navigationOptions: { header: null }},
	ForgotPasswordScreen: { screen: ForgotPasswordScreen, navigationOptions: { header: null }},
	RegisterdScreen: {screen: RegisteredScreen, navigationOptions: {header: null}}
}, {
		initialRouteName: 'LoginScreen',
		// headerMode: 'none'
		// navigationOptions: {
		//   header: { visible: false }
		// }
	});