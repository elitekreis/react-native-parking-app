import { StyleSheet } from 'react-native';
import * as globals from '../../constants/global';

const styles = StyleSheet.create({
    imageContainer: {
        marginVertical: 30,
    },
    imageBackground: {
        width: globals.getDeviceWidth(219),
        height: globals.getDeviceWidth(254),
        alignSelf: 'center',
        overflow: 'hidden',
        borderRadius: 8,
    },
    textContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 15,
    },
    textTitle: {
        width: '100%',
        fontFamily: globals.FONT_BOLD,
        fontSize: 22,
        color: globals.GRAY_COLOR,
        textAlign: 'center',
    },
    textSubTitle: {
        width: '100%',
        fontFamily: globals.FONT_REGULAR,
        fontSize: globals.FONT_SIZE_SM,
        color: globals.GRAY_COLOR,
        textAlign: 'center',
    },
});

export default styles;
