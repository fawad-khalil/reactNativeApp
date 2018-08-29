import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styles from './style';
import local_constants from './res';


export default class Error extends Component {

  constructor(props) {
    super(props);
  }

  // init = () => {
  //   let initState = {
  //     isShow = this.props.isShow;
  //   }

  //   this.state = initState;
  // }

  render = () => {
    const { textStyle, children, isShow } = this.props;

    return (
      <View style={styles.containerStyle}>
        {isShow && <Text style={textStyle}>{children}</Text>}
      </View>
    );
  }
}

Error.defaultProps = {
  textStyle: styles.textStyle,
  children: local_constants.errorText
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