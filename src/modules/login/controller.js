import RequestHelper from '../../../helper/requestHelper';
import login_constants from './res';
import User from '../user/user';
import ProductController from '../products/controller';


export default class LoginScreenController {

	handleLoginPressed = async (userName, password, navigation) => {
		//TODO: request backend api to login
		let authenticateUser = await this.authenticateUser(userName, password);
		
		if (authenticateUser.status) {
			User.user = authenticateUser.data;

			let productController = new ProductController();
			let productsList = await productController.getProducts();

			navigation.navigate('ProductsListScreen', productsList)
		}

		else if (!authenticateUser.status){
			return false;
		}
	}

	authenticateUser = async (userName, password) => {
		let loginBody = {
			userCredentials: {
				userName: userName,
				password: password
			}
		}
		
		// TODO: Encrypt user credentials while communicating to api
		let loginResponse = await RequestHelper.requestWithBody(login_constants.loginUrl, 'POST', loginBody);

		return loginResponse;
	}
}