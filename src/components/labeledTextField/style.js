import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';

export default StyleSheet.create({
	containerStyles: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	labelContainerStyles: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	textInputContainerStyles: {
		flexDirection: 'row',
		marginLeft: 10,
		alignItems: 'flex-start'
	},
	labelStyles: {
		fontSize: 20
	},
	requiredSymbolStyles: {
		color: colors.red,
		marginLeft: 5
	},
	colonSymbolStyles: {
		marginLeft: 0
	},
	textInputStyles: {
		fontSize: 15,
		width: 200,
		borderTopWidth: 1,
		borderBottomWidth: 1
	}
	
})