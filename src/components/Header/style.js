import { StyleSheet } from 'react-native';
import * as globals from '../../constants/global';

const styles = StyleSheet.create({
    backIcon: {
        fontSize: 25,
        color: globals.BLACK_COLOR,
    },
    titleText: {
        width: '100%',
        fontFamily: globals.FONT_BOLD,
        fontSize: 17,
        color: globals.DARK_TEXT_COLOR,
        textAlign: 'center',
        letterSpacing: -0.27,
    },
});

export default styles;
