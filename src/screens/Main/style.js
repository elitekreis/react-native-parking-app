import { StyleSheet } from 'react-native';
import * as globals from '../../constants/global';

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
    },
    titleText: {
        width: '100%',
        fontFamily: globals.FONT_BLACK,
        fontSize: globals.FONT_SIZE_MD,
        color: globals.LIGHT_TEXT_COLOR,
        textAlign: 'center',
        lineHeight: 40,
        letterSpacing: 0.5,
    },
    commentText: {
        width: '100%',
        fontFamily: globals.FONT_REGULAR,
        fontSize: 13,
        color: globals.BLACK_COLOR,
        textAlign: 'center',
        lineHeight: 18,
        letterSpacing: -0.31,
    },
    bottomView: {
        width: '100%',
        marginVertical: 30,
    },
});

export default styles;
