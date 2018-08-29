import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, Text, TextInput, Animated } from 'react-native';
import styles from './style';
import local_constants from './res';
import { colors } from '../../../config/colors';

export default class FloatingLabelTextField extends Component {

	constructor(props) {
		super(props);
		this.init();
	}

	init() {
		this._animatedIsFocused = new Animated.Value(0);

		let initState = {
			labelStyle: { ...styles.generalLabelStyle },
			isError: false,
			errorText: null,
			isFocused: false
		};

		this.initlabelAnimatedProps(initState.labelStyle);

		this.state = initState;
		this.state.value = '';
	}

	initlabelAnimatedProps(prop) {
		prop.top = this._animatedIsFocused.interpolate({
			inputRange: [0, 1],
			outputRange: [28, 8],
		});

		prop.fontSize = this._animatedIsFocused.interpolate({
			inputRange: [0, 1],
			outputRange: [19, 13],
		});

		prop.color = this._animatedIsFocused.interpolate({
			inputRange: [0, 1],
			outputRange: [colors.grey, colors.lightBlue],
		});
	}

	componentDidUpdate() {
		this.state.value === '' && Animated.timing(this._animatedIsFocused, {
			toValue: this.state.isFocused ? 1 : 0,
			duration: 200,
		}).start();
	}

	handleFocus = () => {
		let state = this.state;

		state.isFocused = true;

		this.setState(state);
	}

	handleBlur = () => {
		let state = this.state;

		state.isFocused = false;

		this.setState(state);
	}

	handleTextChange = (text) => {
		this.state.value = text;
		this.props.handleTextChange && this.props.handleTextChange(text);
	}

	render = () => {

		const { containerStyle, textInputStyle, label, isRequired, isRequiredFlagDisplay, handleTextChange, ...props } = this.props;

		const ntextInputStyle = { ...styles.textInputStyle, ...textInputStyle }
		const nContainerStyle = { ...styles.containerStyle, ...containerStyle }

		return (
			<View style={nContainerStyle}>
				<View>
					<Animated.Text style={this.state.labelStyle}>
						{label + (isRequiredFlagDisplay === 'true' ? (isRequired === 'true' ? ' (Required)' : ' (optional)') : '')}
					</Animated.Text>

					<TextInput style={ntextInputStyle}
						onFocus={this.handleFocus}
						onBlur={this.handleBlur}
						onChangeText={this.handleTextChange}
						{...this.props.textInputProps} />
				</View>

				{
					this.state.isError &&
					<View>
						<Text>{this.state.errorText}</Text>
					</View>
				}
			</View>
		)
	}
}

FloatingLabelTextField.propTypes = {
	textInputStyles: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.number,
		PropTypes.shape({}),
	]),
	label: PropTypes.string.isRequired
}

FloatingLabelTextField.defaultProps = {
	textInputStyle: styles.textInputStyle,
	containerStyle: styles.containerStyle,
	labelStyle: styles.labelStyle,
	isRequired: local_constants.isRequired,
	isRequiredFlagDisplay: local_constants.isRequiredFlagDisplay
}