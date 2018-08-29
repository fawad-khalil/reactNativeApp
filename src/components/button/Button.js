import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';
import local_constants from './res';


export default class Button extends Component {

  constructor(props) {
    super(props);
  }

  handlePress = () => {
    this.props.handlePress && this.props.handlePress();
  }

  render = () => {
    const { textStyle, buttonStyle, children, handlePress } = this.props;

    const nbuttonStyle = {...buttonStyle, ...styles.touchableOpacity};

    return (
      <TouchableOpacity style={nbuttonStyle} onPress={this.handlePress}>
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string,
  textStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.shape({}),
  ]),
  buttonStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.shape({}),
  ]), 
}

Button.defaultProps = {
  textStyle: styles.text,
  // buttonStyle: styles.touchableOpacity,
  children: local_constants.buttonText
};

// Button.propTypes = {
//   onPress: React.PropTypes.func.isRequired,
//   label: React.PropTypes.string,
//   buttonStyle: React.PropTypes.any,
//   textColor: React.PropTypes.any,
// };

// const styles = StyleSheet.create({
//   button: {
//     width: 150,
//     height: 75,
//     backgroundColor: 'ivory',
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 15,
//   },
//   text: {
//     color: 'red',
//     fontSize: 16,
//   },
// })