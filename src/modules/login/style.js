import { colors } from '../../../config/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
	loginContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	otherActionsContainerStyle: {
		// justifyContent: 'flex-end',
		alignItems: 'center'
	},
	registerAccountTextStyle: {
		margin: 10,
		color: colors.lightBlue,
		textDecorationLine: 'underline'
	},
	forgotPasswordTextStyle: {
		margin: 10,
		color: colors.lightBlue,
		textDecorationLine: 'underline'
	},
	loginButtonStyle: {
		margin: 20,
		width: 200
	},
	userNameTextInputStyle: {
		width: 250,
		margin: 10
	},
	passwordTextInputStyle: {
		width: 250,
		margin: 10
	}
})