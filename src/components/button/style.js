import {StyleSheet} from "react-native";
import {colors} from "../../../config/colors";

export default StyleSheet.create({
    
    touchableOpacity: {
        paddingVertical: 10,
        backgroundColor: colors.lightBlue,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 14,
        paddingHorizontal: 10,
    }
});