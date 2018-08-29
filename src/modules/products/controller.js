
import RequestHelper from '../../../helper/requestHelper';
import products_contstants from './res';

export default class ProductController {
	getProducts = async () => {
		return await RequestHelper.requestWithoutBody(products_contstants.getProductsUrl, 'GET');
	}
}
