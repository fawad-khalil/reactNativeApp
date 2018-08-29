/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';
import {Text, View} from 'react-native';
import style from './style';
import constants from '../../../config/res.json';
import splashScreenConstants from './res';
// import SplashController from './controller';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

type Props = {};

// const splashController = new SplashController();

export default class SplashScreen extends Component<Props> {
	render() {
		return (
			<View style = {style.container}>
			</View>
		);
	}

	async componentDidMount() {
	}
}

