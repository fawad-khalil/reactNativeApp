import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import styles from './style';
import FloatingLabelTextField from '../../components/floatingLabelTextField/FloatingLabelTextField';
import Button from '../../components/button/Button';
import Error from '../../components/error/Error';
import LogonController from './controller';

type Props = {};

let logonController = new LogonController();

export default class LogonScreen extends Component<Props> {
	constructor(props) {
		super(props);

		this.init();
	}

	init() {
		let initState = {
			userInfo: {
				user_name: '',
				password: '',
				first_name: '',
				last_name: '',
				contact_number1: '',
				contact_number2: '',
				address: '',
				payment_method: 'card',
				payment_card: '',
				payment_card_holder_name: ''
			},
			isLogonError: false,
			logonErrorMessage: ''
		};

		this.state = initState;

		styles.emailAddressTextInputStyle.boundaryColor = 'red'
	}

	handleUserNameChange = (text) => {
		let userInfoState = this.state.userInfo;

		userInfoState.user_name = text;
		this.setState(userInfoState);
	}

	handlePasswordChange = (text) => {
		let userInfoState = this.state.userInfo;

		userInfoState.password = text;
		this.setState(userInfoState);
	}

	handleFirstNameChange = (text) => {
		let userInfoState = this.state.userInfo;

		userInfoState.first_name = text;
		this.setState(userInfoState);
	}

	handleLastNameChange = (text) => {
		let userInfoState = this.state.userInfo;

		userInfoState.last_name = text;
		this.setState(userInfoState);
	}

	handleContactNumber1Change = (text) => {
		let userInfoState = this.state.userInfo;

		userInfoState.contact_number1 = text;
		this.setState(userInfoState);
	}

	handleContactNumber2Change = (text) => {
		let userInfoState = this.state.userInfo;

		userInfoState.contact_number2 = text;
		this.setState(userInfoState);
	}

	handleAddressChange = (text) => {
		let userInfoState = this.state.userInfo;

		userInfoState.address = text;
		this.setState(userInfoState);
	}

	handlePaymentCardChange = (text) => {
		let userInfoState = this.state.userInfo;

		userInfoState.payment_card = text;
		this.setState(userInfoState);
	}

	handlePaymentCardHolderNameChange = (text) => {
		let userInfoState = this.state.userInfo;

		userInfoState.payment_card_holder_name = text;
		this.setState(userInfoState);
	}

	handleRegisterButtonPressed = async () => {
		//TODO: implement form validation and passwords match before enabling register button
		let logon = await logonController.handleRegisterButtonPressed(this.state.userInfo);

		if (!logon.status) {
			this.state.isLogonError = true;
			this.state.logonErrorMessage = logo.message || 'Oops, Something went wrong. Please try again.';
		}
	}

	render() {
		return (
			<ScrollView contentContainerStyle={styles.registerFormContainerStyle}>
				<FloatingLabelTextField
					label={'Email Address'}
					textInputStyle={styles.emailAddressTextInputStyle}
					isRequired='true'
					isRequiredFlagDisplay='false'
					handleTextChange={this.handleUserNameChange} />

				<FloatingLabelTextField
					textInputStyle={styles.firstNameTextInputStyle}
					label={'First name'}
					isRequired='true'
					isRequiredFlagDisplay='false'
					handleTextChange={this.handleFirstNameChange} />

				<FloatingLabelTextField
					textInputStyle={styles.lastNameTextInputStyle}
					label={'Last name'}
					isRequired='false'
					isRequiredFlagDisplay='true'
					handleTextChange={this.handleLastNameChange} />

				<FloatingLabelTextField
					textInputStyle={styles.primaryContactTextInputStyle}
					label={'Primary Contact Number'}
					isRequired='false'
					isRequiredFlagDisplay='true'
					handleTextChange={this.handleContactNumber1Change} />

				<FloatingLabelTextField
					textInputStyle={styles.secodaryContactTextInputStyle}
					label={'Secondary Contact Number'}
					isRequired='false'
					isRequiredFlagDisplay='true'
					handleTextChange={this.handleContactNumber2Change} />

				<FloatingLabelTextField
					textInputStyle={styles.addressTextInputStyle}
					label={'Address'}
					isRequired='false'
					isRequiredFlagDisplay='true'
					handleTextChange={this.handleAddressChange} />

				<FloatingLabelTextField
					textInputStyle={styles.paymentCardTextInputStyle}
					label={'Payment Card'}
					isRequired='false'
					isRequiredFlagDisplay='true'
					handleTextChange={this.handlePaymentCardChange} />

				<FloatingLabelTextField
					textInputStyle={styles.passwordTextInputStyle}
					label={'Password'}
					isRequired='true'
					isRequiredFlagDisplay='false'
					handleTextChange={this.handlePasswordChange}
					textInputProps={{ secureTextEntry: true }} />

				<FloatingLabelTextField
					textInputStyle={styles.passwordTextInputStyle}
					label={'Confirm Password'}
					isRequired='true'
					isRequiredFlagDisplay='false'
					handleTextChange={this.handlePasswordChange}
					textInputProps={{ secureTextEntry: true }} />

				<Error isShow={this.state.isLogonError}>{this.state.logonErrorMessage}</Error>

				<Button buttonStyle={styles.registerButtonStyle} handlePress={this.handleRegisterButtonPressed}>Register</Button>

			</ScrollView>

		);
	}
}



