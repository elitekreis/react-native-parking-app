import { StyleSheet } from 'react-native';
import * as globals from '../../constants/global';

const styles = StyleSheet.create({
    boldText: {
        width: '100%',
        fontFamily: globals.FONT_EXTRA_BOLD,
        fontSize: globals.FONT_SIZE_LG,
        color: globals.GRAY_COLOR,
        textAlign: 'left',
        lineHeight: 55,
        letterSpacing: -0.64,
    },
    smallText: {
        width: '100%',
        fontFamily: globals.FONT_REGULAR,
        fontSize: globals.FONT_SIZE_SM,
        color: globals.GRAY_COLOR,
        textAlign: 'left',
        lineHeight: 22,
        letterSpacing: -0.41,
    },
});

export default styles;
