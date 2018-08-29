import { createStackNavigator } from 'react-navigation';
import ProductsListScreen from '../products/view';

export default createStackNavigator({
	ProductsListScreen: { screen: ProductsListScreen, navigationOptions: {header: null}},
}, {
		initialRouteName: 'ProductsListScreen',
		headerMode: 'screen'
		// navigationOptions: {
		//   header: { visible: false }
		// }
	});