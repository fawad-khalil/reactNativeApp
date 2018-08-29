import { AsyncStorage } from 'react-native';
// import JwtHelper from '../../../helper/jwtHelper';
import constant_resources from '../../../config/res.json';
import RequestHelper from '../../../helper/requestHelper';
import User from '../user/user';
import splashScreenConstants from './res';
import ProductController from '../products/controller';

getTokenKey = () => {
	// let jwtHelper = new JwtHelper();
	// console.log(await jwtHelper.sign(constant_resources.loginTokenKey))
	// return await jwtHelper.sign(constant_resources.loginTokenKey);
	return constant_resources.loginTokenKey;
}

verifySession = async (loginToken) => {
	let sessionUserResponse = await RequestHelper.requestWithoutBody(splashScreenConstants.verifySessionUrl, 'GET', null, loginToken);

	if (sessionUserResponse.status) {
		User.storeSession(loginToken, sessionUserResponse.data);

		return true;

	} else {
		return false;
	}
}

getToken = async () => {
	let tokenKey = getTokenKey();

	return await AsyncStorage.getItem(tokenKey);
}

export default class SplashScreenController {

	verifyLoggedIn = async (navigation) => {
		try {
			let loginToken = await getToken();

			productController = new ProductController();

			let productsList = productController.getProducts();

			if (loginToken !== null && loginToken !== '') {

				verifySession(loginToken);
				// TODO - Completed: Modify flow as SplashScreen -> verifySession -> store session if true -> AppStack
			}

			navigation.navigate('AppStack', productsList);
		} catch (error) {
			console.log(error);
			navigation.navigate('AuthStack');
		}
	}
}

