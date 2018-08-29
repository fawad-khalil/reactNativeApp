import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Text, View, TextInput } from 'react-native';
import style from './style';
import local_resources from './res';

export default class LabeledTextField extends Component {

	render = () => {
		const { containerStyles, textInputStyles, textInputLabel, labelStyles, onChangeText, isRequired } = this.props;

		return (
			<View style={containerStyles}>

				<View style={style.labelContainerStyles}>
					{isRequired && <Text style={style.requiredSymbolStyles}>{'*'}</Text>}
					<Text style={labelStyles}>{textInputLabel}</Text>
					<Text style={style.colonSymbolStyles}>{':'}</Text>
				</View>

				<View style={style.textInputContainerStyles}>
					<TextInput style={textInputStyles} onChangeText={onChangeText} placeholder={local_resources.textInputPlaceholder}/>
				</View>
			</View>
		)
	}
}

LabeledTextField.propTypes = {
	textInputStyles: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.number,
		PropTypes.shape({}),
	]),
	textInputLabel: PropTypes.string.isRequired
}

LabeledTextField.defaultProps = {
	textInputStyles: style.textInputStyles,
	containerStyles: style.containerStyles,
	labelStyles: style.labelStyles
}