import RequestHelper from '../../../helper/requestHelper';
import logon_constants from './res';
import User from '../user/user';


export default class LogonScreenController {

	handleRegisterButtonPressed = async (userInfo, navigation) => {
		//TODO: request backend api to logon

		let registerUser = await this.registerUser(userInfo);

		if (registerUser.status) {
			User.storeSession(registerUser.data.token, registerUser.data.user);
			
			navigation.navigate('RegisteredScreen');
			// TODO: navigate to registered screen

			// Alert.alert(
			// 	'Alert Title',
			// 	'Congratulations, ' + 'you have been registered.',
			// 	[
			// 	  {text: 'OK', onPress: logonSuccess(registerUser.data)},
			// 	],
			// 	{ cancelable: false }
			//   )
		}

		else {
			return registerUser;
		}
	}

	logonSuccess = () => {

	}

	registerUser = async (userInfo) => {
		console.log(logon_constants.logonUrl);
		let bodyObj = {
			userCredentials: userInfo
		}
		return await RequestHelper.requestWithBody(logon_constants.logonUrl, 'POST', bodyObj);
	}
}