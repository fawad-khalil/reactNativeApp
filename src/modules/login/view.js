import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FloatingLabelTextField from '../../components/floatingLabelTextField/FloatingLabelTextField';
import Button from '../../components/button/Button';
import styles from './style';
import LoginScreenController from './controller';
import Error from '../../components/error/Error';

type Props = {};

let loginController = new LoginScreenController();

export default class LoginScreen extends Component<Props> {
	constructor(props) {
		super(props);

		this.init();
	}

	init() {
		let initState = {
			userName: '',
			password: '',
			isWrongUsernamePasswordError: false,
			wrongUsernamePasswordMessage: 'Incorrect User name or Password.',
			isEnterUsernameError: false,
			enterUsernameMessage: 'Please enter valid user name.',
			isEnterPasswordError: false,
			enterPasswordError: 'Please enter password.',
		};

		this.state = initState;
	}

	handleUserNameChange = (text) => {
		let state = this.state;

		state.userName = text;
		this.setState(state);
	}

	handlePasswordChange = (text) => {
		let state = this.state;

		state.password = text;
		this.setState(state);
	}

	showIncorrectUsernamePasswordError = (message) => {
		let state = this.state;

		state.isWrongUsernamePasswordError = true;
		state.wrongUsernamePasswordMessage = (message && message != undefined && message !== '') ? message : state.wrongUsernamePasswordMessage;

		this.setState(state);
	}

	handleLoginPressed = async () => {
		let pressResponse = await loginController.handleLoginPressed(this.state.userName, this.state.password, this.props.navigation);
		if (!pressResponse) {
			this.showIncorrectUsernamePasswordError();
		}
	}

	handleForgotPasswordPressed = async () => {
		this.props.navigation.navigate('ForgotPasswordScreen');
	}

	handleRegisterAccountPressed = async () => {
		this.props.navigation.navigate('LogonScreen');
	}

	render() {
		return (
			<View>
				<View style={styles.loginContainerStyle}>
					<FloatingLabelTextField
						label={'User Name'}
						isRequired='true'
						textInputStyle={styles.userNameTextInputStyle}
						isRequiredFlagDisplay='false'
						handleTextChange={this.handleUserNameChange} />

					<FloatingLabelTextField
						textInputStyle={styles.passwordTextInputStyle}
						label={'Password'}
						isRequired='true'
						isRequiredFlagDisplay='false'
						handleTextChange={this.handlePasswordChange} 
						textInputProps={{secureTextEntry: true}}/>

					<Error isShow={this.state.isWrongUsernamePasswordError}>{this.state.wrongUsernamePasswordMessage}</Error>

					<Button buttonStyle={styles.loginButtonStyle} handlePress={this.handleLoginPressed}>LOGIN</Button>

					{/* TODO: Use Error component on 'Empty User name or password field.'*/}
				</View>

				<View style={styles.otherActionsContainerStyle}>
					<Text style={styles.forgotPasswordTextStyle} onPress={this.handleForgotPasswordPressed}>Forgot Password?</Text>
					<Text style={styles.registerAccountTextStyle} onPress={this.handleRegisterAccountPressed}>Register Account</Text>
				</View>
			</View>

		);
	}
}



