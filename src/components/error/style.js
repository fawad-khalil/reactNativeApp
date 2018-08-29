import { StyleSheet } from "react-native";
import { colors } from "../../../config/colors";

export default StyleSheet.create({
    containerStyle: {
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
		alignItems: 'center',
    },
    textStyle: {
        position: "absolute",
        color: colors.red,
        fontSize: 14
    }
});