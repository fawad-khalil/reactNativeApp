/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';
import {Text, View, ActivityIndicator, StatusBar} from 'react-native';
import style from './style';
import constants from '../../../config/res.json';
import splashScreenConstants from './res';
import SplashScreenController from './controller';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

type Props = {};

const splashController = new SplashScreenController();

export default class SplashScreen extends Component<Props> {
	constructor(props) {
		super(props);
		splashController.verifyLoggedIn(this.props.navigation);
		
	}

	render() {
		return (
			<View style = {style.container}>
				<Text style={style.welcomeMessage}>{splashScreenConstants.welcomeMessage}</Text>
				<Text style={style.appName}>{constants.appName}!</Text>
				<ActivityIndicator/>
				<StatusBar barStyle="default" />
			</View>
		);
	}
}

