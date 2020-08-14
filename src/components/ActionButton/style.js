import { StyleSheet } from 'react-native';
import * as globals from '../../constants/global';

const styles = StyleSheet.create({
    button: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: globals.getDeviceWidth(30),
        backgroundColor: globals.YELLOW_COLOR,
        borderRadius: 22,
    },
    buttonText: {
        flex: 1,
        alignItems: 'center',
        fontFamily: globals.FONT_EXTRA_BOLD,
        fontSize: globals.FONT_SIZE_SM,
        color: globals.GRAY_COLOR,
        textAlign: 'center',
        letterSpacing: -0.27,
    },
});

export default styles;
