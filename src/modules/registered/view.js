import React, { Component } from 'react';
import { View, Text } from 'react-native';

type Props = {};

export default class ForgotPasswordScreen extends Component<Props> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Text>Congratulations, You nave been registered successfully.</Text>
			</View>

		);
	}
}



